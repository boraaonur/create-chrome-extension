# create-chrome-extension

This repository serves as a starter for creating a Chrome extension using React, Vite, Tailwind, and TypeScript.

## Structure

### `/popup` folder
- **Purpose:** Represents the Chrome extension's popup.
- **Technical Details:**
  - Built using React.
  - Uses React DOM Memory Router by default for routing. 

### `/content` folder
- **Purpose:** Used to inject into webpages.
- **Technical Details:** 
  - Built using React.
  - Utilizes MutationObserver for efficient injection.
  - Configured with Vite to produce a single `content.js` file.
  - Tailwind is also configured but slightly differently than `/popup`.

## Important Notes

- /content folder assumes that you are looking to manipulate the DOM using React. If you're not planning to do that, a more straightforward NodeJS template that outputs a single `content.js` might be more appropriate.
  
## Usage

To get started with this Chrome extension starter, simply run:

```
npx boraaonur/create-chrome-extension
```
Or if the above doesn't work:
```
npm exec boraaonur/create-chrome-extension
```

Feel free to fork this repository if you'd like to make changes tailored to your needs.