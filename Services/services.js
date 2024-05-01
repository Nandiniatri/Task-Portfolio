import './services.css'

export class Services{
    constructor(){}

    renderServicesData(){
        const serviceTpl = `<div class="services-Main-Container">
        <div class="services-Main-Container-h1"><h1>MY SERVICES</h1></div>
        <div class="services-Main1-Container">

            <div class="services-Main1-Container-innerDiv1">
                <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-phone"></i>
                </div>
                <div>
                    <h5>Web Design</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="services-Main1-Container-innerDiv2">
                <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-laptop"></i>
                </div>
                <div>
                    <h5>Development</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="services-Main1-Container-innerDiv3">
                 <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-exclamation-triangle"></i>
                </div>
                <div>
                    <h5>SEO Marketing</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="services-Main1-Container-innerDiv4">
                 <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-columns"></i>
                </div>
                <div>
                    <h5>Web Design</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div> 

            <div class="services-Main1-Container-innerDiv5">
                 <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-phone"></i>
                </div>
                <div>
                    <h5>Development</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="services-Main1-Container-innerDiv6">
                 <div class="services-Main1-Container-innerDiv1-div1">
                    <i class="fa fa-globe"></i>
                </div>
                <div>
                    <h5>SEO Marketing
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>
        </div>`

         
        const create = document.createElement('div');
        create.innerHTML = serviceTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const service = new Services();
service.renderServicesData();