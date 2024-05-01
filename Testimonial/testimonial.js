import './testimonial.css'

export class Testimonial{
    constructor(){}

    render(){
        const testimonialTpl = `<div class="testimonial-Main-Container">
        <div  class="testimonial-Main-Container1"><h1>TESTIMONIAL</h1></div>
            <div class="slider">
                <div class="slider-inner">
                    <div>
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-2.jpg" />
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
                <div class="slider-inner">
                    <div>
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-3.jpg" />
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
                <div class="slider-inner">
                    <div>
                        <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-4.jpg" />
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                        <h6>Jennifer Lutheran</h6>
                        <span>CEO at pxdraft</span>
                    </div>
                </div>
                
        
            <div class="slider-inner">
                <div>
                    <img src="https://pxdraft.com/themeforest/krinky/assets/img/avatar-2.jpg" />
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit, quia aperiam recusandae cum itaque autem aspernatur quisquam, adipisci reprehenderit architecto consequatur nam ratione sed numquam et ut veniam at.</p>
                    <h6>Jennifer Lutheran</h6>
                    <span>CEO at pxdraft</span>
                </div>
            </div>


            </div>
        <div>
        </div>
        </div>`

        const testimonialBtn = `<div class="testimonialBtn-Container">
        <button class="btn1" id="prev"></button>
        <button class="btn2" id="next"></button>
        </div>`

        //scroll functionally:

        document.addEventListener('DOMContentLoaded', () => {
            const prev = document.querySelector('#prev');
            const next = document.querySelector('#next');

            next.addEventListener('click', () => {
                const sliderDiv = document.querySelector('.slider');
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft += 400;
            });

            
            prev.addEventListener('click', () => {
                const sliderDiv = document.querySelector('.slider');
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft -= 400;
            });
        });


        const create = document.createElement('div');
        create.innerHTML = testimonialTpl + testimonialBtn;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const testimonial = new Testimonial();
testimonial.render();
