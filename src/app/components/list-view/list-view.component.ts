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

  @Output() bookClick = new EventEmitter<Book>();

  ngOnInit(): void {
    this.updateCurrentBooks(0, 10);
  }

  onRowClick(book: Book): void {
    this.bookClick.emit(book);
  }

  onPaginationChanged(evt: any) {
    const { first, rows } = evt;
    this.updateCurrentBooks(first, rows);
  }

  updateCurrentBooks(first: number, rows: number): void {
    const start = first;
    const end = first + rows;
    this.currentBooks = this.books.slice(start, end);
  }
}
