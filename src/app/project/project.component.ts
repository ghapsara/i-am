import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  templateUrl: "../project/project.component.html",
  styleUrls: ["../project/project.component.css"]
})

export class ProjectComponent implements OnInit {

  constructor(private _projectService: ProjectService) { }

  errorMessage: string;

  projects: Project[];
  selectedProject: Project;  

  ngOnInit(): void {

    this._projectService.getAll().subscribe(
      results => this.projects = results,
      error => this.errorMessage = <any>error,
      () => this.selectAtBegin()
    );

  }

  selectAtBegin() {
    this.selectedProject = this.projects[0];
  }

  onSelect(project: Project): void {
    this.selectedProject = project
  }

}