import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
    title:string;
    message:string;
}
@Component({
    selector: 'confirm',
    template: `<div class="modal-dialog modal-lg">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                   </div>
                   <div class="modal-body">
                     <div class="container">
                    <div class="row">
                    <div class="col-sm-8">
                    <img class="img-responsive"  style=" max-width: 100%; height: auto;"  src="{{message}}"  class="" alt="..">
                    </div>
                   </div>
                   </div>
                   </div>
                   <div class="modal-footer">
                     <!--<button type="button" class="btn btn-primary" (click)="confirm()">OK</button>-->
                      <!--<button type="button" class="btn btn-default" (click)="close()" >Cancel</button>-->
                   </div>
                 </div>
              </div>`
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    title: string;
    message: string;
    constructor(dialogService: DialogService) {
        super(dialogService);
        console.log(this.message)
    }
    confirm() {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    }
}
