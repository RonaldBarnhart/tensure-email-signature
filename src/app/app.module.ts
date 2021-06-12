import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewComponent } from './components/preview/preview.component';
import { SignatureFormComponent } from './components/signature-form/signature-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    SignatureFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
