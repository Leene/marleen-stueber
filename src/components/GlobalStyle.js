/* injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`; */
import { COLORS, VIEWPORT } from "../constants";


import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 



body {
    margin: 0;
    background-color: #f7f7f7;
    //font-family: 'Prata', sans-serif;
    
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

ul{
    list-style-image:  url('https://api.iconify.design/octicon:north-star-16.svg?color=white');
    
}
/* >>>>>>>>>>>>>>>>>> S M A L L <<<<<<<<<<<<<<<<<<<<<<<<<< */

@media (min-width: 270px) and (max-width: 767px) {


    h1 {
      margin-top:80px;
      font-size: 2.8em;
      text-align:right;
       font-family: 'Montserrat Alternates', sans-serif;
        font-weight:700;
      }
     
    
    }
    h2 {
        text-align:center;
      font-size: 1.7em;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight:400;
      font-style:italic;
      
    }
    h3 {
      font-size: 2.0em;
      
      margin-top:0px;
font-family: 'Montserrat Alternates', sans-serif;
      font-weight:700;
      //font-size: 2.5em;
      

    }
    h4 {
      
      font-size: 1.5em;
        text-transform:uppercase;
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight: 500;
    }
    
    h5 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight: 500;
      }


      h6 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight:700;
      

       color:${COLORS.headline};
       margin-bottom:0;
      }


    p, li {
        font-size:1.2rem;
        letter-spacing: 1px;
       line-height:1.6em;
       font-family: 'Alegreya Sans', sans-serif;
       font-weight: 400;
      }
      
  
  
  }
  /* >>>>>>>>>>>>>>>>>> M I D D L E <<<<<<<<<<<<<<<<<<<<<<<<<< */

  @media (min-width: 768px) and (max-width: 992px) {
    h1 {
      margin-top:100px;
      font-size: 2.8em;

    
     font-family: 'Montserrat Alternates', sans-serif;
      font-weight:700;
    
    }
    h2 {
      font-size: 2.0em;
      max-width: 90vw;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight:400;
      font-style:italic;
      
    }
    h3 {
      //font-size: 2em;
      font-size: 2.5em;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight:700;
    }
  
      

      h4 {
        font-size: 2.0em;
        text-transform:uppercase;
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight: 500;
       
      }


      h5 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight: 500;
      }


      h6 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight:700;
      

       color:${COLORS.headline};
       margin-bottom:0;
      }
    
    
    
    p, li {
        font-size:1.2rem;
        letter-spacing: 1px;
       line-height:1.6em;
       font-family: 'Alegreya Sans', sans-serif;
       font-weight: 400;
      }
      
  }
  /* >>>>>>>>>>>>>>>>>> L A R G E <<<<<<<<<<<<<<<<<<<<<<<<<< */

  @media (min-width: 992px) {
  
    h1 {
      margin-top:100px;
      font-size: 4.8em;
     font-family: 'Montserrat Alternates', sans-serif;
      font-weight:700;
      
    
    }
    h2 {
      
      font-size: 2em;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight:400;
      font-style:italic;
      


      
    }
    h3 {
      font-size: 2.5em;
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight:700;
    }
    h4 {
      font-size: 2.0em;
      text-transform:uppercase;
      letter-spacing: 1px;
      font-family: 'Alegreya Sans', sans-serif;
     font-weight: 500;
    }


    h5 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight: 500;
      }


      h6 {
        font-size: 1.2em;
        
        letter-spacing: 1px;
        font-family: 'Alegreya Sans', sans-serif;
       font-weight:700;
      

       color:${COLORS.headline};
       margin-bottom:0;
      }
    
    p, li {
      font-size:1.2rem;
      letter-spacing: 1px;
     line-height:1.6em;
     font-family: 'Alegreya Sans', sans-serif;
     font-weight: 400;
    }
    
  }
  









`
export default GlobalStyle