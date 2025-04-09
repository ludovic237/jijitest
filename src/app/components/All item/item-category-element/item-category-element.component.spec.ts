import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryElementComponent } from './item-category-element.component';

describe('ItemCategoryElementComponent', () => {
  let component: ItemCategoryElementComponent;
  let fixture: ComponentFixture<ItemCategoryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCategoryElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCategoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
