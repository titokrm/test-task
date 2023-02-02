window.onload = () => {
  const da = new DynamicAdapt("max");  
  da.init();
  const overlay = document.createElement('div');
  overlay.classList += 'overlay js-close-menu';
  const sidebar = document.querySelector('.left-side');
  const body = document.querySelector('body');
  document.addEventListener('click', (event) => {
    if (event.target.closest('.js-open-menu')) {
      sidebar.classList.add('left-side--active');
      body.classList.add('scroll-lock');
      body.append(overlay);
    }
  })
  document.addEventListener('click', (event) => {
    if (event.target.closest('.js-close-menu')) {
      sidebar.classList.remove('left-side--active');
      setTimeout(() => {
        overlay.remove();
        body.classList.remove('scroll-lock');
      }, 300);
    }
  })
}