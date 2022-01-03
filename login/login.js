
form.addEventListener('submit', e => {
	//pour ne pas refraichir la page quand on clique sur submit
	e.preventDefault();
	//après l'execution de la fonction validateForm ouvrir le document traitement.html dans le même tab
	if (validateForm()==false){
		window.open("traitement.html","_self");
	}
});

//requiredElement() : vérifier si tous les champs sont rempli par l’utilisateur
function requiredElement(){

	const nom = document.getElementById("nom");
	const prenom = document.getElementById("prenom");
	const email = document.getElementById("email");
	const m1 = document.getElementById("m1");
	const m2 = document.getElementById("m2");
	const m3 = document.getElementById("m3");
	if (nom.value == ""){
		
		alert("Le Champ du Nom est vide");
		nom.focus();
		error(nom);
		document.getElementById("nom").style.color="red"
		}
		else {
			normal(nom);
		if (prenom.value == ""){
			alert("Le Champ du Prénom est vide");
			prenom.focus();
			error(prenom);
			}
			else {
				normal(prenom);
			if (email.value == ""){
				alert("Le Champ d'Email est vide");
				email.focus();
				error(email);
			}
				else {
					normal(email);
				if (m1.value == ""){
					alert("Le Champ du M1 est vide");
					m1.focus();
					error(m1);
				}
					else {
					normal(m1);
					if (m2.value == ""){

						alert("Le Champ du M2 est vide");
						m2.focus();
						error(m2);
					}
						else {
						normal(m2);
						if (m3.value == ""){
							alert("Le Champ du M3 est vide");
							m3.focus();
							error(m3);
							}
							else {
								normal(m3);
								return(false);
							}}}}}}}
//changer le background du champ de text en rouge
function error(x) {
	const champ = x.parentElement;
	champ.className = 'form-box error';
}
//changer le background du champ de text en blanc
function normal(x) {
	const champ = x.parentElement;
	champ.className = 'form-box normal';
}
//changer le background du champ de text en vert
function success(x) {
	const champ = x.parentElement;
	champ.className = 'form-box success';
}
//changer le background du formulaire en vert
function valider() {
	const champ = document.getElementById("form");
	champ.className = 'container valider';
}
//changer le background du formulaire en rouge
function nonvalider() {
	const champ = document.getElementById("form");
	champ.className = 'container nonvalider';
}


//note1Validate() : vérifier si la note du module M1 

function note1Validate() {
	const m1 = document.getElementById("m1");
	const v1 = m1.value ;
	if (isNaN(v1) || v1 > 20 || v1 < 0) {
		alert("La note de M1 n'est pas valide !");
		m1.focus();
		error(m1);
		
	}
	return(false);
}
	


//note2Validate() : vérifier si la note du module M2 
function note2Validate() {
	const m2 = document.getElementById("m2");
	const v2 = m2.value ;
	if (isNaN(v2) || v2 > 20 || v2 < 0) {
		alert("La note de M2 n'est pas valide !");
		m2.focus();
		error(m2);
		
	}
	return(false);
}


//note3Validate() : vérifier si la note du module M3 
function note3Validate() {
	const m3 = document.getElementById("m3");
	const v3 = m3.value ;
	if (isNaN(v3) || v3 > 20 || v3 < 0) {
		alert("La note de M3 n'est pas valide !");
		m3.focus();
		error(m3);
		
	}
	return(false);
}



//calculMoyen() : permet premièrement de vérifier la validation des notes saisies, puis de calculer et d’afficher dans la page html le total et la moyenne de ces notes. calculMoyen() est appelé à la saisie de l’un des notes M1, M2 ou M3.

function calculMoyen() {
	var m1 = document.getElementById("m1");
	var m2 = document.getElementById("m2");
	var m3 = document.getElementById("m3");
	 
	total =parseInt(m1.value)+parseInt(m2.value)+ parseInt(m3.value);
	moyenne = total/3 ;
	if (note1Validate()===false) {
		if (note2Validate()===false) {
			if (note3Validate()===false) {
				normal(m1);
				normal(m2);
				normal(m3);
				if (moyenne < 10 && moyenne >= 0) {
		
		document.getElementById("validation").innerHTML="le total des notes est : "+ total+" et la moyenne est : "+moyenne+"<br> Non Validé";
		nonvalider();
	}else { if (moyenne >= 10 && moyenne <= 20) {
		document.getElementById("validation").innerHTML ="le total des notes est : "+ total+" et la moyenne est : "+moyenne+"<br> Validé";
		valider();
	}
		
	}}}}}



//nomValidate() : vérifier si le nom de l’utilisateur contient que des lettres

function nomValidate() {
	var nom = document.getElementById("nom");
	var lettres = /^[A-Za-z]+$/ ;
	if (lettres.test(nom.value)==false) {
	alert(" Le nom ne doit contenir que des lettres ");
	nom.focus();}else {
		return false
	}
}

//validateEmail(champsText) : vérifier si l’utilisateur a introduit un email valide dans le champ de texte email
function validateEmail() {
	var email = document.getElementById("email");
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)==false) {
	    alert("Votre Email n'est pas Valide");
	    email.focus();
	  }else {
	  	return (false);
	    }
}


//validateForm() : vérifier si tous les champs du formulaire sont remplis
function validateForm() {
	if (requiredElement()===false) {
		var confirmation = confirm("Toutes les données sont validées ! Voulez-vous les envoyer au serveur? ");
		if (confirmation == true) {
			return (false);
		}
		
	}
}

//pour le fichier traitement
function retourner() {
	window.history.back();
	return (false);
		}	
	
