import React from 'react'



function Footer() {

const date = new Date().getFullYear();

return(
    <footer class="bg-dark  fixed-bottom">
    <div  class="btn-group container fotercon" role="group" aria-label="Basic example">
    <a  class=" col-3 btn btn-large btn-dark" href="https://github.com/sweekas" role="button">Github</a>
    <a  class=" col-3 btn btn-large btn-outline-primary" href="https://www.facebook.com/ramuuz.abuaklien" role="button">Facebook</a>
    <a  class=" col-3 btn btn-large btn-outline-light" href="https://www.instagram.com/ramziabuaklein/" role="button">  Instagram</a>
    <a  class=" col-3 btn btn-large btn-outline-danger" href="https://www.youtube.com/channel/UCGbfb9SM86efY8CuQdlDxQQ" role="button">Youtube</a>
    </div>
    <div class="footer">
    <p style={{textAlign: 'center'}}>&copy; {date} RamziAbuAklien</p>
    </div>

    </footer>

  );
}


export default Footer;