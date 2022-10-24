import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  ediProfileForm!: FormGroup;
  displayEditUserData: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log(new Date())
    this.buildForm();
    this.ediProfileForm.setValue({
      name: this.data[0].name,
      domain: this.data[0].domain,
      gender: this.data[0].gender,
      dob: new Date(this.data[0].dob),
      phoneNumber: this.data[0].phone,
      location: this.data[0].location,
    });
  }

  buildForm() {
    this.ediProfileForm = this.fb.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.ediProfileForm.value);
    this.displayEditUserData = this.ediProfileForm.value;
  }
}
