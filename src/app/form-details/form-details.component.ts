import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent implements OnInit {
  filterForm = new FormGroup({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mobNum: ['', [Validators.required, this.InvalidMobNum()]],
    email: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  constructor() {}
  ngOnInit() {
    consol.log(this.filterForm.value());
  }

  private InvalidMobNum(control: AbstractControl): { [s: string]: boolean } {
    if (control.value && control.value.length != 10) {
      return { invalidMobNum: true };
    }
    return null;
  }
}
