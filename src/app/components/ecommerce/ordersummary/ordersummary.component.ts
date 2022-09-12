import { Component } from '@angular/core';

@Component({
    templateUrl: './ordersummary.component.html'
})
export class OrderSummaryComponent {

    block1: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <span class="text-700 text-xl">Thanks!</span>
    <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
    <p class="text-700 text-xl mt-0 mb-4 p-0">Your order is on the way. It'll be shipped today. We'll inform you.</p>
    <div style="height:3px;background:linear-gradient(90deg, #2196F3 0%, rgba(33, 150, 243, 0) 50%);"></div>

    <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5">
        <div class="mb-3 sm:mb-0">
            <span class="font-medium text-xl text-900 mr-2">Order number:</span>
            <span class="font-medium text-xl text-blue-500">451234</span>
        </div>
        <div>
            <button pButton pRipple label="Details" icon="pi pi-list" class="p-button-outlined p-button-secondary mr-2"></button>
            <button pButton pRipple label="Print" icon="pi pi-print" class="p-button-outlined p-button-secondary"></button>
        </div>
    </div>
    <div class="border-round surface-border border-1">
        <ul class="list-none p-0 m-0">
            <li class="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center">
                <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-1-1.png" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div class="flex flex-column">
                    <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span class="text-600 font-medium mb-3">Blue | Medium</span>
                    <span class="text-900 font-medium">Quantity 1</span>
                </div>
                <span class="text-900 font-medium text-lg ml-auto">$12.00</span>
            </li>
            <li class="p-3 flex align-items-center">
                <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-1-2.png" class="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2" />
                <div class="flex flex-column">
                    <span class="text-900 font-medium text-xl mb-2">Product Name</span>
                    <span class="text-600 font-medium mb-3">Yellow | Large</span>
                    <span class="text-900 font-medium">Quantity 1</span>
                </div>
                <span class="text-900 font-medium text-lg ml-auto">$24.00</span>
            </li>
        </ul>
    </div>
    <div class="flex flex-wrap mt-5 pb-3">
        <div class="w-full lg:w-6 pl-3">
            <span class="font-medium text-900">Shipping Address</span>
            <div class="flex flex-column text-900 mt-3 mb-5">
                <span class="mb-1">Celeste Slater</span>
                <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                <span>(786) 713-8616</span>
            </div>

