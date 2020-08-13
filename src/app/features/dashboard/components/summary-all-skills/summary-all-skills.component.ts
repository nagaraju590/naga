import { Component, OnInit, Input } from '@angular/core';
import { SummaryAllSkills } from '../../models/summary-all-skills.model';

@Component({
  selector: 'app-summary-all-skills',
  templateUrl: './summary-all-skills.component.html',
  styleUrls: ['./summary-all-skills.component.scss'],
})
export class SummaryAllSkillsComponent implements OnInit {
  @Input()
  summaryAllSkills: SummaryAllSkills;

  constructor() {}

  ngOnInit() {}
}
