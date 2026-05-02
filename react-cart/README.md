# React Cart 🛒

A modern, fast, and responsive shopping cart application built with React and Vite. This project demonstrates a complete e-commerce cart experience with a sleek UI powered by Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Build & Deployment](#build--deployment)

## ✨ Features

- ⚡ **Fast Development** - Vite with Hot Module Replacement (HMR)
- 🎨 **Beautiful UI** - Tailwind CSS for responsive design
- 📱 **Responsive Design** - Mobile-first approach
- 🧭 **Routing** - React Router for seamless navigation
- 🍞 **Notifications** - React Hot Toast for user feedback
- 🎭 **Icons** - React Icons for beautiful icon library
- 🎠 **Carousel** - Swiper for product sliders

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.8
- **Routing:** React Router DOM 7.6.2
- **UI Components:**
  - React Icons 5.5.0
  - Swiper 11.2.10
  - React Hot Toast 2.5.2
- **Development Tools:** ESLint, Babel

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**/pnpm (optional)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/shruti5254/React-Cart.git
cd React-Cart/react-cart
```

2. **Install dependencies:**

```bash
npm install
```

This will install all the required packages listed in `package.json`.

## 📝 Available Commands

Here are the available npm scripts for development and deployment:

### **Development Server** (Main Command to Run the Project)

```bash
npm run dev
```

- Starts the development server with Vite
- Hot Module Replacement (HMR) enabled for instant updates
- Server typically runs on `http://localhost:5173`
- Perfect for local development with live preview

### **Build for Production**

```bash
npm run build
```

- Creates an optimized production build
- Minifies and bundles all assets
- Output is generated in the `dist` folder
- Ready for deployment

### **Preview Production Build**

```bash
npm run preview
```

- Locally preview the production build
- Helps verify the build before deployment
- Useful for testing production behavior locally

### **Lint Code**

```bash
npm run lint
```

- Runs ESLint to check code quality
- Identifies potential issues and enforces coding standards
- Run this before committing code

## 📂 Project Structure

```
react-cart/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main App component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── index.html          # HTML template

```

## 📚 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1.0 | Core React library |
| react-dom | ^19.1.0 | React DOM rendering |
| react-router-dom | ^7.6.2 | Client-side routing |
| react-hot-toast | ^2.5.2 | Toast notifications |
| react-icons | ^5.5.0 | Icon library |
| swiper | ^11.2.10 | Carousel/slider component |
| tailwindcss | ^4.1.8 | Utility-first CSS framework |
| @tailwindcss/vite | ^4.1.8 | Tailwind CSS Vite plugin |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^6.3.5 | Build tool and dev server |
| @vitejs/plugin-react | ^4.4.1 | React plugin for Vite |
| eslint | ^9.25.0 | Code quality linter |
| autoprefixer | ^10.4.21 | PostCSS plugin for vendor prefixes |

## 💻 Development Workflow

### Step-by-step guide to get started:

1. **Clone and navigate to the project:**
   ```bash
   git clone https://github.com/shruti5254/React-Cart.git
   cd React-Cart/react-cart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to the URL shown in your terminal (usually `http://localhost:5173`)
   - The page will auto-refresh when you make changes

5. **Make your changes:**
   - Edit files in the `src/` directory
   - Changes are instantly reflected in the browser

6. **Lint your code before committing:**
   ```bash
   npm run lint
   ```

## 🏗️ Build & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Popular Platforms

- **Vercel:** Connect your GitHub repo for automatic deployments
- **Netlify:** Drag and drop the `dist/` folder or connect GitHub
- **GitHub Pages:** Push the `dist/` folder to the `gh-pages` branch
- **Traditional Hosting:** Upload the `dist/` folder via FTP/SFTP

### Verifying the Build

```bash
npm run preview
```

This lets you test the production build locally before deployment.

## 🎨 Styling with Tailwind CSS

This project uses Tailwind CSS for styling. Key files:

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- Component files - Use Tailwind utility classes directly in JSX

Example:
```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add to Cart
</button>
```

## 🐛 Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will try the next available port.

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
Ensure you're using Node.js v16+:
```bash
node --version
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shruti** - [GitHub Profile](https://github.com/shruti5254)

---

**Happy Coding!** 🚀 If you find this project helpful, please consider giving it a ⭐ star!
