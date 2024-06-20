import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PaginatorModule} from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ButtonModule } from 'primeng/button';
import { AddEditBookDialogComponent } from './components/add-edit-book-dialog/add-edit-book-dialog.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ListViewComponent,
    AddEditBookDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
