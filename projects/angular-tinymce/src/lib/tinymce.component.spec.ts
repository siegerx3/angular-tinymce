import { CommonModule } from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import { TinyMceComponent } from './tinymce.component';
import { TinyMceModule } from './tinymce.module';
import { tinymceDefaultSettings } from './tinymce.default';


describe('TinyMceComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TinyMceModule.forRoot(tinymceDefaultSettings())]
    });
    TestBed.compileComponents();
  }));

  // General button tests
  it('should create component', () => {
    const fixture = TestBed.createComponent(TinyMceComponent);
    const testComponent = fixture.debugElement.componentInstance;

    expect(testComponent).toBeDefined();
  });

  it('should have settings applied', () => {
    const fixture = TestBed.createComponent(TinyMceComponent);
    const testComponent: TinyMceComponent = fixture.debugElement.componentInstance;

    expect(testComponent.settings).toBeDefined();
  });
});
