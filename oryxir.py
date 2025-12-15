import os
import platform
import re
import sys

def LoopParseFunc(var, delimiter1="", delimiter2=""):
    if not delimiter1 and not delimiter2:
        # If no delimiters are provided, return a list of characters
        items = list(var)
    else:
        # Construct the regular expression pattern for splitting the string
        pattern = r'[' + re.escape(delimiter1) + re.escape(delimiter2) + r']+'
        # Split the string using the constructed pattern
        items = re.split(pattern, var)
    return items

# used the print func

# Convert value to string
def STR(value):
    if isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, bool):
        return "1" if value else "0"
    elif isinstance(value, str):
        return value  # If the value is already a string, return it as-is
    else:
        raise TypeError("Unsupported type")

# Convert value to integer
def INT(value):
    try:
        # Try converting the value to an integer
        return int(float(value))
    except ValueError:
        # If conversion fails, raise a TypeError
        raise TypeError("Cannot convert to integer")

# Convert value to float
def FLOAT(value):
    try:
        return float(value)
    except ValueError:
        raise TypeError("Cannot convert to float")

# Function to find the position of needle in haystack (str overload)
def InStr(haystack: str, needle: str) -> int:
    pos = haystack.find(needle)
    return pos + 1 if pos != -1 else 0

# used imput func

def FileDelete(path: str) -> bool:
    # Check if the file exists and remove it
    if os.path.exists(path):
        os.remove(path)
        return True
    return False

def FileAppend(content: str, path: str) -> bool:
    # Open the file in append mode and write the content
    try:
        with open(path, 'a') as file:
            file.write(content)
        return True
    except IOError:
        print("Error: Could not open the file for appending.")
        return False

def FileRead(path: str) -> str:
    # Check if the path is absolute, if not prepend the current working directory
    if not os.path.isabs(path):
        path = os.path.join(os.getcwd(), path)
    # Open and read the file content with utf-8 encoding to avoid decode errors
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()

def StrLen(s: str) -> int:
    # Return the length of the given string
    return len(s)

def Chr(number: int) -> str:
    # Return the character corresponding to the Unicode code point, or an empty string if out of range
    return chr(number) if 0 <= number <= 0x10FFFF else ""

def SubStr(s, startPos, length=-1):
    result = ""
    strLen = len(s)
    # Handle negative starting positions (counting from the end)
    if startPos < 0:
        startPos = strLen + startPos
        if startPos < 0:
            startPos = 0  # Ensure it doesn't go beyond the start of the string
    else:
        startPos -= 1  # Convert to 0-based index for internal operations
    # Handle length
    if length < 0:
        length = strLen - startPos  # Length to the end of the string
    elif startPos + length > strLen:
        length = strLen - startPos  # Adjust length to fit within the string
    # Extract the substring
    result = s[startPos:startPos + length]
    return result

def Trim(inputString):
    return inputString.strip() if inputString else ""

def StrReplace(originalString, find, replaceWith):
    return originalString.replace(find, replaceWith)

def StringTrimLeft(input, numChars):
    return input[numChars:] if numChars <= len(input) else input

def StringTrimRight(input, numChars):
    return input[:-numChars] if numChars <= len(input) else input

def StrSplit(inputStr, delimiter, num):
    parts = inputStr.split(delimiter)
    return parts[num - 1] if 0 < num <= len(parts) else ""

def Mod(dividend, divisor):
    return dividend % divisor

def isWindows():
    return platform.system().lower() == "windows"

def GetParams():
    # Check if any command line arguments are provided
    if len(sys.argv) < 2:
        return ""
    # Store the provided command line arguments
    params = []
    for arg in sys.argv[1:]:
        if os.path.exists(arg):
            arg = os.path.abspath(arg)
        params.append(arg)
    return "\n".join(params)

def RegExMatch(haystack, needle):
    match = re.search(needle, haystack)
    return match.start() + 1 if match else 0 # 1-based index or 0 if no match

def HTVM_getLang_HTVM():
    return "py"

def HTVM_Append(arr, value):
    arr.append(value)

def HTVM_Pop(arr):
    if arr:
        arr.pop()

def HTVM_Size(arr):
    return len(arr)

def HTVM_Remove(arr, index):
    if 0 <= index < len(arr):
        del arr[index]



