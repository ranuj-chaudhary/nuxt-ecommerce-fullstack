# Nuxt 4 Layouts & Routing Architecture

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A structured reference implementation demonstrating how to build an App Shell in Nuxt 4 using `<NuxtLayout>` and `<NuxtPage />` with persistent UI state, declarative metadata routing, and zero boilerplate.

---

## Demo & Previews

<!-- Replace with an actual GIF/screenshot of your running app -->
![Application Preview](https://raw.githubusercontent.com/nuxt/brand-assets/main/playground/nuxt-dark.svg)

---

## Table of Contents

- [About The Project](#about-the-project)
  - [Key Features](#key-features)
  - [Tech Stack](#tech-stack)
- [Architecture & File Structure](#architecture--file-structure)
- [How It Works](#how-it-works)
  - [The App Shell Pattern (`app.vue`)](#the-app-shell-pattern-appvue)
  - [Creating Layouts](#creating-layouts)
  - [Applying Layouts via Metadata](#applying-layouts-via-metadata)
- [Why Wrap `<NuxtPage>` in `<NuxtLayout>`?](#why-wrap-nuxtpage-in-nuxtlayout)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage & Scripts](#usage--scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors & Acknowledgments](#authors--acknowledgments)
- [License](#license)

---

## About The Project

When building single-page applications or server-rendered web applications with complex interfaces (e.g., admin dashboards, portals, commerce storefronts), naive route setups re-render full-page wrappers on every route switch. This destroys scroll position, audio/video playback, and local UI state.

This project demonstrates the **App Shell Pattern** in Nuxt 4:
* It decouples layout chrome (navbars, sidebars, footers) from transient view content.
* It leverages Nuxt 4's default `app/` directory convention for clean modularity.
* It provides isolated, production-ready layouts for authenticated, default, and fullscreen views.

### Key Features

* **State Preservation:** Keeps persistent UI state across route changes without extra state-management overhead.
* **Declarative Metadata:** Assigns layouts per-page via `definePageMeta({ layout: '...' })`.
* **Zero Boilerplate:** No manual imports of headers or sidebars inside view components.
* **Layout-Free Viewports:** Native support for fullscreen routes via `layout: false`.
* **TypeScript Support:** End-to-end typed route metadata and component definitions.

### Tech Stack

* **Framework:** [Nuxt 4](https://nuxt.com/)
* **Core Engine:** [Vue 3 (Composition API & `<script setup>`)](https://vuejs.org/)
* **Runtime / Server:** [Nitro](https://nitro.unjs.io/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Package Manager:** [pnpm](https://pnpm.io/)

---

## Architecture & File Structure

Nuxt 4 houses all frontend presentation code inside the `app/` folder by default:

```text
├── app/
│   ├── app.vue                   # Root App Shell (<NuxtLayout> + <NuxtPage>)
│   ├── layouts/                  # Layout templates
│   │   ├── default.vue           # Global fallback layout (header + footer)
│   │   ├── admin.vue             # Dashboard shell with persistent sidebar
│   │   └── auth.vue              # Centered modal card for login/register
│   └── pages/                    # File-based routes
│       ├── index.vue             # Route: / (uses default layout)
│       ├── dashboard.vue         # Route: /dashboard (uses admin layout)
│       ├── login.vue             # Route: /login (uses auth layout)
│       └── fullscreen.vue        # Route: /fullscreen (layout: false)
├── server/                       # Nitro backend server routes & handlers
├── nuxt.config.ts                # Application configuration
├── package.json
└── tsconfig.json