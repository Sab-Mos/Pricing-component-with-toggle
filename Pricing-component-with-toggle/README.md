# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

The challenge is to create a pricing component with a toggle switch that allows users to switch between different pricing plans. The component should be responsive and functional.

### The challenge

The given project's goal was to build a simple layout for three columns of texts where the price was displayed, the use of a toggle button would ensure the text displayed in the price paragraph to change from monthly to annual and vice versa, therefore, the CSS and JavaScript was actively used in the making of the given project.

— Users are able to switch between annual and monthly pricing by clicking on the toggle button.

— Users can control the toggle switch with both mouse/trackpad and keyboard.

— The changes made to text as well as the toggle button are saved even after the page is reset

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

The given challange enabled me to test out my planning skills what it came to the structuring of the HTML elements. The most challenging part was the use of Javascript that enabled the switching of text as well as the change of the toggle button state.

The JavaScript code handles the functionality of the toggle switch and updates the pricing information based on the selected option.

Here's a brief explanation of the code:

- The necessary elements are selected with the use of `document.querySelector`.

- `localStorage` is used to store the state of the toggle button

- We are testing whether the toggle state is kept in `localStorage`. If it is 'true,' we update the pricing information to reflect annual pricing and remove the 'inactive' class from the toggle button. If the answer is 'false,' we display the monthly rates and add the 'inactive' class to the toggle button.

- When we click the toggle button, we toggle the 'active' and 'inactive' classes to change the appearance. The pricing information is also updated dependent on the 'textSwitch' variable.

- Finally, we update the 'localStorage' with the toggle's new state.

### Continued development

In my future projects I would like to focus on improving my Javascript skills so that the code provided is cleaner and easier to read.
