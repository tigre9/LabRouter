import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>toolbar</div>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'LabRouter';
}
