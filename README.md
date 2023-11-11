# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/DOOMSDAY101/Url-shortener2.0)
- Live Site URL: [Add live site URL here](https://ifeoluwa-url-shortener-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learnt alot during the development of this project, I was able practice and also increase my knowledge on react and problem solving using react.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.shortened-links-box {
  display: flex;
  /* display: none; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 70px;
  width: 80%;
  background-color: hsl(0, 0%, 100%);
  margin: 0 auto 10px auto;
  border-radius: 5px;
}
```

```js
function copyCurrentLinks(id, e, item, newLink) {
        let newLoadingStates = [...loading];
        newLoadingStates[id] = true;
        setLoading(newLoadingStates)
        const copyToClipboard = text => navigator.clipboard
            ?.writeText && navigator.clipboard.writeText(text);

        setTimeout(() => {
            copyToClipboard(newLink).then(() => {
                let newLoadingStates = [...loading];
                newLoadingStates[id] = false;
                setLoading(newLoadingStates);
            });
        }, 1000)
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I would really love to improve,develop,and increase my knowledge on react and also build more project with it.

## Author

- Frontend Mentor - [@DOOMSDAY1](https://www.frontendmentor.io/profile/DOOMSDAY101)
- Twitter - [@Sulaiman_Ife](https://www.twitter.com/Sulaiman_Ife)
