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
var ContactComponent = (function () {
    function ContactComponent(server, router) {
        this.server = server;
        this.router = router;
        this.model = {
            name: "",
            email: "",
            text: ""
        };
        this.showAlert = true;
    }
    ContactComponent.prototype.onSubmit = function (form) {
        form.resetForm(this.model);
        this.showAlert = false;
        this.sendPost(this.model);
    };
    ContactComponent.prototype.sendPost = function (data) {
        var _this = this;
        this.server.sendTo(data).subscribe(function (data) { return _this.from_server = data; });
    };
    ContactComponent.prototype.goContact = function () {
        this.showAlert = true;
        // this.router.navigate(['/contact']);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        providers: [post_service_1.ServerAppService],
        templateUrl: '/template/app.contact.html',
        styles: [
            "\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n.ng-untouched:not(form){\n border-left: 5px solid #fff /* green */\n}\n"
        ]
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
