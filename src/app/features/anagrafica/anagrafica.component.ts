import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrafica',
  template: `
    <h1>Anagrafica</h1>
    <div>
      <span class="step" routerLink="step1" routerLinkActive="is-active">Step 1</span>
      <span class="step" routerLink="step2" routerLinkActive="is-active">Step 2</span>
      <span class="step" routerLink="step3" routerLinkActive="is-active">Step 3</span>
    </div>

    <router-outlet name="sezione"></router-outlet>
  `,
  styles: [`
    .step {
      margin-right: 30px;
      padding: 10px;
      cursor: pointer;
    }
    .is-active {
      background-color: #1976d2;
      color: white;
    }
  `]
})
export class AnagraficaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
