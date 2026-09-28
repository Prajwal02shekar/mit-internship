# JavaScript Notes for Freshers

## 1. What is JavaScript?

JavaScript (JS) is a **high-level scripting and programming language** used to add interactivity and functionality to web pages. It is widely used for both **frontend** and **backend** development.

> **Scripting Language vs Programming Language**
> A **scripting language** is generally executed by an interpreter or runtime. A **programming language** may be compiled, interpreted, or both. Modern JavaScript engines (such as Google's **V8**) use **Just-In-Time (JIT) compilation**, so JavaScript is no longer purely interpreted.

JavaScript tells the browser *what actions to perform and how to perform them*.

---

## 2. History of JavaScript

- JavaScript was invented by **Brendan Eich** in **1995**.
- At the time, **Netscape Communications Corporation** had developed the **Netscape Navigator** web browser.
- Initially, the browser mainly displayed **static web pages** — built with HTML and CSS, without interactivity.
- Netscape wanted to make web pages dynamic by adding a scripting language to the browser.

**Two approaches were considered:**
1. Collaborate with **Sun Microsystems**, which had introduced the **Java** programming language.
2. Hire **Brendan Eich** to create a lightweight scripting language inspired by **Scheme**.

Netscape hired Brendan Eich, who developed the first version of JavaScript in **just 10 days** (often incorrectly stated as 9–14 days).

| Milestone | Detail |
|---|---|
| Mocha | The language's original working name |
| LiveScript | The name it was renamed to shortly after |
| JavaScript (Dec 1995) | Renamed again to ride on Java's popularity at the time |
| 1997 | Standardized by ECMA International as ECMAScript (ES); ES1 released |
| ES6 / ECMAScript 2015 | Introduced many modern JavaScript features |
| ES2024 / ES15 | Latest edition — ECMAScript continues to be updated annually |

---

## 3. Characteristics of JavaScript

1. **High-Level Language** — Easy to read, write, and understand.
2. **Interpreted / JIT Compiled** — JavaScript engines parse, compile, and execute code efficiently.
3. **Single-Threaded** — JavaScript has a single call stack and executes one task at a time.
4. **Dynamically Typed** — Variables do not require explicit data types.
5. **Loosely Typed** — A variable can store different data types during execution.
6. **Synchronous by Default** — Code executes line by line. Asynchronous operations are handled using callbacks, Promises, and async/await.
7. **Object-Oriented and Prototype-Based** — JavaScript supports Object-Oriented Programming using prototypes and classes.

---

## 4. Adding JavaScript to a Page

### 4.1 Internal JavaScript
Code is written inside the HTML file using the `<script>` tag, usually placed inside `<head>` or before the closing `</body>` tag.

```html
<script>
  console.log("Hello from internal JS");
</script>
```

### 4.2 External JavaScript
Code is written in a separate `.js` file and linked into the HTML page.

```html
<script src="script.js"></script>
```

---

## 5. Output Methods

| Method | Purpose |
|---|---|
| `console.log()` | Prints messages to the browser console. |
| `console.error()` | Displays error messages in red. |
| `console.warn()` | Displays warning messages in yellow. |
| `document.write()` | Writes content directly to the webpage. |
| `document.writeln()` | Writes content followed by a newline. |
| `alert()` | Displays a popup message. |
| `confirm()` | Displays a confirmation dialog with OK and Cancel buttons. |
| `prompt()` | Displays an input dialog to receive user input. |

---