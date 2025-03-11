import { breadcrumbsClasses } from "@mui/material";

const symbolsArray = [
    "!",
    "@",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "'",
    '"',
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "|",
    "\\",
    "`",
    "~",
];
export default function isSymboleContain(text) {
    let isExit = false;
    for (let index = 0; index < text.length; index++) {
        if (symbolsArray.includes(text[index])) {
            isExit = true;
            if (isExit) {
                break;
            }
        }
    }
    return isExit;
}
