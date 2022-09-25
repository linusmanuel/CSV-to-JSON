import { button, input, clearControls } from "./controls.js";
import { download, loadFileContentOnField } from './fileHandlers.js';
import { handleJSONParse } from "./parseCSVToJSON.js";
import { handleCSVParse } from './parseJsonToCsv.js';

button.json.onclick = () => handleCSVParse(input.in, input.out)
button.csv.onclick = () => handleJSONParse(input.in, input.out)

button.clear.onclick = () => clearControls([input.in, input.out]);

button.downloadOut.onclick = () => download(input.out.value, "output.out", "text/json");

input.file.onchange = evt => loadFileContentOnField(evt.target.files[0], input.in)
