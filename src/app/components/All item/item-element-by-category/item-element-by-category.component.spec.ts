import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemElementByCategoryComponent } from './item-element-by-category.component';

describe('ItemElementByCategoryComponent', () => {
  let component: ItemElementByCategoryComponent;
  let fixture: ComponentFixture<ItemElementByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemElementByCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemElementByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
