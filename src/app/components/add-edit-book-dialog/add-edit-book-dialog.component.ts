import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { StorageService } from '../../services/storage.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-book-dialog',
  templateUrl: './add-edit-book-dialog.component.html',
  styleUrl: './add-edit-book-dialog.component.scss'
})
export class AddEditBookDialogComponent implements OnInit {

  fg!: FormGroup;

  genres: string[] = [];

  constructor(private utilityService: UtilityService, private storageService: StorageService, private dialogRef: DynamicDialogRef, private config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      pagesRead: new FormControl('', Validators.required),
      totalPages: new FormControl('', Validators.required),
    });
    this.genres = this.utilityService.getGenres();
    this.setFormValues();
  }

  setFormValues() {
    if (this.config.data) {
      const book = this.config.data;

      this.fg.setValue({
        title: book.title,
        author: book.author,
        genre: book.genre,
        pagesRead: book.pagesRead,
        totalPages: book.totalPages,
      });
    }
  }

  isFieldInvalid(field: string): boolean {
    return this.fg.get(field).invalid && (
      this.fg.get(field).dirty
    )
  }

  saveBookClick(): void {
    if(this.fg.valid) {
      const books = this.storageService.get('books') || [];
      books.push(this.fg.value);
      this.storageService.set('books', books);
      this.dialogRef?.close();
    } else {
      Object.keys(this.fg.controls).forEach(field => {
        const control = this.fg.get(field);
        control?.markAsDirty({ onlySelf: true });
      });
    }
  }

}
