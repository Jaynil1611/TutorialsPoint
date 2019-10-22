import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentArray = [];
  showDeletedMessage: boolean;
  searchText = '';

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      list => {
        this.studentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.studentService.deleteStudent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(student) {
    return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }
}
