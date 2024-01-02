// globalStyles.js
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

   *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    }

     body{
      overflow-x: hidden; /* Hide horizontal scrollbar */   
    }

    html{
    font-size:62.5%;
    scroll-behavior: smooth;
    }


body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
  a {
  text-decoration: none;
  cursor:pointer;
}
li {
  list-style: none;
  cursor:pointer;
}
.container {
  max-width: 100%;
  margin: 0 auto;
}
.grid {
  display: grid;
  column-gap:4rem;
  
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 1.2rem;
      }
      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}
  
`;

export default GlobalStyle;
