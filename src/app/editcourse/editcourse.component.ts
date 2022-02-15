import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent implements OnInit {
  constructor(private _courseService: CourseListService) {}

  courseList: any;
  ngOnInit(): void {}

  getAllCourses() {
    this._courseService
      .getCouseById(1)
      .subscribe((data) => (this.courseList = data));
  }

  editCourse(data: any) {
    this._courseService.addCourse(data).subscribe((result: any) => {
      console.warn(result);
      alert('Course edited successfully');
    });
  }
}
