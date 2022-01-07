import {
  ugToShirkhanProcessor,
  ugToShirkhanUzProcessor,
  shirkhanStringify,
} from "shirkhan-retext";

import { readFileSync, writeFileSync } from "fs";
import { EOL } from "os";

const convertToKhan = (word) =>
  ugToShirkhanProcessor().use(shirkhanStringify).processSync(word).toString();

const convertToKhanUz = (word) =>
  ugToShirkhanUzProcessor().use(shirkhanStringify).processSync(word).toString();

const getLines = (file) => {
  let newLines = new Set();

  try {
    const data = readFileSync(file, "UTF-8");
    let lines = data.split(/\r?\n/);
    lines.forEach((line) => {
      newLines.add(line);
      newLines.add(convertToKhan(line));
      newLines.add(convertToKhanUz(line));
    });
  } catch (err) {
    console.error(err);
  }

  return newLines;
};

const data = getLines("src/ug.khan.txt");

writeFileSync("src/khan.dict.txt", [...data].join(EOL), { encoding: "utf-8" });
