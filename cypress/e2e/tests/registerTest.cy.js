import { registerPage } from "../../pages/RegisterPage"
import RegisterPage from '../../support/pages/RegisterPage';


const registerObj = new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('test demo',()=>{

    it('register Flow' , ()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password),
        registerObj.selectCheckbox();
        registerObj.clickOnContinue();


    })
})