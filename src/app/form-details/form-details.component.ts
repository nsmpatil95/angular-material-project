import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent implements OnInit {
  filterForm: FormGroup;

  constructor() {}
  ngOnInit() {
    this.filterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobNum: new FormControl('', [Validators.required, this.InvalidMobNum]),
      email: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
    /*  lastName: ['', [Validators.required]],
      mobNum: ['', [Validators.required, this.InvalidMobNum()]],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]],
    }); */
    console.log(this.filterForm.value());
  }

  private InvalidMobNum(control: AbstractControl): { [s: string]: boolean } {
    if (control.value && control.value.length != 10) {
      return { invalidMobNum: true };
    }
    return null;
  }
}
