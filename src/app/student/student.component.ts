import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = [];
  dataSource=new MatTableDataSource<Student>([]);
  @ViewChild(MatSort)
  sort!: MatSort;

 
  constructor(private _liveAnnouncer: LiveAnnouncer,private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.getStudents().subscribe((data:Student[])=>{
      this.displayedColumns=Object.keys(data[0]);
      this.dataSource.data=data
    })
    

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
