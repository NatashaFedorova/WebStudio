(() => {
  const refs = {
    body: document.querySelector('.body'),
  };
  function toggleMenu() {
    mobileMenuRef.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();
