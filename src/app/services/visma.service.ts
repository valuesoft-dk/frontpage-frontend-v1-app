import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ISkueprove } from '../interfaces/iskueprove';
import { Skueprove } from '../models/skueprove';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VismaService {


  private _searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchTerm: Observable<string> = this._searchTerm.asObservable();

  private _searchChangeEvents: BehaviorSubject<any> = new BehaviorSubject('');
  public searchChangeEvents: Observable<any> = this._searchChangeEvents.asObservable();

  private _skueprover: BehaviorSubject<Skueprove[]> = new BehaviorSubject<Skueprove[]>([]);
  public skueprover: Observable<Skueprove[]> = this._skueprover.asObservable();

  private _skueprove: Subject<Skueprove> = new Subject();
  public skueprove: Observable<Skueprove> = this._skueprove.asObservable();

  skueproveSubscription: Subscription;

  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) {
    this.getSearchTermFromCookie();

    this.skueproveSubscription =
      Observable.combineLatest(
        this._searchChangeEvents
      )
        .debounceTime(500)
        .map(([
          searchChangeEvents
        ]) => {
          this.searchSkueprover();
        }).subscribe();
  }


  private _makeHttpGetRequest(
    path: string
  ): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json'
      })
    };

    return this.http.get(`${environment.config.vismaApiBaseUrl}${path}`, options)
      .map(response => {
        return response;
      })
      .catch(response => (Observable.throw(response)
      ))
  }

  private _makeHttpPutRequest(
    path: string,
    body: string
  ): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json'
      })
    };

    return this.http.put(`${environment.config.vismaApiBaseUrl}${path}`, body, options)
      .map(response => {
        return response;
      })
      .catch(response => (Observable.throw(response)
      ))
  }

  private searchSkueprove(term: string): void {
    this._makeHttpGetRequest(`/skueprover/search/${term}`)
      .map(json => json)
      .subscribe(result => {
        const skueprover: Skueprove[] = result
          .map(json => Skueprove.fromJSON(json));
        this._skueprover.next(skueprover);
      });
  }

  private searchSkueprover(): void {
    if (this.cookieService.check('_searchTerm')) {
      var searchTerm: string = JSON.parse(this.cookieService.get('_searchTerm'));
      this._makeHttpGetRequest(`/skueprover/search/${searchTerm}`)
        .map(json => json)
        .subscribe(result => {
          const skueprover: Skueprove[] = result
            .map(json => Skueprove.fromJSON(json));
          this._skueprover.next(skueprover);
        });
    }
  }

  public getSkueprove(rno: number): void {
    this._makeHttpGetRequest(`/skueprover/r5/${rno}`)
      .map(json => json)
      .subscribe(json => {
        const skueprove: Skueprove = Skueprove.fromJSON(json);
        this._skueprove.next(skueprove);
      });
  }

  public updateSkueprove(skueprove: Skueprove): void {
    const dto: ISkueprove = Skueprove.toJSON(skueprove);
    this._makeHttpPutRequest(`/skueprover/r5/${skueprove.Rno}`, JSON.stringify(dto))
      .map(json => json)
      .subscribe(json => {
        this._searchChangeEvents.next(null);
      });
  }


  public getSearchTermFromCookie(): void {
    if (this.cookieService.check('_searchTerm')) {
      var searchTerm = JSON.parse(this.cookieService.get('_searchTerm'));

      this._searchTerm.next(searchTerm);
    }
  }

  public searchTermChanged(event: any, term: string): void {
    // Put new serch term on stream
    this._searchTerm.next(term);

    // Persist new search term in cookie
    var searchTermSubscription: Subscription = this.searchTerm.subscribe(searchTerm => {
      var d = new Date();
      d.setDate(d.getDate() + 365);

      // set cookie
      this.cookieService.set('_searchTerm', JSON.stringify(searchTerm), d);
    })
    searchTermSubscription.unsubscribe();

    this._searchChangeEvents.next(event);
  }


}
