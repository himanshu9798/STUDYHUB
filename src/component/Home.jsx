import React from 'react';
import './home.css'
import history from '../image/history.jpg'
import introduction from '../image/introduction.jpg'
import envirnment from '../image/set up.jpg'
import jsx from '../image/jsx.jpg'
import comp from '../image/component.jpg'
import prop from "../image/props.png"
import real from '../image/real.png'
import life from '../image/life.png'
import router from '../image/router.jpg'
import event from '../image/event.png'
import hook from '../image/hook.png'



function Home() {
  return (
    <div className="home-container">
      <h1>Learn React</h1>
      
      <details>
        <summary>Introduction to React</summary>
        <p>React is a JavaScript library for building user interfaces, primarily for single-page applications. It was developed by Facebook and released in 2013. React allows for fast, dynamic, and interactive user interfaces with minimal performance overhead. It promotes the use of components, which are modular and reusable pieces of code, making development more efficient and maintainable.</p>
        <img src={introduction} alt="React Introduction" />
      </details>

      <details>
        <summary>History of React</summary>
        <p>React was created by Jordan Walke at Facebook in 2011 to address the challenges of creating complex user interfaces. Initially, it was used internally at Facebook and Instagram. React was open-sourced in 2013 and quickly gained traction in the developer community. Over the years, React has grown into one of the most widely-used libraries for web development.</p>
        <img src={history} alt="History of React" />
      </details>

      <details>
        <summary>Setting Up a React Environment</summary>
        <p>To start using React, you first need to install Node.js, which includes npm (Node Package Manager). Once installed, you can create a React application using the command `npx create-react-app my-app`. This command sets up the development environment with all the necessary dependencies, including Webpack, Babel, and React itself. You can then run the app using `npm start` to see it in action.</p>
        <img src={envirnment} alt="Setting up React Environment" />
      </details>

      <details>
        <summary>JSX in React</summary>
        <p>JSX (JavaScript XML) is a syntax extension for JavaScript, which looks like HTML. It allows developers to write HTML structures inside JavaScript code. JSX is not required to write React code, but it is highly recommended for its readability and ease of use. JSX is compiled into `React.createElement` calls, which React uses to create virtual DOM elements and render them to the page.</p>
        <img src={jsx} alt="JSX in React" />
      </details>

      <details>
        <summary>Components in React</summary>
        <p>Components are the building blocks of React applications. A component is a self-contained unit of code that can be reused and composed to create larger UIs. Components can either be class-based or function-based. Class components allow you to manage state and lifecycle methods, while function components, with the introduction of hooks, have become the modern standard for building React apps.</p>
        <img src={comp} alt="React Components" />
      </details>

      <details>
        <summary>Props and State</summary>
        <p>Props (short for properties) are used to pass data between components in React. They are immutable within the component and serve as input values. State, on the other hand, represents data that can change over time and trigger re-renders of the component. While props are passed from parent to child components, state is used to manage internal data that can change within the component.</p>
        <img src={prop} alt="Props and State in React" />
      </details>

      <details>
        <summary>React Events</summary>
        <p>In React, events are handled using a synthetic event system. This system normalizes events across different browsers, ensuring consistent behavior. Events like `onClick`, `onChange`, and `onSubmit` can be used in JSX to handle user interactions. Event handlers are passed as functions, and you can access event data, like mouse coordinates or form values, inside these handler functions.</p>
        <img src={event} alt="React Events" />
      </details>

      <details>
        <summary>React Lifecycle Methods</summary>
        <p>Class components in React have lifecycle methods that allow you to hook into different stages of a component’s life. Key methods include `componentDidMount` (called after the component is mounted), `shouldComponentUpdate` (decides if the component should re-render), and `componentWillUnmount` (used for cleanup before the component is removed). These methods help manage resources and optimize performance during a component’s lifecycle.</p>
        <img src={life} alt="React Lifecycle Methods" />
      </details>

      <details>
        <summary>React Hooks</summary>
        <p>React hooks were introduced in version 16.8 to enable the use of state and lifecycle methods in function components. The most commonly used hooks are `useState` (for managing state) and `useEffect` (for handling side effects like data fetching). Hooks allow developers to write cleaner, more readable code by reducing the need for class components and providing reusable logic through custom hooks.</p>
        <img src={hook} alt="React Hooks" />
      </details>

      <details>
        <summary>React Router</summary>
        <p>React Router is a popular library used for routing in React applications. It enables navigation between different views or pages in a single-page application without reloading the entire page. React Router uses components like `Route`, `Link`, and `BrowserRouter` to define and manage routes. By using React Router, you can create dynamic routes and handle URL changes seamlessly while maintaining a smooth user experience.</p>
        <img src={router} alt="React Router" />
      </details>

      <details>
        <summary>Real-World Applications Using React</summary>
        <p>React is widely used in many high-performance and dynamic web applications across various industries. Some of the most popular applications built with React include Facebook, Instagram, and WhatsApp. These platforms leverage React's component-based architecture to create fast, interactive user interfaces that can handle large amounts of data with minimal performance overhead.</p>
        <p>Other notable applications that use React include Netflix for its user interface, Airbnb for its interactive and responsive booking platform, and Uber for its real-time ride tracking. React’s flexibility and efficiency make it a go-to choice for building modern, scalable web applications across different sectors.</p>
        <img src={real} alt="Real-World Applications Using React" />
      </details>
      
    </div>
  );
}

export default Home;
