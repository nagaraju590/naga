import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/features/shared/components/base.component';

@Component({
  selector: 'h2o-digital-manager-dashboard-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.scss']
})
export class DetailContainerComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() { }


}
