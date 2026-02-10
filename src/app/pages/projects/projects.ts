import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class ProjectsComponent {

  projects = [
    {
      title: 'Angular Landing Page',
      desc: 'Standalone Angular app with routing, services and forms',
      tech: 'Angular, TypeScript, RxJS'
    },
    {
      title: 'Task Manager',
      desc: 'CRUD app with state management',
      tech: 'Angular, REST API'
    }
  ];
}
