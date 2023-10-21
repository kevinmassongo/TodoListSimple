
const inputNom = document.getElementById('inputNom');
const inputPrenom = document.getElementById('inputPrenom');
const inputEmail = document.getElementById('email');
const inputAge = document.getElementById('age');
const inputPoste = document.getElementById('poste');
const inputPhone = document.getElementById('phone');
const inputSelect = document.querySelector('select');
const inputPays = document.getElementById('pays');
const main = document.querySelector('main');
const section = document.querySelector('section');
const btn1 = document.getElementById('btn1');
const btnSubmit = document.getElementById('envoyer');
const validation = document.getElementById('idForm');

let nom = '';
let prenom = '';
let email = '';
let age = '';
let poste = '';
let phone = '';
let select = '';
let pays = '';

btn1.addEventListener('click', btn1Function);

function btn1Function(){
    section.style.display = 'block';
    main.style.display = 'none';
}



inputNom.addEventListener('input', nomfunction)
function nomfunction(e){
    nom = e.target.value;
}

inputPrenom.addEventListener('input', prenomfunction)
function prenomfunction(e){
    prenom = e.target.value;
}

inputAge.addEventListener('input', ageFunction)
function ageFunction(e){
    age = e.target.value
}

inputEmail.addEventListener('input', emailFunction)
function emailFunction(e){
    email = e.target.value
}

validation.addEventListener('submit', validfunction)

function validfunction(e){
    e.preventDefault()
    
    if(svg.checked){
            document.querySelector('table tbody').innerHTML += `<tr>
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${email}</td>
            <td>${age}</td>
            </tr>`
            inputNom.value = '';
            inputPrenom.value = '';
            inputEmail.value = '';
            inputAge.value = '';
            main.style.display = 'block';
            section.style.display = 'none';
    }
}

