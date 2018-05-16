import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Services
import { AplicativoService } from './_services/aplicativo.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './_services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AplicativoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
