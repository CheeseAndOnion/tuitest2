// Dropdown navbar
const hoverArea = document.querySelector('.hero__dropdown-link-hover-area');
const dropDownLinks = document.querySelector('.hero__dropdown-links');

hoverArea.addEventListener('mouseenter', () => {
  dropDownLinks.style.display = 'inline-block';
});

hoverArea.addEventListener('mouseleave', () => {
  dropDownLinks.style.display = 'none';
});
