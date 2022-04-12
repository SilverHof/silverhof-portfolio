//receiving and creating portfolio elements
const portfolioBlock = document.querySelector('.portfolio');
const portfolioContainer = document.createElement('div');
const portfolioInner = document.createElement('div');
const portfolioTitle = document.createElement('h2');
const portfolioItems = document.createElement('div');
const portfolioItemOne = document.createElement('div');
const portfolioItemTwo = document.createElement('div');
const portfolioItemThree = document.createElement('div');
const portfolioItemFour = document.createElement('div');
const portfolioItemFive = document.createElement('div');
const portfolioItemSix = document.createElement('div');
const portfolioItemSeven = document.createElement('div');
const portfolioItemEight = document.createElement('div');
const portfolioItemNine = document.createElement('div');
const portfolioItemTen = document.createElement('div');
const portfolioItemEleven = document.createElement('div');
const portfolioItemTwelve = document.createElement('div');

const portfolioItemOneLink = document.createElement('a');
const portfolioItemTwoLink = document.createElement('a');
const portfolioItemThreeLink = document.createElement('a');
const portfolioItemFourLink = document.createElement('a');
const portfolioItemFiveLink = document.createElement('a');
const portfolioItemSixLink = document.createElement('a');
const portfolioItemSevenLink = document.createElement('a');
const portfolioItemEightLink = document.createElement('a');
const portfolioItemNineLink = document.createElement('a');

//adding classes to elements of portfolio
portfolioContainer.classList.add('portfolio__container');
portfolioInner.classList.add('portfolio__inner');
portfolioTitle.classList.add('portfolio__title');
portfolioItems.classList.add('portfolio__items');
portfolioItemOne.classList.add('portfolio__item', 'portfolio__item_one');
portfolioItemTwo.classList.add('portfolio__item', 'portfolio__item_two');
portfolioItemThree.classList.add('portfolio__item', 'portfolio__item_three');
portfolioItemFour.classList.add('portfolio__item', 'portfolio__item_four');
portfolioItemFive.classList.add('portfolio__item', 'portfolio__item_five');
portfolioItemSix.classList.add('portfolio__item', 'portfolio__item_six');
portfolioItemSeven.classList.add('portfolio__item', 'portfolio__item_seven');
portfolioItemEight.classList.add('portfolio__item', 'portfolio__item_eight');
portfolioItemNine.classList.add('portfolio__item', 'portfolio__item_nine');
portfolioItemTen.classList.add('portfolio__item', 'portfolio__item_ten');
portfolioItemEleven.classList.add('portfolio__item', 'portfolio__item_eleven');
portfolioItemTwelve.classList.add('portfolio__item', 'portfolio__item_twelve');
portfolioBlock.id = `portfolio`;

//adding links to grid's items
portfolioItemOneLink.href = `https://github.com/SilverHof/dominant-port`;
portfolioItemTwoLink.href = `https://github.com/SilverHof/help-save-port`;
portfolioItemThreeLink.href = `https://github.com/SilverHof/nft-market-port`;
portfolioItemFourLink.href = `https://github.com/SilverHof/plant-shop`;
portfolioItemFiveLink.href = `https://github.com/SilverHof/seedra-port`;
portfolioItemSixLink.href = `https://github.com/SilverHof/dominant-port`;
portfolioItemSevenLink.href = `https://github.com/SilverHof/watch-port`;


//adding elements to portfolio section
portfolioBlock.append(portfolioContainer);
portfolioContainer.append(portfolioInner);
portfolioInner.append(portfolioTitle);
portfolioBlock.append(portfolioContainer);
portfolioInner.append(portfolioItems);

portfolioItems.append(portfolioItemOne);
portfolioItems.append(portfolioItemTwo);
portfolioItems.append(portfolioItemThree);
portfolioItems.append(portfolioItemFour);
portfolioItems.append(portfolioItemFive);
portfolioItems.append(portfolioItemSix);
portfolioItems.append(portfolioItemSeven);
portfolioItems.append(portfolioItemEight);
portfolioItems.append(portfolioItemNine);
portfolioItems.append(portfolioItemTen);
portfolioItems.append(portfolioItemEleven);
portfolioItems.append(portfolioItemTwelve);

portfolioItemOne.append(portfolioItemOneLink);
portfolioItemTwo.append(portfolioItemTwoLink);
portfolioItemThree.append(portfolioItemThreeLink);
portfolioItemFour.append(portfolioItemFourLink);
portfolioItemFive.append(portfolioItemFiveLink);
portfolioItemSix.append(portfolioItemSixLink);
portfolioItemSeven.append(portfolioItemSevenLink);


//adding text to title
portfolioTitle.innerHTML = `Портфолио`;
