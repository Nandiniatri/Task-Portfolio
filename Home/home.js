import './home.css'

export class Home{
    constructor(){

    }

    renderHomeData(){
        const homeTpl = `<div class="home-main-container">
        <div class="home-main-div1">
            <p>👋, MY NAME IS KRINKY</p>
            <h1>I'm a Developer |</h1>
            <span>Based in Los Angeles, California.</span>
            </br> 
            <div class="home-btn-div"><button>LET'S START</button></div>
        </div>
        <div class="home-main-div2">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/home-banner.png"/>
        </div>
        </div>`


        const create = document.createElement('div');
        create.innerHTML = homeTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const home = new Home();
home.renderHomeData();

{/* <h1 class="developer"> </h1> */}