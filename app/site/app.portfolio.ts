/**
 * Created by hider on 14/02/2017.
 */import {Component,OnInit} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';

@Component({
    selector: 'services',
    templateUrl: '/template/app.portfolio.html',
    providers:[ServerAppService],

    styles:[
        ``
    ],
})

export class PortfolioComponent {
    public images
    public fullImage;
    public status:boolean;

    ngOnInit() {
        this.status = true;
       this.server.load_portfolio().subscribe(
           (image)=> {
               console.log(image)
               this.images = image
               this.status =false;
           }

       );
    }

    constructor(private server:ServerAppService){

    }

    imageClick(image){
        console.log(image);
        this.fullImage = image;
    }

}


