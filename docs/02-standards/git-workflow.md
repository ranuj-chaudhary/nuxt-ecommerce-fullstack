# Git Workflow & Commit Conventions

## 1. Branch Strategy
* `main`: Production-ready code. Directly protected; no direct pushes.
* `develop`: Integration branch for active releases.
* Feature/Fix branches created from `develop`:
  * `feat/<ticket-id>-brief-description`
  * `fix/<ticket-id>-brief-description`
  * `chore/<brief-description>`

## 2. Conventional Commits
All commit messages must follow the Conventional Commits format:
```text
<type>(<optional scope>): <description>

[optional body]

feat: A new feature or user-facing change.

fix: A bug fix.

refactor: Code changes that neither fix a bug nor add a feature.

style: Changes that do not affect code logic (formatting, missing semicolons).

docs: Documentation only changes.

chore: Build tasks, dependency updates, configuration changes