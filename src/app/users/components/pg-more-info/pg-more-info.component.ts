import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pgDetails } from 'src/app/data-types';
import { PgsellerService } from 'src/app/shared/services/pgseller.service';

@Component({
  selector: 'app-pg-more-info',
  templateUrl: './pg-more-info.component.html',
  styleUrls: ['./pg-more-info.component.css']
})
export class PgMoreInfoComponent implements OnInit {
  pginfo: pgDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private pgService: PgsellerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pgId = params['id'];
      this.pgService.getPgDetailsById(pgId).subscribe((data: pgDetails) => {
        this.pginfo = data;
      });
    });
  }
}
