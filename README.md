# Tiktok clone frontend using Nuxt

Create project via `vite` command. (See [docs](https://vitejs.dev/guide/))

```bash
npm create vite@latest tiktok-clone
```

## Instal Tailwind

Find the command to install Tailwind in Nuxt from docs [here](https://tailwindcss.com/docs/guides/nuxtjs).

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate a tailwind.config.js file.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Add Tailwind to your PostCSS configuration

Add tailwindcss and autoprefixer to the postcss.plugins object in your nuxt.config.js file.

```javascript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

### Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Create an ./assets/css/main.css file and add the @tailwind directives for each of Tailwind’s layers.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add the CSS file globally

Add your newly-created ./assets/css/main.css to the css array in your nuxt.config.js file.

```javascript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

## NPM Packages

### [Nuxt Icons](https://nuxt.com/modules/icon)

- Add `nuxt-icon` dependency to your project:

```bash
npm install --save-dev nuxt-icon
```

- Add it to the `modules` array in your `nuxt.config.ts`:

```bash
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-icon']
})
```

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
