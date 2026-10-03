# Monthsary Gift Website

A romantic static website made with HTML, CSS, and vanilla JavaScript for a special Monthsary surprise.

## 1. Run locally

Open the project folder in a browser, or run a simple local server from this folder:

```bash
cd monthsary-website
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## 2. Change the password

Open `script.js` and update this value near the top:

```js
const correctPassword = "09242026";
```

Use your own Monthsary date or special number. The check is not case-sensitive, so lowercase or uppercase text will still work if letters are ever used.

## 3. Change names and personalization

Also in `script.js`, update these values:

```js
const girlfriendName = "My Love";
const yourName = "Bryle";
const monthsaryNumber = "12";
const mainTitle = "Happy Monthsary, My Love ❤️";
```

To change the live relationship counter, update the starting date:

```js
const relationshipStartDate = "2026-09-07T00:00:00";
```

## 4. Change the love letter

Edit the `letterText` variable in `script.js`:

```js
const letterText = `My Love,

Happy Monthsary! ❤️
...`;
```

This is the text that appears in the letter section.

## 5. Add your photos

Place your images in the `images/memories` folder. The gallery uses the `memories` array in `script.js`:

```js
const memories = [
  {
    image: "images/memories/photo1.jpg",
    date: "February 14, 2026",
    caption: "Our first Valentine's together. ❤️"
  }
];
```

Add a new object with a new `image`, `date`, and `caption` whenever you want to add another memory.

## 6. Change the YouTube video

In `script.js`, update the video ID here:

```js
const youtubeVideoID = "YOUR_YOUTUBE_VIDEO_ID";
```

Example:

```js
const youtubeVideoID = "dQw4w9WgXcQ";
```

The site will embed the video in the "Our Song" section.

## 7. Deploy to Vercel

1. Push this project to GitHub.
2. Open Vercel.
3. Click "Add New Project".
4. Import your GitHub repository.
5. Keep the settings default.
6. Since this is a static website, no build command is needed.
7. Set the project root to the repository folder.
8. Click "Deploy".

Vercel will serve the site from `index.html` automatically.

## 8. Important notes

- This is a front-end romantic surprise page, not a real secure login system.
- The password is only a simple visual gate.
- The site uses relative file paths, so it works well for static deployment.

## 9. File structure

```text
monthsary-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   ├── background.jpg
│   └── memories/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       ├── photo4.jpg
│       ├── photo5.jpg
│       └── photo6.jpg
```
