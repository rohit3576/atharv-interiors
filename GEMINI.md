# Project Instructions: Atharav

This file contains the project-specific instructions, architecture, conventions, and workflows for the Atharav project.

## Project Overview
Atharav is a professional website, likely for an interior design or home improvement business, built with Next.js and TypeScript.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (assumed based on `postcss.config.mjs`)
- **Linting:** ESLint

## Conventions
- **Component Structure:** Components are organized in `components/` and `components/sections/`.
- **Data Management:** Static data and configurations are stored in the `data/` directory.
- **Assets:** Images and videos are located in `public/assets/`.
  - `logo.png`: Main brand logo (updated June 2026).
  - `profile2.jpeg`: Current founder profile image.
  - `site.jpeg` through `site9.jpeg`: Recent project site images used in Hero and Portfolio.

## Workflows
- **Asset Updates:** When adding new project images, add them to `public/assets/` and update `data/portfolio.ts`.
