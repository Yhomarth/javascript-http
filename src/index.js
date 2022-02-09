// import { obtenerChiste } from './js/http-provider';

import { init } from './js/archivos-page';

// import { init } from './js/chistes-page';
//import { init } from './js/usuarios-page';

// import * as CRUD from './js/crud-provider';
 

// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/*
fetch(jokeUrl).then( resp => {
    
    resp.json().then(  ({id, value}) => {

        console.log(id);
        console.log(value);

    })

} );
*/
/*
fetch( jokeUrl )
    .then(  resp => resp.json()  )
    .then(  ({id, value}) => {
        console.log(id);
        console.log(value);
    });
*/

// obtenerChiste().then(  console.log );

// init();

/*
CRUD.getUsuario('2').then(
    console.log
);

CRUD.crearUsuario({
    name : 'Yhomarth Reyes',
    job : 'Developer'
}).then ( console.log );

CRUD.actualizarUsuario(1, {
    name : 'Rosa',
    job : 'Agente Lavado Activo'
}).then(console.log);
*/

// CRUD.borrarUsuario( '1sssssse' ).then( console.log );

init();