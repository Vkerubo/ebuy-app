# eBuy E-commerce App

eBuy is a simple e-commerce web application built with React, which allows users to browse products, add items to cart, and purchase products.

## Getting Started

### Prerequisites

Node.js
NPM or Yarn

### Installation

1. Clone the repository

"git clone https://github.com/[your_username]/eBuy.git"

2. Navigate into the project directory

cd eBuy

3. Install dependencies

npm install

### Usage

1. Start the application

npm start

### Features

- Browse products.
- Add items to cart.
- Increase or decrease item quantity in cart.
- Remove items from cart.
- Clear cart.
- Checkout and purchase products.
- Responsive design.

### Technologies Used

- React: a JavaScript library for building user interfaces.
- React Router: a collection of navigational components for React.
- React Context API: a way to pass data through the component tree without having to pass props down manually at every level.
- Fetch API: a modern, Promise-based JavaScript API for making network requests.
- CSS Modules: a CSS file in which all class names and animation names are scoped locally by default.
- Bootstrap: a popular CSS framework.
- Font Awesome: a font and icon toolkit based on CSS and Less.

## Component Descriptions

### Footer

The Footer component displays links to social media accounts and company information.

### Header

The Header component displays the site logo and a search bar.

### ProductCard

The ProductCard component displays product information including the product image, name, and price.

### ProductDetails

The ProductDetails component displays more detailed information about a selected product, including the product image, name, price, and description.

### Sidebar

The Sidebar component displays the cart, allowing users to view items in the cart, adjust item quantities, and remove items from the cart.

## Context Descriptions

### CartContext

The CartContext provides information on the items in the user's cart, the total number of items, and the total price of the items. The CartContext also provides functions for adding items to the cart, removing items from the cart, increasing or decreasing item quantities, and clearing the cart.

### ProductContext

The ProductContext provides information on the available products, including product name, price, and image.

### SidebarContext

The SidebarContext provides information on the state of the sidebar, including whether it is open or closed, and provides functions for opening and closing the sidebar. It is used by the Sidebar component to control the visibility of the sidebar.

## Authors

- Valentine Kerubo.
- Sandra Nyamwea.
- Gideon Mutugi.
- Dennis Mutuma Marangu.

## License

MIT License.