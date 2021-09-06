import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadButtonComponent } from './file-upload-button/file-upload-button.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FileUploadButtonComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
