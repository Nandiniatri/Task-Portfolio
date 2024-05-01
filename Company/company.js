import './company.css'

export class Company{
    constructor(){} 

    renderCompanyData(){
        const companyTpl = `<div class="company-main-Container">
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-1.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-2.svg" /> 
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-3.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-4.svg" />
        <img src="https://pxdraft.com/themeforest/krinky/assets/img/brand-5.svg" />
        </div>`

        const create = document.createElement('div');
        create.innerHTML = companyTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const company = new Company();
company.renderCompanyData();