# start of HT-Lib.htvm
# global vars NEEDED
HT_LIB_theIdNumOfThe34 = 0
HT_Lib_theIdNumOfThe34theVar = []
#;;;;;;;;;;;;;;;;;;;;;;;;;
def preserveStrings(code, keyWordEscpaeChar = "\\"):
    getAllCharForTheFurtureSoIcanAddEscapeChar = []
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = ""
    str21 = ""
    htCodeOUT754754 = ""
    OutFixDoubleQuotesInsideDoubleQuotes = ""
    fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0
    removeNexFixkeyWordEscpaeChar = 0
    areWEinSome34sNum = 0
    items1 = LoopParseFunc(code)
    for A_Index1 , A_LoopField1 in enumerate(items1, start=0):
        HTVM_Append(HT_Lib_theIdNumOfThe34theVar, "")
        HTVM_Append(HT_Lib_theIdNumOfThe34theVar, "")
    items2 = LoopParseFunc(code)
    for A_Index2 , A_LoopField2 in enumerate(items2, start=0):
        HT_Lib_theIdNumOfThe34theVar[A_Index2] = HT_Lib_theIdNumOfThe34theVar[A_Index2] + Chr(34)
        HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, A_LoopField2)
    HTVM_Append(getAllCharForTheFurtureSoIcanAddEscapeChar, " ")
    ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes = Chr(34) + "ihuiuuhuuhtheidFor" + str21 + "--" + str21 + "asds" + str21 + "as--" + str21 + "theuhtuwaesphoutr" + Chr(34)
    items3 = LoopParseFunc(code)
    for A_Index3 , A_LoopField3 in enumerate(items3, start=0):
        if (A_LoopField3 == keyWordEscpaeChar and getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index3 + 1] == Chr(34)):
            fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 1
            OutFixDoubleQuotesInsideDoubleQuotes += ReplaceFixWhitOutFixDoubleQuotesInsideDoubleQuotes
        else:
            if (fixOutFixDoubleQuotesInsideDoubleQuotesFIXok != 1):
                OutFixDoubleQuotesInsideDoubleQuotes += A_LoopField3
            else:
                fixOutFixDoubleQuotesInsideDoubleQuotesFIXok = 0
    code = OutFixDoubleQuotesInsideDoubleQuotes
    if (keyWordEscpaeChar != Chr(92)):
        code = StrReplace(code, Chr(92), Chr(92) + Chr(92))
    if (keyWordEscpaeChar == Chr(92)):
        items4 = LoopParseFunc(code)
        for A_Index4 , A_LoopField4 in enumerate(items4, start=0):
            if (A_LoopField4 == Chr(34)):
                areWEinSome34sNum += 1
            if (areWEinSome34sNum == 1):
                if (A_LoopField4 != Chr(34)):
                    if (A_LoopField4 == keyWordEscpaeChar):
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + Chr(92)
                    else:
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + A_LoopField4
                else:
                    HT_LIB_theIdNumOfThe34 += 1
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(HT_LIB_theIdNumOfThe34) + Chr(65) + Chr(65)
            if (areWEinSome34sNum == 2 or areWEinSome34sNum == 0):
                if (A_LoopField4 != Chr(34)):
                    htCodeOUT754754 += A_LoopField4
                areWEinSome34sNum = 0
    else:
        items5 = LoopParseFunc(code)
        for A_Index5 , A_LoopField5 in enumerate(items5, start=0):
            if (A_LoopField5 == Chr(34)):
                areWEinSome34sNum += 1
            if (areWEinSome34sNum == 1):
                if (A_LoopField5 != Chr(34)):
                    if (A_LoopField5 == keyWordEscpaeChar and keyWordEscpaeChar == getAllCharForTheFurtureSoIcanAddEscapeChar[A_Index5 + 1]):
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + keyWordEscpaeChar
                        removeNexFixkeyWordEscpaeChar = 1
                    elif (A_LoopField5 == keyWordEscpaeChar):
                        if (removeNexFixkeyWordEscpaeChar != 1):
                            HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + Chr(92)
                        else:
                            removeNexFixkeyWordEscpaeChar = 0
                    else:
                        HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] = HT_Lib_theIdNumOfThe34theVar[HT_LIB_theIdNumOfThe34] + A_LoopField5
                else:
                    HT_LIB_theIdNumOfThe34 += 1
                    htCodeOUT754754 += "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(HT_LIB_theIdNumOfThe34) + Chr(65) + Chr(65)
            if (areWEinSome34sNum == 2 or areWEinSome34sNum == 0):
                if (A_LoopField5 != Chr(34)):
                    htCodeOUT754754 += A_LoopField5
                areWEinSome34sNum = 0
    code = htCodeOUT754754
    for A_Index6 in range(0, HT_LIB_theIdNumOfThe34):
        HT_Lib_theIdNumOfThe34theVar[A_Index6] = HT_Lib_theIdNumOfThe34theVar[A_Index6] + Chr(34)
    HTVM_Append(HT_Lib_theIdNumOfThe34theVar, Chr(34))
    return code
#;;;;;;;;;;;;;;;;;;;;;;;;;;
#;;;;;;;;;;;;;;;;;;;;;;;;;;
def restoreStrings(codeOUT, keyWordEscpaeChar = Chr(92)):
    for A_Index7 in range(0, HT_LIB_theIdNumOfThe34):
        if (HT_LIB_theIdNumOfThe34 == A_Index7 + 1):
            codeOUT = StrReplace(codeOUT, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index7 + 1) + Chr(65) + Chr(65), StrReplace(HT_Lib_theIdNumOfThe34theVar[A_Index7 + 1], keyWordEscpaeChar, "\\") + Chr(34))
        else:
            codeOUT = StrReplace(codeOUT, "VYIGUOYIYVIUCFCYIUCFCYIGCYGICFHYFHCTCFTFDFGYGFC" + Chr(65) + Chr(65) + STR(A_Index7 + 1) + Chr(65) + Chr(65), StrReplace(HT_Lib_theIdNumOfThe34theVar[A_Index7 + 1], keyWordEscpaeChar, "\\"))
    return codeOUT
