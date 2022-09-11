export const $ = document.querySelector.bind(document);

export const button = {
 csv: $(".btn--csv"),
 json: $(".btn--json"),
 clear: $(".btn--clear"),
 downloadOut: $('.btn--download')
}

export const input = {
  csv: $(".input--csv"),
  json: $(".input--json"),
  file: $(".fileToConvert"),
}

export const clearControls = (inputs = []) => 
  inputs.forEach(input => (input.value = ""));
