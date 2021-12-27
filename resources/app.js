const $ = document.querySelector.bind(document);

const btnCSV = $('.btn--csv');
const btnJSON = $('.btn--json');
const btnClear = $('.btn--clear');

const inputCSV = $('.input--csv');
const inputJson = $('.input--json');

class RequiredFieldError extends Error { 
  constructor(fieldName = '') { 
    super(`O campo ${fieldName} e obrigatorio!`)
    this.name = 'RequiredFieldError'
  }
}

const inputIsEmpty = value => 
  !value ? new RequiredFieldError() : null

const validateCsvToJson = (
  value = '', 
  validators = [inputIsEmpty]
) => {
  for (const validator of validators) {
    const error = validator(value) 
    if(error) return error.message
  }
}

const convertJsonToCsv = (csvText, tabSize = 2) => {
  const { headers, rows } = getHeadersAndRows(csvText);
  const parsedJson = rows.reduce(
    (arr, row) => [
      ...arr,
      row
        .split(',')
        .reduce((obj, attr, index) => ({ ...obj, [headers[index]]: attr }), {}),
    ],
    []
  );
  return JSON.stringify(parsedJson, null, tabSize);
};

const getHeadersAndRows = (csvText, separator = ',') => {
  const [firstRow, ...rows] = csvText.trim().replace(/"/g, '').split('\n');
  return {
    headers: firstRow.split(separator),
    rows,
  };
};

btnClear.onclick = () => ((fieldToClear = [inputCSV, inputJson]) => {
  fieldToClear.forEach(field => field.value = '')
})()

btnCSV.onclick = () => {
  const validationError = validateCsvToJson(inputCSV.value)
  if (validationError) {
    alert(validationError)
    return
  }
  inputJson.value = convertJsonToCsv(inputCSV.value);
}
