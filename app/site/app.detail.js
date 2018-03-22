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
var DetailComponent = (function () {
    function DetailComponent(server, active) {
        var _this = this;
        this.server = server;
        this.active = active;
        this.pactive = "active";
        this.model = {
            id: 1,
            title: "Title view detail",
            post: "Post detail"
        };
        this.active.params.subscribe(function (param) {
            _this.id = param['id'];
            _this.status = false;
            if (param['id'] != null) {
                _this.dvalue = _this.model;
                _this.getPost(param['id']);
            }
        });
    }
    DetailComponent.prototype.getPost = function (id) {
        var _this = this;
        this.server.postView(this.id).subscribe(function (d) { return _this.dvalue = d; });
    };
    return DetailComponent;
}());
__decorate([
    core_1.Input()
], DetailComponent.prototype, "dvalue", void 0);
__decorate([
    core_1.Input()
], DetailComponent.prototype, "status", void 0);
DetailComponent = __decorate([
    core_1.Component({
        selector: 'detail',
        templateUrl: '/template/app.detail.html',
        providers: [post_service_1.ServerAppService],
        styles: [
            ""
        ],
        animations: [
            core_1.trigger('Content', [
                core_1.state('inactive', core_1.style({ transform: 'translateX(0) scale(1)' })),
                core_1.state('active', core_1.style({ transform: 'translateX(0) scale(1.1)' })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out')),
                core_1.transition('void => inactive', [
                    core_1.style({ transform: 'translateX(-100%) scale(1)' }),
                    core_1.animate(100)
                ]),
                core_1.transition('inactive => void', [
                    core_1.animate(100, core_1.style({ transform: 'translateX(100%) scale(1)' }))
                ]),
                core_1.transition('void => active', [
                    core_1.style({ transform: 'translateX(0) scale(0)' }),
                    core_1.animate(200)
                ]),
                core_1.transition('active => void', [
                    core_1.animate(200, core_1.style({ transform: 'translateX(0) scale(0)' }))
                ])
            ])
        ]
    })
], DetailComponent);
exports.DetailComponent = DetailComponent;
