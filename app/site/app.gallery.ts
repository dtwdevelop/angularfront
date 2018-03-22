import {Component, Input} from '@angular/core';

@Component({
    selector: 'gallery',
    templateUrl: '/template/app.gallery.html',

    styles: [`
  	ul { padding:0;  margin:10px auto display:inline}
  	li { display:inline;}
       
  .caption{
	position:absolute;
    height:50px;
	width:100%;
	top:310;
	left:0;
	opacity:0.9;
	background-color:black;
	color:white;
	padding:5px;
	font-family:verdana;
	font-size:12px;
}
.modal-dialog {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width:500px;
    height:300px;
}

p {
   -webkit-margin-before: 5px !important;
   -webkit-margin-after: 5px !important;
}
.btn-back, .btn-forward{
	position:absolute;
	opacity:0.9;
	background-color:black;
	padding:10px;
	top:190;
	color:white;
	text-weight:bold;
	cursor:pointer;
}
 
.btn-forward{
	left:612;
}
  `]
})
export class GalleryComponent {

    @Input() datasource;
    selectedImage;

    navigate(forward){
        var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
        if(index >= 0 && index < this.datasource.length){
            this.selectedImage = this.datasource[index];
        }
    }

    setSelectedImage(image){
        this.selectedImage= image;
    }
}
