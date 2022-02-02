// import { obtenerChiste } from './js/http-provider';

// import { init } from './js/chistes-page';
import { obtenerUsuarios } from './js/http-provider';
import { init } from './js/usuarios-page';


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

init();
