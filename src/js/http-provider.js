
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

/*
fetch(jokeUrl).then( resp => {
    
    resp.json().then(  ({id, value}) => {

        console.log(id);
        console.log(value);

    })

} );


fetch( jokeUrl )
    .then(  resp => resp.json()  )
    .then(  ({id, value}) => {
        console.log(id);
        console.log(value);
    });
    */



    const obtenerChiste = async () => {

        try{
            const resp = await fetch(jokeUrl);
        
            if(! resp.ok) {
                throw 'No se pudo realizar la peticion';
            }
        
            const { icon_url, id, value  } = await resp.json();   

            return { 
                icon_url, id, value
            }


        } 
        catch(err){
            throw err;
        }
    
    }    

    const obtenerUsuarios = async () => {
        
        try{

            const resp = await fetch(usuariosUrl);

        if(! resp.ok) {
            throw 'No se pudo realizar la peticion';
        }


        const {data:usuarios } = await resp.json();

        return usuarios;

        }
        catch(err){
            throw err;
        }
        

    }

    export {
        obtenerChiste,
        obtenerUsuarios
    }