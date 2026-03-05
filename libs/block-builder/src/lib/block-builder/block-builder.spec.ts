import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockBuilderComponent } from '@block/builder';

describe('BlockBuilder', () => {
  let component: BlockBuilderComponent;
  let fixture: ComponentFixture<BlockBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockBuilderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
