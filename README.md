# substance-react 

Substance React is a new component library for NextJS and React. The purpose of this library is to offer functional components that are based on popular primitives like Radix-UI and Flowbite. This library allows you to define your own Tailwind styles and apply them to the components. It comes with a default set of styles that are influenced by Shadcn-ui, Radix, Flowbite and from a custom design system. The styles can be easily overriden and custom themes can be defined in the tailwind config to apply your own styles or translated from your design system.  The goal of this library is consolidate all of the good parts of Radix, ShadCN, and Flowbite into one consolidated set of components that can save a developer tons of time. 

Best of all this library is completely free to use in your NextJS and React projects. It also includes a documentation demo page with React examples. 

Substance React was built with React, Tailwind CSS, Radix-UI, Flowbite, Storybook, and more!

# Getting Started

Install substance-react as a dependency into your React or Next app:

`npm i substance-react@latest -E`

Include the Subtance plugin in your Tailwind plugins and include the path to the node package in your Tailwind Config:

`
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/substance-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
    extend: {},
    },
    plugins: [require('substance-react/lib/plugin')],
};
`

# Start Using

Import the Components you need into your Function Component:

`import {Button} from 'substance-react'`

Use the Component in your markup:

`<Button color="blue" size="md" pill disabled onClick=()=>({console.log("it works!")})>Submit</Button>`













