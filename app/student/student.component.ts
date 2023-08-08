import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 mark:number=0;

  studentList: any[] = [
    { name: "Name1" , email:"email1@gmail.com", mark:55},
    { name: "Name2", "email":"email2@gmail.com", mark: 30 },
   
  ];
getMarkColor(mark:number): string{
  return mark < 50 ? 'red-text' : 'green-text';

}
  getPassFailStatus(mark: number): string{
    return mark > 50 ? 'Pass': 'Fail';
  }
}
