// Sélectionne le premier élément 'form' dans le document
const form = document.querySelector('form');

// Sélectionne le premier élément 'button' dans le document
const btn = document.querySelector('button');

// Sélectionne tous les éléments 'input' dans le document
const inputs = document.querySelectorAll('input');

// Sélectionne le premier élément avec la classe 'resultat-text' dans le document
const resultatText = document.querySelector('.resultat-text');

// Sélectionne le premier élément avec la classe 'resultat-info' dans le document
const resultatInfo = document.querySelector('.resultat-info');

// Ajoute un écouteur d'événements pour l'événement 'submit' sur le formulaire
form.addEventListener('submit', funcForm);

// Fonction appelée lors de la soumission du formulaire
function funcForm(e) {
  // Empêche le comportement par défaut du formulaire (rechargement de la page)
  e.preventDefault();

  // Appelle la fonction pour calculer le poids idéal
  calculPoids();
}

// Fonction pour calculer le poids idéal en fonction de la taille et du sexe
function calculPoids() {
  // Récupère la valeur du troisième input (indice 2) dans la collection 'inputs'
  const taille = inputs[2].value;

  // Variable pour stocker le sexe ('h' pour homme, 'f' pour femme, '?' pour autre)
  let sex;

  // Vérifie quel bouton radio est coché pour déterminer le sexe
  if (document.getElementById('sexh').checked) {
    sex = 'h';
  } else if (document.getElementById('sexf').checked) {
    sex = 'f';
  } else {
    sex = '?';
  }
  console.log(sex);

  // Vérifie les conditions pour afficher le résultat en fonction du sexe et de la taille
  if (!sex || !taille || taille <= 0) {
    resultatInfo.style.color = 'red';
    resultatInfo.innerText =
      'Il y a une erreur, vérifier le champ. (La valeur de la taille doit être supérieure à 0)';
  } else if (sex === 'h') {
    resultatText.innerText = `${inputs[2].value - 100 - ((inputs[2].value - 150) / 4).toFixed(1)} kg`;
    resultatInfo.style.color = 'green';
    resultatInfo.innerText = 'Voici votre poids idéal';
  } else if (sex === 'f') {
    resultatText.innerText = `${inputs[2].value - 100 - ((inputs[2].value - 150) / 2.5).toFixed(1)} kg`;
    resultatInfo.style.color = 'green';
    resultatInfo.innerText = 'Voici votre poids idéal';
  } else {
    resultatInfo.style.color = 'red';
    resultatInfo.innerText ='Il y a une erreur, vérifiez le champ! (La valeur du champ doit être supérieure à 0)';
  }
}
