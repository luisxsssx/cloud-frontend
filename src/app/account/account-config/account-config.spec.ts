import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConfig } from './account-config';

describe('AccountConfig', () => {
  let component: AccountConfig;
  let fixture: ComponentFixture<AccountConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
