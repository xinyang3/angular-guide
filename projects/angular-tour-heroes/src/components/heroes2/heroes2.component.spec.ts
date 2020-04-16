import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes2Component } from './heroes2.component';

describe('Heroes2Component', () => {
  let component: Heroes2Component;
  let fixture: ComponentFixture<Heroes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
