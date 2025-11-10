import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-developed-soon',
  imports: [TranslateModule],
  templateUrl: './developed-soon.html',
  styleUrl: './developed-soon.scss',
})
export class DevelopedSoon {
  constructor(public translate: TranslateService) {}
}
