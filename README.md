# MiniLetterboxd
Basic letterBoxd


<img width="2556" height="1265" alt="resim" src="https://github.com/user-attachments/assets/60b731ab-888f-4ce8-9f55-112bdef4bb09" />


# LetterBoxd

A small web app inspired by Letterboxd that lets you create a movie watchlist. You can add movies to your list by title, remove them from the list, and search your list. Movie data and posters are retrieved from the OMDb API, and your list is saved in your browser.

## Screenshot

## Features

- **Add a movie:** Type a movie title; the app retrieves the title and poster from OMDb.
- **Delete a movie:** You can delete a movie from your list by its title.
- **Search:** Search for a movie in your list.
- **Automatically saved:** Your list is stored in localStorage, so it persists even when you refresh the page.
- **Card grid:** Each movie is displayed as a card along with its poster.

## Technologies Used

- HTML
- CSS
- JavaScript (fetch, async/await, localStorage)
- SweetAlert2 for pop-ups
- OMDb API for movie data

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Viioleet/MiniLetterBoxd.git
   ```
2. Get a free API key from https://www.omdbapi.com/apikey.aspx.
3. Open the `script.js` file and enter your key at the top:
   ```js
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
4. Open the `index.html` file in your browser.

**Note:** Do not add your actual API key to GitHub.

Viioleet: Written as a personal development project
