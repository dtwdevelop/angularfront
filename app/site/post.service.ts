import {Injectable,Inject} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DOCUMENT} from '@angular/platform-browser';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ServerAppService {
    public hostname;
    public load_status:boolean = false;
    constructor(@Inject(DOCUMENT) private document, private http:Http){
        if(document.location.hostname =='localhost'){
            this.hostname  = document.location.hostname+':8000';
        }
        else{
            this.hostname  = document.location.hostname;
        }



    }

    load():any{

       return  this.http.get('http://'+this.hostname+'/api').map(
            (data:Response)=>data = data.json()
        ).catch(this.data_error);
    }

    load_portfolio():any{

        return  this.http.get('http://'+this.hostname+'/portfolio/api').map(
            (data:Response)=>{

                return data = data.json()
            }).catch(this.data_error);

    }

    postView(id:string):any{

        return this.http.get('http://'+this.hostname+"/api/"+id).map(
            (data:Response)=>data = data.json()).catch(this.data_error);
    }


    sendTo(data:any):any{
       var tojson = JSON.stringify(data);
       var head = new Headers();
       head.append('Content-Type', 'application/json');

     return this.http.post('http://'+this.hostname+'/api/post',tojson,{headers:head}).map(
          (res:Response)=>console.log(res.json())
      );
    }

    testLogin(data):any{
        var tojson = JSON.stringify(data);
        var head = new Headers();
        return this.http.post('http://'+this.hostname+'/oauth/token',tojson,{headers:head}).map(
           (res:Response)=>console.log(res.json())
        );
    }



    private  data_error(data:Response):any{

    }
}

