import { Component, OnInit } from '@angular/core';
import { LeftNavManagerService } from '../../services/left-nav-manager.service';
import { QueueSummary } from '../../models/manager-skills.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'h2od-manager-left-nav',
  templateUrl: './left-nav-manager.component.html',
  styleUrls: ['./left-nav-manager.component.scss']
})

export class LeftNavManagerComponent implements OnInit {

  queueSummarys: QueueSummary[];

  constructor(
    public leftNavManagerService: LeftNavManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.leftNavManagerService.getManagerSkills().subscribe((data) => {
      this.queueSummarys = data;
    });
  }

  isCurrentRoute(skillId?: number) {
    return !skillId ? this.router.url === '/summary' : this.router.url === '/detail/' + skillId;
  }

  onClickSkill(queueSummary: QueueSummary) {
    this.router.navigate([`/detail/`, queueSummary.skillId]);
  }

  onClickSummary() {
    this.router.navigate([`/summary`]);
  }
}
