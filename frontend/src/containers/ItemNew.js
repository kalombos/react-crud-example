import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { actions } from 'react-redux-form';
import { routerActions } from 'react-router-redux';
import {ItemForm} from '../components'
import * as itemActions from '../actions/actions';


class ItemNew extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCreate = this.onCreate.bind(this);

  }

  componentWillMount() {
    const {actions, itemsList} = this.props;
    if(!itemsList.length) {
      actions.itemsListAsync();
    }
  }

  componentWillUnmount() {
    const {formActions} = this.props;
    formActions.reset('itemModel');
  }

  onCreate(){
      const { replace, itemModel, actions } = this.props;

      actions.createItemAsync(itemModel).then(data => {
          if(data) {
              replace('/');
          }
      });
  }

  render() {
    const {itemModel, itemForm, formActions, itemsList} = this.props;
    return (

        <div>

          <button type="button" disabled={!itemForm.$form.valid} onClick={this.onCreate} className="btn btn-primary btn-success">
            Create
          </button>
          <Link className="btn btn-info btn-mini" to="/">Cancel</Link>
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
)(ItemNew);
