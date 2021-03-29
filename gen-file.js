const fs = require("fs");

const template1 = (index) => {
  return `
const div${index} = createElement(DIV, function(el) {
  el[ID] = 'my-id${index}';
  el[CLASS_NAME] = 'class-name${index}';
});`;
};

const template2 = (index) => {
  return `
const div${index} = document.createElement('div');
div${index}.id = 'my-id${index}';
div${index}.className = 'class-name${index}';`;
};

const output1 = `
import {
  createElement,
  DIV,
  ID,
  CLASS_NAME
} from 'noliter';

ID, CLASS_NAME; // Prevent parcel issue

${new Array(5000)
  .fill(0)
  .map((_, i) => template1(i))
  .join("\n")}`;

fs.writeFileSync("./src/index1.js", output1);

const output2 = `
${new Array(5000)
  .fill(0)
  .map((_, i) => template2(i))
  .join("\n")}`;

fs.writeFileSync("./src/index2.js", output2);
