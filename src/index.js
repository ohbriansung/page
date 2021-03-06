import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

console.log(navigator.appVersion);

// Bavbar burger: https://bulma.io/documentation/components/navbar/#navbar-menu
document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }

    // Toggle the Navbar Burger when selecting pages
    const $navbarItems = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-item"),
        0
    );

    if ($navbarItems.length > 0) {
        $navbarItems.forEach(el => {
            el.addEventListener("click", () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                const $self = document.getElementById("main-navbar");

                $target.classList.remove("is-active");
                $self.classList.remove("is-active");
            });
        });
    }
});
