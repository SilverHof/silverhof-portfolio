//receiving and creating about section
const aboutBlock = document.querySelector('.about');
const aboutContainer = document.createElement('div');
const aboutInner = document.createElement('div');
const aboutContent = document.createElement('div');
const aboutTitle = document.createElement('h1');
const aboutText = document.createElement('p');
const aboutRow = document.createElement('div');
const aboutColumnOne = document.createElement('p');
const aboutColumnTwo = document.createElement('p');

//creating image box
const aboutImageBox = document.createElement('div');
const aboutCubeBlockOne = document.createElement('div');
const aboutImageItem = document.createElement('div');
const aboutCubeBlockTwo = document.createElement('div');

//adding classes to elements of about
aboutContainer.classList.add('about__container');
aboutInner.classList.add('about__inner');

aboutContent.classList.add('about__content');
aboutTitle.classList.add('about__title');
aboutText.classList.add('about__text');
aboutRow.classList.add('about__row');
aboutColumnOne.classList.add('about__column');
aboutColumnTwo.classList.add('about__column');

aboutImageBox.classList.add('about__image-box');
aboutCubeBlockOne.classList.add('about__cube-block-one');
aboutCubeBlockTwo.classList.add('about__cube-block-two');
aboutImageItem.classList.add('about__image-item')

//adding text and info to blocks
aboutTitle.innerHTML = `Fronted Developer.`
aboutText.innerHTML = `Здравстуйте, меня зовут Владимир, я 
начинающий фронтенд разработчик. Долгое время я не знал, в каком направлении двигаться в обширной сфере IT. Однако сейчас ответ будет очевидным. Я нашел себя в создании красивого и функцианального, удобного и запоминающегося`

aboutColumnOne.innerHTML = `Мой путь и успех зависит только от меня, еще раз меня и моей собственной персоны`;
aboutColumnTwo.innerHTML = `Мое ремесло - творить, потому что люди любят глазами`;

//adding elements to about block
aboutBlock.append(aboutContainer);
aboutContainer.append(aboutInner);
aboutInner.append(aboutContent);
aboutInner.append(aboutImageBox);

aboutContent.append(aboutTitle);
aboutContent.append(aboutText);
aboutContent.append(aboutRow);
aboutRow.append(aboutColumnOne);
aboutRow.append(aboutColumnTwo);

aboutImageBox.append(aboutCubeBlockOne);
aboutImageBox.append(aboutImageItem);
aboutImageBox.append(aboutCubeBlockTwo);

