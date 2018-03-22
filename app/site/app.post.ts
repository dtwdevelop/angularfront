/**
 * Created by hider on 14/02/2017.
 */
import {Component} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';



@Component({
    selector: 'post',
    templateUrl: '/template/app.post.html',

    providers:[ServerAppService],

    styles:[
        ``
    ]

})

export class PostComponent {
    public name:string ="";
    public datas :any;
    public show = new Date();
    public result;
    public status  =true;
    public status2:boolean=false;


    constructor(server:ServerAppService){
        this.status2 = true;
        server.load().subscribe(
            (d)=> {
                this.datas = d.data
                this.status2 = false
            }

        );
    }
    hide(){
        this.status= false;
    }
    showme(text:string):void{
        this.name =text;
        console.log(this.datas);
    }


}


