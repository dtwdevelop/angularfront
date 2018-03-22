import {Component} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import {ServerAppService} from './post.service';


@Component({
    selector: 'comment',
    providers:[ServerAppService],
    template: `
<div>
<h3>{{title}}</h3>
<p>{{post}}</p>
</div>
<span>{{from_server | async }}</span>
<form (ngSubmit)="onSubmit(f)" #f="ngForm" >
<span *ngIf="!f.form.valid">
fill all
</span>
<input [(ngModel)]="model.title" type="text"  name="title" required>
<br>
<input [(ngModel)]="model.email" type="email" name="email" required/>
<br/>
<textarea [(ngModel)]="model.comment" name="comment"></textarea>
<button type="submit">Send</button>
</form>
<a routerLink="/">Back</a>
        `,

    styles:[
        `p{color:green}`
    ]
      
 })
 
export class CommentsComponent {

  public model ={
     title:"Feed back",
     email :"vipson@cp.com",
     comment:"Development in progress"

 }

 constructor(private server:ServerAppService){


 }

    public title="First comment"
    public post ="Sample post"
    public from_server :any

    onSubmit(form:NgForm){
       // event.preventDefault();
        this.sendPost(this.model)
  }

    sendPost(data:any):void{
      this.server.sendTo(data).subscribe(
          (data)=>this.from_server = data
      );

    }

}
