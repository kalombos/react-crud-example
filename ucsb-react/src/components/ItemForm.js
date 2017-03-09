import React from 'react';
import Select from 'react-select';
import { Field, Form } from 'react-redux-form';

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
              <Field model="itemModel.name" className={"form-group "}>
                <label className="required-asterisk">Name:</label>
                <input className="form-control" type="text" />
              </Field>

              <label className="required-asterisk">Section:</label>
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
