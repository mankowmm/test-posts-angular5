import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerComponent implements OnInit {

  @ViewChild('errormodaltemplate')
  private errormodaltemplate: TemplateRef<any>;
  private modalRef: BsModalRef;
  private title: string;
  private errorMessage: string;

  constructor(private modalService: BsModalService) { }

  openModal(title: string, errorMessage: string) {
    this.errorMessage = errorMessage;
    this.title = title;
    const initialState = {
      title: this.title,
      message: this.errorMessage
    };
    this.modalRef = this.modalService.show(ErrorHandlerModalComponent, {initialState});
  }

  ngOnInit() {
  }

}


/* This is the Modal Component */
@Component({
  selector: 'app-error-handler-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{message}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
})
export class ErrorHandlerModalComponent implements OnInit {
  title: string;
  message: string;
  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit() { }
}
