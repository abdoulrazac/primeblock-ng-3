import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './gridlist.component.html'
})
export class GridListComponent {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
        {
            label: 'Options',
            items: [
                {label: 'Reports', icon: 'pi pi-fw pi-chart-line'},
                {label: 'Search', icon: 'pi pi-fw pi-search'}
            ]
        }];
    }

    block1 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">Lindsay Connor</span>
                        <span class="text-600 font-medium mb-2">Test Engineer</span>
                        <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">James McAvoy</span>
                        <span class="text-600 font-medium mb-2">Project Manager</span>
                        <span class="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">Aisha Jones</span>
                        <span class="text-600 font-medium mb-2">Designer</span>
                        <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">Roberto Fox</span>
                        <span class="text-600 font-medium mb-2">QA Engineer</span>
                        <span class="bg-orange-50 text-orange-400 border-round inline-flex py-1 px-2 text-sm">Author</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">Jenny Wilson</span>
                        <span class="text-600 font-medium mb-2">Scrum Master</span>
                        <span class="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-4 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex border-bottom-1 surface-border pb-4">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-5.png" style="width: 70px;height: 70px" class="mr-3" />
                    <div class="flex flex-column align-items-start">
                        <span class="text-lg text-900 font-medium mb-1">Claire Flores</span>
                        <span class="text-600 font-medium mb-2">Developer</span>
                        <span class="bg-teal-50 text-teal-400 border-round inline-flex py-1 px-2 text-sm">Subscriber</span>
                    </div>
                </div>
                <div class="flex justify-content-between pt-4">
                    <button pButton pRipple label="View" icon="pi pi-search" class="p-button-outlined p-button-secondary w-6 mr-2"></button>
                    <button pButton pRipple label="Follow" icon="pi pi-user-plus" class="p-button-outlined p-button-secondary w-6 ml-2"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Jane Fox</span>
                    <span class="text-600 font-medium mb-2">Project Manager</span>
                    <span class="text-600 surface-200 p-2 border-round">Subscriber</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Robert Wilkins</span>
                    <span class="text-600 font-medium mb-2">Developer</span>
                    <span class="text-600 surface-200 p-2 border-round">Editor</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Jenny Wilson</span>
                    <span class="text-600 font-medium mb-2">Marketing</span>
                    <span class="text-600 surface-200 p-2 border-round">Subscriber</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Alberto Flores</span>
                    <span class="text-600 font-medium mb-2">Accounting</span>
                    <span class="text-600 surface-200 p-2 border-round">Moderator</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Regina Miles</span>
                    <span class="text-600 font-medium mb-2">Developer</span>
                    <span class="text-600 surface-200 p-2 border-round">Contributor</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Gary Richards</span>
                    <span class="text-600 font-medium mb-2">Designer</span>
                    <span class="text-600 surface-200 p-2 border-round">Subscriber</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Nelly Cooper</span>
                    <span class="text-600 font-medium mb-2">Sales Specialist</span>
                    <span class="text-600 surface-200 p-2 border-round">Editor</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center mb-3">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-4.png" style="width: 70px;height: 70px" class="mb-3" />
                    <span class="font-medium text-900 text-xl mb-3">Cody Roberts</span>
                    <span class="text-600 font-medium mb-2">Designer</span>
                    <span class="text-600 surface-200 p-2 border-round">Author</span>
                </div>
                <div class="pt-3 border-top-1 surface-border flex">
                    <button pButton pRipple type="button" icon="pi pi-user-plus" class="flex-auto mr-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                    <button pButton pRipple type="button" icon="pi pi-send" class="flex-auto ml-2 p-button-outlined p-button-plain" style="border-radius: 30px"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block3 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/bracelet.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Bamboo Watch</span>
                    <span class="text-600 font-medium mb-3">Duis Aute Irure</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$9.66</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/galaxy-earrings.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Black Watch</span>
                    <span class="text-600 font-medium mb-3">Ullam libero</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$12.45</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/shoes.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Shoes</span>
                    <span class="text-600 font-medium mb-3">Eveniet magnam</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$21.50</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/yoga-mat.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Yoga-Mat</span>
                    <span class="text-600 font-medium mb-3">Quis minus soluta</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$15.00</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/headphones.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Headphones</span>
                    <span class="text-600 font-medium mb-3">Sunt facere tempora</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$44.50</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/pink-purse.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Lime Band</span>
                    <span class="text-600 font-medium mb-3">Lorem Ipsum Dolor</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$5.90</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/purple-gemstone-necklace.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">Necklace</span>
                    <span class="text-600 font-medium mb-3">Sit amet consectetur</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$21.90</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-4">
                <div class="flex flex-column align-items-center border-bottom-1 surface-border pb-3">
                    <img src="assets/images/blocks/products/purple-t-shirt.jpg" class="mb-3 w-9" />
                    <span class="text-lg text-900 font-medium mb-2">T-Shirt</span>
                    <span class="text-600 font-medium mb-3">Adipisicing elit</span>
                    <span class="text-2xl text-800 block mb-3 font-semibold">$18.50</span>
                    <p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating>
                </div>
                <div class="flex pt-3 justify-content-between align-items-center">
                    <button pButton pRipple icon="pi pi-shopping-cart" label="Buy Now" class="p-button-text"></button>
                    <button pButton pRipple icon="pi pi-heart" class="p-button-text p-button-secondary"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block4 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 lg:col-4 p-3">
            <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style="width:48px;height:48px;border-radius:10px" class="bg-teal-100 inline-flex align-items-center justify-content-center mr-3">
                    <i class="pi pi-shield text-teal-600 text-3xl"></i>
                </div>
                <div>
                    <span class="text-900 text-xl font-medium mb-2">Security</span>
                    <p class="mt-1 mb-0 text-600 font-medium text-sm">Proin libero nunc</p>
                </div>
                <div class="ml-auto">
                    <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu1.toggle($event)"></button>
                    <p-menu #menu1 [popup]="true" [model]="items"></p-menu>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style="width:48px;height:48px;border-radius:10px" class="bg-pink-100 inline-flex align-items-center justify-content-center mr-3">
                    <i class="pi pi-users text-pink-600 text-3xl"></i>
                </div>
                <div>
                    <span class="text-900 text-xl font-medium mb-2">Staff</span>
                    <p class="mt-1 mb-0 text-600 font-medium text-sm">Lorem ipsum dolor</p>
                </div>
                <div class="ml-auto">
                    <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu2.toggle($event)"></button>
                    <p-menu #menu2 [popup]="true" [model]="items"></p-menu>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="p-3 border-round shadow-2 flex align-items-center surface-card">
                <div style="width:48px;height:48px;border-radius:10px" class="bg-orange-100 inline-flex align-items-center justify-content-center mr-3">
                    <i class="pi pi-wallet text-orange-600 text-3xl"></i>
                </div>
                <div>
                    <span class="text-900 text-xl font-medium mb-2">Finance</span>
                    <p class="mt-1 mb-0 text-600 font-medium text-sm">Vestibulum lorem</p>
                </div>
                <div class="ml-auto">
                    <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu1.toggle($event)"></button>
                    <p-menu #menu1 [popup]="true" [model]="items"></p-menu>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-1.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">sed-risus</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 971 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Yesterday 11:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">2732x1690</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-2.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">morbit-blandit</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 350 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Today 09:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-3.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">neque-aliquam</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 458 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Yesterday 11:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1280x720</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-4.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">solestie-ac-final</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 102 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Today 15:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-5.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">neqeu-viverra</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 432 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Today 14:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">2732x-1690</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-6.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">enim-nec-dui</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 330 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Today 10:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-7.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">cursus-sit</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 1001 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Yesterday 20:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1280x720</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 md:col-6 xl:col-3 p-3">
            <div class="surface-card shadow-2 border-rounded p-3" style="border-radius: 6px">
                <img src="assets/images/blocks/nature/nature-8.png" class="mb-3 w-full" />
                <div class="flex justify-content-between align-items-start">
                    <div>
                        <div class="text-xl font-medium text-900 mb-2">odio-ut-enim</div>
                        <p class="mt-0 mb-3 text-600">PNG image - 660 KB</p>
                    </div>
                    <button pButton pRipple icon="pi pi-download" class="p-button-rounded p-button-text"></button>
                </div>
                <ul class="list-none m-0 p-0">
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Created</span>
                        <span class="text-900 font-medium text-sm">Today 11:30</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                        <span class="text-600 font-medium text-sm">Dimensions</span>
                        <span class="text-900 font-medium text-sm">1920x1080</span>
                    </li>
                    <li class="px-0 py-2 flex justify-content-between align-items-center">
                        <span class="text-600 font-medium text-sm">Resolution</span>
                        <span class="text-900 font-medium text-sm">144x144</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

    block6 = `
<div class="surface-ground">
    <div class="grid">
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                    <div class="flex align-items-center">
                        <span class="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3" style="width:38px;height:38px">
                            <i class="pi pi-globe text-xl text-green-600"></i>
                        </span>
                        <span class="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div class="text-900 my-3 text-xl font-medium">Quam adipiscing vitae proin sagittis.</div>
                    <p class="mt-0 mb-3 text-700 line-height-3">Eget sit amet tellus cras adipiscing enim. At quis risus sed vulputate odio. Proin libero nunc consequat interdum varius sit amet.</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                    <button pButton pRipple icon="pi pi-arrow-right" label="More" class="p-button-rounded p-button-success"></button>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                    <div class="flex align-items-center">
                        <span class="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3" style="width:38px;height:38px">
                            <i class="pi pi-globe text-xl text-yellow-600"></i>
                        </span>
                        <span class="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div class="text-900 my-3 text-xl font-medium">Proin libero nunci</div>
                    <p class="mt-0 mb-3 text-700 line-height-3">Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Vulputate odio ut enim blandit volutpat maecenas. Convallis tellus id interdum velit.</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                    <button pButton pRipple icon="pi pi-download" label="Load" class="p-button-rounded p-button-warning"></button>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                <div class="p-4">
                    <div class="flex align-items-center">
                        <span class="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3" style="width:38px;height:38px">
                            <i class="pi pi-globe text-xl text-purple-600"></i>
                        </span>
                        <span class="text-900 font-medium text-2xl">Card Title</span>
                    </div>
                    <div class="text-900 my-3 text-xl font-medium"> At obcaecati quos ipsam laboriosam.</div>
                    <p class="mt-0 mb-3 text-700 line-height-3">Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Id neque aliquam vestibulum morbi blandit cursus risus at ipsum.</p>
                </div>
                <div class="px-4 py-3 surface-100 text-right">
                    <button pButton pRipple icon="pi pi-bookmark" label="Save" class="p-button-rounded p-button-help"></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block7 = `
