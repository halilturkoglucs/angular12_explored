import {fakeAsync, flush, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {ServerComponent} from "./server.component";
import {ShortenPipe} from "../shorten.pipe";
import {UnlessDirective} from "../unless/unless.directive";

describe('ServerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ServerComponent,
        ShortenPipe,
        UnlessDirective
      ],
    }).compileComponents();
  });

  it('should create the ServerComponent', () => {
    const fixture = TestBed.createComponent(ServerComponent);
    const serverComponent = fixture.componentInstance;
    expect(serverComponent).toBeTruthy();
  });

  it(`should have show as false initially`, () => {
    const fixture = TestBed.createComponent(ServerComponent);
    const serverComponent = fixture.componentInstance;
    expect(serverComponent.show).toEqual(false);
  });

  it('should render asyncTime after 2000ms', waitForAsync(() => {
    const fixture = TestBed.createComponent(ServerComponent);
    let serverComponent = fixture.componentInstance;
    expect(serverComponent.asyncTime).toBeUndefined('asyncTime props should be undefined at initialisation.');

    // wait for the asyncTime to be initialised in ngOnInit
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      serverComponent = fixture.componentInstance;

      expect(serverComponent.asyncTime).not.toEqual(null, 'asyncTime should have been initialised in ngOnInit');
    }).then(() => {
      fixture.detectChanges();
      serverComponent = fixture.componentInstance;

      let asyncTimePromiseResult;
      // wait for the asyncTime to be set by the Promise
      serverComponent.asyncTime.then(result => {
        asyncTimePromiseResult = result;

        // asyncTime should have been set by the promise
        expect(asyncTimePromiseResult).toBeInstanceOf(Date);
      })
    })
  }));
});
