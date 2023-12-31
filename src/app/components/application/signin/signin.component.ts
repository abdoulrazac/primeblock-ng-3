import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    features: any[];

    ngOnInit() {
        this.features = [
            { title: 'Unlimited Inbox', image: 'live-collaboration.svg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Data Security', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Cloud Backup Williams', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ];
    }

    block1 = `
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <input id="email1" type="text" pInputText class="w-full mb-3">

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <input id="password1" type="password" pInputText class="w-full mb-3">

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
    </div>
</div>`;

    block2 = `
<div class="flex">
    <div class="surface-section w-full md:w-6 p-6 md:p-8">
         <div class="mb-5">
             <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
             <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
             <span class="text-600 font-medium mr-2">Don't have an account?</span>
             <a class="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a>
         </div>
         <div>
             <label for="email2" class="block text-900 font-medium mb-2">Email</label>
             <input id="email2" type="text" pInputText class="w-full mb-3 p-3">
 
             <label for="password2" class="block text-900 font-medium mb-2">Password</label>
             <input id="password2" type="password" pInputText class="w-full mb-3 p-3">
 
             <div class="flex align-items-center justify-content-between mb-6">
                 <div class="flex align-items-center">
                     <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox>
                     <label for="rememberme2">Remember me</label>
                 </div>
                 <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
             </div>
 
             <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full p-3"></button>
         </div>
    </div>
    <div class="hidden md:block w-6 bg-no-repeat bg-cover" style="background-image: url('assets/images/blocks/signin/signin.jpg')"></div>
</div>`;

    block3 = `
<div style="background: url('assets/images/blocks/signin/signin-2.jpg') no-repeat; background-size: cover" class="px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6 p-4 lg:p-7" style="background-color: rgba(255,255,255,.7)">
            <img src="assets/images/blocks/logos/bastion-purple.svg" alt="Image" height="50" class="mb-6">
            <div class="text-xl text-900 font-500 mb-3">Welcome to Bastion</div>
            <p class="text-600 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-start mb-4">
                    <div>
                        <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
                            <i class="text-xl text-white pi pi-inbox"></i>
                        </span>
                    </div>
                    <div class="ml-3">
                        <span class="font-medium text-900">Unlimited Inbox</span>
                        <p class="mt-2 mb-0 text-600 line-height-3">Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. </p>
                    </div>
                </li>
                <li class="flex align-items-start mb-4">
                    <div>
                        <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
                            <i class="text-xl text-white pi pi-shield"></i>
                        </span>
                    </div>
                    <div class="ml-3">
                        <span class="font-medium text-900">Premium Security</span>
                        <p class="mt-2 mb-0 text-600 line-height-3">Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.</p>
                    </div>
                </li>
                <li class="flex align-items-start">
                    <div>
                        <span class="flex align-items-center justify-content-center bg-purple-400" style="width:38px;height:38px;border-radius:10px">
                            <i class="text-xl text-white pi pi-globe"></i>
                        </span>
                    </div>
                    <div class="ml-3">
                        <span class="font-medium text-900">Cloud Backups Inbox</span>
                        <p class="mt-2 mb-0 text-600 line-height-3">Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
            <div class="text-900 text-2xl font-medium mb-6">Login</div>
            <label for="email3" class="block text-900 font-medium mb-2">Email</label>
            <input id="email3" type="text" pInputText class="w-full mb-4">

            <label for="password3" class="block text-900 font-medium mb-2">Password</label>
            <input id="password3" type="password" pInputText class="w-full mb-4">

            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <p-checkbox id="rememberme3" [binary]="true" styleClass="mr-2"></p-checkbox>
                    <label for="rememberme3">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>

            <button pButton pRipple label="Login" icon="pi pi-user" class="w-full"></button>

            <p-divider align="center" styleClass="my-6">
                <span class="text-600 font-normal text-sm">OR</span>
            </p-divider>

            <button pButton pRipple label="Sign In with GitHub" icon="pi pi-github" class="w-full p-button-secondary"></button>

            <div class="mt-6 text-center text-600">
                Don't have an account? <a tabindex="0" class="font-medium text-blue-500">Sign up</a>
            </div>
        </div>
    </div>
</div>`;

    block4 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap shadow-2">
        <div class="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
            <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="35" class="mb-6">
            <p-carousel [value]="features">
                <ng-template let-feature pTemplate="item">
                    <div class="text-center mb-8">
                        <img src="assets/images/blocks/illustration/{{feature.image}}" alt="Image" class="mb-6 w-6">
                        <div class="mx-auto font-medium text-xl mb-4 text-blue-900">{{feature.title}}</div>
                        <p class="m-0 text-blue-700 line-height-3">{{feature.text}}</p>
                    </div>
                </ng-template>
            </p-carousel>
        </div>
        <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
            <div class="flex align-items-center justify-content-between mb-7">
                <span class="text-2xl font-medium text-900">Login to Bastion</span>
                <a tabindex="0" class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Sign up</a>
            </div>
            <div class="flex justify-content-between">
                <button pRipple class="mr-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                    <i class="pi pi-facebook text-indigo-400 mr-2"></i>
                    <span>Sign in With Facebook</span>
                </button>
                <button pRipple class="ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
                    <i class="pi pi-google text-pink-400 mr-2"></i>
                    <span>Sign in With Google</span>
                </button>
            </div>
            <p-divider align="center" styleClass="my-4">
                <span class="text-600 font-normal text-sm">OR</span>
            </p-divider>

            <label for="email4" class="block text-900 font-medium mb-2">Email</label>
            <input id="email4" type="text" pInputText class="w-full mb-3 p-3">

            <label for="password4" class="block text-900 font-medium mb-2">Password</label>
            <input id="password4" type="password" pInputText class="w-full mb-3 p-3">

            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <p-checkbox id="rememberme" [binary]="true" styleClass="mr-2"></p-checkbox>
                    <label for="rememberme4">Remember me</label>
                </div>
                <a class="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
            </div>

            <button pButton pRipple label="Sign In" class="w-full py-3 font-medium"></button>
        </div>
    </div>
</div>`;

    block5 = `
<div class="px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center" style="background:linear-gradient(-225deg,#ac32e4,#7918f2 48%,#4801ff)">
    <div class="p-6 shadow-2 text-center lg:w-30rem" style="border-radius: 12px;background-color: rgba(255,255,255,.1);color: rgba(255,255,255,.8)">
        <div class="text-4xl font-medium mb-6">Welcome</div>
        <input type="text" class="appearance-none border-none p-3 w-full outline-none text-xl block mb-4 bg-white-alpha-10 text-white-alpha-60" value="Email" style="border-radius: 30px">
        <input type="password" class="appearance-none border-none p-3 w-full outline-none text-xl mb-4 bg-white-alpha-10 text-white-alpha-60" value="Password" style="border-radius: 30px">
        <button type="button" class="appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium w-12rem bg-white-alpha-30 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150" style="border-radius: 30px">Sign In</button>
        <a class="cursor-pointer font-medium block text-center">Forgot Password?</a>
    </div>
</div>`;

}
