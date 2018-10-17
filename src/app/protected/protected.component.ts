import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import { Client as GraphClient } from '@microsoft/microsoft-graph-client';
import { AdalService } from 'adal-angular4';


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  private graphClient: GraphClient;

  constructor(
    private http: HttpClient,
    private adalService: AdalService
  ) { }

  ngOnInit() { }

  callAPI() {
    this.http.get('https://myauthappbackend.azurewebsites.net/api/todo').subscribe(
      data => {
        console.log(data);
      });
  }

  callGraphAPI() {
    this.adalService.acquireToken("https://graph.microsoft.com/").subscribe(function (token) {

    console.log(token); 

      // this.graphClient = GraphClient.init({
      //   authProvider: (done: any) => {
      //     done(undefined, token);
          
      //   }
      // });

      // this.graphClient
      //   .api('/me')
      //   .version('beta')
      //   .get()
      //   .then((res) => {
      //     this.result = res;
      //     console.log(this.result);

      //   }).catch((err) => {
      //     console.log('Error: ' + err);
      //   });

    });
    
  }

}
