import React from 'react';
import Select from 'react-select';
import { Field, Form, Errors } from 'react-redux-form';
import { required, isValidName} from '../utils/formValidator';

class ItemsForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onParentChange = this.onParentChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(e){
        const { formActions } = this.props;
        formActions.setValidity('itemModel.name', true);
    }
    onParentChange(val){
        const { itemModel, formActions } = this.props;
        formActions.change('itemModel', {
            ...itemModel,
            ...{
                parent: val ? val.id:''
            }
        });
        formActions.setValidity('itemModel.parent', true);
    }

    render() {
      const { itemModel, itemsList } = this.props;
      return(
        <div className="row">
          <div className="col-md-4">
            <Form model="itemModel">
              <Field model="itemModel.name" className={"form-group "} validators={{required, isValidName }}>
                  <label className="required-asterisk">Name:</label>
                  <input onChange={this.onNameChange} className="form-control" type="text" />
                  <Errors className="error-helper" model="itemModel.name" show={{touched: true, focus: false}}
                          messages={
                              {
                                  required: 'Название не может быть пустым',
                                  isValidName: 'Имя может состоять только из букв и цифр. Слова должны разделяться одиночными пробелами'
                              }}/>
              </Field>

              <label>Parent:</label>
                <Select
                isLoading={!itemsList.length}
                valueKey="id"
                labelKey="name"
                onChange={this.onParentChange}
                value={itemModel.parent}
                options={itemsList}/>

                <Field model="itemModel.parent" className={"form-group "} >
                  <select className="hidden" />
                    <Errors className="error-helper" model="itemModel.parent" show={{focus: false}}/>
                </Field>
            </Form>
          </div>
        </div>
      );
    }
}

export default ItemsForm;
