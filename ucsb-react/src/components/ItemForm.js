import React from 'react';
import Select from 'react-select';
import { Field, Form, Errors } from 'react-redux-form';
import { required, isValidName} from '../utils/formValidator';

class ItemsForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onParentChange = this.onParentChange.bind(this);
    }

    onParentChange(val){
        const { itemModel, formActions } = this.props;
        formActions.change('itemModel', {
            ...itemModel,
            ...{
                parent: val ? val.id:''
            }
        });
    }

    render() {
      const { itemModel, itemsList } = this.props;
      return(
        <div className="row">
          <div className="col-md-4">
            <Form model="itemModel">
              <Field model="itemModel.name" className={"form-group "} validators={{required, isValidName }}>
                  <label className="required-asterisk">Название:</label>
                  <input className="form-control" type="text" />
                  <Errors className="error-helper" model="itemModel.name" show={{touched: true, focus: false}}
                          messages={
                              {
                                  required: 'Название не может быть пустым',
                                  isValidName: 'Имя может состоять только из букв и цифр. Слова должны разделяться одиночными пробелами'
                              }}/>
              </Field>

              <label>Родитель:</label>
                <Select
                isLoading={!itemsList.length}
                valueKey="id"
                labelKey="name"
                onChange={this.onParentChange}
                value={itemModel.parent}
                options={itemsList}/>

                <Field model="itemModel.parent" className={"form-group "} >
                  <select className="hidden" />
                </Field>
            </Form>
          </div>
        </div>
      );
    }
}

export default ItemsForm;
