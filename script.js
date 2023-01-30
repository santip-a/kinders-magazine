// при добавление нового журнала в каталог, надо в массив numberOfPages добавить количество
// файлов-картинок

const popUp = document.querySelector('.popup-view');
const buttonClosePopup = popUp.querySelector('.popup-view__close');
const buttonNext = popUp.querySelector('.popup-view__next');
const buttonPrev = popUp.querySelector('.popup-view__previous');
const imagepopUp = popUp.querySelector('.popup-view__image');
const numberPage = popUp.querySelector('.popup-view__number');

const magazins = document.querySelectorAll('.card-item__image');

let pagesMagazine = 0;
let currentPage = 1;
let catlogNumber = 0;

const numberOfPages = [6, 6, 6, 8]; // массив кол-ва файлов картинок в папка, начиная с 9 папки


const closePopup = () => {
  pagesMagazine = 0;
  currentPage = 1;
  catlogNumber = 0;
  popUp.classList.add('popup-view_hidden');
}

const openPopup = (evt) => {
  popUp.classList.remove('popup-view_hidden');
  catlogNumber = Number(evt.target.id);
  pagesMagazine = numberOfPages[catlogNumber - 9]
  imagepopUp.src = `./images/magazine/${catlogNumber}/${currentPage}.jpg`;
  numberPage.textContent = `${currentPage}/${pagesMagazine}`
}

function turnPages(tab) {
  if (tab === 'next') {
    currentPage++;
  }
  else {
    currentPage--;
  }

  if (currentPage > pagesMagazine) {
    currentPage = 1;
  }
  else if (currentPage < 1) {
    currentPage = pagesMagazine;
  }
  // imagepopUp.src = `./images/magazine/10/${currentPage}.jpg`;
  imagepopUp.src = `./images/magazine/${catlogNumber}/${currentPage}.jpg`;
  numberPage.textContent = `${currentPage}/${pagesMagazine}`
}



buttonClosePopup.addEventListener("click", () => closePopup());
buttonNext.addEventListener("click", () => turnPages('next'));
buttonPrev.addEventListener("click", () => turnPages('prev'));

magazins.forEach(elem => elem.addEventListener("click", (evt) => openPopup(evt)))


