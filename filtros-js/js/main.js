// Capturar la entrada del input
const edFilter = (inputElement,selector,selectorContainer) => {
  inputElement.addEventListener('keyup', e => {
    if (e.key === 'Escape') e.target.value = '';
    compare(e.target.value.toUpperCase(), selector, selectorContainer);
  })
};

// Mostrar los elementos que coincidan con esa entrada (ocultar los que no)
const compare = (filterText,selectorElement,selectorContainer) => {
  let searchElements = document.querySelectorAll(selectorElement),
      searchContainers = document.querySelectorAll(selectorContainer);
  searchElements.forEach( el => {
    el.textContent.toUpperCase().includes(filterText)
      ? el.style.display = "block"
      : el.style.display = "none"
  });
  searchContainers.forEach( el => {
    el.textContent.toUpperCase().includes(filterText)
      ? el.style.display = "block"
      : el.style.display = "none"
  })
};

edFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');