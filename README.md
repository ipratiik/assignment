# HDS Infotech Assignment

A small Next.js + React project (assignment) demonstrating a simple landing/listing layout with Tailwind CSS and a few reusable UI components.

This repository was created as part of the HDS Infotech assignment. It uses Next.js, React, Tailwind CSS and a few lightweight UI utilities.

## Quick summary

- Framework: Next.js (app router)
- Language: TypeScript
- Styling: Tailwind CSS
- Key folders: `src/app`, `src/sections`, `src/_components/ui`

## Prerequisites

- Recommended: Bun (this repo includes a `bun.lock` file).
- Alternatively: Node.js + npm / pnpm

## Install

Using Bun (recommended if you have it installed):

```bash
bun install
```

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

## Run (development)

Start the dev server:

```bash
# with bun
bun run dev

# or with npm
npm run dev

# or with pnpm
pnpm dev
```

Open http://localhost:3000 in your browser.

## Build & start (production)

```bash
# build
npm run build

# start
npm start
```

Replace `npm` with `bun run` or `pnpm` if you prefer those package managers.

## Deployment / Live demo

This project is hosted live at: https://tonythetailor.vercel.app

## Project structure (high-level)

- `src/app` - Next.js app folder; `page.tsx` and layout files
- `src/_components/ui` - small reusable UI components (button, card, avatar, separator)
- `src/sections` - page sections used by the main page (Banner, Header, Listing, Details, Rating, SectionTabs)
- `public/` - images and static assets

## Scripts (from package.json)

- `dev` — start dev server
- `build` — build for production
- `start` — start production server
- `lint` — run ESLint

## Notes

- The project targets recent versions of Next.js and React. If you run into issues, ensure your toolchain (Node/Bun) is up to date.
- Tailwind configuration and Prettier are included for consistent styling.

## Attribution

Prepared for the HDS Infotech assignment. Use this repository as a starting point for further development or evaluation.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
