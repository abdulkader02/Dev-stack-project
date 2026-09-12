
# 🚀 Dev Stack

> Build and customize your ideal development technology stack.

## 📖 About The Project

Dev Stack is a modern and responsive web application that helps developers explore different technologies and create their own development stack.

Users can explore technologies by category, difficulty, and rating, then add their favorite technologies to a personal stack.

---

## ✨ Features

### 1. 🔎 Explore Technologies
- Browse different development technologies.
- View technology name, category, description, difficulty, rating, and badge.
- Technology data is loaded dynamically from a JSON file.

### 2. 🧩 Build Your Stack
- Add technologies to your personal stack.
- Prevent duplicate technologies.
- Remove individual technologies.
- Remove all selected technologies at once.

### 3. 📱 Responsive Design
- Desktop-friendly layout.
- Tablet-responsive grid.
- Mobile-friendly navigation and cards.
- Clean and modern UI based on the provided design.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ⚛️ React.js | Building the user interface |
| 📘 TypeScript | Type safety |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🌼 DaisyUI | UI components |
| 🔔 React Toastify | User notifications |
| 📦 JSON | Technology data |
| ⚡ Vite | Development and build tool |

---

## 🧠 React Concepts Used

This project uses several important React concepts:

- Components
- JSX
- Props
- State
- Event Handling
- Conditional Rendering
- List Rendering
- `use()`
- `Suspense`
- Data Fetching
- TypeScript Interfaces

---

## 📂 Project Structure

```text
dev-stack/
│
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── cards/
│   │   │   ├── TechnologyCard.tsx
│   │   │   └── StackPanel.tsx
│   │   │
│   │   ├── Type/
│   │   │   └── types.ts
│   │   │
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── TechnologySection.tsx
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
<!-- ------------------------------------------------------------------------>

---

## 🤖 AI Assistance

I used AI to help with development, correcting spelling and wording.

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.  
It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.  
State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component store and update data.  
I used it in `TechnologySection` to keep track of the technologies added to the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is mainly used for side effects like fetching data or working with external things.

In this project, I did not need `useEffect` for loading the JSON. I used `fetch()` with `Suspense` and React's `use()` instead.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to know which item has changed, been added, or removed.  
It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in `StackPanel`:

```tsx
{selectedTechnology.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props.

In this project, `TechnologySection` passes `technology` and `onAddToStack` to `TechnologyCard`.

The child sends something back by calling the function passed through props.

```tsx
<TechnologyCard
  technology={technology}
  onAddToStack={handleAddToStack}
/>