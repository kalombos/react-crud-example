import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { actions } from 'react-redux-form';
import { routerActions } from 'react-router-redux';
import {ItemForm} from '../components'
import * as itemActions from '../actions/actions';


class ItemEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    const {actions, formActions, replace, params, itemsList} = this.props;
    if(!itemsList.length) {
      actions.itemsListAsync();
    }
    actions.getItemAsync(params.id).then(data => {
        formActions.change('itemModel', data);
    }).catch(e => {
        replace('/');
    });
  }

  componentWillUnmount() {
    const {formActions} = this.props;
    formActions.reset('itemModel');
  }

  onUpdate(){
      const { replace, itemModel, actions } = this.props;

      actions.updateItemAsync(itemModel).then(data => {
          if(data) {
              replace('/');
          }
      });
  }
  onDelete(){
      const { replace, itemModel, actions } = this.props;
      actions.deleteItemAsync(itemModel.id).then(data => {
          replace('/');
      });
  }

  render() {
    const {itemModel, itemForm, formActions, itemsList} = this.props;
    return (

        <div>

          <button type="button" disabled={!itemForm.$form.valid} onClick={this.onUpdate} className="btn btn-primary btn-success">
            Сохранить
          </button>
          <Link className="btn btn-info btn-mini" to="/">Отмена</Link>
          <button type="button" onClick={this.onDelete} className="btn btn-primary btn-danger">
              Удалить
          </button>
          <ItemForm
              itemModel={itemModel}
              itemForm={itemForm}
              formActions={formActions}
              itemsList={itemsList}
          />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      itemModel: state.itemModel,
      itemForm: state.itemForm,
      itemsList: state.items.itemsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(itemActions, dispatch),
      formActions: bindActionCreators(actions, dispatch),
      replace: bindActionCreators(routerActions.replace, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemEdit);
