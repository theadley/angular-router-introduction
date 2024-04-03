import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMangaComponent } from './selected-manga.component';

describe('SelectedMangaComponent', () => {
  let component: SelectedMangaComponent;
  let fixture: ComponentFixture<SelectedMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedMangaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
