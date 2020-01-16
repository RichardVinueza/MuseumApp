import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService, report } from '../reports.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pdf: report;

  constructor(private route: Router, private report: ReportsService) { }

  ngOnInit() {
    this.getUsersReport();
  }

  getUsersReport() {
    this.report.getListUserFromDB().subscribe(() => {
    }) 
    this.report.getJreportHTML().subscribe(() =>{

    })
    this.report.getJreportPDF().subscribe(() =>{
      
    })
  }

}
