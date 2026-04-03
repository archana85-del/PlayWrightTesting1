import { expect, Locator, Page } from "@playwright/test";

export class CustomerManagementPortal{

    private readonly nameTextBox:Locator;
    private readonly emailTextBox:Locator;

    private readonly cityTextBox:Locator;
    private readonly customerTypeRadioButton:Locator;
    private readonly regularRadio:Locator;
    private readonly premiumRadio:Locator;
    private readonly saveCustomerButton:Locator;
    page1:Page
    constructor(page:Page){
        this.page1=page;
        this.nameTextBox= page.locator("#custName");
        this.emailTextBox=page.locator("#custEmail");
        this.cityTextBox=page.locator("#custCity");
        this.customerTypeRadioButton = page.locator(".customer-radio")
        this.regularRadio = page.locator('input[type="radio"]').nth(0);
        this.premiumRadio = page.locator('input[type="radio"]').nth(1);
        this.saveCustomerButton = page.getByRole('button', { name: 'Save Customer' });

    }


    async saveCustomer(name:string, email:string, city:string, radioButtonString:string){
        await this.nameTextBox.fill(name);
        await this.emailTextBox.fill(email);
        await this.cityTextBox.clear();
        await this.cityTextBox.fill(city);
        if(radioButtonString=="Regular")
            await this.regularRadio.click();
        else
            await this.premiumRadio.click();
        await this.saveCustomerButton.click();

    }
}