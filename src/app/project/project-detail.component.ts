import { Component, Input } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'my-project-detail',
  templateUrl: "../project/project-detail.component.html",
  styleUrls: ["../project/project-detail.component.css"]
})
export class ProjectDetailComponent {
  @Input()
  project: Project;
}
