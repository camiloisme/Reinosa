const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener ("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener ("click", () =>{
    nav.classList.remove("visible");
})

const banner = document.querySelector('#cookies-id');
const aceptar = document.querySelector('#aceptar-id');
const rechazar = document.querySelector('#rechazar-id');

/*Quitar el banner si acepta o no*/

window.onload = () => {
    const cookieDecision = localStorage.getItem('cookieConsent');
    if (cookieDecision === 'accepted' || cookieDecision === 'rejected'){
        banner.style.display = 'none';
    }
};

/* Si click acepta */
 
aceptar.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
});

/* Si click rechaza */
rechazar.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    banner.style.display = 'none';

})
