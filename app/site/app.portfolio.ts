/**
 * Created by hider on 14/02/2017.
 */import {Component,OnInit, ViewChild} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';
import { ConfirmComponent } from './app.confirm';
import { DialogService } from "ng2-bootstrap-modal";

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

    constructor(private server:ServerAppService , private dialogService:DialogService ){

}

    imageClick(image){
        console.log(image);
        this.fullImage = image;
    }

    showConfirm(image:string) {
        this.fullImage  =image

        let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title:'Work',
            message:"/works/"+this.fullImage})
            .subscribe((isConfirmed)=>{
                //We get dialog result
                if(isConfirmed) {
                   // alert('accepted');
                }
                else {
                    //alert('declined');
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(()=>{
            disposable.unsubscribe();
        },10000);
    }


}




