import { appendFileSync } from 'fs';
import { existsSync } from 'fs';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { unlinkSync } from 'fs';

function LoopParseFunc(varString: string, delimiter1: string = "", delimiter2: string = ""): string[] {
    let items: string[];
    if (delimiter1 === "" && delimiter2 === "") {
        // If no delimiters are provided, return an array of characters
        items = [...varString];
    } else {
        // Construct the regular expression pattern for splitting the string
        const pattern = `[${delimiter1}${delimiter2}]+`;
        // Split the string using the constructed pattern
        items = varString.split(new RegExp(pattern));
    }
    return items;
}

// Print function for various types
function print(value: any): void {
    console.log(value);
}

function STR(value: any): string {
    if (typeof value === "number") {
        return value.toString();
    } else if (typeof value === "boolean") {
        return value ? "1" : "0";
    } else if (typeof value === "string") {
        return value;
    } else {
        return String(value);
    }
}

function HTVM_Append<T>(arr: T[], value: T): void {
    arr.push(value);
}

function HTVM_Pop<T>(arr: T[]): void {
    arr.pop();
}

function HTVM_Size<T>(arr: T[]): number {
    return arr.length;
}

function HTVM_Remove(arr: any[], value: any): void {
    const index = arr.indexOf(value);
    if (index !== -1) arr.splice(index, 1);
}

function Mod(dividend: number, divisor: number): number {
    return dividend % divisor;
}

function Chr(code: number): string {
    return String.fromCodePoint(code);
}

function FLOAT(str: string): number {
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
}

function INT(str: string): number {
    const num = parseInt(str, 10);
    return isNaN(num) ? 0 : num;
}

function InStr(haystack: string, needle: string): number {
    const pos = haystack.indexOf(needle);
    return pos === -1 ? 0 : pos + 1;
}

function RegExMatch(haystack: string, pattern: string): number {
    try {
        const regex = new RegExp(pattern);
        const match = haystack.match(regex);
        if (match) {
            return (match.index ?? -1) + 1;
        }
    } catch (e) {
        return 0;
    }
    return 0;
}

function StrLen(str: string): number {
    return [...str].length;
}

function StrReplace(originalString: string, find: string, replaceWith: string): string {
    return originalString.replaceAll(find, replaceWith);
}

function StrSplit(inputStr: string, delimiter: string, num: number): string {
    if (num <= 0) return "";
    const parts = inputStr.split(delimiter);
    if (num > parts.length) return "";
    return parts[num - 1];
}

function StringTrimLeft(input: string, numChars: number): string {
    if (numChars <= 0) return input;
    return input.substring(numChars);
}

function StringTrimRight(input: string, numChars: number): string {
    if (numChars <= 0) return input;
    return input.slice(0, -numChars);
}

function SubStr(str: string, startPos: number, length: number = -1): string {
    // Handle true characters (runes) instead of just code units
    const runes = [...str];
    const strLen = runes.length;
    let startIndex = (startPos > 0) ? startPos - 1 : strLen + startPos;
    if (startIndex < 0 || startIndex >= strLen) {
        return "";
    }
    
    if (length < 0) {
        return runes.slice(startIndex).join('');
    }
    return runes.slice(startIndex, startIndex + length).join('');
}

function Trim(inputString: string): string {
    return inputString.trim();
}

function isWindows(): boolean {
    // This check is for Node.js environment. It will be false in browsers.
    if (typeof process !== 'undefined' && process.platform) {
        return process.platform === 'win32';
    }
    return false;
}

// In a browser environment, this is the standard synchronous way.
// For Node.js, a library like 'readline-sync' would be needed for a true sync equivalent.
function input(promptText: string): string {
    return window.prompt(promptText) || "";
}

function GetParams(): string {
    if (typeof process === 'undefined' || !process.argv) {
        return ""; // Not in a Node.js environment
    }
    const args = process.argv.slice(2);
    const processedArgs = args.map(arg => {
        if (existsSync(arg)) {
            return resolve(arg);
        }
        return arg;
    });
    return processedArgs.join('\n');
}

// This function is for Node.js environment only.
function FileRead(path: string): string {
    try {
        return readFileSync(path, 'utf8');
    } catch (error) {
        return "";
    }
}

