# <ShareMyCode />

A web application inspired by [ray.so](https://ray.so) for creating beautiful images of your code to share.

## Features

- **Code Editor** — Write or paste code directly in the preview card
- **10 Gradient Themes** — Candy, Midnight, Sunset, Ocean, Forest, Breeze, Flamingo, Crimson, Arctic, Noir
- **Customizable Padding** — 6 padding options (16–128px)
- **Dark/Light Mode** — Toggle between dark and light themes
- **Line Numbers** — Show or hide line numbers
- **Export Options** — Copy code, copy as image, or save as PNG
- **Editable Title** — Click the filename in the title bar to rename
- **Persistent State** — Settings and code are saved to localStorage
- **Reset** — One-click reset to defaults when changes are made
- **Responsive** — Works on desktop and mobile

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (Radix UI primitives)
- **Zustand** for state management
- **next-themes** for dark/light mode
- **html-to-image** for PNG export
- **JetBrains Mono** font

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to start creating code images.

## Project Structure

```
src/
  app/              # Next.js pages and layout
  components/
    code-preview    # Main code preview card
    common/         # Header, Footer, Logo, controls
    theme/          # Theme provider and toggle
    ui/             # shadcn/ui components
  data/             # Themes and padding constants
  store/            # Zustand editor store
  lib/              # Utilities
```
