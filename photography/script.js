const nav = document.querySelector('.glass-nav');
const toggle = document.querySelector('.glass-toggle');
const currentPageName = document.getElementById('current-page-name');
const tripButtons = Array.from(document.querySelectorAll('.trip-link'));
const tripPages = Array.from(document.querySelectorAll('.trip-page'));

const pages = {
  madison: 'Madison',
  'solo-road': 'Solo road',
  japan: 'Japan'
};

let activePage = 'madison';

function setNavOpen(open) {
  nav.dataset.open = open ? 'true' : 'false';
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function setActivePage(page) {
  if (!pages[page]) {
    page = 'madison';
  }

  activePage = page;

  currentPageName.textContent = pages[page];

  tripButtons.forEach((button) => {
    const isActive = button.dataset.page === page;
    button.classList.toggle('is-active', isActive);
    if (isActive) {
      button.setAttribute('aria-current', 'page');
    } else {
      button.removeAttribute('aria-current');
    }
  });

  tripPages.forEach((section) => {
    const isActive = section.dataset.page === page;
    section.hidden = !isActive;
    section.classList.toggle('is-active', isActive);
  });
}

toggle.addEventListener('click', () => {
  setNavOpen(nav.dataset.open !== 'true');
});

tripButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActivePage(button.dataset.page);
  });
});

setActivePage(activePage);
setNavOpen(false);
