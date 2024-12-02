import { Component } from '@angular/core';
import { IPaginationFilter } from './interfaces/ipagination-filter';
import { INameFilter } from './interfaces/iname-filter';
import { CountryService } from './services/country.service';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AutocompleteModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'estudando_autocomplete';

  constructor(private countryService: CountryService){}

  getCountriesByFilterAsync = (paginationFilter?: IPaginationFilter, countryFilter?: INameFilter) => {
    return this.countryService.getByFilter(paginationFilter, countryFilter);
  }
}
