import {expect, test} from '@playwright/test'
import registrationdata from '../../testdata/register.json'
import { register } from '../../pages/registration'


test('registration',async ({page}) => {
    //! hardcoding of the script 
    test.slow()
    await page.goto('https://automationexercise.com/')
    await expect(page.getByRole('link',{name:' Home'})).toBeVisible()
    await page.getByRole('link',{name:' Signup / Login'}).click()
    await expect(page.getByRole('heading',{name:'New User Signup!'})).toBeVisible()
    await page.getByRole('textbox',{name:'Name'}).fill('bhanu')
    await page.reload()
    await page.locator('//input[@data-qa="signup-email"]').fill('bhanug940@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await expect(page.locator('//b[text()="Enter Account Information"]')).toContainText('Enter Account Information')
    await page.getByRole('textbox',{name:'Password *'}).fill('123456')
    await page.locator('//select[@id="days"]').selectOption({value:'5'})
    await page.locator('//select[@id="months"]').selectOption({value:'10'})
    await page.locator('//select[@id="years"]').selectOption({value:'2003'})
    await page.getByRole('textbox',{name:'First name *'}).fill('akhila')
    await page.getByRole('textbox',{name:'Last name *'}).fill('Gandla')
    await page.getByRole('textbox',{name:'Address * (Street address, P.O. Box, Company name, etc.)'}).fill('kphb')
    await page.getByRole('combobox',{name:'Country *'}).selectOption({value:'India'})
    await page.getByRole('textbox',{name:'State *'}).fill('Telangana')
    await page.getByRole('textbox',{name:'City * Zipcode *'}).fill('Hyderabad')
    await page.locator('//input[@data-qa="zipcode"]').fill('506001')
    await page.locator('//input[@data-qa="mobile_number"]').fill('1234567890')
    await page.getByRole('button',{name:'Create Account'}).click()
    // await expect(page.locator('//h2[@class="title text-center"]')).toContainText('Account Created!')
    await page.getByRole('link',{name:'Continue'}).click()
})

test('registration with ddt',async ({page}) => {
    //! hardcoding of the script 
    test.slow()
    await page.goto('https://automationexercise.com/')
    await expect(page.getByRole('link',{name:' Home'})).toBeVisible()
    await page.getByRole('link',{name:' Signup / Login'}).click()
    await expect(page.getByRole('heading',{name:'New User Signup!'})).toBeVisible()
    await page.getByRole('textbox',{name:'Name'}).fill(registrationdata.username)
    await page.reload()
    await page.locator('//input[@data-qa="signup-email"]').fill(registrationdata.email)
    await page.getByRole('button',{name:'Signup'}).click()
    await expect(page.locator('//b[text()="Enter Account Information"]')).toContainText('Enter Account Information')
    await page.getByRole('textbox',{name:'Password *'}).fill(registrationdata.password)
    await page.locator('//select[@id="days"]').selectOption({value:'5'})
    await page.locator('//select[@id="months"]').selectOption({value:'10'})
    await page.locator('//select[@id="years"]').selectOption({value:'2003'})
    await page.getByRole('textbox',{name:'First name *'}).fill(registrationdata.firstname)
    await page.getByRole('textbox',{name:'Last name *'}).fill(registrationdata.lastname)
    await page.getByRole('textbox',{name:'Address * (Street address, P.O. Box, Company name, etc.)'}).fill(registrationdata.address)
    await page.getByRole('combobox',{name:'Country *'}).selectOption({value:'India'})
    await page.getByRole('textbox',{name:'State *'}).fill(registrationdata.state)
    await page.getByRole('textbox',{name:'City * Zipcode *'}).fill(registrationdata.city)
    await page.locator('//input[@data-qa="zipcode"]').fill(registrationdata.Zipcode)
    await page.locator('//input[@data-qa="mobile_number"]').fill(registrationdata.mobile_number)
    await page.getByRole('button',{name:'Create Account'}).click()
    // await expect(page.locator('//h2[@class="title text-center"]')).toContainText('Account Created!')
    await page.getByRole('link',{name:'Continue'}).click()
})

test.only('registration with POM',async ({page}) => {
    test.slow()
    let pomobj = new register(page)
    await pomobj.launch(registrationdata.url)
    await pomobj.actions(registrationdata.username,
        registrationdata.email,
        registrationdata.password,
        registrationdata.firstname,
        registrationdata.lastname,
        registrationdata.address,
        registrationdata.state,
        registrationdata.city,
        registrationdata.Zipcode,
        registrationdata.mobile_number)
})