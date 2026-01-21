import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderContent } from './folder-content';

describe('FolderContent', () => {
  let component: FolderContent;
  let fixture: ComponentFixture<FolderContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
