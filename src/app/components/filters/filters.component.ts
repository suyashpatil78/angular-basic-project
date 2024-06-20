import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit, AfterViewInit {

  searchText: string = '';

  selectedGenre: string = '';

  genres: string[] = [];

  @Output() filterChange = new EventEmitter<any>();

  @ViewChild('simpleSearchInput') simpleSearchInput: ElementRef<HTMLInputElement>;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.genres = this.utilityService.getGenres();
  }

  ngAfterViewInit(): void {
    this.simpleSearchInput.nativeElement.value = '';
    fromEvent(this.simpleSearchInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      map((event: any) => event.target.value),
    ).subscribe((searchString) => {
      this.filterChange.emit({ genre: this.selectedGenre, searchText: searchString });
    });
  }

  onGenreChange(event: any): void {
    this.filterChange.emit({ genre: event.value, searchText: this.searchText });
  }
}
