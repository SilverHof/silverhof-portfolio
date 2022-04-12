//receiving and creating soft skills elements
const softSkillsBlock = document.querySelector('.soft-skills');
const softSkillsContainer = document.createElement('div');
const softSkillsInner = document.createElement('div');
const softSkillsContent = document.createElement('div');
const softSkillsTitle = document.createElement('h2');
const softSkillsText = document.createElement('p');
const softSkillsItems = document.createElement('div');
softSkillsItems.insertAdjacentHTML('afterbegin', `<div class="soft-skills__item">
<div class="soft-skills__item-text">
    Коммуникабельность.
</div>
<div class="soft-skills__item-line">
    <div class="soft-skills__item-line-progress soft-skills__item-line-progress_1">

    </div>
</div>
</div>
<div class="soft-skills__item">
<div class="soft-skills__item-text">
    Ответственность.
</div>
<div class="soft-skills__item-line">
    <div class="soft-skills__item-line-progress soft-skills__item-line-progress_2">

    </div>
</div>
</div>
<div class="soft-skills__item">
<div class="soft-skills__item-text">
    Самостоятельность.
</div>
<div class="soft-skills__item-line">
    <div class="soft-skills__item-line-progress soft-skills__item-line-progress_3">

    </div>
</div>
</div>
<div class="soft-skills__item">
<div class="soft-skills__item-text">
    Адаптивность.
</div>
<div class="soft-skills__item-line">
    <div class="soft-skills__item-line-progress soft-skills__item-line-progress_4">

    </div>
</div>
</div>
<div class="soft-skills__item">
<div class="soft-skills__item-text">
    Желание учиться.
</div>
<div class="soft-skills__item-line">
    <div class="soft-skills__item-line-progress soft-skills__item-line-progress_5">

    </div>
</div>
</div>`)

//adding classes to elements of soft skills
softSkillsContainer.classList.add('soft-skills__container');
softSkillsInner.classList.add('soft-skills__inner');
softSkillsContent.classList.add('soft-skills__content');
softSkillsTitle.classList.add('soft-skills__title');
softSkillsText.classList.add('soft-skills__text');
softSkillsItems.classList.add('soft-skills__items');
softSkillsBlock.id = `soft-skills`;

//adding elements to soft skills section
softSkillsBlock.append(softSkillsContainer);
softSkillsContainer.append(softSkillsInner);
softSkillsInner.append(softSkillsItems);
softSkillsInner.append(softSkillsContent);
softSkillsContent.append(softSkillsTitle);
softSkillsContent.append(softSkillsText);

//adding text to content
softSkillsTitle.innerHTML = `Софт скиллы.`;
softSkillsText.innerHTML = `Технологии и уровень владения ими показаны на диаграммах. Я разбираюсь в таких понятиях как валидность, семантика и доступность, если речь идет про HTML, также примению методологию BEM при написании классов. Реализую отзывчивые страницы и применяю отзывчивое свойство в CSS/SCSS. Кропотливо изучаю JavaScript ES6+, в последствии буду изучать ReactJS`