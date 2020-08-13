import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Category } from '../../models/category.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  @Input()
  employeeName = '';

  @Input()
  categories: Category[] = [];

  @Input()
  primaryCategory = 0;

  SelectedCategoryName = '';

  constructor(private cd: ChangeDetectorRef, private modalService: NgbModal) {}

  ngOnInit() {}

  addTitle(e) {
    this.SelectedCategoryName = e.target.value;
  }
  openModal(content: any) {
    this.modalService.open(content);
    this.cd.detectChanges();
  }
}
