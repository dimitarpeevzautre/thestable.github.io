# Development Guide for thestable.github.io

## Build Commands
- `npm run css-watch` - Compiles SCSS to CSS and watches for changes

## Project Structure
- Static website for The Stable (campervan rental business)
- Multilingual support (English and Bulgarian)
- Frontend only (no backend)

## Style Guidelines
- **JavaScript**: Use jQuery for DOM manipulation
- **CSS**: Written in SCSS, compiled to CSS
- **Naming**: camelCase for JavaScript variables and functions
- **Organization**: Group related functions together
- **Error Handling**: Use Promise-based error handling with .catch()
- **Comments**: Use JSDoc style for function documentation
- **Formatting**: 
  - Use 4 spaces for indentation
  - Use template literals for multi-line HTML strings
  - Proper spacing around operators
  - Consistent function style (arrow functions for callbacks)

## i18n Implementation
- Uses i18next and jqueryI18next for translations
- Translation keys are organized hierarchically by page section
- Always use translation keys rather than hardcoded text