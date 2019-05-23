import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApplicationInsightsModule.forRoot({
      instrumentationKey: 'KEY',
      enableCorsCorrelation: true
    })
  ],
  providers: [
    AppService,
    AppInsightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
