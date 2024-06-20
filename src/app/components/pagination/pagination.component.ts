import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() books: Book[] = [];

  @Output() paginationChange = new EventEmitter<any>();

  onPageChange(event: any): void {
    this.paginationChange.emit(event);
  }
}
