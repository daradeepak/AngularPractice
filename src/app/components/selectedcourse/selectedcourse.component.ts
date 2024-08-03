import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent {
  courseId;

  constructor(private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this._activeRoute.snapshot.paramMap.get('id');
  }
}
