import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report-service/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  query1:any;
  query2:any;
  query3:any;
  query4:any;
  query5:any;
  query6:any;
  query7:any;
  query8:any;
  query9:any;
  query10:any;
  query11:any;
  query12:any;
  query13:any;
  query14:any;
  query15:any;
  query16:any;
  query17:any;
  query18:any;
  query19:any;
  query20:any;

  constructor(private reportService :ReportService) { }

  ngOnInit(): void {
    this.reportService.getQuery1().subscribe((queries:any) => { this.query1 = queries.result[0]
      
    });

    this.reportService.getQuery2().subscribe((queries:any) => { this.query2 = queries.result
      
    });
  
    this.reportService.getQuery3().subscribe((queries:any) => { this.query3 = queries.result;

    });

    this.reportService.getQuery4().subscribe((queries:any) => { this.query4 = queries.result
   
    });
  
    this.reportService.getQuery5().subscribe((queries:any) => { this.query5 = queries.result
      
    });

    this.reportService.getQuery6().subscribe((queries:any) => { this.query6 = queries.result
      
    });
  
    this.reportService.getQuery7().subscribe((queries:any) => { this.query7 = queries.result
   
    });

    this.reportService.getQuery8().subscribe((queries:any) => { this.query8 = queries.result
   
    });
    this.reportService.getQuery9().subscribe((queries:any) => { this.query9 = queries.result
   
    });
    this.reportService.getQuery10().subscribe((queries:any) => { this.query10 = queries.result
   
    });
    this.reportService.getQuery11().subscribe((queries:any) => { this.query11 = queries.result
   
    });
    this.reportService.getQuery12().subscribe((queries:any) => { this.query12 = queries.result
  
    });
    this.reportService.getQuery13().subscribe((queries:any) => { this.query13= queries.result
   
    });
    this.reportService.getQuery14().subscribe((queries:any) => { this.query14 = queries.result
   
    });
    this.reportService.getQuery15().subscribe((queries:any) => { this.query15 = queries.result
   
    });
    this.reportService.getQuery16().subscribe((queries:any) => { this.query16 = queries.result
   
    });
    this.reportService.getQuery17().subscribe((queries:any) => { this.query17 = queries.result
   
    });
    this.reportService.getQuery18().subscribe((queries:any) => { this.query18 = queries.result
   
    });
    this.reportService.getQuery19().subscribe((queries:any) => { this.query19 = queries.result
   
    });
    this.reportService.getQuery20().subscribe((queries:any) => { this.query20 = queries.result
   
    });




  }

}
