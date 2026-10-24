const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const searchButton = document.getElementById("search");

const tableDiv = document.querySelector(".table");
let filmList = JSON.parse(localStorage.getItem("films")) || [];

  createCard();

addButton.addEventListener("click", async function () {
  const { value: addName } = await Swal.fire({
    title: "Add Film",
    input: "text",
    inputPlaceholder: "Enter The Film Name Want You Add",
    confirmButtonText: "Add",
    showCancelButton: true,
    cancelButtonText: "Cancel",
  });
    if (!addName) return;
   const apikey = "YOUR_API_KEY_HERE";

  const response = await fetch(
    `https://www.omdbapi.com/?t=${addName}&apikey=${apikey}`,
  );
  const data = await response.json();
 
 const exists = filmList.some((lists) => lists.title.toLowerCase() == data.Title.toLowerCase());

  if (exists || addName == "" || !data.Title) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Something Wrong Check All Field And Try Again.",
      confirmButtonText: "Okey",
      background: "#fff0c7",
    });
    return;
  }
  
  filmList.push({ title: data.Title, poster: data.Poster });
  localStorage.setItem("films", JSON.stringify(filmList));
  createCard();
});
function createCard() {
  tableDiv.innerHTML = "";
  filmList.forEach((lists) => {
    const newCard = document.createElement("div");
    newCard.className = "k1";

    const lFilm = document.createElement("label");
    lFilm.textContent = lists.title;

    const lImg = document.createElement("img");
    lImg.src = lists.poster;
    newCard.appendChild(lFilm);
    newCard.appendChild(lImg);
    tableDiv.appendChild(newCard);
  });
}
removeButton.addEventListener("click", async function () {
  
  const { value: removeName } = await Swal.fire({
    title: "Remove Film",
    input: "text",
    inputPlaceholder: "Enter The Film Name Want You Remove",
    confirmButtonText: "Remove",
    showCancelButton: true,
    cancelButtonText: "Cancel",
  });
    if (!removeName) return;

  const exists = filmList.some((found) => found.title.toLowerCase() == removeName.toLowerCase());

  if (!exists) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Film Not Found.",
      confirmButtonText: "Okey",
      background: "#fff0c7",
    });
    return;
  }

  filmList = filmList.filter((lists) => lists.title.toLowerCase() != removeName.toLowerCase());

  localStorage.setItem("films", JSON.stringify(filmList));
  createCard();
});
searchButton.addEventListener("click", async function () {
   
  const { value: searchName } = await Swal.fire({
    title: "Search Film",
    input: "text",
    inputPlaceholder: "Enter The Film Name Want You Search",
    confirmButtonText: "Search",
    showCancelButton: true,
    cancelButtonText: "Cancel",
  });
   if (!searchName) return;

  const exists = filmList.some((found) => found.title.toLowerCase() == searchName.toLowerCase());
    if (!exists) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Film Not Found.",
        confirmButtonText: "Okey",
        background: "#fff0c7",
      });
      return;
    }
  

  const searchList = filmList.filter((lists) => lists.title.toLowerCase() == searchName.toLowerCase());

  tableDiv.innerHTML = "";

  searchList.forEach((ser) => {
    const newCard = document.createElement("div");
    newCard.className = "k1";

    const lFilm = document.createElement("label");
    lFilm.textContent = ser.title;

    const lImg = document.createElement("img");
    lImg.src = ser.poster;
    newCard.appendChild(lFilm);
    newCard.appendChild(lImg);
    tableDiv.appendChild(newCard);
  });
});
