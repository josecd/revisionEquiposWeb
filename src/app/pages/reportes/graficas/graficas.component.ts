import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<iframe width="100%" height="1000px" src="https://lookerstudio.google.com/embed/reporting/e4239630-d7e6-41bf-b4da-cc5bbc62618c/page/tixrD" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
  styleUrls: ['./graficas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraficasComponent { }
