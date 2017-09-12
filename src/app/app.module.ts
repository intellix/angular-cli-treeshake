import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NgbModalModule, NgbModal, NgbActiveModal, ModalDismissReasons,
  NgbAccordionModule,
  NgbDatepickerModule, NgbDateStruct, NgbDateParserFormatter,
  NgbTooltipModule,
  NgbPopoverModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule.forRoot(),
    NgbAccordionModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTooltipModule.forRoot(),
    NgbPopoverModule.forRoot(),
    NgbDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
