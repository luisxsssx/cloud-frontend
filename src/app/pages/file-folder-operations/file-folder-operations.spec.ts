import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderOperations } from './file-folder-operations';

describe('FileFolderOperations', () => {
  let component: FileFolderOperations;
  let fixture: ComponentFixture<FileFolderOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileFolderOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileFolderOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
