# Oryx Programming Language

<img width="104" height="112" alt="image(7)" src="https://github.com/user-attachments/assets/c18679a2-841d-4341-a630-0a903407e25a" />

An interpreted programming language designed for **unprecedented portability and effortless embedding**. Oryx is built to be a more flexible and modern alternative to languages like Lua.

## Table of Contents
1.  [Vision & Philosophy: Superior Portability](#vision--philosophy-superior-portability)
2.  [Key Features](#key-features)
3.  [Project Status](#project-status)
4.  [Embedding the VM](#embedding-the-vm)
5.  [Project Structure](#project-structure)
6.  [License](#license)

---

## Vision & Philosophy: Superior Portability

While languages like Lua are known for being embeddable, they are fundamentally C-based, which requires complex build systems, platform-specific bindings, and compilation for every target. **Oryx eliminates this entire layer of complexity.**

The vision for Oryx is simple: provide a single, powerful scripting language that can be dropped into a project on any major platform with **zero friction**.

The project is being developed in two main stages:
1.  **The Backend (Complete):** The **Oryx Virtual Machine (VM)** and its **Intermediate Representation (Oryx IR)**. This is the execution engine.
2.  **The Frontend (In Development):** The **Oryx Language** itself, which will feature a high-level, user-friendly syntax that compiles down to Oryx IR.

---

## Key Features

*   **Radical Portability:** Oryx is written in **HTVM**, a language that transpiles to multiple high-level languages. This is its key advantage over C-based interpreters. A single Oryx codebase provides a native library for:
    *   **C++** (for high-performance, native applications)
    *   **JavaScript / TypeScript** (for web browsers and Node.js backends)
    *   **Python** (for integration with data science, web, and scripting applications)
    The behavior of the VM is **identical** across all platforms, guaranteed.

*   **Effortless Integration:** Embedding Oryx is as simple as adding a single source file to your project. There are no build flags, no platform-specific toolchains, no FFI (Foreign Function Interface) complexities. You just include the library and call the function.

*   **Zero External Dependencies:**
    *   The **JavaScript** and **Python** versions require no external libraries whatsoever.
    *   The **C++** version relies only on standard libraries.
    *   *Note:* The **TypeScript** version requires the `fs` module for file operations when run in a Node.js environment.

---

## Project Status

The project is currently in **Stage 1: Backend Complete**.

The Oryx VM and its Intermediate Representation (Oryx IR) are finished, stable, and ready for use. You can write code directly in Oryx IR and execute it by embedding the VM in a host application.

The next stage is the development of the high-level Oryx language front-end.

---

## Embedding the VM

The API is intentionally simple, consisting of a main execution function and several helper functions for retrieving state.

### `Oryx_VM(code)`
The main entry point. Executes a string of Oryx IR code.
*   **Parameter:** `code` (string) - The Oryx IR source code to execute.
*   **Returns:** (string) - `"success"` or an error message.

### `OryxAPI_GetVariable(name)`
Retrieves the final value of a variable or register after the VM has finished executing.
*   **Parameter:** `name` (string) - The name of the variable (e.g., `"my_var"`) or register (e.g., `"r1"`).
*   **Returns:** (string) - The final value of the variable.

### `OryxAPI_GetArray(name)`
Retrieves the final contents of an array as a list/array in the host language.
*   **Parameter:** `name` (string) - The name of the array (e.g., `"my_list"`).
*   **Returns:** (array of strings) - The contents of the array.

#### Python Embedding Example

```python
# First, ensure the 'oryxir.py' library is in the same directory.
from oryxir import Oryx_VM, OryxAPI_GetVariable

# --- 1. Execute code from a file ---
with open('my_script.oryxir', 'r') as f:
    oryx_code = f.read()

print("--- Running Oryx VM from file ---")
result = Oryx_VM(oryx_code)
print(f"VM exit state: {result}")

# --- 2. Execute code to dynamically set a variable ---
print("\n--- Dynamically setting a variable ---")
Oryx_VM('string dynamic_var: "This was set at runtime!"')

# --- 3. Retrieve the variable's value using the API ---
final_value = OryxAPI_GetVariable("dynamic_var")
print(f"Retrieved value: {final_value}")
```
*You must replace `oryxir` with the correct name of the generated Python file.*

---

## Project Structure

This repository provides the pre-transpiled library files for each target language:
*   `oryxir.cpp`
*   `oryxir.js`
*   `oryxir.py`
*   `oryxir.ts`

You do not need to build or compile anything yourself. Simply grab the library file for your language of choice and include it in your project. The original HTVM source (`oryxir.htvm`) is also included for reference.

---

## License

This project is licensed under the **GNU General Public License v3.0**. A copy of the license can be found in the `LICENSE` file.
