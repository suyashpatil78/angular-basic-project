import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEditBookDialogComponent } from './components/add-edit-book-dialog/add-edit-book-dialog.component';
import { Book } from './models/book.model';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private dialogRef?: DynamicDialogRef;

  books: Book[] = [];

  constructor(private dialogService: DialogService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.books = this.storageService.get('books') || [];
  }

  showDialog(book?: Book): void {
    this.dialogRef = this.dialogService.open(AddEditBookDialogComponent, {
      header: `${book ? 'Edit' : 'Add'} Book`,
      data: book || null
    });

    this.dialogRef.onClose.subscribe((result) => {
      this.books = this.storageService.get('books') || [];
    });
  }

  openAddBookClick(): void {
    this.showDialog();
  }



  onBookClick(book: Book): void {
    this.showDialog(book);
  }
}
