# Lendsqr FE Test

A front-end application built with Next.js as part of the Lendsqr Engineering assessment. This project demonstrates a well-architected application for digital lending, with a focus on performance, maintainability, and a modular design.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Project Structure](#project-structure)
8. [Documentation](#documentation)

---

### Project Overview
This project is a mock lending platform designed to showcase the development of a highly functional front-end application with real-time data handling, optimized performance, and modular styling. This app uses Next.js for its meta-framework advantages, such as optimized routing and server-side rendering, along with several state management, styling, and UI component libraries.

### Features
- **Dynamic Routing and SSR**: Powered by Next.js, allowing for efficient navigation and optimized performance.
- **Global State Management**: Uses Jotai for lightweight, modular state management.
- **Image and Font Optimization**: Ensures fast loading with Next.js’s built-in image and font optimization.
- **CSS Modules with SCSS**: Enables component-scoped styling with enhanced capabilities via SCSS.
- **Integrated Mock Data**: MockAPI.io is used for API mocking, making it easy to simulate backend interactions.
- **Form Handling**: Uses TanStack Form for seamless form state management and validation.
- **Data Fetching and Caching**: TanStack Query (React Query) manages data fetching, caching, and synchronization efficiently.

---

### Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Jotai](https://jotai.org/)
- **Styling**: CSS Modules with SCSS
- **Icons**: [Unplugin Icons](https://github.com/antfu/unplugin-icons)
- **Complex UI Components**: [Headless UI](https://headlessui.dev/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query)
- **Form Handling**: [TanStack Form](https://tanstack.com/form)

---

### Installation

#### Prerequisites
- Node.js >= 14
- NPM or Yarn

#### Clone the Repository
```bash
git clone https://github.com/your-username/lendsqr-fe-test.git
cd lendsqr-fe-test
```

#### Install Dependencies
```bash
# Using npm
npm install

# Or using Yarn
yarn install
```

#### Usage
##### Running the Development Server
To start the development server, run:

```bash
# Using npm
npm run dev

# Or using Yarn
yarn dev
```

#### Deployment
This application is deployed on [Railway](https://railway.app)

#### Project Structure
Here's a breakdown of the main project structure
```plaintext
lendsqr-fe-test/
├── public/                # Public assets, including icons and images
├── src/
│   ├── app/               # Next.js (app-router) pages for routing
│   ├── components/        # Reusable UI components
│   ├── constants/         # Reusable constant values
│   ├── lib/               # Customer hooks, types, utility and API functions
│   └── state/             # Jotai atoms for global state management
├── .env.example           # Example environment variables
└── README.md              # Project documentation
```

#### Documentation
1. **Project Overview & Decisions:** Detailed reasoning for each technology choice can be found [here](https://docs.google.com/document/d/11VI7c1cKPkqu0_GUACaItK5QaSnBvhqGX8LNeJn2BIE/edit?usp=sharing).
2. **Video Walkthrough:** A short video demonstrating the application and explaining the development approach can be found [here](https://www.loom.com/share/35ce0472491b45b8be501468779f396a?sid=0555429e-aaba-4cec-8e15-26e3db5c5a05).
