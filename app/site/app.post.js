"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hider on 14/02/2017.
 */
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(server) {
        var _this = this;
        this.name = "";
        this.show = new Date();
        this.status = true;
        this.status2 = false;
        this.status2 = true;
        server.load().subscribe(function (d) {
            _this.datas = d.data;
            _this.status2 = false;
        });
    }
    PostComponent.prototype.hide = function () {
        this.status = false;
    };
    PostComponent.prototype.showme = function (text) {
        this.name = text;
        console.log(this.datas);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post',
        templateUrl: '/template/app.post.html',
        providers: [post_service_1.ServerAppService],
        styles: [
            ""
        ]
    })
], PostComponent);
exports.PostComponent = PostComponent;
