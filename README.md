# 🧱 Techno Dev Stack

A clean and modern web app where developers can explore popular technologies and build their own custom tech stack — one click at a time.

---

## 🟠 About The Project

Picking the right tools for a new project can be confusing. There are so many frameworks, languages, and databases to choose from. **Techno Dev Stack** solves this problem in a simple way.

It shows a big collection of popular technologies — like React, Node.js, PostgreSQL, and more — as neat cards. Each card shows the name, a short description, its category, difficulty level, and a rating. You can browse through them and click **"Add to Stack"** to save the ones you like. Your saved list shows up right beside the cards, so you can see your stack take shape as you go.

The whole website is fast, fully responsive, and built with a clean design that uses one shared gradient color theme across the whole app.

---

## 🩷 Features

### 1. 🧩 Build Your Own Tech Stack
Browse through 24 technologies across categories like Frontend, Backend, Database, Language, Styling, and DevOps. Click **"Add to Stack"** on any card, and it instantly appears in the **"Your Stack"** panel. You can remove one item at a time with the ✕ button, or clear everything at once with **"Remove All"**.

### 2. 🔔 Smart Alerts With React-Toastify
Every action gives instant feedback. Adding a technology, trying to add it twice, removing one item, or clearing the whole stack — each one shows a toast notification, so you always know what just happened.

### 3. 📱 Responsive Design
The website works well on:

- Desktop
- Tablet
- Mobile

The layout changes according to the screen size, so the cards, navbar, and stack panel always look neat, no matter what device you are using.

---

## 🟣 Built With

- **⚛️ React 19** – for building the user interface
- **🔷 TypeScript** – for type-safe, error-free code
- **🟢 Vite** – for a fast development and build setup
- **🌊 Tailwind CSS** & **DaisyUI** – for styling the components
- **🔔 React-Toastify** – for showing alert notifications
- **🧩 React Icons** – for icons used across the site
- **📄 JSON** – for storing the technology data

---

## 🚀 Getting Started

Follow these steps to run the project on your own computer.

### 📋 Prerequisites
Make sure you have **Node.js** installed on your machine.

### ⚙️ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/theopsupcorp1009/techno-dev-stack.git
   ```
2. Move into the project folder
   ```bash
   cd dev-stack
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open the link shown in your terminal (usually `http://localhost:5173`) in your browser.

---

## 📂 Project Structure

```
dev-stack/
├── public/
│   └── data.json          # Technology data (id, name, category, rating, etc.)
├── src/
│   ├── assets/             # Images and logos
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── ExpoloreTechno.tsx
│   │   ├── ExploreTechnoCard.tsx
│   │   ├── Stack.tsx
│   │   └── Footer.tsx
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

---

## 📤 Visit

- **GitHub Repository:** [Visit Repository](https://github.com/theopsupcorp1009/techno-dev-stack)
- **Live Site:** [Visit Live Site](https://techno-stack-by-mrkhandipu.netlify.app/)

---

## 🙋 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX, full meaning is Java Script XML lets us write HTML-like code directly inside JavaScript.

- Normally, building UI in plain JavaScript needs a lot of `createElement()` calls.
- JSX lets us write something that *looks like HTML* instead, and *React converts it into real elements* behind the scenes.
- It is used because it makes components much easier to read, write, and debug without the backslash of plain JavaScript.

**Example from this project:**
```jsx
<h2 className="text-[18px] font-bold">{techno.name}</h2>
```
We would have to write many lines of code if we didn't use JSX here

---

### 2. What is the difference between props and state?

 - Props means *Properties*, used to send data from parent component to child component whereas State is data of a component and can change.
 - Properties are read only but State can be changed.
 - Child can't directly change it while State can be updated using state handler.

In this project, the `stack` state is used to store the technologies selected by the user and it's passed as properties to anther component.

****

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component **remember a value** and update the screen whenever that value changes.
Simply, it is a React Hook used to create and manage state.

Where it's used in this project:
- In `App.tsx` → to keep track of the `stack` array (the list of added technologies).
- In `Navbar.tsx` → to control whether the mobile menu is open or closed.

```jsx
const [stack, setStack] = useState<ITechnoCartType[]>([]);
```

Here:
 - stack stores the selected technologies
 - setStack changes the stack
 - `useState([])` means the initial value is an empty array.

When the user adds or removes a technology, the stack state changes and React re renders the UI based on the change.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` normally runs code *after rendering a component*. It is often used to fetch data

I did not use useEffect in this project.

Instead, I used fetch() together with React Suspense and the use() function to load the technology data.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

- `.map()` is used to turn an array into a list of components.
- The `key` prop gives every item that unique identity.
- It helps React in identifying each item in the list and understand which item was changed, added, or removed.

**Without a proper key:**
- React can update the wrong item on screen.
- List animations and re-orders can break.

**In this project:**
```jsx
{stack.map((techno) => (
  <div key={techno.id}>...</div>
))}
```
`techno.id` is used as the key since every technology has a unique id.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing **different content based on a condition**

**Example from `Stack.tsx`:**

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <p>{stack.length} Technology Selected</p>
)}
```
In this part, the stack shows a message when it is empty and when technologyies are added the selected technologies are shown instead

Another example is the Add to Stack Button
```jsx
{!added ? "Add to Stack" : "✓ Added to Stack"}
```
f the technology is not added, the button says *Add to Stack*.

If it is already added, the button says ✓ *Added to Stack*.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Data passing from Parent to Child**

A parent component can send data to a child component using props (properties).

For example:

```jsx
<ExploreTechnoCard techno={techno} stack={stack} setStack={setStack} />
```

**How can a child send data back to a parent?**

The parent can pass a function to the child through props. The child can call that function to update the parent's state.

```jsx
// Inside the child component
onClick={() => setStack([...stack, techno])}
```

Since `setStack` actually belongs to the state in `App.tsx`, calling it from the child updates the state that lives in the parent — that's how the child sends data back.s

---

## 📚 Project Summary

Building **Techno Dev Stack** was a great learning experience for me. Through this project, I practiced building reusable React components, managing state with `useState`, passing data using props, working with TypeScript interfaces and type aliases, rendering data from JSON, and using conditional rendering.

I also learned how to make a website responsive for different screen sizes and how to use React-Toastify for user notifications. Overall, this project helped me better understand how React, TypeScript, and other frontend tools work together to build an interactive and responsive web application.

---