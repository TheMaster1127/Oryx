# Oryx Intermediate Representation (Oryx IR) Specification

## 1. Virtual Machine Architecture

*   **Registers:** `r0` - `r99` (General Purpose).
*   **Memory:** Dynamic Symbol Table (Variables & Arrays).
*   **Stack:** Global call stack & register spill stack.

---

## 2. Data Movement Instructions

### `mov <dest>, <src>`
Moves data between registers, variables, and immediate values.

#### Case 1: Immediate to Register
```oryxir
; Load the number 100 into register r1
mov r1, 100

; Load a float into r2
mov r2, 3.14159

; Load a string literal into r3 (Quotes are stripped automatically)
mov r3, "Hello World"
```

#### Case 2: Variable to Register (LOAD)
```oryxir
int counter: 50
string message: "Status OK"

; Load value of 'counter' (50) into r10
mov r10, counter

; Load value of 'message' into r11
mov r11, message

; Copy value from r10 to r12 (Register to Register)
mov r12, r10
```

#### Case 3: Register to Variable (STORE)
```oryxir
int result: 0
mov r1, 999

; Store the value in r1 (999) into the variable 'result'
mov result, r1

; Verify store by printing
mov r1, result
call print ; Output: 999
```

---

## 3. Stack Operations

### `push <reg>` / `pop <reg>`
Saves and restores register states. Useful for preserving data across function calls.

#### Example 1: Basic Save/Restore
```oryxir
mov r1, 500
; Save 500 to stack
push r1 

mov r1, 0 ; Corrupt r1
; Restore 500 from stack
pop r1 
```

#### Example 2: Nested Pushes
```oryxir
mov r1, 10
mov r2, 20

push r1 ; Stack: [r1:10]
push r2 ; Stack: [r1:10, r2:20]

; We can pop in any order because Oryx pop searches by register name!
pop r1 ; Restore r1 (10)
pop r2 ; Restore r2 (20)
```

---

## 4. Arithmetic Logic Unit (ALU)

### `add <dest>, <src>`
Adds `src` to `dest`.

```oryxir
; Register + Immediate
mov r1, 10
add r1, 5   ; r1 = 15

; Register + Register
mov r2, 20
add r1, r2  ; r1 = 15 + 20 = 35

; Variable + Immediate
int score: 0
add score, 100 ; score = 100
```

### `sub <dest>, <src>`
Subtracts `src` from `dest`.

```oryxir
; Register - Register
mov r1, 100
mov r2, 30
sub r1, r2 ; r1 = 70

; Float Subtraction
float balance: 50.5
sub balance, 10.25 ; balance = 40.25

; Negative Result
mov r1, 10
sub r1, 20 ; r1 = -10
```

### `mul <dest>, <src>`
Multiplies `dest` by `src`.

```oryxir
; Simple Square
mov r1, 5
mul r1, 5  ; r1 = 25

; Float Multiplication
float price: 19.99
mul price, 2 ; price = 39.98

; Variable * Register
int quantity: 10
mov r2, 5
mul quantity, r2 ; quantity = 50
```

### `div <dest>, <src>`
Divides `dest` by `src`.

```oryxir
; Basic Division
mov r1, 100
div r1, 2  ; r1 = 50

; Float Division
mov r1, 5
div r1, 2  ; r1 = 2.500000

; Variable Division
float total: 1000.0
div total, 10 ; total = 100.0
```

### `inc <op>` / `dec <op>`
Increments or decrements by 1.

```oryxir
int i: 0
inc i      ; i = 1
inc i      ; i = 2
dec i      ; i = 1

mov r1, 10
inc r1     ; r1 = 11
dec r1     ; r1 = 10
```

### `add_str <dest>, <src>`
String concatenation.

```oryxir
string fname: "John"
string lname: "Doe"

; Append space
add_str fname, " " 

; Append variable
add_str fname, lname 

; Result in fname: "John Doe"
```

---

## 5. Control Flow & Logic

### `cmp <op1>, <op2>`
Compares two values. This **must** be called before any conditional jump instructions.

### Branching Instructions
*   `jmp <label>`: Unconditional jump.
*   `je <label>`: Jump if **Equal**.
*   `jne <label>`: Jump if **Not Equal**.
*   `jg <label>`: Jump if **Greater Than**.
*   `jl <label>`: Jump if **Less Than**.
*   `jge <label>`: Jump if **Greater Than or Equal**.
*   `jle <label>`: Jump if **Less Than or Equal**.

#### Example 1: Basic If/Else (Equality)
```oryxir
int x: 10
cmp x, 10
je true_block
jmp false_block

true_block:
    ; Code for x == 10
    jmp end_check

false_block:
    ; Code for x != 10

end_check:
```

#### Example 2: Range Check (Greater Than)
```oryxir
int age: 25
cmp age, 18
jge adult_block
jmp minor_block

adult_block:
    ; Code for age >= 18
    jmp done

minor_block:
    ; Code for age < 18

done:
```

#### Example 3: Loop (0 to 4)
```oryxir
int i: 0
loop_start:
    cmp i, 5
    jge loop_end
    
    ; Loop Body
    mov r1, i
    call print
    
    inc i
    jmp loop_start
loop_end:
```

---

## 6. Functions

Functions use the call stack to jump and return.

