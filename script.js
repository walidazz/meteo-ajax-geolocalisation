// let btn = document.querySelector('#changer');
// let ville;


// if ('geolocation' in navigator) {

//     navigator.geolocation.watchPosition((position) => { 
        
//         const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
//             + position.coords.latitude + '&lon='
//             + position.coords.longitude + '&appid=e0baf28a5478d87d2a7024a351a0652e&units=metric';
//         geolocation(url);
//         // console.log(url);
        
//     });

// } else {
//     ville = 'Paris';
//     recevoirTemperature(ville);
// }

// function geolocation(url) {
//     let req = new XMLHttpRequest();
//     // const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=e0baf28a5478d87d2a7024a351a0652e&units=metric';
//     req.open('GET', url);
//     req.responseType = 'json';
//     req.send();
//     req.onload = function () {
//         if (req.readyState === XMLHttpRequest.DONE) {

//             if (req.status === 200) {
//                 let ville = this.response.name;
//                 zoneVille.innerHTML = ville;
//                 zoneTemperature.innerHTML = this.response.main.temp;
//             }


//         } else {
//             alert('un probleme est intervenu');
//         }
//     }

// }


// btn.addEventListener('click', () => {
//     ville = prompt('Rentrez une ville ');
//     recevoirTemperature(ville);
// });
// let zoneVille = document.querySelector('#ville');
// let zoneTemperature = document.querySelector('#temperature_label');

// /**
//  * Permet de récuperer la température d'une ville 
//  * @param {string} ville 
//  * @returns {Response}
//  */
// function recevoirTemperature(ville) {
//     let req = new XMLHttpRequest();
//     // const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=e0baf28a5478d87d2a7024a351a0652e&units=metric';
//     req.open('GET', url);
//     req.responseType = 'json';
//     req.send();
//     req.onload = function () {
//         if (req.readyState === XMLHttpRequest.DONE) {

//             if (req.status === 200) {
//                 zoneVille.innerHTML = ville;
//                 zoneTemperature.innerHTML = this.response.main.temp;
//             }


//         } else {
//             alert('un probleme est intervenu');
//         }
//     }

// }




let villeChoisie;

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
            + position.coords.latitude + '&lon='
            + position.coords.longitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

        let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
        requete.open('GET', url); // Nous récupérons juste des données
        requete.responseType = 'json'; // Nous attendons du JSON
        requete.send(); // Nous envoyons notre requête

        // Dès qu'on reçoit une réponse, cette fonction est executée
        requete.onload = function () {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response;
                    // console.log(reponse);
                    let temperature = reponse.main.temp;
                    let ville = reponse.name;
                    // console.log(temperature);
                    document.querySelector('#temperature_label').textContent = temperature;
                    document.querySelector('#ville').textContent = ville;
                }
                else {
                    alert('Un problème est intervenu, merci de revenir plus tard.');
                }
            }
        }
    }, erreur, options);

    var options = {
        enableHighAccuracy: true
    }
}
else {
    villeChoisie = "saint-saulve";
    recevoirTemperature(villeChoisie);
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
});

function erreur() {
    villeChoisie = "Nimesé";
    recevoirTemperature(villeChoisie);
}

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    requete.open('GET', url); // Nous récupérons juste des données
    requete.responseType = 'json'; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                // console.log(reponse);
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                // console.log(temperature);
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}