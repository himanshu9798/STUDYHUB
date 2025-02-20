import React from 'react'
import history from '../image/history.jpg'
import introduction from '../image/introduction.jpg'
import envirnment from '../image/set up.jpg'
import jsx from '../image/jsx.jpg'
import comp from '../image/component.jpg'
import prop from "../image/props.png"

import life from '../image/life.png'
import router from '../image/router.jpg'
import event from '../image/event.png'
import hook from '../image/hook.png'
import Card from './Card'
import Form from '../image/form.jpg'
import redux from '../image/redux.jpg'
import './resources.css'

function Resource() {
  return (
    <div className='Resource_section' style={{ margin: "5%" }}>
      <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>Learn React From Step By Step</h1>
      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Card
          image={introduction}
          Topic="React Intro"
          link="https://react.dev/learn"
          text="React is a JavaScript library for building user interfaces, primarily for single-page applications."
        />
        <Card
          image={history}
          Topic="History"
          link="https://react.dev/learn"
          text="React was created by Jordan Walke at Facebook address the challenges of creating complex UI"
        />
        <Card
          image={envirnment}
          Topic="Environment"
          link="https://www.geeksforgeeks.org/reactjs-environment-setup/"
          text="To start using React, you first need to install Node.js, which includes npm"
        />
        <Card
          image={jsx}
          Topic="learn jsx"
          link="https://legacy.reactjs.org/docs/introducing-jsx.html"
          text="JSX (JavaScript XML) is a syntax extension for JavaScript, which looks like HTML."
        />
      </div>
      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Card
          image={life}
          Topic="Life-Cycle"
          link="https://react.dev/learn"
          text="Class components in React have lifecycle methods that allow you to hook into different stages of a component "
        />
        <Card
          image={prop}
          Topic="props"
          link="https://react.dev/learn"
          text="Props (short for properties) are used to pass data between components in React. They are immutable"
        />
        <Card
          image={comp}
          Topic="Component"
          link="https://www.geeksforgeeks.org/reactjs-environment-setup/"
          text="Components are the building blocks of React applications.class component and Functional Component"
        />
        <Card
          image={router}
          Topic="Router"
          link="https://legacy.reactjs.org/docs/introducing-jsx.html"
          text="React Router is a popular library used for routing in React applications for Navigation from pages."
        />
      </div>

      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Card
          image={event}
          Topic="Event Handling"
          link="https://react.dev/learn"
          text="Events are handled using a synthetic event system. This system normalizes events across different browsers"
        />
        <Card
          image={hook}
          Topic="Hooks"
          link="https://react.dev/learn"
          text="React hooks were introduced in version 16.8 to enable the use of state  in function components like UseState..."
        />
        <Card
          image={Form}
          Topic="Form-Validation"
          link="https://www.geeksforgeeks.org/reactjs-environment-setup/"
          text="Form validation in React is a common task to ensure that users input data correctly before submitting a form. "
        />
        <Card
          image={redux}
          Topic="learn Redux"
          link="https://legacy.reactjs.org/docs/introducing-jsx.html"
          text="Redux is a powerful tool for managing the stateof an application in a centralized and predictable
        "
        />
      </div>

    </div>
  )
}

export default Resource
