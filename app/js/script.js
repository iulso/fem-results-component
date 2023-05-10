const itemsWrapper = document.querySelector('.summary__items');

const createItems = item => {
  let html = `<div class='summary__item summary__item--${item.category.toLowerCase()}'>
                <img
                  class='summary__icon'
                  src='${item.icon}'
                  alt='${item.category}'
                />
                <span class='summary__subject'>${item.category}</span>
                <span class='summary__points'>
                  <span class='summary__points--fraction'>${item.score}</span>
                  <span class='summary__points--total'> / 100</span>
                </span>
              </div>`;
  return html;
};

async function loadContent() {
  const response = await fetch(`${location.href}/data.json`);
  const jsonData = await response.json();

  let html = '';

  jsonData.forEach(el => {
    html += createItems(el);
  });

  itemsWrapper.insertAdjacentHTML('afterbegin', html);
}
loadContent();
