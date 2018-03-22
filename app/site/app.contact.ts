import {Component} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import {ServerAppService} from './post.service';
import {Router} from '@angular/router'

@Component({
    selector: 'contact',
    providers:[ServerAppService],
    templateUrl: '/template/app.contact.html',

    styles:[
        `
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}
.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
.ng-untouched:not(form){
 border-left: 5px solid #fff /* green */
}
`
    ]
      
 })
 
export class ContactComponent {

    public model={
        name: "",
        email: "",
        text: ""
    };
    public showAlert = true;


 constructor(private server:ServerAppService,private router:Router){

 }

 public from_server :any

    onSubmit(form:NgForm){
        form.resetForm(this.model);
        this.showAlert = false;
        this.sendPost(this.model)
  }

    sendPost(data:any):void{
      this.server.sendTo(data).subscribe(
          (data)=>this.from_server = data
      );

    }
    public goContact(){

         this.showAlert = true;
         // this.router.navigate(['/contact']);

    }



}
