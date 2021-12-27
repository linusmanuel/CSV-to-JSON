const $ = document.querySelector.bind(document);

const btnCSV = $('.btn--csv');
const btnJSON = $('.btn--json');

const inputCSV = $('.input--csv');
const inputJson = $('.input--json');

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

btnCSV.onclick = () => inputJson.value = convertJsonToCsv(inputCSV.value);

