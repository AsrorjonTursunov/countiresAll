import { davlatlar } from "./data.js";
let searchEl = document.querySelector("#search");
let cardEl = document.querySelector("#cards");
let regionsEl = document.querySelector("#regions");
let btnEl = document.querySelector("#btn");

davlatlar.forEach((d) => {
  cardEl.innerHTML += `
    <div class="card">
    <img src="${d.rasm}" alt="${d.nomi}">
    <h2>${d.nomi}</h2>
    <p><b>Population</b>: ${d.aholisi}</p>
    <p><b>Region</b>: ${d.qitasi}</p>
    <p><b>Capital</b>: ${d.poytaxti}</p>
    </div>`;
});
console.log(davlatlar);

searchEl.addEventListener("input", () => {
  let natija = davlatlar.filter((e) => {
    return e.nomi.toLowerCase().includes(searchEl.value.toLowerCase());
  });

  cardEl.innerHTML = "";

  natija.forEach((d) => {
    cardEl.innerHTML += `
    <div class="card">
    <img src="${d.rasm}" alt="${d.nomi}">
    <h2>${d.nomi}</h2>
    <p><b>Population</b>: ${d.aholisi}</p>
    <p><b>Region</b>: ${d.qitasi}</p>
    <p><b>Capital</b>: ${d.poytaxti}</p>
    </div>`;
  });
});

regionsEl.addEventListener("change", () => {
  let region = davlatlar.filter((e) => {
    return e.qitasi.toLowerCase() === regionsEl.value.toLowerCase();
  });

  cardEl.innerHTML = "";

  region.forEach((d) => {
    cardEl.innerHTML += `
    <div class="card">
    <img src="${d.rasm}" alt="${d.nomi}">
    <h2>${d.nomi}</h2>
    <p><b>Population</b>: ${d.aholisi}</p>
    <p><b>Region</b>: ${d.qitasi}</p>
    <p><b>Capital</b>: ${d.poytaxti}</p>
    </div>`;
  });
});

btnEl.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  let dark = document.body.className === "dark-mode";

  if (dark) {
    btnEl.innerText = " Light mode";
  } else {
    btnEl.innerText = " Dark mode";
  }
});
