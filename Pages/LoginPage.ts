import { expect, Locator, Page } from "@playwright/test";



export class LoginPage {


private readonly userNameTextbox:Locator
private readonly passwordTextbox:Locator
private readonly loginButton:Locator
private readonly verifyWelcomeMsg:Locator
page1:Page
constructor(page:Page)
{
    this.page1=page;
    this.userNameTextbox=page.locator("#username")
    this.passwordTextbox=page.getByPlaceholder("Enter your password")
    this.loginButton=page.getByText("Login").last()
    this.verifyWelcomeMsg=page.locator("#welcomeUser")

}
async doLogin(un:string,pwd:string)
{
    await this.userNameTextbox.fill(un)
    await this.passwordTextbox.fill(pwd)
    await this.loginButton.click()
    const e1=this.verifyWelcomeMsg;
    await expect(e1).toHaveText("Welcome to SenthilSmartQAHub")
    await this.page1.waitForTimeout(2000)
}


}