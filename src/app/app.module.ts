import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewItemModalComponent } from './components/new-item-modal/new-item-modal.component';
import { NgxPamlightModule, NgxPamlightService } from '@pamlight/ngx-client';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPamlightModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    NgxPamlightService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewItemModalComponent
  ]
})
export class AppModule {}
