var userName = prompt('Entrez votre prénom');
var regex=/^[a-zA-ZÀ-ÿ]+$/;

if (!regex.test(userName)) {

  alert('problème de saisie');

} else {

  alert('Bonjour'+userName+"!");

}
