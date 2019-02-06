import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs/Rx';
import { map, combineLatest, } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ISPgroup } from '../interfaces/ispgroup';
import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

// import '@types/microsoft-ajax';
// import '@types/sharepoint';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  private _currentUserId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentUserId: Observable<string> = this._currentUserId.asObservable();

  private _userGroups: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public userGroups: Observable<string> = this._userGroups.asObservable();

  private _isMemberOfGroup: Subject<boolean> = new Subject();
  public isMemberOfGroup: Observable<boolean> = this._isMemberOfGroup.asObservable();



  constructor(
    private http: HttpClient
  ) {
    this.currentUserId
      .subscribe(
        userId => console.log(userId)
      );
  }


  private _makeHttpGetRequest(
    path: string
  ): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Accept': 'application/json; odata=verbose'
      })
    };

    return this.http.get(path, options)
      .map(response => {
        return response;
      })
      .catch(response => (Observable.throw(response)
      ))
  }


  public getCurrentUser(): Observable<any> {
    return this._makeHttpGetRequest('/_api/web/CurrentUser?$select=Id')
      .map(json => json.d.Id);

    // .subscribe(json => {
    //   console.log(json);
    //   this._currentUserId.next(json.d.Id);
    // });
  }

  getGroups(userId: string, groupName: string): Observable<any> {
    var group: ISPgroup;

    console.log(groupName);
    // JSRequest.EnsureSetup()
    // var hostweburl = decodeURIComponent(JSRequest.QueryString["SPHostUrl"]);
    // var appweburl = decodeURIComponent(JSRequest.QueryString["SPAppWebUrl"]);

    return this._makeHttpGetRequest(`/_api/Web/GetUserById(${userId})/Groups`)
      .map((json: any) => {

        if (json.d.results.length < 1)
          return false;

          for (var i:number = 0; i < json.d.results.length; i++) {
            group = json.d.results[i];

            if (group.LoginName.toLowerCase().indexOf(groupName) > -1)
            {
              return true;
            }
            //console.log(`${group.LoginName} ${group.Title}`);
          }
          return false;
      });
    // .subscribe(json => {
    //   console.log(json);
    // });
  }

  isCurrentUserMemberOf(groupName: string): void {

    this.getCurrentUser()
      .flatMap((userId) => this.getGroups(userId, groupName))
      .subscribe(result => {
        this._isMemberOfGroup.next(result);
      });

    // .subscribe( id => {
    //   console.log(id);
    // });
  }

}
