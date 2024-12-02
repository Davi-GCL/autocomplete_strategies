import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteShowMoreComponent } from './autocomplete-show-more.component';

describe('AutocompleteShowMoreComponent', () => {
  let component: AutocompleteShowMoreComponent;
  let fixture: ComponentFixture<AutocompleteShowMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteShowMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
