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
var CommentsComponent = (function () {
    function CommentsComponent(server) {
        this.server = server;
        this.model = {
            title: "Feed back",
            email: "vipson@cp.com",
            comment: "Development in progress"
        };
        this.title = "First comment";
        this.post = "Sample post";
    }
    CommentsComponent.prototype.onSubmit = function (form) {
        // event.preventDefault();
        this.sendPost(this.model);
    };
    CommentsComponent.prototype.sendPost = function (data) {
        var _this = this;
        this.server.sendTo(data).subscribe(function (data) { return _this.from_server = data; });
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    core_1.Component({
        selector: 'comment',
        providers: [post_service_1.ServerAppService],
        template: "\n<div>\n<h3>{{title}}</h3>\n<p>{{post}}</p>\n</div>\n<span>{{from_server | async }}</span>\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n<span *ngIf=\"!f.form.valid\">\nfill all\n</span>\n<input [(ngModel)]=\"model.title\" type=\"text\"  name=\"title\" required>\n<br>\n<input [(ngModel)]=\"model.email\" type=\"email\" name=\"email\" required/>\n<br/>\n<textarea [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n<button type=\"submit\">Send</button>\n</form>\n<a routerLink=\"/\">Back</a>\n        ",
        styles: [
            "p{color:green}"
        ]
    })
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;
