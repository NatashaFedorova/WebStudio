const refs = {
  filterBtnList: document.querySelector('.filter__list'),
  cardsList: document.querySelector('.exsample__list'),
};

refs.filterBtnList.addEventListener('click', onfilterBtnListClick);

function onfilterBtnListClick(e) {
  removeClassIsHidden();

  const activeBtn = e.target.dataset.filter;

  if (activeBtn === 'all') {
    return;
  } else {
    [...refs.cardsList.children].map(item => {
      if (item.dataset.type !== activeBtn) {
        addClassIsHiddenItem(item);
      }
    });
  }
}

function removeClassIsHidden() {
  [...refs.cardsList.children].map(item => {
    item.classList.remove('is-hidden');
  });
}

function addClassIsHiddenItem(item) {
  item.classList.add('is-hidden');
}
