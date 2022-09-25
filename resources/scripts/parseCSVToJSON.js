const getHeaders = data => {
  const parsedData = JSON.parse(data);
  return Object.keys(Array.isArray(parsedData) ? parsedData[0] : parsedData).join(";");
};

const getContent = data =>
  JSON.parse(data)
    .map(item => Object.values(item).join(";"))
    .join("\n");

export const parseJsonToCSV = data => `${getHeaders(data)}\n${getContent(data)}`;

export const handleJSONParse = (inputIn, InputOut) => {
  InputOut.value = parseJsonToCSV(inputIn.value);
};
