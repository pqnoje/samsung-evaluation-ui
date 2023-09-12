import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchFormComponent } from './document-search-form.component';

describe('DocumentSearchFormComponent', () => {
  let component: DocumentSearchFormComponent;
  let fixture: ComponentFixture<DocumentSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentSearchFormComponent]
    });
    fixture = TestBed.createComponent(DocumentSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
