export const download = (data, filename, type) => {
  const file = new Blob([data], { type });
  // IE10+
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, filename);
  } else {
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    Object.assign(a, { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
};

export const loadFileContentOnField = (file, inputToSetContent) => {
  const reader = new FileReader();
  if (file) {
    reader.readAsText(file, "UTF-8");
    reader.onload = evt => (inputToSetContent.value = evt.target.result);
  }
  reader.onerror = evt => alert("error reading file");
}
