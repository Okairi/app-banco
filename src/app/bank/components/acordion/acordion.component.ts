import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss'],
})
export class AcordionComponent {
  isCollapsed = true;
  @Input()
  nameBank: string = 'Rias Gremory';
  @Input()
  icon: string = '';
  @Input()
  listDetails = [];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
