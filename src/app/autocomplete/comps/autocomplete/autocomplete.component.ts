import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country.service';
import { IPaginationFilter } from '../../../interfaces/ipagination-filter';
import { INameFilter } from '../../../interfaces/iname-filter';
import { delay, Observable, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.sass'
})
export class AutocompleteComponent{
  timeout: any;
  autoInput = new FormControl<string>('');
  list$!: Observable<any>;

  @Input({required: true}) getByFilterFn!: (paginationFilter?: IPaginationFilter, filter?: INameFilter) => Observable<string[]>;
  @Input() idleTime: number = 750;

  constructor(){}

  getListOnInput(inputValue: any){
    let countryFilter: INameFilter = { name: inputValue }
    let pagination: IPaginationFilter = { pageNumber: 1, pageSize: 15 }

    this.list$ = this.getByFilterFn(pagination, countryFilter).pipe(tap(res => console.log(res)))
  }

  inputEventHandler(event: any){
    if(this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => this.getListOnInput(event.target.value), this.idleTime);
  }

}
