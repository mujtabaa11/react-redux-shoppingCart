
# React-Redux E-Commerce App

This is a simple e-commerce web application built with React. The app allows users to browse products, view detailed information, and manage their shopping cart.

## Features

- Browse a variety of products
- View product details
- Add/remove products to/from the cart
- Responsive design for both mobile and desktop views

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for managing routes in React applications.
- **Redux**: A state management library for managing global state in the application.
- **Tailwind CSS**: For styling the components and layout.

## Folder Structure

```
/src
  /components
    - Header.jsx         // Header component for the navigation bar
  /pages
    - Home.jsx           // Home page displaying the list of products
    - Cart.jsx           // Cart page displaying selected products
  /data
    - data.json          // JSON file containing product data
  /redux
    - store.js           // Redux store configuration
    - cartSlice.js       // Redux slice for managing the cart state
  App.jsx                // Main App component containing routes
  App.css                // Styling for the application
```

## Adding Products

The product data is fetched from a local JSON file located in `/src/data/data.json`. You can add or update products in this file, and they will automatically be reflected in the app.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request
