import { button, input, clearControls } from "./controls.js";
import { download, loadFileContentOnField } from './fileHandlers.js';
import { handleCSVParse } from './parseJsonToCsv.js';

button.csv.onclick = () => handleCSVParse(input.csv, input.json)

button.clear.onclick = () => clearControls([input.csv, input.json]);

button.downloadOut.onclick = () => download(input.json.value, "output.json", "text/json");

input.file.onchange = evt => loadFileContentOnField(evt.target.files[0], input.csv)
