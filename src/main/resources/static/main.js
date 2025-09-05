
function loadFragment(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Fehler beim Laden von ${file}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

// Nach DOM-Load Header + Footer einfügen
document.addEventListener("DOMContentLoaded", () => {
  loadFragment("header", "src/main/resources/templates/header.html");
  loadFragment("footer", "src/main/resources/templates/footer.html");
});

// Modal öffnen
function openModal(modalId) {
    document.querySelector(modalId).classList.add('is-active');
}

// Modal schließen
function closeModal(modalId) {
    document.querySelector(modalId).classList.remove('is-active');
}

// Öffnen-Button-Handling
document.addEventListener('click', function(event) {
    const openModalButton = event.target.closest('[data-open]');
    if (openModalButton) {
        event.preventDefault();
        const modalId = openModalButton.getAttribute('data-open');
        openModal(modalId);
    }
});

// Schließen-Button-Handling
document.addEventListener('click', function(event) {
    const closeModalButton = event.target.closest('[data-close]');
    if (closeModalButton) {
        event.preventDefault();
        const modalId = closeModalButton.getAttribute('data-close');
        closeModal(modalId);
    }
});

// Klick auf Modal-Hintergrund schließt aktives Modal
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-background')) {
        closeModal('.modal.is-active');
    }
});
