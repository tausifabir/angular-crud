import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Course } from '../course';
import { CourseListService } from '../course-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
})
export class AddcourseComponent implements OnInit {
  data: any;
  constructor(private _courseService: CourseListService) {}

  ngOnInit(): void {}

  addNewCourse(data: any) {
    this._courseService.addCourse(data).subscribe((result: any) => {
      console.warn(result);
      alert('Course Added successfully');
    });
  }
}
