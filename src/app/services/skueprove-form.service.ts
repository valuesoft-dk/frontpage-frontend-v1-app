import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { resetApplicationState } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class SkueproveFormService {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder    
  ) { 
    this.form = this.fb.group({
      ProdNo: null,
      ProdTp: null,
      Descr: null,
      Inf: null,
      Rno: null,
      Inf8: null,
      Gr8: null
    });
  }

  getSkueproveFormGroup(): FormGroup {
    return this.fb.group({
    });
  }

  reset(): void {
    this.form.reset();
  }  
}
