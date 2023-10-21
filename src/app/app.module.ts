import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionDetailsComponent } from 'src/components/transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
