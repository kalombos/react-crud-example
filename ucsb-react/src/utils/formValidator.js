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