<div class="shadow-2 border-round surface-card p-4">
    <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-xl font-medium text-900">Files</span>
        <button pButton pRipple icon="pi pi-refresh" class="p-button-rounded p-button-outlined"></button>
    </div>
    <div class="grid">
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/word.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">resume.docx</span>
                <div class="text-600 text-sm mt-2">520KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/excel.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">customers.xlsx</span>
                <div class="text-600 text-sm mt-2">120KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/excel.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">stats.xlsx</span>
                <div class="text-600 text-sm mt-2">500KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/ps.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">mock.ps</span>
                <div class="text-600 text-sm mt-2">220KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/atom.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">template.js</span>
                <div class="text-600 text-sm mt-2">10KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/code.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">main.css</span>
                <div class="text-600 text-sm mt-2">10KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/ai.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">poc.ai</span>
                <div class="text-600 text-sm mt-2">4.2MB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/word.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">sales.docx</span>
                <div class="text-600 text-sm mt-2">420KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/word.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">mynotes.one</span>
                <div class="text-600 text-sm mt-2">60KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/code.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">layout.css</span>
                <div class="text-600 text-sm mt-2">25KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/word.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">reports.docx</span>
                <div class="text-600 text-sm mt-2">120KB</div>
            </div>
        </div>
        <div class="col-12 sm:col-6 lg:col-3 xl:col-2 p-3">
            <div class="text-center">
                <div class="border-1 border-200 surface-50 flex align-items-center justify-content-center border-round mb-3 mx-auto" style="width:90px; height:90px">
                    <img src="assets/images/blocks/file/ps.svg" style="width: 48;height: 48" />
                </div>
                <span class="text-900 font-medium">design.psd</span>
                <div class="text-600 text-sm mt-2">1.2MB</div>
            </div>
        </div>
    </div>
</div>`;

}
