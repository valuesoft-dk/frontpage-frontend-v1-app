import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { VismaService } from '../services/visma.service';
import { SharepointService } from '../services/sharepoint.service';
import { Skueprove } from '../models/skueprove';

@Component({
  selector: 'app-skueprove-search-result',
  templateUrl: './skueprove-search-result.component.html',
  styleUrls: ['./skueprove-search-result.component.css']
})
export class SkueproveSearchResultComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  dataSource = new OrderDataSource(this.vismaService);
  displayedColumns = ['rno', 'gr8', 'descr', 'inf'];
  hasEditPermission: boolean = false;
  sharepointServiceSubscription: Subscription;
  constructor(
    private vismaService: VismaService,
    private sharepointService: SharepointService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sharepointServiceSubscription = this.sharepointService.isMemberOfGroup.subscribe(isMemberOfGroup => {
      console.log(isMemberOfGroup);
      this.displayedColumns = (isMemberOfGroup == true ?  ['edit', 'rno', 'gr8', 'descr', 'inf'] :  ['rno', 'gr8', 'descr', 'inf']);
      this.hasEditPermission = isMemberOfGroup;
    });

    this.sharepointService.isCurrentUserMemberOf('kvalitet owners');
  }

  ngOnDestroy() {
    this.sharepointServiceSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    // this.vismaService.searchSkueprove('4294');
    // this.cdRef.detectChanges();    
  }

  ngAfterViewChecked() {
  }

  edit(event: any, skueprove: Skueprove, i: number) {
    this.router.navigate(['skueprover', skueprove.Rno, 'edit']);
  }

}

export class OrderDataSource extends DataSource<any> {

  constructor(
    private vismaService: VismaService
  ) {
    super();
  }

  connect(): Observable<Skueprove[]> {
    return this.vismaService.skueprover;
  }

  disconnect() { }
}


