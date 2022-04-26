import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  dataSource: MatTableDataSource<any> = new MatTableDataSource()
  displayedColumns: string[] = ['OriginalURL', 'OutputURL', 'GenerationDate', 'Visits'];

  ngOnInit(): void {
    this.authService.getStatistics().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

}
