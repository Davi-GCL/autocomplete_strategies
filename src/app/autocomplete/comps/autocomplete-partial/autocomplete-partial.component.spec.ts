import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePartialComponent } from './autocomplete-partial.component';

describe('AutocompletePartialComponent', () => {
  let component: AutocompletePartialComponent;
  let fixture: ComponentFixture<AutocompletePartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompletePartialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
