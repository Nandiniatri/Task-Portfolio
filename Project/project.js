import './project.css'

export class Project{
    constructor(){}

    renderProjectData(){
        const projectTpl = `<div id="projectid">
            <h1>LATEST PROJECTS</h1>
        </div>
        <div class="project-grid">
            <div class="projectinfo">
                <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg" />
            </div>
            
            <div class="projectinfo">
            <div class="design">WEB DESIGN</div>
            <h4>Website Design for Marketing Agency Startup</h4>
            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
            </p>
            <button>VIEW PROJECT</button>
        </div>

        <div class="projectinfo">
            <div class="second-Grid">
                <div class="design">WEB DESIGN</div>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                </p>   
                <button>VIEW PROJECT</button>
            </div>
            </div>
            <div class="projectinfo">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg" />
         </div>

         <div class="projectinfo">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-3.jpg" />
            </div>
            <div class="projectinfo">
                <div class="third-grid">
                <div class="design">WEB DESIGN</div>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                </p>   
                <button>VIEW PROJECT</button>
          </div>
          </div>

          <div class="projectinfo">
            <div class="second-Grid">
                <div class="design">WEB DESIGN</div>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                </p>   
                <button>VIEW PROJECT</button>
                </div>
                </div>
            <div class="projectinfo">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/project-4.jpg" />
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

