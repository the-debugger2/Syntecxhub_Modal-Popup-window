# 📌 Modal / Popup Window Project

A responsive and animated modal (popup window) built using HTML, CSS, and JavaScript.
The project demonstrates how to create a modal with an overlay background, smooth animations, and dynamic open/close functionality.

## 🚀 Features

✅ Button-triggered modal popup

✅ Overlay background with click-to-close option

✅ Smooth CSS entry and exit animations

✅ Embedded form/message inside modal

✅ JavaScript-based open/close logic

✅ Responsive and clean UI design

## 🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling and animations

JavaScript (Vanilla JS) – Modal functionality

## 📂 Project Structure
Modal-Popup-Project/
│
├── index.html
├── style.css
├── script.js
└── README.md
## 🎯 How It Works
1. Open Modal

When the button is clicked, JavaScript adds a CSS class to display the modal with animation.

function openModal() {
    overlay.classList.add("show");
}
2. Close Modal

The modal can be closed by:

Clicking the close (×) button

Clicking outside the modal (overlay)

function closeModal() {
    overlay.classList.remove("show");
}
3. Smooth Animation

Instead of using display: none, the project uses:

opacity

visibility

transform

Example:

.payment-container {
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
}

.payment-container.show {
    opacity: 1;
    visibility: visible;
}

This creates a smooth fade and scale effect.

## 🖥️ Modal Features

-Dark transparent overlay background

-Centered popup window

-Embedded form

-Styled inputs and button

-Smooth scale animation

## 📱 Responsiveness

The modal uses:

- max-width: 90%;

to ensure it adjusts properly on mobile devices.

## 💡 Learning Objectives

This project helps practice:

-DOM manipulation

-Event handling

-CSS transitions & animations

-Overlay layering with z-index

-Preventing event bubbling (event.stopPropagation())

