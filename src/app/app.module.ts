import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent} from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail.component';
import { ProjectService} from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,    
    AboutComponent,
    ProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ProjectService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
