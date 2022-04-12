//creating elements of header
const headerBlock = document.querySelector('header');
const headerContainer = document.createElement('div');
const headerInner = document.createElement('div');
const headerRow = document.createElement('div')
const headerLogo = document.createElement('div');
const headerNavbar = document.createElement('nav');
const headerNavItems = document.createElement('ul');
const headerNavItem = document.createElement('li');
const headerNavLink = document.createElement('a');
const headerBurgerBox = document.createElement('div');
const headerBurgerLine = document.createElement('div');
const headerPopup = document.createElement('div');



//adding classes to elements of header
headerContainer.classList.add('header__container');
headerInner.classList.add('header__inner');
headerLogo.classList.add('header__logo');
headerNavbar.classList.add('header__navbar');
headerNavItems.classList.add('header__nav-items');
headerBurgerBox.classList.add('header__burger-box');
headerPopup.classList.add('popup');



// adding logo text
headerLogo.innerHTML = 'silverhof';



// appending elements to html
headerBlock.append(headerContainer);
headerContainer.append(headerInner);
headerInner.append(headerLogo);
headerInner.append(headerNavbar);
headerNavbar.insertAdjacentHTML('afterbegin', `<ul class="header__nav-items">
<li class="header__nav-item">
    <a href="#hard-skills" class="header__nav-link">
        <span class="header__nav-num">01.</span> 
        хард скиллы
    </a>
</li>
<li class="header__nav-item">
    <a href="#soft-skills" class="header__nav-link">
        <span class="header__nav-num">02.</span>
        софт скиллы 
    </a>
</li>
<li class="header__nav-item">
    <a href="#portfolio" class="header__nav-link">
        <span class="header__nav-num">03.</span> 
        портфолио
    </a>
</li>
<li class="header__nav-item">
    <a href="#contacts" class="header__nav-link">
        <span class="header__nav-num">04.</span> 
        контакты
    </a>
</li>
<li class="header__resume-btn">
    <a href="#" class="header__resume-link">резюме</a>
</li>
</ul>`);
headerNavbar.append(headerBurgerBox);
headerBurgerBox.insertAdjacentHTML('afterbegin', `<div class="header__burger-line header__burger-line_1"></div>
<div class="header__burger-line header__burger-line_2"></div>
<div class="header__burger-line header__burger-line_3"></div>`);
headerBlock.after(headerPopup);



// working burger button
const popupMenu = document.createElement('div');
popupMenu.insertAdjacentHTML('afterbegin', `<ul class="popup__nav-items">
<li class="popup__nav-item">
    <a href="#hard-skills" class="popup__nav-link">
        <span class="popup__nav-num">01.</span> 
        хард скиллы
    </a>
</li>
<li class="popup__nav-item">
    <a href="#soft-skills" class="popup__nav-link">
        <span class="popup__nav-num">02.</span> 
        софт скиллы
    </a>
</li>
<li class="popup__nav-item">
    <a href="#portfolio" class="popup__nav-link">
        <span class="popup__nav-num">03.</span> 
        портфолио
    </a>
</li>
<li class="popup__nav-item">
    <a href="#contacts" class="popup__nav-link">
        <span class="popup__nav-num">04.</span> 
        контакты
    </a>
</li>
<li class="popup__resume-btn">
    <a href="#" class="popup__resume-link">резюме</a>
</li>
</ul>`);


headerBurgerBox.addEventListener('click', burgerBtnClick);

function burgerBtnClick(event) {
    event.preventDefault();
    headerPopup.classList.toggle('popup__open')
    headerPopup.appendChild(popupMenu);
}




const headerLinkToClose = document.querySelectorAll('.popup__nav-link');
let popupToClose = document.querySelector('popup')

headerLinkToClose.addEventListener('click', closeBurgerMenu);

function closeBurgerMenu(event) {
    event.preventDefault();
    headerPopup.classList.remove('popup__open');
}