#### Example 1: Simple Void Function
```oryxir
jmp start

greet:
    mov r1, "Hello from Function!"
    call print
    ret

start:
    call greet
    ; Execution returns here
```

#### Example 2: Function with Arguments & Return
```oryxir
jmp main

; Function: square(r1) -> returns r1
square:
    mul r1, r1
    ret

main:
    mov r1, 5
    call square
    ; r1 is now 25
    call print
```

---

## 7. Arrays

Arrays are dynamic lists stored in the symbol table.

#### 1. Create and Add
```oryxir
arr users
arr.add users, "Admin"
arr.add users, "Guest"
arr.add users, "User3"
```

#### 2. Get and Set
```oryxir
; Get index 1 ("Guest") into r1
arr.get users, 1, r1 

; Change index 0 to "SuperAdmin"
arr.set users, 0, "SuperAdmin"
```

#### 3. Size and Loop Iteration
```oryxir
arr data
arr.add data, 10
arr.add data, 20

int len: 0
arr.size data, r1  ; Get size into r1
mov len, r1        ; Store size in var

int k: 0
iter_loop:
    cmp k, len
    jge iter_end
    
    arr.get data, k, r1
    call print
    
    inc k
    jmp iter_loop
iter_end:
```

#### 4. Copy and Clear
```oryxir
arr list_a
arr.add list_a, 100

arr list_b
; Copy contents of A to B
arr.copy list_a, list_b

; Clear A (B remains 100)
arr.clear list_a
```

---

## 8. Variable Declarations

```oryxir
; Integer
int lives: 3

; Float (Note: all math is float internally)
float gravity: 9.8

; String (Handles colons correctly)
string config: "Host:Localhost:8080"

; Array (Empty initialization)
arr my_stack
```

---

## 9. System Calls

```oryxir
; Print whatever is in r1
mov r1, "System Ready"
call print

; Print a number
mov r1, 123.45
call print
```

---

## 10. Input Operations

### `input <dest>, <prompt>`

Reads a string from the user and stores it into a variable.

```oryxir
string name: ""
string prompt: "Enter your name: "

input name, prompt

mov r1, "Hello, "
add_str r1, name
call print
```

**Explanation:**

* `input` shows the `prompt` to the user.
* The user's input is stored in `name`.
* Concatenate and print the greeting.

---

## 11. File Operations

Oryx IR supports basic file manipulation: create, read, append, and delete.

### 11.1 Delete a File

```oryxir
string path: "test.txt"
file.delete path
```

* Deletes the file at `path`.
* Safe to call even if the file does not exist.

### 11.2 Append to a File

```oryxir
string path: "log.txt"
string line: "Log Entry 1\n"
file.append path, line
```

* Adds `line` to the end of `path`.
* If the file doesn’t exist, it will be created automatically.

### 11.3 Read a File

```oryxir
string content: ""
file.read content, "log.txt"

mov r1, content
call print
```

* Reads the entire content of the file into `content`.
* Can be used to process multiple lines or output directly.

### 11.4 Full Example: Write, Append, Read

```oryxir
string path: "output.txt"
string first: "Line 1\n"
string second: "Line 2\n"
string readback: ""

; Delete previous run
file.delete path

; Write lines
file.append path, first
file.append path, second

; Read back
file.read readback, path
mov r1, readback
call print
```

**Output:**

```
Line 1
Line 2
```

---

## 12. String Operations

Oryx IR supports basic string handling with **get, set, len, and append** operations.

### 12.1 Declare Strings

```oryxir
string my_str: "Oryx"
string message: "hello"
```

---

### 12.2 Get a Character

```oryxir
; Get character at index 1 (zero-based) into r1
str.get my_str, 1, r1
call print   ; Output: r
```

* `str.get <str_name>, <index>, <dest_reg>`
  Retrieves the character at `<index>` (zero-based) and stores it in `<dest_reg>`.

---

### 12.3 Set a Character

```oryxir
; Replace character at index 2 with "a"
str.set my_str, 2, "a"
mov r1, my_str
call print   ; Output: Orax
```

* `str.set <str_name>, <index>, <value>`
  **HARD RULE:** Only the first character of `<value>` is used.
  Ensures **single-character replacement**, keeping strings safe from index drift.

---

### 12.4 String Length

```oryxir
str.len my_str, r1
call print   ; Output: 4
```

* `str.len <str_name>, <dest_reg>`
  Stores the length of the string in `<dest_reg>`.

---

### 12.5 Append Strings

```oryxir
string output: ""
str.get message, 0, r2
add_str output, r2       ; Append character
add_str output, "!"      ; Append additional character
mov r1, output
call print
```

* `add_str <dest_str>, <src>` appends `<src>` to `<dest_str>`.
* Safe for building strings dynamically without arithmetic or index calculations.

---

### 12.6 Example: Add “!” After Each Character

```oryxir
string message: "hello"
string output: ""
int i: 0
int len: 0

str.len message, r1
mov len, r1

loop:
    cmp i, len
    jge done

    str.get message, i, r2       ; get original character
    add_str output, r2           ; append to new string
    add_str output, "!"          ; append "!" after it

    inc i
    jmp loop

done:
mov r1, output
call print   ; Output: h!e!l!l!o!
```

**Notes:**

* No arithmetic is required — `add_str` handles string growth safely.
* `str.set` can still be used for **in-place single-character replacement** if needed.

---
