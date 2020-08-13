import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BaseComponent } from 'src/app/features/shared/components/base.component';
import { EmployeeInfo } from '../../models/employee-info.model';

@Component({
  selector: 'app-employee-info-grid',
  templateUrl: './employee-info-grid.component.html',
  styleUrls: ['./employee-info-grid.component.scss'],
})
export class EmployeeInfoGridComponent extends BaseComponent implements OnInit {
  @Input() employees: EmployeeInfo[];
  @Output() setUserAvailability = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() { }

  onClickOpenDropdown() {
    this.cd.detectChanges();
    const button = event.target as HTMLElement;
    button.nextElementSibling.classList.toggle('show');
  }

  onClickAvailability(employee: EmployeeInfo) {
    this.setUserAvailability.emit(employee);
    this.toggleIcon(employee.userId);
    const button = event.target as HTMLElement;
    button.parentElement.classList.toggle('show');
    this.cd.detectChanges();
  }

  onMouseLeave() {
    const elements = Array.from(document.getElementsByClassName('dropdown-menu'));
    for (const element of elements) {
      element.classList.remove('show');
    }
  }

  toggleIcon(userId: number) {
    for (const i in this.employees) {
      if (this.employees[i].userId === userId) {
        this.employees[i].isAvailable = !this.employees[i].isAvailable;
        break;
      }
    }
  }
}
