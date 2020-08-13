import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/features/shared/components/base.component';

import { DashboardService } from '../../services/dashboard.service';
import { SkillsDetail } from '../../models/skills-detail';

import { LeftNavManagerService } from '../../../shared/services/left-nav-manager.service';
import { QueueSummary } from '../../../shared/models/manager-skills.model';

@Component({
    selector: 'h2o-digital-manager-dashboard-details-grid',
    templateUrl: './details-grid.component.html',
    styleUrls: ['./details-grid.component.scss']
})
export class DetailsGridComponent extends BaseComponent implements OnInit {

    skillId: number;
    skillsDetail: SkillsDetail;
    pageHeader: string;
    queueSummarys: QueueSummary[];

    constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService,
        public leftNavManagerService: LeftNavManagerService,
    ) {
        super();
    }

    ngOnInit() {

        this.subscriptions.push(
            this.leftNavManagerService.getManagerSkills().subscribe((data) => {
                this.queueSummarys = data;
                this.setPageHeader();
            })
        );

        this.subscriptions.push(
            this.route.params.subscribe(params => {
                this.skillId = +params.skillId;
                if (!this.skillId) { document.location.href = '/summary'; }
                this.dashboardService.getDetailsBySkills(this.skillId).subscribe((response) => {
                    this.skillsDetail = response;
                    this.setPageHeader();
                });
            })
        );

    }

    onMouseLeave() {
        const elements = Array.from(document.getElementsByClassName('dropdown-menu'));
        for (const element of elements) {
            element.classList.remove('show');
        }
    }

    setPageHeader() {
        if (this.queueSummarys) {
            const activeSkill = this.queueSummarys.find(skillQueue => {
                return skillQueue.skillId === this.skillId;
            });
            if (activeSkill) { this.pageHeader = `Loans in ${activeSkill.skillName} Queue`; }
        }
    }

    convertUTCDateToLocalDate(stringDate: string) {
        if (!stringDate) { return ''; }
        const utcDate = new Date(stringDate);
        return new Date(utcDate);
    }

    unassignLoan(loanId: number) {
        const activeLoan = this.skillsDetail.loanDetails.find(loan => {
            return loan.loanId === loanId;
        });

        if (!activeLoan) { return; }

        this.dashboardService.unassignActivity(activeLoan.workflowActivityId).subscribe((response) => {
            this.skillsDetail.loanDetails = this.skillsDetail.loanDetails.filter(curentLoan => {
                return curentLoan.workflowActivityId !== response;
            });
        });
    }

    onClickOpenDropdown(event: UIEvent) {
        const button = (event.target as HTMLElement);
        button.nextElementSibling.classList.toggle('show');
    }

}
