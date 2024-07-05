import './experience.css'

export class Experience{
    constructor(){}

    renderExperienceData(){ 
        const experienceTpl = `<div class="experience-Main-Container">
        <div class="experience-Main-Div1">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png"/>
        </div>
        <div class="experience-Main-Div2">
            <h1>I'm a Front-end Developer.</h1>
            <p>I'm a Front-end Developer . I'm from Noida. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>

            <div class="experience-Main-Div2-InnerDiv">
                <div class="div2-inner1">
                    <a href="#contactid"><button>CONTACT ME</button></a>
                </div>
                <div class="div2-inner2">
                    <a href="./File/Nandini's Resume.pdf" download target="_blank"><button>DOWNLOAD CV</button></a>
                </div>
            </div>
        </div>
        </div>`
        
        const create = document.createElement('div');
        create.innerHTML = experienceTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const experience = new Experience();
experience.renderExperienceData();