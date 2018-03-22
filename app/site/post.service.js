"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ServerAppService = (function () {
    function ServerAppService(document, http) {
        this.document = document;
        this.http = http;
        this.load_status = false;
        if (document.location.hostname == 'localhost') {
            this.hostname = document.location.hostname + ':8000';
        }
        else {
            this.hostname = document.location.hostname;
        }
        console.log(this.hostname);
    }
    ServerAppService.prototype.load = function () {
        return this.http.get('http://' + this.hostname + '/api').map(function (data) { return data = data.json(); }).catch(this.data_error);
    };
    ServerAppService.prototype.load_portfolio = function () {
        return this.http.get('http://' + this.hostname + '/portfolio/api').map(function (data) {
            return data = data.json();
        }).catch(this.data_error);
    };
    ServerAppService.prototype.postView = function (id) {
        console.log(id);
        return this.http.get('http://' + this.hostname + "/api/" + id).map(function (data) { return data = data.json(); }).catch(this.data_error);
    };
    ServerAppService.prototype.sendTo = function (data) {
        var tojson = JSON.stringify(data);
        var head = new http_1.Headers();
        head.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.hostname + '/api/post', tojson, { headers: head }).map(function (res) { return console.log(res.json()); });
    };
    ServerAppService.prototype.testLogin = function (data) {
        var tojson = JSON.stringify(data);
        var head = new http_1.Headers();
        return this.http.post('http://' + this.hostname + '/oauth/token', tojson, { headers: head }).map(function (res) { return console.log(res.json()); });
    };
    ServerAppService.prototype.data_error = function (data) {
        console.log(data);
    };
    return ServerAppService;
}());
ServerAppService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT))
], ServerAppService);
exports.ServerAppService = ServerAppService;
