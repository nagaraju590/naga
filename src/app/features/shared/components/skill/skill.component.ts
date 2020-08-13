import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/features/dashboard/models/category.model';
@Component({
  selector: 'h2o-digital-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  skillForm: FormGroup;
  public selectedActivity;
  modalRef: BsModalRef;
  @Input()
  employeeName = '';
  time = { hour: 13, minute: 30 };
  @Input()
  categories: Category[] = [];

  @Input()
  primaryCategory = 0;
  minDate: any;
  maxDate: any;

  public modalConfig = {
    animated: true,
    keyboard: false,
    backdrop: false,
    ignoreBackdropClick: true,
  };
  constructor(private modalService: BsModalService) { }
  public OpenModal(temp: TemplateRef<any>, sActivity) {
    this.selectedActivity = sActivity;
    this.modalRef = this.modalService.show(temp, this.modalConfig);
  }
  public CloseModal() {
    this.modalRef.hide();
  }
  ngOnInit() {
    // const current = new Date();
    // this.minDate = {
    //   year: current.getFullYear(),
    //   month: current.getMonth() + 1,
    //   day: current.getDate()
    // };
    // this.maxDate = {
    //   year: current.getFullYear(),
    //   month: current.getMonth() + 1,
    //   day: current.getDate()
    // };
    // this.minDate = {year: 2020, month: 8, day: 15};
    this.skillForm = new FormGroup({
      clearAfter: new FormControl('1'),
      startDate: new FormControl(),
      time: new FormControl('1'),
    });
  }
  nextDate(dayIndex) {
    const today = new Date();
    today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
    return today;
  }
  onDateSelection(day) {
    const current = new Date();

    if (day === 'Today') {

      this.minDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
      this.maxDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
    } else if (day === 'Tomorrow') {
      this.minDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
      this.maxDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate() + 1,
      };
    } else if (day === 'This Week') {
      this.minDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
      const sunday = this.nextDate(0);
      this.maxDate = {
        year: sunday.getFullYear(),
        month: sunday.getMonth() + 1,
        day: sunday.getDate()
      };
    }
  }
  onSubmit(): void {
  }
}
