import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { HttpClientModule } from'@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { AmountCalculatorComponent } from './hub/amount-calculator/amount-calculator.component';
import { AmountResultComponent } from './hub/amount-result/amount-result.component';
import { HistoryComponent } from './hub/history/history.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    AmountCalculatorComponent,
    AmountResultComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule.forRoot(),
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
