import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Net Neutrality Brewing (NNB)</h1>`,
  styles: [`h1 { font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font: color; color: rgb(252, 214, 3); }`]
})
export class HelloComponent  {
  @Input() name: string;
}
