export class RequiredFieldError extends Error {
  constructor(fieldName = "") {
    super(`O campo ${fieldName} e obrigatorio!`);
    this.name = "RequiredFieldError";
  }
}

export const inputIsEmpty = value => (!value ? new RequiredFieldError() : null);

export const validateCsvToJson = (value = "", validators = [inputIsEmpty]) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error.message;
  }
};
