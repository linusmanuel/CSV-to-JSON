import { validateCsvToJson } from "./validations.js";

export const getHeadersAndRows = (csvText, separator = ",") => {
  const [firstRow, ...rows] = csvText.trim().replace(/"/g, "").split("\n");
  return {
    headers: firstRow.split(separator).map(field => field.trim()),
    rows,
  };
};

export const convertJsonToCsv = (csvText, tabSize = 2) => {
  const { headers, rows } = getHeadersAndRows(csvText);
  const parsedJson = rows.reduce((arr, row) => 
    [...arr, row.split(",")
      .reduce((obj, attr, index) => ({
        ...obj, [headers[index]]: attr.trim()
      }), {}),
    ], []);
  return JSON.stringify(parsedJson, null, tabSize);
};

export const handleCSVParse = (inputCSV, inputJson) => {
  const validationError = validateCsvToJson(inputCSV.value);
  if (validationError) {
    alert(validationError);
    return;
  }
  inputJson.value = convertJsonToCsv(inputCSV.value);
};
