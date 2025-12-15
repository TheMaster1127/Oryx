# Oryx VM & Intermediate Representation

A minimalist, portable, and easily embeddable virtual machine and instruction set designed for scripting and language development.

## Table of Contents
1.  [What is Oryx?](#what-is-oryx)
2.  [Key Features](#key-features)
3.  [Getting Started: Running Oryx IR](#getting-started-running-oryx-ir)
4.  [Embedding the VM](#embedding-the-vm)
5.  [The Big Picture: The Oryx Ecosystem](#the-big-picture-the-oryx-ecosystem)
6.  [Source Code & Building](#source-code--building)
7.  [License](#license)

---

## What is Oryx?

The Oryx project consists of two core components:

*   **Oryx VM:** A lightweight virtual machine written in a subset of C++ compatible with HTVM. It serves as the execution engine.
*   **Oryx IR (Intermediate Representation):** A simple, human-readable, assembly-like language that the Oryx VM executes. It is designed to be a straightforward compilation target for higher-level languages.

The ultimate goal is for developers to create their own languages that compile down to Oryx IR, which can then be run anywhere the Oryx VM is deployed.

---

## Key Features

*   **Extreme Portability:** Written with HTVM, the Oryx VM compiles and runs natively in:
    *   **C++** (for high-performance, native applications)
    *   **JavaScript** (for web browsers and Node.js)
    *   **Python** (for integration with Python applications)
    *   **TypeScript**

*   **Minimalist by Design:** The instruction set is small and easy to learn, focusing on core functionality like arithmetic, control flow, stack operations, and basic I/O. This makes it a perfect learning tool and a stable target for new languages.

*   **Easily Embeddable:** The entire VM is designed to be used as a library. By removing the `main` function, the code can be included in any C++, JS, or Python project, providing powerful scripting capabilities with a single function call.

*   **Zero External Dependencies:**
    *   The **JavaScript** and **Python** versions run with no external libraries required.
    *   The **C++** version relies only on standard libraries, requiring no extra setup.

---

## Getting Started: Running Oryx IR

You can write and run Oryx IR code directly using the standalone VM.

### Step 1: Write your Oryx IR code

Create a file with your chosen file extension. By convention, we use `.oryxir`.

**`hello_world.oryxir`**
```oryxir
; This is a comment
mov r1, "Hello from Oryx VM!"
call print
```

### Step 2: Compile the VM (C++ Example)

The primary `oryxir.cpp` file contains a `main` function that acts as a command-line interpreter.

```bash
# Compile the VM using g++
g++ oryxir.cpp -o oryxir
```

### Step 3: Run Your Script

Pass the script file as a command-line argument to the compiled executable.

```bash
# Run the script
./oryxir hello_world.oryxir

# Output:
# Hello from Oryx VM!
# success
```

---

## Embedding the VM

The true power of Oryx is embedding it as a scripting engine in a larger application (e.g., a game engine, a web app, or a command-line tool).

The API is intentionally simple, consisting of one main function: `Oryx_VM(string code)`.

### How It Works

1.  **Prepare the Library:** Remove the `main` function from the `oryxir.cpp` (or equivalent JS/Python) file. This turns the file into a pure library.
2.  **Include and Call:** Include the library in your host application. Load your Oryx IR code into a string and pass it to the `Oryx_VM` function.
3.  **Interact (Optional):** Use the provided API functions like `OryxAPI_GetVariable()` to retrieve state from the VM after execution.

#### C++ Embedding Example

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>

// Assume "oryx_library.h" is the header for your VM code without the main function
#include "oryx_library.h"

int main() {
    // 1. Read Oryx IR code from a file into a string
    std::ifstream file("my_script.oryxir");
    std::stringstream buffer;
    buffer << file.rdbuf();
    std::string oryx_code = buffer.str();

    std::cout << "--- Running Oryx VM ---" << std::endl;

    // 2. Execute the code by calling the main VM function
    std::string result = Oryx_VM(oryx_code);

    std::cout << "--- Oryx VM Finished ---" << std::endl;
    std::cout << "VM exit state: " << result << std::endl;

    // 3. (Optional) Interact with the VM's final state
    std::string final_message = OryxAPI_GetVariable("message");
    std::cout << "Final value of 'message': " << final_message << std::endl;

    return 0;
}
```

---

## The Big Picture: The Oryx Ecosystem

Oryx is designed as a complete ecosystem for language creation. The intended workflow is:

`Your High-Level Language -> Your Compiler/Transpiler -> Oryx IR -> Oryx VM`

By providing a stable and portable IR and VM, Oryx allows developers to focus on the fun part: designing the syntax and features of their own programming language.

---

## Source Code & Building

The full source code for the VM and its helper functions is located in `oryxir.cpp`. This single file contains the entire implementation.

To rebuild for different platforms, use the HTVM transpiler.

---

## License

This project is licensed under the **GNU General Public License v3.0**. A copy of the license can be found in the `LICENSE` file.

---
