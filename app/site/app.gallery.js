"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.navigate = function (forward) {
        var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
        if (index >= 0 && index < this.datasource.length) {
            this.selectedImage = this.datasource[index];
        }
    };
    GalleryComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    return GalleryComponent;
}());
__decorate([
    core_1.Input()
], GalleryComponent.prototype, "datasource", void 0);
GalleryComponent = __decorate([
    core_1.Component({
        selector: 'gallery',
        templateUrl: '/template/app.gallery.html',
        styles: ["\n  \tul { padding:0;  margin:10px auto display:inline}\n  \tli { display:inline;}\n       \n  .caption{\n\tposition:absolute;\n    height:50px;\n\twidth:100%;\n\ttop:310;\n\tleft:0;\n\topacity:0.9;\n\tbackground-color:black;\n\tcolor:white;\n\tpadding:5px;\n\tfont-family:verdana;\n\tfont-size:12px;\n}\n.modal-dialog {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width:500px;\n    height:300px;\n}\n\np {\n   -webkit-margin-before: 5px !important;\n   -webkit-margin-after: 5px !important;\n}\n.btn-back, .btn-forward{\n\tposition:absolute;\n\topacity:0.9;\n\tbackground-color:black;\n\tpadding:10px;\n\ttop:190;\n\tcolor:white;\n\ttext-weight:bold;\n\tcursor:pointer;\n}\n \n.btn-forward{\n\tleft:612;\n}\n  "]
    })
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
