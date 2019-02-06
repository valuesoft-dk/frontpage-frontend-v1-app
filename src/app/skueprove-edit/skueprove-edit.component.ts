import { Component, OnInit, OnDestroy, ViewChildren, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SkueproveFormService } from '../services/skueprove-form.service';
import { SkueproveLoeaderService } from '../services/skueprove-loeader.service';
import { VismaService } from '../services/visma.service';
import { Skueprove } from '../models/skueprove';

@Component({
  selector: 'app-skueprove-edit',
  templateUrl: './skueprove-edit.component.html',
  styleUrls: ['./skueprove-edit.component.css'],
  providers: [
    SkueproveFormService,
    SkueproveLoeaderService
  ]
})
export class SkueproveEditComponent implements OnInit {
  selectedSkueproveSubscription: Subscription;
  rno: number = 0;

  get form(): FormGroup {
    return this.skueproveFormService.form;
  }

  constructor(
    private router: Router,    
    private activatedRoute: ActivatedRoute,
    private skueproveFormService: SkueproveFormService,
    private skueproveLoeaderService: SkueproveLoeaderService,
    private vismaServe: VismaService
  ) { }

  ngOnInit() {
    this.selectedSkueproveSubscription = this.vismaServe.skueprove.subscribe(skueprove => {
      this.skueproveLoeaderService.loadSkueprove(skueprove)
    });

    this.activatedRoute.params.subscribe(params => {
      this.rno = +params['rno'];
    });

    this.vismaServe.getSkueprove(this.rno);    
  }

  async submit(event: any, skueprove: Skueprove) {
    this.vismaServe.updateSkueprove(skueprove);
    this.router.navigate(['skueprover']);
  }

  
  cancel(event: any) {
    this.router.navigate(['skueprover']);
  }

}
