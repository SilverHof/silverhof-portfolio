//receiving and creating footer elements
const footerBlock = document.querySelector('.footer');
const footerContainer = document.createElement('div');
const footerInner = document.createElement('div');

const footerContactForm = document.createElement('from');
const footerFormRow = document.createElement('div');
const footerName = document.createElement('input');
const footerEmail = document.createElement('input');
const footerSubject = document.createElement('input');
const footerTextArea = document.createElement('textarea');
const footerButton = document.createElement('button')
footerButton.innerHTML = `Отправить`;

const footerContent = document.createElement('div');
const footerTitle = document.createElement('h2');
const footerText = document.createElement('p');
const footerSocialMediaBlock = document.createElement('div');
footerSocialMediaBlock.insertAdjacentHTML('afterbegin', `<ul class="footer__social-media-list">
<li class="footer__social-media-item">
    <a href="#" class="footer__social-media-link">
        Telegram
    </a>
</li>
<li class="footer__social-media-item">
    <a href="https://github.com/SilverHof" class="footer__social-media-link">
        GitHub
    </a>
</li>
<li class="footer__social-media-item">
    <a href="#" class="footer__social-media-link">
        Linkedin
    </a>
</li>
</ul>`)
footerTitle.innerHTML = `Свяжитесь со мной`
footerText.innerHTML = `
Вы можете связаться со мной в социальных сетях, либо написать мне письмо на почту. Я заинтресован в работе в интересных и амбициозных проектах. Посетите мой GitHub, чтобы увидеть больше моих работ`

//adding classes to elements of footer
footerContainer.classList.add('footer__container');
footerInner.classList.add('footer__inner');
footerContactForm.classList.add('footer__contact-form');
footerFormRow.classList.add('footer__form-row');
footerName.classList.add('footer__name');
footerEmail.classList.add('footer__email');
footerSubject.classList.add('footer__subject');
footerTextArea.classList.add('footer__text-area');
footerButton.classList.add('footer__button');

footerContent.classList.add('footer__content');
footerTitle.classList.add('footer__title');
footerText.classList.add('footer__text');
footerSocialMediaBlock.classList.add('footer__social-media-block');

footerBlock.id = `contacts`

//adding placeholders to forms
footerName.placeholder = `Имя`;
footerEmail.placeholder = `Email`;
footerSubject.placeholder = `Тема`;
footerTextArea.placeholder = `Сообщение`;


//adding elements to footer
footerBlock.append(footerContainer);
footerContainer.append(footerInner);

footerInner.append(footerContactForm);
footerInner.append(footerContent);

footerContactForm.append(footerFormRow);
footerFormRow.append(footerName);
footerFormRow.append(footerEmail);
footerContactForm.append(footerSubject);
footerContactForm.append(footerTextArea);
footerContactForm.append(footerButton);

footerContent.append(footerTitle);
footerContent.append(footerText);
footerContent.append(footerSocialMediaBlock);