def cleanUpFirst(code):
    code = StrReplace(code, Chr(13), "")
    out = ""
    items8 = LoopParseFunc(code, "\n", "\r")
    for A_Index8 , A_LoopField8 in enumerate(items8, start=0):
        out += Trim(A_LoopField8) + Chr(10)
    out = StringTrimRight(out, 1)
    return out
def getLangParams(binName, langExtension, extra = ""):
    params = Trim(GetParams())
    paramsTemp = ""
    if (params == ""):
        if (isWindows()):
            print("Usage:" + Chr(10) + Trim(binName) + " your_file." + Trim(langExtension) + " " + Trim(extra))
        else:
            print("Usage:" + Chr(10) + "./" + Trim(binName) + " your_file." + Trim(langExtension) + " " + Trim(extra))
        return ""
    else:
        return params
    return "MASSIVE ERROR"
def saveOutput(outCode, fileName):
    FileDelete(Trim(fileName))
    FileAppend(Trim(outCode), Trim(fileName))
    print("Generation finished: " + Trim(fileName) + " generated.")
def beginning(line, what):
    if (SubStr(line, 1, StrLen(what)) == what):
        return True
    return False
def formatCurlyBracesForParsing(code, openBrace = "{", closeBrace = "}"):
    code = StrReplace(code, openBrace, Chr(10) + "{" + Chr(10))
    code = StrReplace(code, closeBrace, Chr(10) + "}" + Chr(10))
    code = cleanUpFirst(code)
    return code
def handleComments(code, commentKeyword = ";"):
    str1 = ""
    items9 = LoopParseFunc(code, "\n", "\r")
    for A_Index9 , A_LoopField9 in enumerate(items9, start=0):
        str1 += StrSplit(A_LoopField9, commentKeyword, 1) + Chr(10)
    code = StringTrimRight(str1, 1)
    return code
# Define the function to check odd spaces at the beginning
def CheckOddLeadingSpaces(string123):
    # Initialize a variable to count the spaces
    spaceCount = 0
    # Loop through the string one character at a time
    items10 = LoopParseFunc(string123)
    for A_Index10 , A_LoopField10 in enumerate(items10, start=0):
        # Check if the current character is a space
        if (A_LoopField10 == Chr(32)):
            spaceCount += 1
        else:
            # When we hit a non-space character, break the loop
            break
    # Return true if the number of spaces is odd, false otherwise
    sdsfawasd = STR(Mod(spaceCount, 2) == 1)
    #MsgBox, % sdsfawasd
    return sdsfawasd
def RepeatSpaces(count):
    spaces = ""
    for A_Index11 in range(0, count):
        spaces += Chr(32)
    return spaces
# if you wanna convert to python, nim etc... indentation style we set modeCurlyBracesOn to 0
def indent_nested_curly_braces(input_string, modeCurlyBracesOn = 1):
    indent_size = 4
    current_indent = 0
    result = ""
    trimmed_line = ""
    resultOut = ""
    culyOpenFix = "{"
    culyCloseFix = "}"
    #MsgBox, % input_string
    items12 = LoopParseFunc(input_string, "\n", "\r")
    for A_Index12 , A_LoopField12 in enumerate(items12, start=0):
        trimmed_line = Trim(A_LoopField12)
        if (trimmed_line == Chr(123)):
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10)
            current_indent = current_indent + indent_size
        elif (trimmed_line == Chr(125)):
            current_indent = current_indent - indent_size
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10)
        else:
            result += Chr(32) + RepeatSpaces(current_indent) + trimmed_line + Chr(10)
    if (modeCurlyBracesOn == 0):
        resultOut = ""
        items13 = LoopParseFunc(result, "\n", "\r")
        for A_Index13 , A_LoopField13 in enumerate(items13, start=0):
            if (Trim(A_LoopField13) != "{" and Trim(A_LoopField13) != "}"):
                resultOut += A_LoopField13 + Chr(10)
        result = StringTrimRight(resultOut, 1)
    else:
        # format curly braces in a K&R style
        lookIntoFurture = []
        items14 = LoopParseFunc(result, "\n", "\r")
        for A_Index14 , A_LoopField14 in enumerate(items14, start=0):
            HTVM_Append(lookIntoFurture, Trim(A_LoopField14))
        HTVM_Append(lookIntoFurture, " ")
        resultOut = ""
        skipNext = 0
        items15 = LoopParseFunc(result, "\n", "\r")
        for A_Index15 , A_LoopField15 in enumerate(items15, start=0):
            skipNext -= 1
            if (skipNext <= 0):
                skipNext = 0
            if (Trim(lookIntoFurture[A_Index15 + 1]) == "{"):
                resultOut += A_LoopField15 + " " + culyOpenFix + Chr(10)
                skipNext = 2
            if (skipNext == 0):
                resultOut += A_LoopField15 + Chr(10)
        result = StringTrimRight(resultOut, 1)
        lookIntoFurture2 = []
        items16 = LoopParseFunc(result, "\n", "\r")
        for A_Index16 , A_LoopField16 in enumerate(items16, start=0):
            HTVM_Append(lookIntoFurture2, Trim(A_LoopField16))
        HTVM_Append(lookIntoFurture2, " ")
        resultOut = ""
        skipNext = 0
        addSpacesAtTheBegginig = None
        items17 = LoopParseFunc(result, "\n", "\r")
        for A_Index17 , A_LoopField17 in enumerate(items17, start=0):
            skipNext -= 1
            if (skipNext <= 0):
                skipNext = 0
            if (Trim(A_LoopField17) == "}" and Trim(lookIntoFurture2[A_Index17 + 1]) == "else {"):
                skipNext = 2
                addSpacesAtTheBegginig = ""
                items18 = LoopParseFunc(A_LoopField17)
                for A_Index18 , A_LoopField18 in enumerate(items18, start=0):
                    if (A_LoopField18 == " "):
                        if (A_LoopField18 != " "):
                            break
                        addSpacesAtTheBegginig += StrReplace(A_LoopField18, "}", culyCloseFix)
                resultOut += addSpacesAtTheBegginig + culyCloseFix + " else " + culyOpenFix + Chr(10)
            if (skipNext == 0):
                resultOut += A_LoopField17 + Chr(10)
        result = StringTrimRight(resultOut, 1)
    resultOut = ""
    ALoopField = None
    items19 = LoopParseFunc(result, "\n", "\r")
    for A_Index19 , A_LoopField19 in enumerate(items19, start=0):
        if (CheckOddLeadingSpaces(A_LoopField19) == "1"):
            ALoopField = StringTrimLeft(A_LoopField19, 1)
            resultOut += ALoopField + Chr(10)
        else:
            resultOut += A_LoopField19 + Chr(10)
    result = StringTrimRight(resultOut, 1)
    # Return the result
    return result
