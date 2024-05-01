import './skill.css'

export class Skills{
    constructor(){}

    renderSkillsData(){
        const skillsTpl = `<div id ="skillid">
        <div class="my-skill"><h3>MY SKILLS</h3></div>
        <div class="skill-grid">
        <div class="skillinfo">
        <div class="skill-conatiner">

            <div class="conatiner-1"> 
                <i class="fa fa-html5"></i>
            HTML</div>

            <div class="conatiner-2">
                <i class="fa fa-css3"></i>
            CSS</div>

            <div class="conatiner-3">
                <i class='fa fa-react'></i>
            REACT JS</div>

            <div class="conatiner-4">
                <i class='fa fa-angular'></i>
            ANGULAR</div>

            <div class="conatiner-5">
                <i class='fa fa-apple'></i>
            IOS APP</div>

            <div class="conatiner-6">
                <i class="fa fa-android"></i>
            APP DEV</div>

        </div>
        </div>
        <div class="skillinfo">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/skills.png" />
        </div>
        </div>
        </div>`

        const create = document.createElement('div');
        create.innerHTML = skillsTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const skill = new Skills();
skill.renderSkillsData();



// const skillsTpl = `<div class="skill-Main-Container">
// <div class="skill-Main-Container-Div1-innerDiv>
//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>

//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>

//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>

//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>

//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>

//     <div>
//         <div><i class="fa fa-html5"></i></div>
//         <div><h6>HTML</h6></div>
//     <div>
// </div>


// <div class="skill-Main-Container-Div2">
//     <img src="https://pxdraft.com/themeforest/krinky/assets/img/skills.png" />
// </div>

// </div>`