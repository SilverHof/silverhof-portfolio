//receiving and creating hard skills elements
const hardSkillsBlock = document.querySelector('.hard-skills');
const hardSkillsContainer = document.createElement('div');
const hardSkillsInner = document.createElement('div');
const hardSkillsContent = document.createElement('div');
const hardSkillsTitle = document.createElement('h2');
const hardSkillsText = document.createElement('p');
const hardSkillsItems = document.createElement('div');
hardSkillsItems.insertAdjacentHTML('afterbegin', `<div class="hard-skills__item">
<div class="hard-skills__item-text">
    HTML.
</div>
<div class="hard-skills__item-line">
    <div class="hard-skills__item-line-progress hard-skills__item-line-progress_html">

    </div>
</div>
</div>
<div class="hard-skills__item">
<div class="hard-skills__item-text">
    CSS/SCCS.
</div>
<div class="hard-skills__item-line">
    <div class="hard-skills__item-line-progress hard-skills__item-line-progress_css">

    </div>
</div>
</div>
<div class="hard-skills__item">
<div class="hard-skills__item-text">
    Tailwind CSS.
</div>
<div class="hard-skills__item-line">
    <div class="hard-skills__item-line-progress hard-skills__item-line-progress_tailwind">

    </div>
</div>
</div>
<div class="hard-skills__item">
<div class="hard-skills__item-text">
    JavaScript.
</div>
<div class="hard-skills__item-line">
    <div class="hard-skills__item-line-progress hard-skills__item-line-progress_js">

    </div>
</div>
</div>
<div class="hard-skills__item">
<div class="hard-skills__item-text">
    ReactJs.
</div>
<div class="hard-skills__item-line">
    <div class="hard-skills__item-line-progress hard-skills__item-line-progress_react">

    </div>
</div>
</div>`)

//adding classes to elements of hard skills
hardSkillsContainer.classList.add('hard-skills__container');
hardSkillsInner.classList.add('hard-skills__inner');
hardSkillsContent.classList.add('hard-skills__content');
hardSkillsTitle.classList.add('hard-skills__title');
hardSkillsText.classList.add('hard-skills__text');
hardSkillsItems.classList.add('hard-skills__items');
hardSkillsBlock.id = `hard-skills`;
//adding elements to hard skills section
hardSkillsBlock.append(hardSkillsContainer);
hardSkillsContainer.append(hardSkillsInner);
hardSkillsInner.append(hardSkillsContent);
hardSkillsInner.append(hardSkillsItems);
hardSkillsContent.append(hardSkillsTitle);
hardSkillsContent.append(hardSkillsText);

//adding text to content
hardSkillsTitle.innerHTML = `Хард скиллы.`;
hardSkillsText.innerHTML = `Технологии и уровень владения ими показаны на диаграммах. Я разбираюсь в таких понятиях как валидность, семантика и доступность, если речь идет про HTML, также примению методологию BEM при написании классов. Реализую отзывчивые страницы и применяю отзывчивое свойство в CSS/SCSS. Кропотливо изучаю JavaScript ES6+, в последствии буду изучать ReactJS`