import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './formlayout.component.html'
})
export class FormLayoutComponent implements OnInit {

    countries: any[];

    ngOnInit() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ]; 
    }

    block1 = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-2">
            <div class="text-900 font-medium text-xl mb-3">Profile</div>
            <p class="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
        </div>
        <div class="col-12 lg:col-10">
            <div class="grid formgrid p-fluid">
                <div class="field mb-4 col-12">
                    <label for="nickname" class="font-medium text-900">Nickname</label>
                    <input id="nickname" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12">
                    <label for="avatar" class="font-medium text-900">Avatar</label>
                    <div class="flex align-items-center">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                        <p-fileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image"></p-fileUpload>
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="bio" class="font-medium text-900">Bio</label>
                    <textarea id="bio" type="text" pInputTextarea rows="5" [autoResize]="true"></textarea>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="email" class="font-medium text-900">Email</label>
                    <input id="email" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="country" class="font-medium text-900">Country</label>
                    <p-dropdown inputId="country" [options]="countries" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                        <ng-template let-country pTemplate="item">
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px"/>
                                <div>{{country.name}}</div>
                            </div>
                        </ng-template>
                    </p-dropdown>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="city" class="font-medium text-900">City</label>
                    <input id="city" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="state" class="font-medium text-900">State</label>
                    <input id="state" type="text" pInputText>
                </div>
                <div class="field mb-4 col-12">
                    <label for="website" class="font-medium text-900">Website</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">www</span>
                        <input id="website" type="text" pInputText>      
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="privacy" class="font-medium text-900">Privacy</label>
                    <div class="flex align-items-center">
                        <p-checkbox inputId="privacy" [binary]="true"></p-checkbox>
                        <span class="ml-2 text-900">Share my data with contacts</span>
                    </div>
                </div>
                <div class="col-12">
                    <button pButton pRipple label="Save Changes" class="w-auto mt-3"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Profile</div>
    <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet. 
        Egestas integer eget aliquet nibh praesent tristique magna.</p>
    <div class="surface-card p-4 shadow-2 border-round">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
                <label for="nickname2" class="font-medium text-900">Nickname</label>
                <input id="nickname2" type="text" pInputText>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="bio2" class="font-medium text-900">Bio</label>
                <textarea id="bio2" type="text" pInputTextarea rows="5" [autoResize]="true"></textarea>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="avatar2" class="font-medium text-900">Avatar</label>
                <div class="flex align-items-center">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                    <p-fileUpload id="avatar2" mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image"></p-fileUpload>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="email2" class="font-medium text-900">Email</label>
                <input id="email2" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="country2" class="font-medium text-900">Country</label>
                <p-dropdown inputId="country2" [options]="countries" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                    <ng-template let-country pTemplate="item">
                        <div class="flex align-items-center">
                            <img src="assets/images/blocks/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px"/>
                            <div>{{country.name}}</div>
                        </div>
                    </ng-template>
                </p-dropdown>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city2" class="font-medium text-900">City</label>
                <input id="city2" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="state2" class="font-medium text-900">State</label>
                <input id="state2" type="text" pInputText>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="website2" class="font-medium text-900">Website</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">www</span>
                    <input id="website2" type="text" pInputText>      
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="privacy2" class="font-medium text-900">Privacy</label>
                <div class="flex align-items-center">
                    <p-inputSwitch inputId="privacy2"></p-inputSwitch>
                    <span class="ml-2 text-900">Share my data with contacts</span>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="col-12">
                <button pButton pRipple label="Save Changes" class="w-auto mt-3"></button>
            </div>
        </div>
    </div>
</div>`;

    block3 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Create Invoice</div>
    <div class="surface-card p-4 shadow-2 border-round p-fluid">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
                <label for="company_name" class="font-medium text-900">Company Name</label>
                <input id="company_name" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="invoice_id" class="font-medium text-900">Invoice Id</label>
                <input id="invoice_id" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="customer_name" class="font-medium text-900">Customer Name</label>
                <input id="customer_name" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="customer_email" class="font-medium text-900">Customer Email</label>
                <input id="customer_email" type="text" pInputText>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="invoice_date" class="font-medium text-900">Invoice Date</label>
                <p-calendar id="invoice_date" [showIcon]="true"></p-calendar>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="due_date" class="font-medium text-900">Due Date</label>
                <p-calendar id="due_date" [showIcon]="true"></p-calendar>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="item" class="font-medium text-900">Item</label>
                <input id="item" type="text" pInputText>
            </div>
            <div class="field mb-4 col-6 md:col-3">
                <label for="item" class="font-medium text-900">Quantity</label>
                <input id="item" type="text" pInputText>
            </div>
            <div class="field mb-4 col-6 md:col-3">
                <label for="item" class="font-medium text-900">Price</label>
                <div class="flex align-content-center">
                    <p-inputNumber mode="currency" currency="USD" inputId="item" type="text" class="flex-1"></p-inputNumber>
                    <button pButton pRipple icon="pi pi-trash" class="p-button-danger p-button-text ml-2"></button>
                </div>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <button pButton pRipple icon="pi pi-plus" label="Add Item" class="p-button-secondary p-button-outlined w-auto"></button>
            </div>
            <div class="field mb-4 col-12 md:col-6 text-right">
                <span class="text-xl text-600 font-medium mr-2">Total</span>
                <span class="text-xl text-900 font-medium">$59</span>
            </div>
            <div class="field mb-4 col-12 flex align-items-center">
                <p-checkbox [binary]="true"></p-checkbox>
                <span class="ml-2 text-900">Taxable (VAT 18%)</span>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="notes" class="font-medium text-900">Notes</label>
                <textarea id="notes" pInputTextarea [autoResize]="true" [rows]="5"></textarea>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
        </div>
        <button pButton pRipple label="Create Invoice" icon="pi pi-file" class="w-auto"></button>
    </div>
</div>`;

}
