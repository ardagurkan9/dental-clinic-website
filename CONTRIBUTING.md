# Contributing

Thank you for contributing to this dental clinic website. Keep changes small, clear, and aligned with the goal of a modern, trustworthy, mobile-friendly clinic site.

## Core Principles

- Do not over-engineer.
- Do not add unused dependencies.
- Keep components simple.
- Work on one component or one feature at a time.
- Keep the project frontend-focused.
- Avoid large backend or enterprise-style patterns.

## Folder Usage

- `components/` - Use for reusable UI components.
- `data/` - Use for static website content such as services, navigation, clinic details, and placeholder text.
- `lib/` - Use for reusable helper functions and small utilities.
- `public/` - Use for public assets such as images, icons, and static files.

## Adding Features

Add new features in small, controlled steps. Start with the UI and static content first. Only add dynamic behavior when it is clearly needed, such as a simple contact or appointment form.

Before adding a dependency, check whether the same result can be achieved with the existing stack. Do not add packages that are unused, experimental, or unnecessary for the current feature.

## Content and Design

- Do not copy real clinic websites exactly.
- Create an original design that fits a professional healthcare brand.
- Use placeholder content unless approved real clinic content is provided.
- Use real person, clinic, address, phone, or medical information only when it has been approved.

## Security

- Do not commit secrets.
- Do not commit API keys.
- Do not commit `.env` files.
- Keep private credentials and production configuration out of the repository.
