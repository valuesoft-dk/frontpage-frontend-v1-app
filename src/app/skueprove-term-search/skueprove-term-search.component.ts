import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { VismaService } from '../services/visma.service';
import { Observable, Subscription } from 'rxjs';
import { NumericKeypadService } from '../services/numeric-keypad.service';

@Component({
  selector: 'app-skueprove-term-search',
  templateUrl: './skueprove-term-search.component.html',
  styleUrls: ['./skueprove-term-search.component.css']
})
export class SkueproveTermSearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchTermField') searchTermField: ElementRef;
  private searchTerm: string;
  private searchTermSubscription: Subscription;
  private numericKeyPadSubscription: Subscription;

  constructor(
    private vismaService: VismaService,
    private numericKeypadService: NumericKeypadService
  ) {  }

  ngOnInit() {
    this.searchTermSubscription = this.vismaService.searchTerm.subscribe(term => {
      this.searchTerm = term;
    });  

    this.numericKeyPadSubscription = this.numericKeyPadSubscription = this.numericKeypadService.numericKeypadCommands.subscribe(command => {
      this.vismaService.searchTermChanged(null, this.numericKeypadService.ApplyCommand(this.searchTermField.nativeElement.value, command));
    })
  }

  ngOnDestroy() {
    this.numericKeyPadSubscription.unsubscribe();
    this.searchTermSubscription.unsubscribe();
  }  

  updateSearchTerm(event: any): void {
    const val: string = event.target.value;
    this.vismaService.searchTermChanged(event, val);
  }
 

}
