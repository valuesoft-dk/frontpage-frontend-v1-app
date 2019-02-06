import { Injectable } from '@angular/core';
import { SkueproveFormService } from './skueprove-form.service';
import { Skueprove } from '../models/skueprove';

@Injectable({
  providedIn: 'root'
})
export class SkueproveLoeaderService {

  constructor(
    private skueproveFormService: SkueproveFormService
  ) { }

  loadSkueprove(skueprove: Skueprove): void {
    this.skueproveFormService.form.patchValue({
      ...skueprove
    });
  }  
}