            <span class="font-medium text-900">Payment</span>
            <div class="flex align-items-center mt-3">
                <img src="assets/images/blocks/ecommerce/ordersummary/visa.png" class="w-4rem mr-3" />
                <div class="flex flex-column">
                    <span class="text-900 mb-1">Visa Debit Card</span>
                    <span class="text-900 font-medium">**** **** **** 1234</span>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
            <ul class="list-none p-0 m-0 w-full">
                <li class="mb-3"><span class="font-medium text-900">Summary</span></li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Subtotal</span>
                    <span class="text-900 font-medium text-lg">$36.00</span>
                </li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Shipping</span>
                    <span class="text-900 font-medium text-lg">$5.00</span>
                </li>
                <li class="flex justify-content-between mb-3">
                    <span class="text-900">Tax</span>
                    <span class="text-900 font-medium text-lg">$4.00</span>
                </li>
                <li class="flex justify-content-between border-top-1 surface-border py-3">
                    <span class="text-900 font-medium">Total</span>
                    <span class="text-900 font-bold text-lg">$41.00</span>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
        <span class="text-2xl font-medium text-900">Thanks for your order!</span>
        <div class="flex mt-3 sm:mt-0">
            <div class="flex flex-column align-items-center">
                <span class="text-900 font-medium mb-2">Order ID</span>
                <span class="text-700">451234</span>
            </div>
            <div class="flex flex-column align-items-center ml-6 md:ml-8">
                <span class="text-900 font-medium mb-2">Order Date</span>
                <span class="text-700">7 Feb 2023</span>
            </div>
        </div>
    </div>
    <div class="flex flex-column md:flex-row md:align-items-center border-bottom-1 surface-border py-5">
        <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-2-1.png" class="w-15rem flex-shrink-0 md:mr-6" />
        <div class="flex-auto mt-3 md:mt-0">
            <span class="text-xl text-900">Product Name</span>
            <div class="font-medium text-2xl text-900 mt-3 mb-5">Order Processing</div>
            <div class="border-round overflow-hidden surface-300 mb-3" style="height:7px">
                <div class="bg-primary border-round w-4 h-full"></div>
            </div>
            <div class="flex w-full justify-content-between">
                <span class="text-900 text-xs sm:text-base">Ordered</span>
                <span class="text-900 font-medium text-xs sm:text-base">Processing</span>
                <span class="text-500 text-xs sm:text-base">Shipping</span>
                <span class="text-500 text-xs sm:text-base">Delivered</span>
            </div>
        </div>
    </div>
    <div class="py-5 flex justify-content-between flex-wrap">
        <div class="flex sm:mr-5 mb-5">
            <span class="font-medium text-900 text-xl mr-8">Product Name</span>
            <span class="text-900 text-xl">$21.00</span>
        </div>
        <div class="flex flex-column sm:mr-5 mb-5">
            <span class="font-medium text-900 text-xl">Shipping Address</span>
            <div class="flex flex-column text-900 mt-3">
                <span class="mb-1">Celeste Slater</span>
                <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                <span>(786) 713-8616</span>
            </div>
        </div>
        <div class="flex flex-column">
            <span class="font-medium text-900 text-xl">Payment</span>
            <div class="flex align-items-center mt-3">
                <img src="assets/images/blocks/ecommerce/ordersummary/visa.png" class="w-4rem mr-3" />
                <div class="flex flex-column">
                    <span class="text-900 mb-1">Visa Debit Card</span>
                    <span class="text-900 font-medium">**** **** **** 1234</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="border-round surface-card p-5 shadow-4">
        <div class="flex flex-column lg:flex-row">
            <div class="flex flex-auto flex-column md:flex-row">
                <div class="md:pr-5 lg:pr-8 border-bottom-1 pb-5 md:border-bottom-none md:border-right-1 surface-border flex justify-content-center md:justify-content-start">
                    <ul class="list-none p-0 m-0">
                        <li class="h-6rem flex">
                            <div class="flex flex-column align-items-center">
                                <div class="bg-primary border-primary border-circle flex-shrink-0" style="border: 3px solid; height:1.5rem; width: 1.5rem"></div>
                                <div class="bg-primary h-6rem" style="width:3px"></div>
                            </div>
                            <div class="flex flex-column ml-3">
                                <span class="font-medium text-900 mb-2">Ordered</span>
                                <span class="text-600">22 Feb</span>
                            </div>
                        </li>
                        <li class="h-6rem flex">
                            <div class="flex flex-column align-items-center">
                                <div class="surface-card border-primary border-circle flex-shrink-0" style="border: 3px solid; height:1.5rem; width: 1.5rem"></div>
                                <div class="surface-300 h-6rem" style="width:3px"></div>
                            </div>
                            <div class="flex flex-column ml-3">
                                <span class="font-medium text-900 mb-2">Processing</span>
                                <span class="text-600">23 Feb</span>
                            </div>
                        </li>
                        <li class="h-6rem flex">
                            <div class="flex flex-column align-items-center">
                                <div class="surface-300 border-300 border-circle flex-shrink-0" style="border: 3px solid; height:1.5rem; width: 1.5rem"></div>
                                <div class="surface-300 h-6rem" style="width:3px"></div>
                            </div>
                            <div class="flex flex-column ml-3">
                                <span class="font-medium text-900 mb-2">Shipping</span>
                                <span class="text-600">Est. 24 Feb</span>
                            </div>
                        </li>
                        <li class="h-6rem flex">
                            <div class="flex flex-column align-items-center">
                                <div class="surface-300 border-300 border-circle flex-shrink-0" style="border: 3px solid; height:1.5rem; width: 1.5rem"></div>
                                <div class="surface-300 h-6rem" style="width:3px"></div>
                            </div>
                            <div class="flex flex-column ml-3">
                                <span class="font-medium text-900 mb-2">Delivered</span>
                                <span class="text-600">Est. 26 Feb</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex-auto md:pl-5 lg:pr-5 pt-5 md:pt-0 border-right-none lg:border-right-1 surface-border">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="font-medium text-2xl text-900">Product Title</span>
                        <button pButton pRipple class="p-button-text font-medium">Invoice</button>
                    </div>
                    <div class="text-xl text-700 mb-5">$120.00</div>
                    <div class="flex flex-column xl:flex-row mb-5">
                        <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-3-1.png" class="w-12rem xl:mr-5 mb-5 xl:mb-0" />
                        <img src="assets/images/blocks/ecommerce/ordersummary/order-summary-3-2.png" class="w-12rem"/>
                    </div>
                    <div class="flex flex-column">
                        <span class="text-xl font-medium mb-3 text-900">Address</span>
                        <div class="flex flex-column text-700">
                            <span class="mb-1">Celeste Slater</span>
                            <span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span>
                            <span>(786) 713-8616</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-column border-top-1 lg:border-top-none surface-border pl-0 pt-5 lg:pt-0 lg:pl-5 mt-5 lg:mt-0">
                <button pButton pRipple icon="pi pi-star" label="Review" class="p-button-outlined mb-3"></button>
                <button pButton pRipple icon="pi pi-times" label="Cancel" class="p-button-outlined p-button-danger"></button>
            </div>
        </div>
    </div>
</div>`;

}
