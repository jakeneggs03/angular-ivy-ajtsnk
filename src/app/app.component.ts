import { Component, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class AppComponent {
  name = 'NetNeutralityBrewing ' + VERSION.major;

  images = [700, 800, 807].map(
    (n) =>
      'https://raw.githubusercontent.com/jakeneggs03/angular-ivy-onzwlf/master/IMG_20191112_185319_750.jpg' || 'https://raw.githubusercontent.com/jakeneggs03/angular-ivy-onzwlf/master/Cold%20War%20Dark%20Web%20CE%20label.jpg'
  
  );
  images1 = [700, 800, 807].map(
    (n) =>
      `https://raw.githubusercontent.com/jakeneggs03/angular-ivy-onzwlf/master/src/BREWMASTE_2.png`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  //@Component({
  //selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  //})
}
