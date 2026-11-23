import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-dialog',
  imports: [
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose, 
    MatIconModule, 
    MatButtonModule,
    FormsModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent implements OnInit  {
  contactForm: FormGroup = new FormGroup({});
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  public onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission here, e.g., send data to a backend service
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }

  public formIsValid(): boolean {
    return (this.contactForm.controls['name'].valid &&
            this.contactForm.controls['email'].valid &&
            this.contactForm.controls['message'].valid
    );
  }
}