function FileDelete(path: string): boolean {
    try {
        if (existsSync(path)) {
            unlinkSync(path);
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

// This function is for Node.js environment only.
function FileAppend(content: string, path: string): boolean {
    try {
        appendFileSync(path, content, 'utf8');
        return true;
    } catch (error) {
        return false;
    }
}



// start of HT-Lib.htvm
// global vars NEEDED
var HT_LIB_theIdNumOfThe34: number = 0;
let HT_Lib_theIdNumOfThe34theVar: string[] = [];
//;;;;;;;;;;;;;;;;;;;;;;;;;
function preserveStrings(code: string, keyWordEscpaeChar: string = "\\"): string {
    let getAllCharForTheFurtureSoIcanAddEscapeChar: string[] = [];
    var ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes: string = "";
    var str21: string = "";
    var htCodeOUT754754: string = "";
    var OutFixDoubleQuotesInsideDoubleQuotes: string = "";
    var fixOutFixDoubleQuotesInsideDoubleQuotesFIXok: number = 0;
    var removeNexFixkeyWordEscpaeChar: number = 0;
    var areWEinSome34sNum: number = 0;
    let items1 = LoopParseFunc(code);
    for (let A_Index1 = 0; A_Index1 < items1.length; A_Index1++) {
        let A_LoopField1 = items1[A_Index1 - 0];
        HTVM_Append(HT_Lib_theIdNumOfThe34theVar, "");
        HTVM_Append(HT_Lib_theIdNumOfThe34theVar, "");
    }
    let items2 = LoopParseFunc(code);
    for (let A_Index2 = 0; A_Index2 < items2.length; A_Index2++) {
        let A_LoopField2 = items2[A_Index2 - 0];
        HT_Lib_theIdNumOfThe34theVar[A_Index2] = HT_Lib_theIdNumOfThe34theVar[A_Index2] + Chr(34);
        HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, A_LoopField2);
    }
    HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, " ");
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = Chr(34) + "ihuiuuhuuhtheidFor" + str21 + "--" + str21 + "asds" + str21 + "as--" + str21 + "theuhtuwaesphoutr" + Chr(34);
    let items3 = LoopParseFunc(code);
    for (let A_Index3 = 0; A_Index3 < items3.length; A_Index3++) {
        let A_LoopField3 = items3[A_Index3 - 0];
        if (A_LoopField3 == keyWordEscpaeChar && getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index3 + 1] == Chr(34)) {
            fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 1;
            OutFixDoubleQuotesInsideDoubleQuotes += ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes;
        } else {
            if (fixOutFixDoubleQuotesInsideDoubleQuotesFIXok != 1) {
                OutFixDoubleQuotesInsideDoubleQuotes += A_LoopField3;
            } else {
                fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0;
            }
        }
    }
    code = OutFixDoubleQuotesInsideDoubleQuotes;
    if (keyWordEscpaeChar != Chr(92)) {
        code = StrReplace(code, Chr(92), Chr(92) + Chr(92));
    }
    if (keyWordEscpaeChar == Chr(92)) {
        let items4 = LoopParseFunc(code);
        for (let A_Index4 = 0; A_Index4 < items4.length; A_Index4++) {
            let A_LoopField4 = items4[A_Index4 - 0];
            if (A_LoopField4 == Chr(34)) {
                areWEinSome34sNum++;
            }
            if (areWEinSome34sNum == 1) {
                if (A_LoopField4 != Chr(34)) {
                    if (A_LoopField4 == keyWordEscpaeChar) {
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + Chr(92);
                    } else {
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + A_LoopField4;
                    }
                } else {
                    HT_LIB_theIdNumOfThe34++;
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(HT_LIB_theIdNumOfThe34) + Chr(65) + Chr(65);
                }
            }
            if (areWEinSome34sNum == 2 || areWEinSome34sNum == 0) {
                if (A_LoopField4 != Chr(34)) {
                    htCodeOUT754754 += A_LoopField4;
                }
                areWEinSome34sNum = 0;
            }
        }
    } else {
        let items5 = LoopParseFunc(code);
        for (let A_Index5 = 0; A_Index5 < items5.length; A_Index5++) {
            let A_LoopField5 = items5[A_Index5 - 0];
            if (A_LoopField5 == Chr(34)) {
                areWEinSome34sNum++;
            }
            if (areWEinSome34sNum == 1) {
                if (A_LoopField5 != Chr(34)) {
                    if (A_LoopField5 == keyWordEscpaeChar && keyWordEscpaeChar == getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index5 + 1]) {
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + keyWordEscpaeChar;
                        removeNexFixkeyWordEscpaeChar = 1;
                    }
                    else if (A_LoopField5 == keyWordEscpaeChar) {
                        if (removeNexFixkeyWordEscpaeChar != 1) {
                            HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + Chr(92);
                        } else {
                            removeNexFixkeyWordEscpaeChar = 0;
                        }
                    } else {
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + A_LoopField5;
                    }
                } else {
                    HT_LIB_theIdNumOfThe34++;
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(HT_LIB_theIdNumOfThe34) + Chr(65) + Chr(65);
                }
            }
            if (areWEinSome34sNum == 2 || areWEinSome34sNum == 0) {
                if (A_LoopField5 != Chr(34)) {
                    htCodeOUT754754 += A_LoopField5;
                }
                areWEinSome34sNum = 0;
            }
        }
    }
    code = htCodeOUT754754;
    for (let A_Index6 = 0; A_Index6 < HT_LIB_theIdNumOfThe34; A_Index6++) {
        HT_Lib_theIdNumOfThe34theVar[A_Index6] = HT_Lib_theIdNumOfThe34theVar[A_Index6] + Chr(34);
    }
    HTVM_Append(HT_Lib_theIdNumOfThe34theVar, Chr(34));
    return code;
}
//;;;;;;;;;;;;;;;;;;;;;;;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;
function restoreStrings(codeOUT: string, keyWordEscpaeChar: string = Chr(92)): string {
    for (let A_Index7 = 0; A_Index7 < HT_LIB_theIdNumOfThe34; A_Index7++) {
        if (HT_LIB_theIdNumOfThe34 == A_Index7 + 1) {
            codeOUT = StrReplace(codeOUT, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index7 + 1) + Chr(65) + Chr(65), StrReplace(HT_Lib_theIdNumOfThe34theVar[A_Index7 + 1], keyWordEscpaeChar, "\\") + Chr(34));
        } else {
            codeOUT = StrReplace(codeOUT, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index7 + 1) + Chr(65) + Chr(65), StrReplace(HT_Lib_theIdNumOfThe34theVar[A_Index7 + 1], keyWordEscpaeChar, "\\"));
        }
    }
    return codeOUT;
}
function cleanUpFirst(code: string): string {
    code = StrReplace(code, Chr(13), "");
    var out: string = "";
    let items8 = LoopParseFunc(code, "\n", "\r")
    for (let A_Index8 = 0; A_Index8 < items8.length; A_Index8++) {
        let A_LoopField8 = items8[A_Index8 - 0];
        out += Trim(A_LoopField8) + Chr(10);
    }
    out = StringTrimRight(out, 1);
    return out;
}
function getLangParams(binName: string, langExtension: string, extra: string = ""): string {
    var params: string = Trim(GetParams());
    var paramsTemp: string = "";
    if (params == "") {
        if (isWindows()) {
            print("Usage:" + Chr(10) + Trim(binName) + " your_file." + Trim(langExtension) + " " + Trim(extra));
        } else {
            print("Usage:" + Chr(10) + "./" + Trim(binName) + " your_file." + Trim(langExtension) + " " + Trim(extra));
        }
        return "";
    } else {
        return params;
    }
    return "MASSIVE ERROR";
}
function saveOutput(outCode: string, fileName: string): void {
    FileDelete(Trim(fileName));
    FileAppend(Trim(outCode), Trim(fileName));
    print("Generation finished: " + Trim(fileName) + " generated.");
}
function beginning(line: string, what: string): boolean {
    if (SubStr(line, 1, StrLen(what)) == what) {
        return true;
    }
    return false;
}
function formatCurlyBracesForParsing(code: string, openBrace: string = "{", closeBrace: string = "}"): string {
    code = StrReplace(code, openBrace, Chr(10) + "{" + Chr(10));
    code = StrReplace(code, closeBrace, Chr(10) + "}" + Chr(10));
    code = cleanUpFirst(code);
    return code;
}
function handleComments(code: string, commentKeyword: string = ";"): string {
    var str1: string = "";
    let items9 = LoopParseFunc(code, "\n", "\r")
    for (let A_Index9 = 0; A_Index9 < items9.length; A_Index9++) {
        let A_LoopField9 = items9[A_Index9 - 0];
        str1 += StrSplit(A_LoopField9, commentKeyword, 1) + Chr(10);
    }
    code = StringTrimRight(str1, 1);
    return code;
}
// Define the function to check odd spaces at the beginning
function CheckOddLeadingSpaces(string123: string): string {
    // Initialize a variable to count the spaces
    var spaceCount: number = 0;
    // Loop through the string one character at a time
    let items10 = LoopParseFunc(string123);
    for (let A_Index10 = 0; A_Index10 < items10.length; A_Index10++) {
        let A_LoopField10 = items10[A_Index10 - 0];
        // Check if the current character is a space
        if (A_LoopField10 == Chr(32)) {
            spaceCount++;
        } else {
            // When we hit a non-space character, break the loop
            break;
        }
    }
    // Return true if the number of spaces is odd, false otherwise
    var sdsfawasd: string = STR(Mod(spaceCount, 2) == 1);
    //MsgBox, % sdsfawasd
    return sdsfawasd;
}
function RepeatSpaces(count: number): string {
    var spaces: string = "";
    for (let A_Index11 = 0; A_Index11 < count; A_Index11++) {
        spaces += Chr(32);
    }
    return spaces;
}
// if you wanna convert to python, nim etc... indentation style we set modeCurlyBracesOn to 0
function indent_nested_curly_braces(input_string: string, modeCurlyBracesOn: number = 1): string {
    var indent_size: number = 4;
    var current_indent: number = 0;
    var result: string = "";
    var trimmed_line: string = "";
    var resultOut: string = "";
    var culyOpenFix: string = "{";
    var culyCloseFix: string = "}";
    //MsgBox, % input_string
    let items12 = LoopParseFunc(input_string, "\n", "\r")
    for (let A_Index12 = 0; A_Index12 < items12.length; A_Index12++) {
        let A_LoopField12 = items12[A_Index12 - 0];
        trimmed_line = Trim(A_LoopField12);
        if (trimmed_line == Chr(123)) {
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10);
            current_indent = current_indent + indent_size;
        }
        else if (trimmed_line == Chr(125)) {
            current_indent = current_indent - indent_size;
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10);
        } else {
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10);
        }
    }
    if (modeCurlyBracesOn == 0) {
        var resultOut: string = "";
        let items13 = LoopParseFunc(result, "\n", "\r")
        for (let A_Index13 = 0; A_Index13 < items13.length; A_Index13++) {
            let A_LoopField13 = items13[A_Index13 - 0];
            if (Trim(A_LoopField13) != "{" && Trim(A_LoopField13) != "}") {
                resultOut += A_LoopField13 + Chr(10);
            }
        }
        result = StringTrimRight(resultOut, 1);
    } else {
        // format curly braces in a K&R style
        let lookIntoFurture: string[] = [];
        let items14 = LoopParseFunc(result, "\n", "\r")
        for (let A_Index14 = 0; A_Index14 < items14.length; A_Index14++) {
            let A_LoopField14 = items14[A_Index14 - 0];
            HTVM_Append(lookIntoFurture, Trim(A_LoopField14));
        }
        HTVM_Append(lookIntoFurture, " ");
        var resultOut: string = "";
        var skipNext: number = 0;
        let items15 = LoopParseFunc(result, "\n", "\r")
        for (let A_Index15 = 0; A_Index15 < items15.length; A_Index15++) {
            let A_LoopField15 = items15[A_Index15 - 0];
            skipNext--;
            if (skipNext <= 0) {
                skipNext = 0;
            }
            if (Trim(lookIntoFurture[A_Index15 + 1]) == "{") {
                resultOut += A_LoopField15 + " " + culyOpenFix + Chr(10);
                skipNext = 2;
            }
            if (skipNext == 0) {
                resultOut += A_LoopField15 + Chr(10);
            }
        }
        result = StringTrimRight(resultOut, 1);
        let lookIntoFurture2: string[] = [];
        let items16 = LoopParseFunc(result, "\n", "\r")
        for (let A_Index16 = 0; A_Index16 < items16.length; A_Index16++) {
            let A_LoopField16 = items16[A_Index16 - 0];
            HTVM_Append(lookIntoFurture2, Trim(A_LoopField16));
        }
        HTVM_Append(lookIntoFurture2, " ");
        resultOut = "";
        skipNext = 0;
        var addSpacesAtTheBegginig: string;
        let items17 = LoopParseFunc(result, "\n", "\r")
        for (let A_Index17 = 0; A_Index17 < items17.length; A_Index17++) {
            let A_LoopField17 = items17[A_Index17 - 0];
            skipNext--;
            if (skipNext <= 0) {
                skipNext = 0;
            }
            if (Trim(A_LoopField17) == "}" && Trim(lookIntoFurture2[A_Index17 + 1]) == "else {") {
                skipNext = 2;
                addSpacesAtTheBegginig = "";
                let items18 = LoopParseFunc(A_LoopField17);
                for (let A_Index18 = 0; A_Index18 < items18.length; A_Index18++) {
                    let A_LoopField18 = items18[A_Index18 - 0];
                    if (A_LoopField18 == " ") {
                        if (A_LoopField18 != " ") {
                            break;
                        }
                        addSpacesAtTheBegginig += StrReplace(A_LoopField18, "}", culyCloseFix);
                    }
                }
                resultOut += addSpacesAtTheBegginig + culyCloseFix + " else " + culyOpenFix + Chr(10);
            }
            if (skipNext == 0) {
                resultOut += A_LoopField17 + Chr(10);
            }
        }
        result = StringTrimRight(resultOut, 1);
    }
    resultOut = "";
    var ALoopField: string;
    let items19 = LoopParseFunc(result, "\n", "\r")
    for (let A_Index19 = 0; A_Index19 < items19.length; A_Index19++) {
        let A_LoopField19 = items19[A_Index19 - 0];
        if (CheckOddLeadingSpaces(A_LoopField19) == "1") {
            ALoopField = StringTrimLeft(A_LoopField19, 1);
            resultOut += ALoopField + Chr(10);
        } else {
            resultOut += A_LoopField19 + Chr(10);
        }
    }
    result = StringTrimRight(resultOut, 1);
    // Return the result
    return result;
}
// end of HT-Lib.htvm
let Official_Oryx_VM_symbol_table: string[] = [];
let Official_Oryx_VM_reg_array: string[] = [];
// --- API STATE CACHE ---
// These globals store the state of the *last* completed interpreter run.
let Official_Oryx_VM_API_symbol_table_cache: string[] = [];
// --- HELPER: SAFE TOKEN GETTER ---
// Replaces StrSplit(str, delim, index) to avoid crashes on missing parts.
function get_token(input: string, delim: string, index: number): string {
    var current: number = 1;
    let items20 = LoopParseFunc(input, delim);
    for (let A_Index20 = 0; A_Index20 < items20.length; A_Index20++) {
        let A_LoopField20 = items20[A_Index20 - 0];
        if (current == index) {
            return A_LoopField20;
        }
        current++;
    }
    return "";
}
// --- HELPER FUNCTION: GET VALUE ---
function get_value(operand: string): string {
    if (RegExMatch(operand, "^r\\d+$")) {
        var reg_index: number = INT(StringTrimLeft(operand, 1));
        return Official_Oryx_VM_reg_array[reg_index];
    }
    else if (RegExMatch(operand, "^-?\\d+(\\.\\d+)?$")) {
        return operand;
    }
    else if (SubStr(operand, 1, 1) == Chr(34)) {
        var val: string = StringTrimLeft(operand, 1);
        val = StringTrimRight(val, 1);
        val = StrReplace(val, "\\n", Chr(10));
        val = StrReplace(val, "\\r", Chr(13));
        val = StrReplace(val, "\\t", Chr(9));
        return val;
    } else {
        var i: number = 0;
        for (let A_Index21 = 0; A_Index21 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index21++) {
            var entry: string = Official_Oryx_VM_symbol_table[i];
            if (get_token(entry, Chr(254), 1) == operand) {
                return get_token(entry, Chr(254), 3);
            }
            i++;
        }
    }
    return "";
}
// --- HELPER FUNCTION: SET VALUE ---
function set_value(dest_operand: string, new_value: string): void {
    if (RegExMatch(dest_operand, "^r\\d+$")) {
        var reg_index: number = INT(StringTrimLeft(dest_operand, 1));
        Official_Oryx_VM_reg_array[reg_index] = new_value;
    } else {
        var i: number = 0;
        for (let A_Index22 = 0; A_Index22 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index22++) {
            var entry: string = Official_Oryx_VM_symbol_table[i];
            var var_name: string = get_token(entry, Chr(254), 1);
            if (var_name == dest_operand) {
                var var_type: string = get_token(entry, Chr(254), 2);
                Official_Oryx_VM_symbol_table[i] = var_name + Chr(254) + var_type + Chr(254) + new_value;
                return;
            }
            i++;
        }
    }
}
// --- NEW API FUNCTION: GET VARIABLE ---
// Retrieves the final value of a variable from the last interpreter run.
// @param str var_name The name of the variable (e.g., "my_var").
// @return str The final value of the variable as a string. Returns "" if not found.
function OryxAPI_GetVariable(operand: string): string {
    if (RegExMatch(operand, "^r\\d+$")) {
        var reg_index: number = INT(StringTrimLeft(operand, 1));
        return Official_Oryx_VM_reg_array[reg_index];
    }
    else if (RegExMatch(operand, "^-?\\d+(\\.\\d+)?$")) {
        return operand;
    }
    else if (SubStr(operand, 1, 1) == Chr(34)) {
        var val: string = StringTrimLeft(operand, 1);
        val = StringTrimRight(val, 1);
        val = StrReplace(val, "\\n", Chr(10));
        val = StrReplace(val, "\\r", Chr(13));
        val = StrReplace(val, "\\t", Chr(9));
        return val;
    } else {
        var i: number = 0;
        for (let A_Index23 = 0; A_Index23 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index23++) {
            var entry: string = Official_Oryx_VM_symbol_table[i];
            if (get_token(entry, Chr(254), 1) == operand) {
                return get_token(entry, Chr(254), 3);
            }
            i++;
        }
    }
    return "";
}
// --- NEW API FUNCTION: GET ARRAY ---
// Retrieves the final contents of an array from the last interpreter run.
// @param str arr_name The name of the array (e.g., "my_list").
// @return arr str An array containing all the elements. Returns an empty array if not found.
function OryxAPI_GetArray(arr_name: string): string[] {
    let result_array: string[] = [];
    var content_string: string = "";
    var i: number = 0;
    for (let A_Index24 = 0; A_Index24 < HTVM_Size(Official_Oryx_VM_API_symbol_table_cache); A_Index24++) {
        var entry: string = Official_Oryx_VM_API_symbol_table_cache[i];
        // Check if it's an array and the name matches
        if (get_token(entry, Chr(254), 1) == arr_name && get_token(entry, Chr(254), 2) == "arr") {
            content_string = get_token(entry, Chr(254), 3);
            break;
        }
        i++;
    }
    if (content_string != "") {
        let items25 = LoopParseFunc(content_string, Chr(253));
        for (let A_Index25 = 0; A_Index25 < items25.length; A_Index25++) {
            let A_LoopField25 = items25[A_Index25 - 0];
            HTVM_Append(result_array, A_LoopField25);
        }
    }
    return result_array;
}
function Oryx_interpreter(code: string): string {
    var outState: string = "success";
    var str1: string = "";
    var str2: string = "";
    var str3: string = "";
    var str4: string = "";
    var ALoopField: string = "";
    var current_line: string = "";
    let all_instr: string[] = [];
    let label_table: string[] = [];
    var zero_flag: number = 0;
    var sign_flag: number = 0;
    let call_stack: number[] = [];
    let main_stack: string[] = [];
    for (let A_Index26 = 0; A_Index26 < 100; A_Index26++) {
        HTVM_Append(Official_Oryx_VM_reg_array, "");
    }
    let items27 = LoopParseFunc(code, "\n", "\r")
    for (let A_Index27 = 0; A_Index27 < items27.length; A_Index27++) {
        let A_LoopField27 = items27[A_Index27 - 0];
        HTVM_Append(all_instr, A_LoopField27);
    }
    var i: number = 0;
    for (let A_Index28 = 0; A_Index28 < HTVM_Size(all_instr); A_Index28++) {
        ALoopField = Trim(all_instr[i]);
        if (SubStr(ALoopField, -1) == ":") {
            var label_name: string = StringTrimRight(ALoopField, 1);
            HTVM_Append(label_table, label_name + Chr(254) + STR(i));
        }
        i++;
    }
    var pc: number = 0;
    for (let A_Index29 = 0; ; A_Index29++) {
        if (pc >= HTVM_Size(all_instr)) {
            break;
        }
        current_line = Trim(all_instr[pc]);
        var pc_was_modified: boolean = false;
        if (current_line == "" || SubStr(current_line, -1) == ":") {
            pc++;
            continue;
        }
        if (SubStr(current_line, 1, 7) == "string ") {
            str1 = StringTrimLeft(current_line, 7);
            var first_colon: number = InStr(str1, ":");
            str2 = Trim(SubStr(str1, 1, first_colon - 1));
            str3 = Trim(SubStr(str1, first_colon + 1));
            str3 = StringTrimLeft(str3, 1);
            str3 = StringTrimRight(str3, 1);
            str3 = StrReplace(str3, "\\n", Chr(10));
            str3 = StrReplace(str3, "\\r", Chr(13));
            str3 = StrReplace(str3, "\\t", Chr(9));
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "string" + Chr(254) + str3);
        }
        if (SubStr(current_line, 1, 4) == "int ") {
            str1 = StringTrimLeft(current_line, 4);
            var first_colon: number = InStr(str1, ":");
            str2 = Trim(SubStr(str1, 1, first_colon - 1));
            str3 = Trim(SubStr(str1, first_colon + 1));
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "int" + Chr(254) + str3);
        }
        if (SubStr(current_line, 1, 6) == "float ") {
            str1 = StringTrimLeft(current_line, 6);
            var first_colon: number = InStr(str1, ":");
            str2 = Trim(SubStr(str1, 1, first_colon - 1));
            str3 = Trim(SubStr(str1, first_colon + 1));
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "float" + Chr(254) + str3);
        }
        if (SubStr(current_line, 1, 4) == "arr ") {
            str1 = StringTrimLeft(current_line, 4);
            HTVM_Append(Official_Oryx_VM_symbol_table, str1 + Chr(254) + "arr" + Chr(254) + "");
        }
        if (SubStr(current_line, 1, 4) == "mov ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1: string = "";
            var op2: string = "";
            // --- FIX: Manually parse to respect commas in string literals ---
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                op1 = Trim(SubStr(str1, 1, first_comma - 1));
                op2 = Trim(SubStr(str1, first_comma + 1));
            } else {
                // This would be a syntax error, but we'll handle it gracefully
                op1 = Trim(str1);
            }
            // --- END FIX ---
            if (op2 != "") {
                var value_to_move: string = get_value(op2);
                set_value(op1, value_to_move);
            }
        }
        if (SubStr(current_line, 1, 4) == "add ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1: string = Trim(get_token(str1, ",", 1));
            var op2: string = Trim(get_token(str1, ",", 2));
            var val1: number = FLOAT(get_value(op1));
            var val2: number = FLOAT(get_value(op2));
            set_value(op1, STR(val1 + val2));
        }
        if (SubStr(current_line, 1, 4) == "sub ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1: string = Trim(get_token(str1, ",", 1));
            var op2: string = Trim(get_token(str1, ",", 2));
            var val1: number = FLOAT(get_value(op1));
            var val2: number = FLOAT(get_value(op2));
            set_value(op1, STR(val1 - val2));
        }
        if (SubStr(current_line, 1, 4) == "mul ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1: string = Trim(get_token(str1, ",", 1));
            var op2: string = Trim(get_token(str1, ",", 2));
            var val1: number = FLOAT(get_value(op1));
            var val2: number = FLOAT(get_value(op2));
            set_value(op1, STR(val1 * val2));
        }
        if (SubStr(current_line, 1, 4) == "div ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1: string = Trim(get_token(str1, ",", 1));
            var op2: string = Trim(get_token(str1, ",", 2));
            var val1: number = FLOAT(get_value(op1));
            var val2: number = FLOAT(get_value(op2));
            set_value(op1, STR(val1 / val2));
        }
        if (SubStr(current_line, 1, 8) == "add_str ") {
            str1 = StringTrimLeft(current_line, 8);
            var op1: string = "";
            var op2: string = "";
            // --- FIX: Manually parse to respect commas in string literals ---
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                op1 = Trim(SubStr(str1, 1, first_comma - 1));
                op2 = Trim(SubStr(str1, first_comma + 1));
            } else {
                op1 = Trim(str1);
            }
            // --- END FIX ---
            if (op2 != "") {
                var s1: string = get_value(op1);
                var s2: string = get_value(op2);
                set_value(op1, s1 + s2);
            }
        }
        if (SubStr(current_line, 1, 4) == "inc ") {
            var op1: string = Trim(StringTrimLeft(current_line, 4));
            var val: number = FLOAT(get_value(op1));
            set_value(op1, STR(val + 1));
        }
        if (SubStr(current_line, 1, 4) == "dec ") {
            var op1: string = Trim(StringTrimLeft(current_line, 4));
            var val: number = FLOAT(get_value(op1));
            set_value(op1, STR(val - 1));
        }
        if (SubStr(current_line, 1, 4) == "cmp ") {
            str1 = StringTrimLeft(current_line, 4);
            var op1_str: string = "";
            var op2_str: string = "";
            // --- FIX: Use manual parsing to handle potential commas in string literals ---
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                op1_str = Trim(SubStr(str1, 1, first_comma - 1));
                op2_str = Trim(SubStr(str1, first_comma + 1));
            } else {
                // This would be a syntax error, but we'll handle it gracefully
                op1_str = Trim(str1);
            }
            var s_val1: string = get_value(op1_str);
            var s_val2: string = get_value(op2_str);
            // --- FIX: Check if we are comparing numbers or strings ---
            if (RegExMatch(s_val1, "^-?\\d+(\\.\\d+)?$") && RegExMatch(s_val2, "^-?\\d+(\\.\\d+)?$")) {
                // --- Numeric Comparison ---
                var val1: number = FLOAT(s_val1);
                var val2: number = FLOAT(s_val2);
                if (val1 == val2) {
                    zero_flag = 1;
                } else {
                    zero_flag = 0;
                }
                if (val1 < val2) {
                    sign_flag = 1;
                } else {
                    sign_flag = 0;
                }
            } else {
                // --- String Comparison ---
                if (s_val1 == s_val2) {
                    zero_flag = 1;
                } else {
                    zero_flag = 0;
                }
                if (s_val1 < s_val2) {
                    sign_flag = 1;
                } else {
                    sign_flag = 0;
                }
            }
        }
        if (SubStr(current_line, 1, 4) == "jmp ") {
            pc_was_modified = true;
            var label_name: string = Trim(StringTrimLeft(current_line, 4));
            var j: number = 0;
            for (let A_Index30 = 0; A_Index30 < HTVM_Size(label_table); A_Index30++) {
                if (get_token(label_table[j], Chr(254), 1) == label_name) {
                    pc = INT(get_token(label_table[j], Chr(254), 2));
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 3) == "je ") {
            if (zero_flag == 1) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 3));
                var j: number = 0;
                for (let A_Index31 = 0; A_Index31 < HTVM_Size(label_table); A_Index31++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 4) == "jne ") {
            if (zero_flag == 0) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 4));
                var j: number = 0;
                for (let A_Index32 = 0; A_Index32 < HTVM_Size(label_table); A_Index32++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 3) == "jg ") {
            if (sign_flag == 0 && zero_flag == 0) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 3));
                var j: number = 0;
                for (let A_Index33 = 0; A_Index33 < HTVM_Size(label_table); A_Index33++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 3) == "jl ") {
            if (sign_flag == 1) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 3));
                var j: number = 0;
                for (let A_Index34 = 0; A_Index34 < HTVM_Size(label_table); A_Index34++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 4) == "jge ") {
            if (sign_flag == 0) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 4));
                var j: number = 0;
                for (let A_Index35 = 0; A_Index35 < HTVM_Size(label_table); A_Index35++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 4) == "jle ") {
            if (sign_flag == 1 || zero_flag == 1) {
                pc_was_modified = true;
                var label_name: string = Trim(StringTrimLeft(current_line, 4));
                var j: number = 0;
                for (let A_Index36 = 0; A_Index36 < HTVM_Size(label_table); A_Index36++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (SubStr(current_line, 1, 6) == "input ") {
            str1 = StringTrimLeft(current_line, 6);
            var dest: string = "";
            var prompt_source: string = "";
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                dest = Trim(SubStr(str1, 1, first_comma - 1));
                prompt_source = Trim(SubStr(str1, first_comma + 1));
            } else {
                dest = Trim(str1);
            }
            var prompt_msg: string = get_value(prompt_source);
            var user_input: string = input(prompt_msg);
            set_value(dest, user_input);
        }
        if (SubStr(current_line, 1, 10) == "file.read ") {
            str1 = StringTrimLeft(current_line, 10);
            var dest: string = "";
            var path_source: string = "";
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                dest = Trim(SubStr(str1, 1, first_comma - 1));
                path_source = Trim(SubStr(str1, first_comma + 1));
            } else {
                dest = Trim(str1);
            }
            var filepath: string = get_value(path_source);
            var content: string = FileRead(filepath);
            set_value(dest, content);
        }
        if (SubStr(current_line, 1, 12) == "file.append ") {
            str1 = StringTrimLeft(current_line, 12);
            var path_source: string = "";
            var content_source: string = "";
            var first_comma: number = InStr(str1, ",");
            if (first_comma > 0) {
                path_source = Trim(SubStr(str1, 1, first_comma - 1));
                content_source = Trim(SubStr(str1, first_comma + 1));
            } else {
                path_source = Trim(str1);
            }
            var filepath: string = get_value(path_source);
            var content: string = get_value(content_source);
            FileAppend(content, filepath);
        }
        if (SubStr(current_line, 1, 12) == "file.delete ") {
            str1 = StringTrimLeft(current_line, 12);
            var path_source: string = Trim(str1);
            var filepath: string = get_value(path_source);
            FileDelete(filepath);
        }
        if (SubStr(current_line, 1, 5) == "call ") {
            str1 = Trim(StringTrimLeft(current_line, 5));
            if (str1 == "print") {
                str2 = Official_Oryx_VM_reg_array[1];
                print(str2);
            } else {
                pc_was_modified = true;
                HTVM_Append(call_stack, pc + 1);
                var label_name: string = str1;
                var j: number = 0;
                for (let A_Index37 = 0; A_Index37 < HTVM_Size(label_table); A_Index37++) {
                    if (get_token(label_table[j], Chr(254), 1) == label_name) {
                        pc = INT(get_token(label_table[j], Chr(254), 2));
                        break;
                    }
                    j++;
                }
            }
        }
        if (current_line == "ret") {
            if (HTVM_Size(call_stack) == 0) {
                print("FATAL ERROR: Return ('ret') called with empty call stack! PC: " + STR(pc));
                break;
            }
            pc_was_modified = true;
            var return_address: number = call_stack[HTVM_Size(call_stack) - 1];
            HTVM_Pop(call_stack);
            pc = return_address;
        }
        if (SubStr(current_line, 1, 5) == "push ") {
            var op1: string = Trim(StringTrimLeft(current_line, 5));
            var val: string = get_value(op1);
            HTVM_Append(main_stack, op1 + Chr(254) + val);
        }
        if (SubStr(current_line, 1, 4) == "pop ") {
            var op1: string = Trim(StringTrimLeft(current_line, 4));
            var target_prefix: string = op1 + Chr(254);
            var found_index: number = -1;
            var found_val: string = "";
            var stack_idx: number = HTVM_Size(main_stack) - 1;
            for (let A_Index38 = 0; ; A_Index38++) {
                if (stack_idx < 0) {
                    break;
                }
                var entry: string = main_stack[stack_idx];
                if (SubStr(entry, 1, StrLen(target_prefix)) == target_prefix) {
                    found_index = stack_idx;
                    found_val = StringTrimLeft(entry, StrLen(target_prefix));
                    break;
                }
                stack_idx--;
            }
            if (found_index != -1) {
                var reg_idx: number = INT(StringTrimLeft(op1, 1));
                Official_Oryx_VM_reg_array[reg_idx] = found_val;
                HTVM_Remove(main_stack, found_index);
            }
        }
        if (SubStr(current_line, 1, 8) == "arr.add ") {
            str1 = StringTrimLeft(current_line, 8);
            var arr_name: string = Trim(get_token(str1, ",", 1));
            var val_source: string = Trim(get_token(str1, ",", 2));
            var val: string = get_value(val_source);
            var j: number = 0;
            for (let A_Index39 = 0; A_Index39 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index39++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == arr_name) {
                    var current_content: string = get_token(entry, Chr(254), 3);
                    if (current_content == "") {
                        current_content = val;
                    } else {
                        current_content = current_content + Chr(253) + val;
                    }
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + current_content;
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 8) == "arr.get ") {
            str1 = StringTrimLeft(current_line, 8);
            var arr_name: string = Trim(get_token(str1, ",", 1));
            var index_source: string = Trim(get_token(str1, ",", 2));
            var dest_reg_str: string = Trim(get_token(str1, ",", 3));
            var index: number = INT(get_value(index_source));
            var j: number = 0;
            for (let A_Index40 = 0; A_Index40 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index40++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == arr_name) {
                    var content: string = get_token(entry, Chr(254), 3);
                    var val: string = get_token(content, Chr(253), index + 1);
                    var reg_idx: number = INT(StringTrimLeft(dest_reg_str, 1));
                    Official_Oryx_VM_reg_array[reg_idx] = val;
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 8) == "arr.set ") {
            str1 = StringTrimLeft(current_line, 8);
            var arr_name: string = Trim(get_token(str1, ",", 1));
            var index_source: string = Trim(get_token(str1, ",", 2));
            var val_source: string = Trim(get_token(str1, ",", 3));
            var index: number = INT(get_value(index_source));
            var new_val: string = get_value(val_source);
            var j: number = 0;
            for (let A_Index41 = 0; A_Index41 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index41++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == arr_name) {
                    var content: string = get_token(entry, Chr(254), 3);
                    var new_content: string = "";
                    var current_idx: number = 0;
                    let items42 = LoopParseFunc(content, Chr(253));
                    for (let A_Index42 = 0; A_Index42 < items42.length; A_Index42++) {
                        let A_LoopField42 = items42[A_Index42 - 0];
                        if (current_idx == index) {
                            if (new_content != "") {
                                new_content = new_content + Chr(253);
                            }
                            new_content = new_content + new_val;
                        } else {
                            if (new_content != "") {
                                new_content = new_content + Chr(253);
                            }
                            new_content = new_content + A_LoopField42;
                        }
                        current_idx++;
                    }
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + new_content;
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 9) == "arr.size ") {
            str1 = StringTrimLeft(current_line, 9);
            var arr_name: string = Trim(get_token(str1, ",", 1));
            var dest_reg_str: string = Trim(get_token(str1, ",", 2));
            var j: number = 0;
            for (let A_Index43 = 0; A_Index43 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index43++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == arr_name) {
                    var content: string = get_token(entry, Chr(254), 3);
                    var size: number = 0;
                    if (content != "") {
                        var current_idx: number = 0;
                        let items44 = LoopParseFunc(content, Chr(253));
                        for (let A_Index44 = 0; A_Index44 < items44.length; A_Index44++) {
                            let A_LoopField44 = items44[A_Index44 - 0];
                            current_idx++;
                        }
                        size = current_idx;
                    }
                    var reg_idx: number = INT(StringTrimLeft(dest_reg_str, 1));
                    Official_Oryx_VM_reg_array[reg_idx] = STR(size);
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 10) == "arr.clear ") {
            var arr_name: string = Trim(StringTrimLeft(current_line, 10));
            var j: number = 0;
            for (let A_Index45 = 0; A_Index45 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index45++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == arr_name) {
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + "";
                    break;
                }
                j++;
            }
        }
        if (SubStr(current_line, 1, 9) == "arr.copy ") {
            str1 = StringTrimLeft(current_line, 9);
            var src_name: string = Trim(get_token(str1, ",", 1));
            var dest_name: string = Trim(get_token(str1, ",", 2));
            var content_to_copy: string = "";
            var j: number = 0;
            for (let A_Index46 = 0; A_Index46 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index46++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == src_name) {
                    content_to_copy = get_token(entry, Chr(254), 3);
                    break;
                }
                j++;
            }
            j = 0;
            for (let A_Index47 = 0; A_Index47 < HTVM_Size(Official_Oryx_VM_symbol_table); A_Index47++) {
                var entry: string = Official_Oryx_VM_symbol_table[j];
                if (get_token(entry, Chr(254), 1) == dest_name) {
                    Official_Oryx_VM_symbol_table[j] = dest_name + Chr(254) + "arr" + Chr(254) + content_to_copy;
                    break;
                }
                j++;
            }
        }
        // --- NEW: String Manipulation ---
        if (SubStr(current_line, 1, 8) == "str.get ") {
            str1 = StringTrimLeft(current_line, 8);
            var str_name: string = Trim(get_token(str1, ",", 1));
            var index_source: string = Trim(get_token(str1, ",", 2));
            var dest_reg_str: string = Trim(get_token(str1, ",", 3));
            var index: number = INT(get_value(index_source));
            var content: string = get_value(str_name);
            var charr: string = SubStr(content, index + 1, 1);
            set_value(dest_reg_str, charr);
        }
        if (SubStr(current_line, 1, 8) == "str.set ") {
            str1 = StringTrimLeft(current_line, 8);
            var str_name: string = Trim(get_token(str1, ",", 1));
            var index_source: string = Trim(get_token(str1, ",", 2));
            var char_source: string = Trim(get_token(str1, ",", 3));
            var index: number = INT(get_value(index_source));
            var new_val: string = get_value(char_source);
            var old_str: string = get_value(str_name);
            // --- HARD RULE: overwrite ONE character only ---
            var repl_char: string = SubStr(new_val, 1, 1);
            var part1: string = "";
            if (index > 0) {
                part1 = SubStr(old_str, 1, index);
            }
            var part2: string = SubStr(old_str, index + 2);
            var new_str: string = part1 + repl_char + part2;
            set_value(str_name, new_str);
        }
        if (SubStr(current_line, 1, 8) == "str.len ") {
            str1 = StringTrimLeft(current_line, 8);
            var str_name: string = Trim(get_token(str1, ",", 1));
            var dest_reg_str: string = Trim(get_token(str1, ",", 2));
            var content: string = get_value(str_name);
            var len: number = StrLen(content);
            set_value(dest_reg_str, STR(len));
        }
        if (!pc_was_modified) {
            pc++;
        }
    }
    Official_Oryx_VM_API_symbol_table_cache = Official_Oryx_VM_symbol_table;
    return outState;
}
function Oryx_VM(code: string): string {
    var outState: string = "";
    code = Trim(code);
    code = cleanUpFirst(code);
    code = handleComments(code, "#");
    code = handleComments(code, ";");
    outState = Oryx_interpreter(Trim(code));
    return outState;
}
