import './header.css'

export class Header{
    constructor(){
    } 

    renderHeaderData(){
       const header = `<div class="main-header-Container">
       <div class="main-header-div1">
         <a href=""><img src="https://pxdraft.com/themeforest/krinky/assets/img/logo.svg" /></a>
       </div>
       <a href="#id" id="menu-icon"><i style="font-size:30px" class="fa">&#xf0c9;</i></a> 

       <div class="main-header-div2">
       <nav>
         <a href="home">HOME</a>
         <a href="services">SERVICES</a>
         <a href="skills">SKILLS</a>
         <a href="portfolio">PORTFOLIO</a>
         <a href="contact">CONTACT</a>
       </nav> 

       <div class="main-header-div3">
         <button>CONTACT NOW</button>
       </div>

    </div>
       </div>`

       document.getElementById('app').innerHTML = header;
    }
}


const header = new Header();
header.renderHeaderData();

{/* <div class="header-Menu-Icon">
            <i class="fa fa-bars"></i>
          </div> */}

     //  const hamburger = document.querySelector('.hamburger');
      //  const navLink = document.querySelector('.nav__link');

      //    hamburger.addEventListener('click', () => {
      //    navLink.classList.toggle('hide');
      //    });
