import './experience.css'

export class Experience{
    constructor(){}

    renderExperienceData(){ 
        const experienceTpl = `<div class="experience-Main-Container">
        <div class="experience-Main-Div1">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png"/>
        </div>
        <div class="experience-Main-Div2">
            <h1>I'm a Freelancer Front-end Developer with over 3 years of experience.</h1>
            <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>

            <div class="experience-Main-Div2-InnerDiv">
                <div class="div2-inner1">
                    <h1>285+</h1>
                    <p>Project Completed</p>
                    <button>CONTACT ME</button>
                </div>
                <div class="div2-inner2">
                    <h1>190+</h1>
                    <p>Happy Clients</p>
                    <button>PORTFOLIO</button>
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