import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

let conteoChiste = 1;
const limiteChiste = 5;


const crearChistesHtml = () => {    

    const html = `
        
    <h1 class="mt-5">Chistes</h1>
    <hr>


    <button class="btn btn-primary">
        Otro Chiste
    </button>

    <ol class="mt-2 list-group">
      
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}

// chiste
const dibujarChiste = (chiste) => {

    const liChiste = document.createElement('li');
    liChiste.classList.add('list-group-item');
    liChiste.innerHTML = `<b> ${conteoChiste++} -  ${chiste.id}</b>: <small>${chiste.value}</small>`
    olList.append(liChiste);

}

const eventos = () => {
    btnOtro = document.querySelector('button');
    olList = document.querySelector('ol');


    btnOtro.addEventListener('click', async ()=>{


        btnOtro.disabled = true;
        
        
        btnOtro.innerText = (conteoChiste === limiteChiste ) ? 'Limpiar / Otro Chiste' : 'Otro Chiste';

        if(conteoChiste >= (limiteChiste + 1)){
            conteoChiste = 1;
            olList.innerHTML = '';       
        
        }
        dibujarChiste( await  obtenerChiste()  );
        btnOtro.disabled = false;
         
    });
}




export const init = ()=> {
    crearChistesHtml();
    eventos();
}