# end of HT-Lib.htvm
Official_Oryx_VM_symbol_table = []
Official_Oryx_VM_reg_array = []
# --- API STATE CACHE ---
# These globals store the state of the *last* completed interpreter run.
Official_Oryx_VM_API_symbol_table_cache = []
# --- HELPER: SAFE TOKEN GETTER ---
# Replaces StrSplit(str, delim, index) to avoid crashes on missing parts.
def get_token(input, delim, index):
    current = 1
    items20 = LoopParseFunc(input, delim)
    for A_Index20 , A_LoopField20 in enumerate(items20, start=0):
        if (current == index):
            return A_LoopField20
        current += 1
    return ""
# --- HELPER FUNCTION: GET VALUE ---
def get_value(operand):
    if (RegExMatch(operand, "^r\\d+$")):
        reg_index = INT(StringTrimLeft(operand, 1))
        return Official_Oryx_VM_reg_array[reg_index]
    elif (RegExMatch(operand, "^-?\\d+(\\.\\d+)?$")):
        return operand
    elif (SubStr(operand, 1, 1) == Chr(34)):
        val = StringTrimLeft(operand, 1)
        val = StringTrimRight(val, 1)
        val = StrReplace(val, "\\n", Chr(10))
        val = StrReplace(val, "\\r", Chr(13))
        val = StrReplace(val, "\\t", Chr(9))
        return val
    else:
        i = 0
        for A_Index21 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
            entry = Official_Oryx_VM_symbol_table[i]
            if (get_token(entry, Chr(254), 1) == operand):
                return get_token(entry, Chr(254), 3)
            i += 1
    return ""
# --- HELPER FUNCTION: SET VALUE ---
def set_value(dest_operand, new_value):
    if (RegExMatch(dest_operand, "^r\\d+$")):
        reg_index = INT(StringTrimLeft(dest_operand, 1))
        Official_Oryx_VM_reg_array[reg_index] = new_value
    else:
        i = 0
        for A_Index22 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
            entry = Official_Oryx_VM_symbol_table[i]
            var_name = get_token(entry, Chr(254), 1)
            if (var_name == dest_operand):
                var_type = get_token(entry, Chr(254), 2)
                Official_Oryx_VM_symbol_table[i] = var_name + Chr(254) + var_type + Chr(254) + new_value
                return
            i += 1
# --- NEW API FUNCTION: GET VARIABLE ---
# Retrieves the final value of a variable from the last interpreter run.
# @param str var_name The name of the variable (e.g., "my_var").
# @return str The final value of the variable as a string. Returns "" if not found.
def OryxAPI_GetVariable(operand):
    if (RegExMatch(operand, "^r\\d+$")):
        reg_index = INT(StringTrimLeft(operand, 1))
        return Official_Oryx_VM_reg_array[reg_index]
    elif (RegExMatch(operand, "^-?\\d+(\\.\\d+)?$")):
        return operand
    elif (SubStr(operand, 1, 1) == Chr(34)):
        val = StringTrimLeft(operand, 1)
        val = StringTrimRight(val, 1)
        val = StrReplace(val, "\\n", Chr(10))
        val = StrReplace(val, "\\r", Chr(13))
        val = StrReplace(val, "\\t", Chr(9))
        return val
    else:
        i = 0
        for A_Index23 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
            entry = Official_Oryx_VM_symbol_table[i]
            if (get_token(entry, Chr(254), 1) == operand):
                return get_token(entry, Chr(254), 3)
            i += 1
    return ""
