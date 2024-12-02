import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { INameFilter } from '../../../interfaces/iname-filter';
import { IPaginationFilter } from '../../../interfaces/ipagination-filter';

@Component({
  selector: 'my-autocomplete-show-more',
  standalone: false,
  templateUrl: './autocomplete-show-more.component.html',
  styleUrl: './autocomplete-show-more.component.sass'
})
export class AutocompleteShowMoreComponent {
  timeout: any;
  autoInput = new FormControl<string>('');
  list: string[] = [];
  hasMoreOptions: boolean = true;
  currentPage: number = 1;
  pageSize: number = 15;

  @Input({required: true}) getByFilterFn!: (paginationFilter?: IPaginationFilter, filter?: INameFilter) => Observable<string[]>;
  @Input() idleTime: number = 750;

  constructor(){}

  getListOnInput(inputValue: any){
    let countryFilter: INameFilter = { name: inputValue }
    let pagination: IPaginationFilter = { pageNumber: this.currentPage, pageSize: this.pageSize }

    this.getByFilterFn(pagination, countryFilter).pipe(tap(res => console.log(res)))
    .subscribe(res => {
      this.list = res;
    })
  }

  inputEventHandler(event: any){
    if(this.timeout) clearTimeout(this.timeout);
    this.currentPage = 1;

    this.timeout = setTimeout(() => this.getListOnInput(event.target.value), this.idleTime);
  }

  onShowMoreOptions(){
    this.currentPage += 1;

    let countryFilter: INameFilter = { name: this.autoInput.value ?? '' }
    let pagination: IPaginationFilter = { pageNumber: this.currentPage, pageSize: this.pageSize }

    this.getByFilterFn(pagination, countryFilter).pipe(tap(res => console.log(res)))
    .subscribe(res => {
      this.list.push(...res);
    })
  }
}
