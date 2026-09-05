# Nuxt 4 Architecture & Design System

## 1. Project Directory Anatomy
This application utilizes Nuxt 4's nested `app/` folder convention to segregate application runtime code from project configuration:

```text
my-nuxt4-app/
├── app/                        # Main Nuxt 4 Application Source
│   ├── assets/                 # Uncompiled assets (Tailwind CSS entrypoint, SVGs)
│   ├── components/             # Auto-imported Vue components
│   ├── composables/            # Auto-imported state & business logic
│   ├── layouts/                # Base page layouts
│   ├── pages/                  # File-based routing
│   └── app.vue                 # Application entrypoint
├── docs/                       # Internal documentation & onboarding
├── public/                     # Public static assets served as-is at `/`
├── server/                     # Nitro server routes, middleware, and API endpoints
├── nuxt.config.ts              # Nuxt framework configuration
└── package.json