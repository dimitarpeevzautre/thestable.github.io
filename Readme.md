# The Stable Vans Website

This repository contains the source code for the The Stable Vans website (thestable.bg), a static website built with HTML, SCSS, and JavaScript, and hosted on GitHub Pages.

## Overview

The Stable Vans offers camper van rentals. This website provides information about the vans, pricing, features, and includes a booking functionality that redirects to an external booking system.

## Development

### SCSS Compilation

The website uses SCSS for styling. **Do not edit the `static/styles/style.css` file directly.** Instead, edit the `style.scss` file (located in the root directory).

To compile `style.scss` into `static/styles/style.css`, you will need a SASS compiler. If you have Dart Sass installed, you can run the following command from the root of the repository:

```bash
sass style.scss:static/styles/style.css
```

Make sure to commit the changes to both `style.scss` and the compiled `static/styles/style.css`.

### Other Technologies

*   **JavaScript:** Custom JavaScript for animations (GSAP), date pickers, and booking form interactions is located in `static/client/`.
*   **Internationalization (i18n):** The site uses `i18next` for multi-language support (English and Bulgarian). Text strings are managed in `static/client/i18n.js`.
*   **Tracking:** Google Tag Manager, Google Analytics, and Meta Pixel are used for analytics and tracking.

## Contributing

If you have improvements or find issues:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your changes, including clear comments.
4.  If changing styles, compile `style.scss` and commit the resulting `style.css`.
5.  Submit a pull request for review.
