import { Component } from '@angular/core';
import { PoI18nService } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-i18n';
  literals: any = '';

  constructor(private poI18nService: PoI18nService) {
    poI18nService.getLiterals()
      .subscribe((literals) => {
        this.literals = literals;
        console.log('APP', literals);
      });
  }
}
