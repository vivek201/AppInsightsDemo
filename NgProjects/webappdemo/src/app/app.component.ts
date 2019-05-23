import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'webappdemo';
  products = [];

  constructor(
    private appService: AppService,
    private appInsights: AppInsightsService
  ) {}

  getAllProducts() {
    this.appService.getAllProducts().subscribe((x:any) => {
      this.products = x;
      console.log('success');
      console.log(x);
    }, err => {
      console.log('error');
      console.log(err);
    });
  }

  getProduct(id) {
    this.appService.getProduct(id).subscribe(x => {
      console.log('success');
      console.log(x)
    }, err => {
      console.log('error');
      console.log(err);
    })
  }

  setUserContext() {
    this.appInsights.setAuthenticatedUserContext('9999', '9', true);
  }

  resetUserContext() {
    this.appInsights.clearAuthenticatedUserContext();
  }
}
