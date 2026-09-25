// ==============================
// JAVASCRIPT
// ==============================

// Ce script ajoute une petite amélioration :
// l'année du footer est automatiquement mise à jour.

const currentYear = new Date().getFullYear();

const footer = document.querySelector(".footer p");

if (footer) {
  footer.innerHTML =
    `&copy; ${currentYear} Prénom Nom · Étudiant SKEMA Business School`;
}
