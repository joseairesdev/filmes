import React, {useState,useEffect} from 'react';

import * as  C from './styled.js'


function MoviesContainer (props){

    const [ movies, setMovies ] = useState([]);

     const loadMovies = () =>{
         fetch('https://api.b7web.com.br/cinema/').then((e)=>{
            return e.json();
         })
         .then((json)=>{
           setMovies(json);
         });
     }

     useEffect(()=>{
         loadMovies();
     },[])

    return(
       <C.Area>
            {props.children}
           <C.MoviesArea >
               {movies.map((item,index)=>(
                  <C.AreaImage key={index} >
                       <C.MoviesImg src={item.avatar} />
                       {item.titulo}
                  </C.AreaImage>
               ))}
        
           </C.MoviesArea>
       </C.Area>
    );
}

export default MoviesContainer;

