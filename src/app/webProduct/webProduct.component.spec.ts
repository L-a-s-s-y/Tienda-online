/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebProductComponent } from './webProduct.component';

describe('WebProductComponent', () => {
  let component: WebProductComponent;
  let fixture: ComponentFixture<WebProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
