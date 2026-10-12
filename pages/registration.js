import { expect } from "@playwright/test"

export class register {
    #home
    #signup_login_btn
    #heading
    #usernme
    #email
    #signupbtn
    #accountcreated
    #password
    #dateob
    #months
    #years
    #firstname
    #lastname
    #address
    #country
    #state
    #city
    #zipcode
    #mobile_number
    #create_account
    #continue
    constructor(page){
        this.page=page
        this.#home = page.getByRole('link',{name:' Home'})
        this.#signup_login_btn = page.getByRole('link',{name:' Signup / Login'})
        this.#heading = page.getByRole('heading',{name:'New User Signup!'})
        this.#usernme = page.getByRole('textbox',{name:'Name'})
        this.#email= page.locator('//input[@data-qa="signup-email"]')
        this.#signupbtn = page.getByRole('button',{name:'Signup'})
        this.#accountcreated=page.locator('//b[text()="Enter Account Information"]')
        this.#password = page.getByRole('textbox',{name:'Password *'})
        this.#dateob = page.locator('//select[@id="days"]')
        this.#months = page.locator('//select[@id="months"]')
        this.#years = page.locator('//select[@id="years"]')
        this.#firstname = page.getByRole('textbox',{name:'First name *'})
        this.#lastname = page.getByRole('textbox',{name:'Last name *'})
        this.#address = page.getByRole('textbox',{name:'Address * (Street address, P.O. Box, Company name, etc.)'})
        this.#country = page.getByRole('combobox',{name:'Country *'})
        this.#state = page.getByRole('textbox',{name:'State *'})
        this.#city = page.getByRole('textbox',{name:'City * Zipcode *'})
        this.#zipcode = page.locator('//input[@data-qa="zipcode"]')
        this.#mobile_number = page.locator('//input[@data-qa="mobile_number"]')
        this.#create_account = page.getByRole('button',{name:'Create Account'})
        this.#continue = page.getByRole('link',{name:'Continue'})
    }
    async launch(url){
        await this.page.goto(url)
    }

    async actions(name1 , email1 , password1 ,firstname1,lastname1,address1,state1,citys,zipcode1,mobile_number1){
        await expect(this.#home).toBeVisible()
        await this.#signup_login_btn.click()
        await expect(this.#heading).toBeVisible()
        await this.#usernme.fill(name1)
        await this.#email.fill(email1)
        await this.#signupbtn.click()
        await expect(this.#accountcreated).toContainText('Enter Account Information')
        await this.#password.fill(password1)
        await this.#dateob.selectOption({value:'5'})
        await this.#months.selectOption({value:'10'})
        await this.#years.selectOption({value:'2003'})
        await this.#firstname.fill(firstname1)
        await this.#lastname.fill(lastname1)
        await this.#address.fill(address1)
        await this.#country.selectOption({value:'India'})
        await this.#state.fill(state1)
        await this.#city.fill(citys)
        await this.#zipcode.fill(zipcode1)
        await this.#mobile_number.fill(mobile_number1)
        await this.#create_account.click()
        await this.#continue.click()
    }
}