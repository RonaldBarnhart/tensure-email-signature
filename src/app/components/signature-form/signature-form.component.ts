import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signature-form',
  templateUrl: './signature-form.component.html',
  styleUrls: ['./signature-form.component.scss']
})
export class SignatureFormComponent implements OnInit, OnDestroy {

  name = new FormControl('John Doe');
  jobTitle = new FormControl('Software Engineer');
  location = new FormControl('Cincinnati, OH');
  phone = new FormControl('123-456-7890');

  srcDocContent: string = '';

  nameSub: Subscription;
  jobTitleSub: Subscription;
  locationSub: Subscription;
  phoneSub: Subscription;


  generateDoc() {
    this.srcDocContent = `
    <!doctype HTML>
    <html>
    <head>
    </head>
    <body style="margin-left: auto">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    </style>
    
    </body>
    </html>`;
  }

  constructor() {
    this.nameSub = this.name.valueChanges.subscribe((v) => {
      this.generateDoc();
    });

    this.jobTitleSub = this.jobTitle.valueChanges.subscribe((v) => {
      this.generateDoc();
    });

    this.locationSub = this.location.valueChanges.subscribe((v) => {
      this.generateDoc();
    });

    this.phoneSub = this.phone.valueChanges.subscribe((v) => {
      this.generateDoc();
    });

    this.generateDoc();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.nameSub.unsubscribe();
    this.jobTitleSub.unsubscribe();
    this.locationSub.unsubscribe();
    this.phoneSub.unsubscribe();
  }

}