# --- NEW API FUNCTION: GET ARRAY ---
# Retrieves the final contents of an array from the last interpreter run.
# @param str arr_name The name of the array (e.g., "my_list").
# @return arr str An array containing all the elements. Returns an empty array if not found.
def OryxAPI_GetArray(arr_name):
    result_array = []
    content_string = ""
    i = 0
    for A_Index24 in range(0, HTVM_Size(Official_Oryx_VM_API_symbol_table_cache)):
        entry = Official_Oryx_VM_API_symbol_table_cache[i]
        # Check if it's an array and the name matches
        if (get_token(entry, Chr(254), 1) == arr_name and get_token(entry, Chr(254), 2) == "arr"):
            content_string = get_token(entry, Chr(254), 3)
            break
        i += 1
    if (content_string != ""):
        items25 = LoopParseFunc(content_string, Chr(253))
        for A_Index25 , A_LoopField25 in enumerate(items25, start=0):
            HTVM_Append(result_array, A_LoopField25)
    return result_array
def Oryx_interpreter(code):
    outState = "success"
    str1 = ""
    str2 = ""
    str3 = ""
    str4 = ""
    ALoopField = ""
    current_line = ""
    all_instr = []
    label_table = []
    zero_flag = 0
    sign_flag = 0
    call_stack = []
    main_stack = []
    for A_Index26 in range(0, 100):
        HTVM_Append(Official_Oryx_VM_reg_array, "")
    items27 = LoopParseFunc(code, "\n", "\r")
    for A_Index27 , A_LoopField27 in enumerate(items27, start=0):
        HTVM_Append(all_instr, A_LoopField27)
    i = 0
    for A_Index28 in range(0, HTVM_Size(all_instr)):
        ALoopField = Trim(all_instr[i])
        if (SubStr(ALoopField, -1) == ":"):
            label_name = StringTrimRight(ALoopField, 1)
            HTVM_Append(label_table, label_name + Chr(254) + STR(i))
        i += 1
    pc = 0
    for A_Index29 , value in enumerate(iter(int, 1), start=0):
        if (pc >= HTVM_Size(all_instr)):
            break
        current_line = Trim(all_instr[pc])
        pc_was_modified = False
        if (current_line == "" or SubStr(current_line, -1) == ":"):
            pc += 1
            continue
        if (SubStr(current_line, 1, 7) == "string "):
            str1 = StringTrimLeft(current_line, 7)
            first_colon = InStr(str1, ":")
            str2 = Trim(SubStr(str1, 1, first_colon - 1))
            str3 = Trim(SubStr(str1, first_colon + 1))
            str3 = StringTrimLeft(str3, 1)
            str3 = StringTrimRight(str3, 1)
            str3 = StrReplace(str3, "\\n", Chr(10))
            str3 = StrReplace(str3, "\\r", Chr(13))
            str3 = StrReplace(str3, "\\t", Chr(9))
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "string" + Chr(254) + str3)
        if (SubStr(current_line, 1, 4) == "int "):
            str1 = StringTrimLeft(current_line, 4)
            first_colon = InStr(str1, ":")
            str2 = Trim(SubStr(str1, 1, first_colon - 1))
            str3 = Trim(SubStr(str1, first_colon + 1))
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "int" + Chr(254) + str3)
        if (SubStr(current_line, 1, 6) == "float "):
            str1 = StringTrimLeft(current_line, 6)
            first_colon = InStr(str1, ":")
            str2 = Trim(SubStr(str1, 1, first_colon - 1))
            str3 = Trim(SubStr(str1, first_colon + 1))
            HTVM_Append(Official_Oryx_VM_symbol_table, str2 + Chr(254) + "float" + Chr(254) + str3)
        if (SubStr(current_line, 1, 4) == "arr "):
            str1 = StringTrimLeft(current_line, 4)
            HTVM_Append(Official_Oryx_VM_symbol_table, str1 + Chr(254) + "arr" + Chr(254) + "")
        if (SubStr(current_line, 1, 4) == "mov "):
            str1 = StringTrimLeft(current_line, 4)
            op1 = ""
            op2 = ""
            # --- FIX: Manually parse to respect commas in string literals ---
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                op1 = Trim(SubStr(str1, 1, first_comma - 1))
                op2 = Trim(SubStr(str1, first_comma + 1))
            else:
                # This would be a syntax error, but we'll handle it gracefully
                op1 = Trim(str1)
            # --- END FIX ---
            if (op2 != ""):
                value_to_move = get_value(op2)
                set_value(op1, value_to_move)
        if (SubStr(current_line, 1, 4) == "add "):
            str1 = StringTrimLeft(current_line, 4)
            op1 = Trim(get_token(str1, ",", 1))
            op2 = Trim(get_token(str1, ",", 2))
            val1 = FLOAT(get_value(op1))
            val2 = FLOAT(get_value(op2))
            set_value(op1, STR(val1 + val2))
        if (SubStr(current_line, 1, 4) == "sub "):
            str1 = StringTrimLeft(current_line, 4)
            op1 = Trim(get_token(str1, ",", 1))
            op2 = Trim(get_token(str1, ",", 2))
            val1 = FLOAT(get_value(op1))
            val2 = FLOAT(get_value(op2))
            set_value(op1, STR(val1 - val2))
        if (SubStr(current_line, 1, 4) == "mul "):
            str1 = StringTrimLeft(current_line, 4)
            op1 = Trim(get_token(str1, ",", 1))
            op2 = Trim(get_token(str1, ",", 2))
            val1 = FLOAT(get_value(op1))
            val2 = FLOAT(get_value(op2))
            set_value(op1, STR(val1 * val2))
        if (SubStr(current_line, 1, 4) == "div "):
            str1 = StringTrimLeft(current_line, 4)
            op1 = Trim(get_token(str1, ",", 1))
            op2 = Trim(get_token(str1, ",", 2))
            val1 = FLOAT(get_value(op1))
            val2 = FLOAT(get_value(op2))
            set_value(op1, STR(val1 / val2))
        if (SubStr(current_line, 1, 8) == "add_str "):
            str1 = StringTrimLeft(current_line, 8)
            op1 = ""
            op2 = ""
            # --- FIX: Manually parse to respect commas in string literals ---
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                op1 = Trim(SubStr(str1, 1, first_comma - 1))
                op2 = Trim(SubStr(str1, first_comma + 1))
            else:
                op1 = Trim(str1)
            # --- END FIX ---
            if (op2 != ""):
                s1 = get_value(op1)
                s2 = get_value(op2)
                set_value(op1, s1 + s2)
        if (SubStr(current_line, 1, 4) == "inc "):
            op1 = Trim(StringTrimLeft(current_line, 4))
            val = FLOAT(get_value(op1))
            set_value(op1, STR(val + 1))
        if (SubStr(current_line, 1, 4) == "dec "):
            op1 = Trim(StringTrimLeft(current_line, 4))
            val = FLOAT(get_value(op1))
            set_value(op1, STR(val - 1))
        if (SubStr(current_line, 1, 4) == "cmp "):
            str1 = StringTrimLeft(current_line, 4)
            op1_str = ""
            op2_str = ""
            # --- FIX: Use manual parsing to handle potential commas in string literals ---
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                op1_str = Trim(SubStr(str1, 1, first_comma - 1))
                op2_str = Trim(SubStr(str1, first_comma + 1))
            else:
                # This would be a syntax error, but we'll handle it gracefully
                op1_str = Trim(str1)
            s_val1 = get_value(op1_str)
            s_val2 = get_value(op2_str)
            # --- FIX: Check if we are comparing numbers or strings ---
            if (RegExMatch(s_val1, "^-?\\d+(\\.\\d+)?$") and RegExMatch(s_val2, "^-?\\d+(\\.\\d+)?$")):
                # --- Numeric Comparison ---
                val1 = FLOAT(s_val1)
                val2 = FLOAT(s_val2)
                if (val1 == val2):
                    zero_flag = 1
                else:
                    zero_flag = 0
                if (val1 < val2):
                    sign_flag = 1
                else:
                    sign_flag = 0
            else:
                # --- String Comparison ---
                if (s_val1 == s_val2):
                    zero_flag = 1
                else:
                    zero_flag = 0
                if (s_val1 < s_val2):
                    sign_flag = 1
                else:
                    sign_flag = 0
        if (SubStr(current_line, 1, 4) == "jmp "):
            pc_was_modified = True
            label_name = Trim(StringTrimLeft(current_line, 4))
            j = 0
            for A_Index30 in range(0, HTVM_Size(label_table)):
                if (get_token(label_table[j], Chr(254), 1) == label_name):
                    pc = INT(get_token(label_table[j], Chr(254), 2))
                    break
                j += 1
        if (SubStr(current_line, 1, 3) == "je "):
            if (zero_flag == 1):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 3))
                j = 0
                for A_Index31 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 4) == "jne "):
            if (zero_flag == 0):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 4))
                j = 0
                for A_Index32 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 3) == "jg "):
            if (sign_flag == 0 and zero_flag == 0):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 3))
                j = 0
                for A_Index33 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 3) == "jl "):
            if (sign_flag == 1):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 3))
                j = 0
                for A_Index34 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 4) == "jge "):
            if (sign_flag == 0):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 4))
                j = 0
                for A_Index35 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 4) == "jle "):
            if (sign_flag == 1 or zero_flag == 1):
                pc_was_modified = True
                label_name = Trim(StringTrimLeft(current_line, 4))
                j = 0
                for A_Index36 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (SubStr(current_line, 1, 6) == "input "):
            str1 = StringTrimLeft(current_line, 6)
            dest = ""
            prompt_source = ""
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                dest = Trim(SubStr(str1, 1, first_comma - 1))
                prompt_source = Trim(SubStr(str1, first_comma + 1))
            else:
                dest = Trim(str1)
            prompt_msg = get_value(prompt_source)
            user_input = input(prompt_msg)
            set_value(dest, user_input)
        if (SubStr(current_line, 1, 10) == "file.read "):
            str1 = StringTrimLeft(current_line, 10)
            dest = ""
            path_source = ""
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                dest = Trim(SubStr(str1, 1, first_comma - 1))
                path_source = Trim(SubStr(str1, first_comma + 1))
            else:
                dest = Trim(str1)
            filepath = get_value(path_source)
            content = FileRead(filepath)
            set_value(dest, content)
        if (SubStr(current_line, 1, 12) == "file.append "):
            str1 = StringTrimLeft(current_line, 12)
            path_source = ""
            content_source = ""
            first_comma = InStr(str1, ",")
            if (first_comma > 0):
                path_source = Trim(SubStr(str1, 1, first_comma - 1))
                content_source = Trim(SubStr(str1, first_comma + 1))
            else:
                path_source = Trim(str1)
            filepath = get_value(path_source)
            content = get_value(content_source)
            FileAppend(content, filepath)
        if (SubStr(current_line, 1, 12) == "file.delete "):
            str1 = StringTrimLeft(current_line, 12)
            path_source = Trim(str1)
            filepath = get_value(path_source)
            FileDelete(filepath)
        if (SubStr(current_line, 1, 5) == "call "):
            str1 = Trim(StringTrimLeft(current_line, 5))
            if (str1 == "print"):
                str2 = Official_Oryx_VM_reg_array[1]
                print(str2)
            else:
                pc_was_modified = True
                HTVM_Append(call_stack, pc + 1)
                label_name = str1
                j = 0
                for A_Index37 in range(0, HTVM_Size(label_table)):
                    if (get_token(label_table[j], Chr(254), 1) == label_name):
                        pc = INT(get_token(label_table[j], Chr(254), 2))
                        break
                    j += 1
        if (current_line == "ret"):
            if (HTVM_Size(call_stack) == 0):
                print("FATAL ERROR: Return ('ret') called with empty call stack! PC: " + STR(pc))
                break
            pc_was_modified = True
            return_address = call_stack[HTVM_Size(call_stack) - 1]
            HTVM_Pop(call_stack)
            pc = return_address
        if (SubStr(current_line, 1, 5) == "push "):
            op1 = Trim(StringTrimLeft(current_line, 5))
            val = get_value(op1)
            HTVM_Append(main_stack, op1 + Chr(254) + val)
        if (SubStr(current_line, 1, 4) == "pop "):
            op1 = Trim(StringTrimLeft(current_line, 4))
            target_prefix = op1 + Chr(254)
            found_index = -1
            found_val = ""
            stack_idx = HTVM_Size(main_stack) - 1
            for A_Index38 , value in enumerate(iter(int, 1), start=0):
                if (stack_idx < 0):
                    break
                entry = main_stack[stack_idx]
                if (SubStr(entry, 1, StrLen(target_prefix)) == target_prefix):
                    found_index = stack_idx
                    found_val = StringTrimLeft(entry, StrLen(target_prefix))
                    break
                stack_idx -= 1
            if (found_index != -1):
                reg_idx = INT(StringTrimLeft(op1, 1))
                Official_Oryx_VM_reg_array[reg_idx] = found_val
                HTVM_Remove(main_stack, found_index)
        if (SubStr(current_line, 1, 8) == "arr.add "):
            str1 = StringTrimLeft(current_line, 8)
            arr_name = Trim(get_token(str1, ",", 1))
            val_source = Trim(get_token(str1, ",", 2))
            val = get_value(val_source)
            j = 0
            for A_Index39 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == arr_name):
                    current_content = get_token(entry, Chr(254), 3)
                    if (current_content == ""):
                        current_content = val
                    else:
                        current_content = current_content + Chr(253) + val
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + current_content
                    break
                j += 1
        if (SubStr(current_line, 1, 8) == "arr.get "):
            str1 = StringTrimLeft(current_line, 8)
            arr_name = Trim(get_token(str1, ",", 1))
            index_source = Trim(get_token(str1, ",", 2))
            dest_reg_str = Trim(get_token(str1, ",", 3))
            index = INT(get_value(index_source))
            j = 0
            for A_Index40 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == arr_name):
                    content = get_token(entry, Chr(254), 3)
                    val = get_token(content, Chr(253), index + 1)
                    reg_idx = INT(StringTrimLeft(dest_reg_str, 1))
                    Official_Oryx_VM_reg_array[reg_idx] = val
                    break
                j += 1
        if (SubStr(current_line, 1, 8) == "arr.set "):
            str1 = StringTrimLeft(current_line, 8)
            arr_name = Trim(get_token(str1, ",", 1))
            index_source = Trim(get_token(str1, ",", 2))
            val_source = Trim(get_token(str1, ",", 3))
            index = INT(get_value(index_source))
            new_val = get_value(val_source)
            j = 0
            for A_Index41 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == arr_name):
                    content = get_token(entry, Chr(254), 3)
                    new_content = ""
                    current_idx = 0
                    items42 = LoopParseFunc(content, Chr(253))
                    for A_Index42 , A_LoopField42 in enumerate(items42, start=0):
                        if (current_idx == index):
                            if (new_content != ""):
                                new_content = new_content + Chr(253)
                            new_content = new_content + new_val
                        else:
                            if (new_content != ""):
                                new_content = new_content + Chr(253)
                            new_content = new_content + A_LoopField42
                        current_idx += 1
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + new_content
                    break
                j += 1
        if (SubStr(current_line, 1, 9) == "arr.size "):
            str1 = StringTrimLeft(current_line, 9)
            arr_name = Trim(get_token(str1, ",", 1))
            dest_reg_str = Trim(get_token(str1, ",", 2))
            j = 0
            for A_Index43 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == arr_name):
                    content = get_token(entry, Chr(254), 3)
                    size = 0
                    if (content != ""):
                        current_idx = 0
                        items44 = LoopParseFunc(content, Chr(253))
                        for A_Index44 , A_LoopField44 in enumerate(items44, start=0):
                            current_idx += 1
                        size = current_idx
                    reg_idx = INT(StringTrimLeft(dest_reg_str, 1))
                    Official_Oryx_VM_reg_array[reg_idx] = STR(size)
                    break
                j += 1
        if (SubStr(current_line, 1, 10) == "arr.clear "):
            arr_name = Trim(StringTrimLeft(current_line, 10))
            j = 0
            for A_Index45 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == arr_name):
                    Official_Oryx_VM_symbol_table[j] = arr_name + Chr(254) + "arr" + Chr(254) + ""
                    break
                j += 1
        if (SubStr(current_line, 1, 9) == "arr.copy "):
            str1 = StringTrimLeft(current_line, 9)
            src_name = Trim(get_token(str1, ",", 1))
            dest_name = Trim(get_token(str1, ",", 2))
            content_to_copy = ""
            j = 0
            for A_Index46 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == src_name):
                    content_to_copy = get_token(entry, Chr(254), 3)
                    break
                j += 1
            j = 0
            for A_Index47 in range(0, HTVM_Size(Official_Oryx_VM_symbol_table)):
                entry = Official_Oryx_VM_symbol_table[j]
                if (get_token(entry, Chr(254), 1) == dest_name):
                    Official_Oryx_VM_symbol_table[j] = dest_name + Chr(254) + "arr" + Chr(254) + content_to_copy
                    break
                j += 1
        # --- NEW: String Manipulation ---
        if (SubStr(current_line, 1, 8) == "str.get "):
            str1 = StringTrimLeft(current_line, 8)
            str_name = Trim(get_token(str1, ",", 1))
            index_source = Trim(get_token(str1, ",", 2))
            dest_reg_str = Trim(get_token(str1, ",", 3))
            index = INT(get_value(index_source))
            content = get_value(str_name)
            charr = SubStr(content, index + 1, 1)
            set_value(dest_reg_str, charr)
        if (SubStr(current_line, 1, 8) == "str.set "):
            str1 = StringTrimLeft(current_line, 8)
            str_name = Trim(get_token(str1, ",", 1))
            index_source = Trim(get_token(str1, ",", 2))
            char_source = Trim(get_token(str1, ",", 3))
            index = INT(get_value(index_source))
            new_val = get_value(char_source)
            old_str = get_value(str_name)
            # --- HARD RULE: overwrite ONE character only ---
            repl_char = SubStr(new_val, 1, 1)
            part1 = ""
            if (index > 0):
                part1 = SubStr(old_str, 1, index)
            part2 = SubStr(old_str, index + 2)
            new_str = part1 + repl_char + part2
            set_value(str_name, new_str)
        if (SubStr(current_line, 1, 8) == "str.len "):
            str1 = StringTrimLeft(current_line, 8)
            str_name = Trim(get_token(str1, ",", 1))
            dest_reg_str = Trim(get_token(str1, ",", 2))
            content = get_value(str_name)
            len = StrLen(content)
            set_value(dest_reg_str, STR(len))
        if (not pc_was_modified):
            pc += 1
    Official_Oryx_VM_API_symbol_table_cache = Official_Oryx_VM_symbol_table
    return outState
def Oryx_VM(code):
    outState = ""
    code = Trim(code)
    code = cleanUpFirst(code)
    code = handleComments(code, "#")
    code = handleComments(code, ";")
    outState = Oryx_interpreter(Trim(code))
    return outState
code = ""
params = ""
outState = ""
if (HTVM_getLang_HTVM() == "js" or HTVM_getLang_HTVM() == "ts"):
    code = "\nstring var1: \"hello\"\nstring var2: \"hello\"\n\ncmp \"hello\", \"hello\" \nje iter_end\nmov r1, 6\ncall print\niter_end:\nmov r1, 5\ncall print              ; prints the complete greeting\n"
    outState = Oryx_VM(code)
    print(outState)
else:
    params = getLangParams("oryxir", "oryxir")
    if (params != ""):
        code = FileRead(params)
        outState = Oryx_VM(code)
        print(outState)
