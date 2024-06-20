import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent implements OnInit {
  @Input() books: Book[] = [];

  currentBooks: Book[] = [];

  filteredBooks: Book[] = [];

  offset = 0;

  rows = 10;

  @Output() bookClick = new EventEmitter<Book>();

  ngOnInit(): void {
    this.filteredBooks = this.books;
    this.updateCurrentBooks(0, 10);
  }

  onRowClick(book: Book): void {
    this.bookClick.emit(book);
  }

  onPaginationChanged(evt: any) {
    const { first, rows } = evt;
    this.offset = first;
    this.rows = rows;
    this.updateCurrentBooks(first, rows);
  }

  updateCurrentBooks(first: number, rows: number): void {
    const start = first;
    const end = first + rows;
    this.currentBooks = this.filteredBooks.slice(start, end);
  }

  onFiltersChanged(event: any) {
    if (event.searchText) {
      this.filteredBooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(event.searchText.toLowerCase()) || book.author.toLowerCase().includes(event.searchText.toLowerCase());
      });
    } else {
      this.filteredBooks = this.books;
    } 
    
    if (event.genre) {
      this.filteredBooks = this.filteredBooks.filter((book) => book.genre === event.genre);
    } else {
      this.filteredBooks = this.filteredBooks;
    }

    this.currentBooks = this.filteredBooks.slice(this.offset, this.offset + this.rows);

  }
}
