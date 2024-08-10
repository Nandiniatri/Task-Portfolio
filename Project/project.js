import './project.css'
import AOS from 'aos';


export class Project{
    constructor(){}

    renderProjectData(){
        const projectTpl = `<div id="projectid">
            <h1>LATEST PROJECTS</h1>
            
            <div class="project-main-div">

               <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="Screenshot (1544).png"/>
                </div>
                
             
            <div class="projectinfo">
                    <h4>Stanza Living Clone</h4> 
                    <p>Stanza Living is a coliving startup that offers fully-furnished rental accommodations for students and working professionals in more than 20 cities in India.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://react-doccure-nandiniatri.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/React-Doccure-Website"><button>VIEW IN GITHUB</button></a>
                </div>
            </div>
        </div>



            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="Screenshot (1024).png"/>
                </div>
                
             
            <div class="projectinfo">
                    <h4>Doccure Clone</h4> 
                    <p>Doccure – Doctor Appointment Booking Template is a appointment management and patient management template. We provide a simple and easy booking online system. 
                    </p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://react-doccure-nandiniatri.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/React-Doccure-Website"><button>VIEW IN GITHUB</button></a>
                </div>
            </div>
        </div>

        
        <div class="project-grid"> 
            <div class="projectinfo">
                <img src="https://miro.medium.com/v2/resize:fit:960/0*qMSoOn1GSLx1dNMx"/>
            </div>
        
        <div class="projectinfo">
                <h4>Pinterest Clone</h4>
                <p>Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.You'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://pinterest-clone-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/Pinterest-Clone"><button>VIEW IN GITHUB</button></a>
            </div>
        </div>
    </div>

    
        <div class="project-grid"> 
            <div class="projectinfo">
                <img src="Screenshot (1025).png"/>
            </div>
            
            <div class="projectinfo">
                <h4>Laddu Restaurants</h4>
                <p>A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.</p>
                <div class="project-All-Btns-Div">
                    <a target="_blank" href="https://laddurestaurant-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                    <a target="_blank" href="https://github.com/Nandiniatri/Restaurant-App"><button>VIEW IN GITHUB</button></a>
                </div>
        </div>
    </div>


      

 </div>
    
      </div>`

        const create = document.createElement('div');
        create.innerHTML = projectTpl;
        create.setAttribute('id', 'project')
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const project = new Project();
project.renderProjectData();

