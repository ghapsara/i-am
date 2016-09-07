"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Projects = [
    { title: 'Termosocial', image: 't', description: 'Im Termosocial' },
    { title: 'Bottective', image: 'b', description: 'Im Bottective' },
    { title: '9puluh', image: 's', description: 'Im 9puluh' }
];
var ProjectComponent = (function () {
    function ProjectComponent() {
        this.projects = Projects;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.selectedProject = this.projects[0];
    };
    ProjectComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    ProjectComponent = __decorate([
        core_1.Component({
            templateUrl: "app/project/project.component.html",
            styleUrls: ["app/project/project.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map