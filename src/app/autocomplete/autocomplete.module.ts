import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './comps/autocomplete/autocomplete.component';
import { AutocompletePartialComponent } from './comps/autocomplete-partial/autocomplete-partial.component';
import { MatProgressBar } from '@angular/material/progress-bar';
import { AutocompleteShowMoreComponent } from './comps/autocomplete-show-more/autocomplete-show-more.component';
import { MatButton } from '@angular/material/button';




@NgModule({ 
  declarations: [
    AutocompleteComponent,
    AutocompletePartialComponent,
    AutocompleteShowMoreComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    MatProgressBar,
    MatButton
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AutocompleteComponent,
    AutocompletePartialComponent,
    AutocompleteShowMoreComponent
  ],
})
export class AutocompleteModule { }
