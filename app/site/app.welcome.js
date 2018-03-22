"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var post_service_1 = require("./post.service");
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.active = "active";
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcome',
        templateUrl: '/template/app.welcome.html',
        providers: [post_service_1.ServerAppService],
        styles: [
            ""
        ],
        animations: [
            core_1.trigger('Content', [
                core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.style({ transform: 'translateX(-100%)' }),
                    core_1.animate(100)
                ]),
                core_1.transition('* => void', [
                    core_1.animate(100, core_1.style({ transform: 'translateX(100%)' }))
                ])
            ])
        ]
    })
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
