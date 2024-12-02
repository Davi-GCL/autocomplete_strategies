import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country.service';
import { IPaginationFilter } from '../../../interfaces/ipagination-filter';
import { INameFilter } from '../../../interfaces/iname-filter';
import { delay, finalize, Observable, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-autocomplete-partial',
  templateUrl: './autocomplete-partial.component.html',
  styleUrl: './autocomplete-partial.component.sass'
})
export class AutocompletePartialComponent implements OnInit {
  loading: boolean = false;
  timeout: any;
  autoInput = new FormControl<string>('');
  list: string[] = [];
  private lastWrote: string = '';

  @Input({required: true}) getByFilterFn!: (paginationFilter?: IPaginationFilter, filter?: INameFilter) => Observable<string[]>;
  @Input() idleTime: number = 750;

  constructor(){}

  ngOnInit(): void {
  }

  search(inputValue: string){
    if(this.list.length > 0){
      this.list = this.list.filter(x => (inputValue.trim()=="" || x.toLowerCase().includes(inputValue.toLowerCase().trim())));
    }

    let hasBackspaced = !inputValue.toLowerCase().trim().includes(this.lastWrote.toLowerCase().trim())

    if(this.list.length < 3 || hasBackspaced){
      this.getByFilterAsync(inputValue);
    }

    this.lastWrote = inputValue;
  }

  getByFilterAsync(inputValue: string){
    let countryFilter: INameFilter = { name: inputValue }
    let pagination: IPaginationFilter = { pageNumber: 1, pageSize: 15 }
    
    this.loading = true;

    this.getByFilterFn(pagination, countryFilter)
    .pipe(    
      finalize(() => {this.loading = false})
    )
    .subscribe(response => {
      this.list = response as string[];
    })
  }

  inputEventHandler(event: any){
    if(this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => this.search(event.target.value as string), this.idleTime);
  }

}


