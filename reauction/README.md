# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to create a React + Vite project

(From https://vite.dev/guide/#scaffolding-your-first-vite-project)

> **Ensure your PC has installed Node.js version 18+ or 20+**! Check your installed version with `node --version` or install it from https://nodejs.org/en/download/package-manager.

Simply run `npm create vite@latest` on your terminal and follow the prompts!

Alternatively, run `npm create vite@latest <nome_progetto> -- --template react` to skip additional prompts.

## What happens after project creation

To see your code changes live in the browser, run `npm run dev` on your terminal and go to the link you're given.

You will see a basic pre-defined React application with some images, texts, a Counter and a button to increase its value. Everything shown is contained in `src/App.jsx`, with the corresponding styles defined in `src/App.css`. 

## Project structure

Take a look at the files contained in `<nome_progetto>`:
```
<nome_progetto>/    
│
└───node_modules/
    │   [...]   
└───public/
    │   [...]
└───src/
    └───assets/
        |   [...]
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx

|   [...]
|   README.md
|   [...]
```

What you've got is a `node_modules/` directory containing all the project **package dependancies** (_remember to '.gitignore' it, if you want to use git!_), 
a `public/` directory (here for useful files when **deploying the application**) and a `src/` directory. Here you'll have all the important files containing **React components and the corresponding stylesheets**.

Consider that we'll be working primarily **inside the `src` directory**.

## Inside `src/`
We'll define our React components and styles inside the `src/` folder, that we'll consider our main working space - as previously said. The default template has already crafted one component for us: `App.jsx`. 

This gives us the chance to take a look at the typical structure of a component:
- In the very first top lines you **import** everything you need within your component - could it be a stylesheet (_`App.css`_), some images (_`./assets/react.svg`,`./vite.svg`_) or/and other components as well.
- Then there's the main component implementation - which corresponds to just a "normal" JavaScript function implementation. You declare the function _with some parameters [optional]_, write its body and its return statement. What you see returning from `App()` is not pure HTML, but it's called **JSX** (_**J**ava**S**cript e**X**tension_) - **which describes the UI of the component**. 
> That is a crucial point to keep in mind, because many features of this language are similar to HTML, but there are some key differences that we'll cover later. 
- The last line of code is 
```js
export default App
```
which allows the other parts of the project to see and use the component `App`. This line can be omitted if the `export default` keywords are included in the `App()` function declaration like so:
```js
export default function App() {
  const [count, setCount] = useState(0)

  return [...] 
}
```
Note that inside a _.jsx_ file you can write and work with other helper functions as well, but remember to **export** the function that represents the description and functioning of the component!

> Delete the content of `src/App.jsx`,`src/App.css` and `src/index.css` and you'll have an empty project waiting to be coded!