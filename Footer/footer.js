import './footer.css'

export class Footer{
    constructor(){}

    renderFooterData(){
        const footerTpl = `<div id ="contactid">
        <div class="footer-grid">

          <div class="footerinfo">
              <form>
                  <h3>Get in touch</h3>
                  <p >Our friendly team would love to hear from you.</p>
                  <div class="form-inner-div">
                    <div class="form-inner-div-div1">
                        <lable>First Name</label>
                        <div><input placeholder="Name*"/></div>
                    </div>
                    <div class="form-inner-div-div2">
                        <lable>Your Email</label>
                        <div><input placeholder="Email*"/></div>
                    </div>
                   
                  </div>
                  <lable>Subject</label>
                  <div><input placeholder="Subject*"/></div>
                  <lable>Your message</label>
                  <div><textarea placeholder="Your message*"/></textarea></div>
                  <button class="messages">SEND MESSAGES</button>
              </form>
          </div>

          <div class="footerinfo2">
              <div>
                <Img src ="https://pxdraft.com/themeforest/krinky/assets/img/contact-bg.png"/>
              </div>

              
              <div class="contactinfo">
                <div class ="phoneinfo">
                    <icon class="fa fa-envelope"/>
                </div>
                <div class="phoneNO">
                    <h5>PHONE</h5>
                    <p>+01 123 654 8096</p>
                </div>
              </div>

              <div class="contactinfo">
              <div class ="phoneinfo" id="phoneinfo2-fa">
                    <icon class="fa fa-phone"/>
              </div>
              <div class="phoneNO">
                  <h5>MAIL</h5>
                  <p>info@domainname.com</p>
              </div>
            </div>

            <div class="contactinfo">
            <div class ="phoneinfo"  id="phoneinfo3-fa">
                   <icon class="fa fa-map-marker"/>
            </div>
            <div class="phoneNO">
                <h5>VISIT MY STUDIO</h5>
                <p>Warnwe Park Streetperrine,
                FL 33157 New York City</p>
            </div>
          </div>
    </div>
</div>

        <div class="socila-media">
            <div class="left-media">
                <li><icon class="fa fa-facebook"/><li>
                <li><icon class="fa fa-twitter"/><li>
                <li><icon class="fa fa-instagram"/><li>
                <li><icon class="fa fa-linkedin"/><li>
                <li><icon class="fa fa-pinterest"/></li>
            </div>
            <div class="right-media">
                © 2022 copyright all right reserved
            </div>
        </div>

`



        const create = document.createElement('div');
        create.innerHTML = footerTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const footer =  new Footer();
footer.renderFooterData();



