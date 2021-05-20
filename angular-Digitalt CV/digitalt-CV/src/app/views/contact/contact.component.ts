import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  get name(){return this.form.get('name') as FormControl};
  get email(){return this.form.get('email') as FormControl};
  get subject(){return this.form.get('subject') as FormControl};
  get message(){return this.form.get('message') as FormControl};

  onSubmit(){
    console.log(this.form)
  }

}
