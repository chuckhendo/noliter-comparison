const fs = require("fs");

const template1 = (index) => {
  return `
const div${index} = $(TAG_NAME_DIV)
.sa(
  ATTR_ID, 'my-id${index}',
  ATTR_CLASS, 'class-name${index}'
);`;
};

const template2 = (index) => {
  return `
const div${index} = document.createElement('div')
  .setAttribute('id', 'my-id${index}')
  .setAttribute('class', 'class-name${index}');`;
};

const output1 = `
import {
  $,
  TAG_NAME_DIV,
  ATTR_ID,
  ATTR_CLASS
} from 'noliter';

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
