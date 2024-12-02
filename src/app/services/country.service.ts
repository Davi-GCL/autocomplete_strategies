import { Injectable } from '@angular/core';
import { INameFilter } from '../interfaces/iname-filter';
import { IPaginationFilter } from '../interfaces/ipagination-filter';
import { delay, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  delayBaseInMS = 80;

  constructor() { }

  getByFilter(paginationFilter?: IPaginationFilter, countryFilter?: INameFilter){
    const countriesFound = this.filterCountryWhere(countryFilter).map((name, i) => `${i+1}. ${name}`);
    
    let countriesPagedList = countriesFound;

    if(paginationFilter){
      let startIndex = (paginationFilter?.pageNumber - 1) * paginationFilter.pageSize;
      countriesPagedList = countriesPagedList.slice(startIndex, startIndex + paginationFilter.pageSize);
    }

    let fakeRequestDelay = countriesPagedList.length * this.delayBaseInMS;

    return of(countriesPagedList).pipe(delay(fakeRequestDelay));
  }

  getTotalRowsCount(filter?: INameFilter){
    const totalRowsCount = this.filterCountryWhere(filter).length

    const fakeRequestDelay = this.delayBaseInMS;
    
    return of(totalRowsCount).pipe(delay(fakeRequestDelay));
  }

  private filterCountryWhere(filter?: INameFilter): string[]{
    const filteredCountries = this.COUNTRY_LIST.filter(cName => (!filter || cName.toLowerCase().includes(filter.name.toLowerCase().trim())))

    if(!filteredCountries) throw new Error(`No matches found for this filter`);

    return filteredCountries;
  }

  private readonly COUNTRY_LIST = [
    "Afeganistão", "Albânia", "Alemanha", "Andorra", "Angola", "Antígua e Barbuda", "Arábia Saudita", "Argélia", "Argentina", "Armênia",
    "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Bélgica", "Belize", "Benin",
    "Bielorrússia", "Birmânia", "Bulgária", "Burkina Faso", "Burundi", "Butão", "Cabo Verde", "Camboja", "Camarões", "Canadá",
    "Catar", "Chade", "Chile", "China", "Chipre", "Colômbia", "Comores", "Coreia do Norte", "Coreia do Sul", "Costa Rica",
    "Costa do Marfim", "Croácia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egito", "El Salvador", "Emirados Árabes Unidos", "Eritreia",
    "Eslováquia", "Eslovênia", "Espanha", "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Filipinas", "Finlândia", "Fiji",
    "França", "Gabão", "Gâmbia", "Geórgia", "Gana", "Granada", "Grécia", "Guatemala", "Guiana", "Guiné",
    "Guiné Equatorial", "Guiné-Bisáu", "Haiti", "Honduras", "Hungria", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda",
    "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Cazaquistão", "Quênia", "Quirguistão", "Kiribati",
    "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo",
    "Líbia", "Macedônia do Norte", "Madagascar", "Malásia", "Malawi", "Maldivas", "Malta", "Mali", "Marrocos", "Maurício",
    "Mauritânia", "México", "Micronésia", "Mianmar", "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Moçambique", "Namíbia",
    "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia", "Omã", "Países Baixos", "Paquistão",
    "Palau", "Panamá", "Papua-Nova Guiné", "Paraguai", "Peru", "Polônia", "Portugal", "Reino Unido", "República Centro-Africana", "República Checa",
    "República Dominicana", "Ruanda", "Romênia", "Rússia", "Samoa", "São Cristóvão e Nevis", "São Marino", "São Tomé e Príncipe", "Senegal", "Sérvia",
    "Seicheles", "Serra Leoa", "Singapura", "Síria", "Somália", "Sri Lanka", "Suazilândia", "Sudão", "Sudão do Sul", "Suécia",
    "Suíça", "Suriname", "Tailândia", "Tanzânia", "Tadjiquistão", "Timor-Leste", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia",
    "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Venezuela", "Vietnã",
    "Iémen", "Iémen", "Zâmbia", "Zimbábue"
  ];
}
