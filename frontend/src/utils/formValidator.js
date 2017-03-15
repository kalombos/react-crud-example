export function required (val) {
  if(typeof val === 'string'){
    val = val.trim();
  }
  return val || val.length;
}

export function isValidName(val) {
    let re = new RegExp(/^([a-zа-яё0-9]+\s)*[a-zа-яё0-9]+$/i);
    return val.trim().length ? re.test(val) : true;
}

export function setServerErrors(errors, model, actions) {
    for (let field in errors.fields) {
        let tempError = {};
        for (let errorNumber = 0; errorNumber < errors.fields[field].length; errorNumber++) {
            tempError = {...tempError, ...{['serverError_' + errorNumber]: errors.fields[field][errorNumber]}};
        }
        actions.setErrors(model + '.' + field, tempError);
    }
}