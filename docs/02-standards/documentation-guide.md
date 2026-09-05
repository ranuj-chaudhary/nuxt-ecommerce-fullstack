# Documentation Authoring Standards & Guidelines

This document outlines the required structure and quality checklist for creating or modifying internal developer documentation. Every new doc in `docs/` must strictly adhere to this format.

---

## 1. The Core Documentation Principles

- **Direct & Actionable**: Avoid long introductions or filler. Jump straight to code, configurations, or commands.
- **Concrete Examples Over Descriptions**: Never say _"Configure the validator properly"_; write the explicit TypeScript object and validation error block.
- **Copy-Paste Verifiability**: Any terminal command or code block must work without phantom dependencies or missing imports.
- **Up-to-Date Dependency Pinning**: Reflect the exact versions defined in `package.json`.

---

## 2. Mandatory Document Structure Template

Every technical document added to `docs/` must contain the following 6 sections:

### Section 1: Overview & Scope

- 2–3 sentences defining what the tool/feature is, why it was chosen, and its location in the repository.

### Section 2: Dependencies & Configuration

- List relevant packages from `package.json`.
- Show relevant settings in `nuxt.config.ts` or external configuration files.

### Section 3: Architecture & Rules

- Concrete rules governing how developers must use the feature (naming rules, boundaries, SSR constraints).

### Section 4: Approved Code Pattern (The "Gold Standard")

- A fully working, production-grade example using `<script setup lang="ts">`.

### Section 5: Common Pitfalls & Edge Cases

- 2–3 common errors or gotchas developers will encounter and how to solve them.

### Section 6: Verification / Testing

- A 1-step verification check (e.g., console check, command output, or UI state) confirming the setup works.

---

## 3. Pull Request Checklist for Docs

Before committing any new document in a PR, confirm:

- [ ] Added link to the new document inside `docs/README.md`.
- [ ] No generic placeholders like `<your-code-here>` without context.
- [ ] Validated on Nuxt 4 directory structure (`app/` references instead of root).
- [ ] Code samples pass linting and type-checks.
