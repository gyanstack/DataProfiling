import { Component, OnInit, ViewChild } from '@angular/core';
import { Metrics } from 'src/app/models/metrics';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { MetricsService } from '../../services/metrics.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-metrics-list',
  templateUrl: './metrics-list.component.html',
  styleUrls: ['./metrics-list.component.css']
})
export class MetricsListComponent implements OnInit {

  metricsListForm: FormGroup;
  initialRuleSet: any;
  pageIndex = 0;
  pageSize = 10;
  pageMetrics: Array<Metrics>;
  metricsList: Array<Metrics>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _router: Router,
    private _metricsService: MetricsService,
    private fb: FormBuilder) {
    this.createForm();
    this.metricsListForm.controls['search'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).
      subscribe(searchTxt => {
        if (searchTxt.length > 0) {
          this.searchMetrics(searchTxt);
        } else if (searchTxt === '') {
          this.metricsList = [];
          this.initialRuleSet.forEach(rule => {
            this.metricsList.push(rule);
          });
          this.setPaginatedRules(this.pageIndex, this.pageSize);
        }
      });
  }

  ngOnInit() {
    this.paginateRules(this.pageIndex, this.pageSize);
  }

  searchMetrics(searchText: string) {
    const metricsSet = this.initialRuleSet as Metrics[];
    this.metricsList = [];
    this.initialRuleSet.forEach(metrics => {
      if (metrics.sliceName.toLowerCase().search(searchText.toLowerCase()) !== -1) {
        this.metricsList.push(metrics);
      }
    });
    this.setPaginatedRules(0, this.pageSize);
  }

  createForm() {
    this.metricsListForm = this.fb.group({
      search: ['']
    });
  }

  paginateRules(pageIndex: number, pageSize: number): void {
    this.metricsList = [];
    this._metricsService.getMetricsList().subscribe(
      data => {
        if (data) {
          this.initialRuleSet = data;
          const searchText = '';
          data.forEach(rule => {
            if (searchText !== '') {
              if (rule.name.toLowerCase().search(searchText) !== -1) {
                this.metricsList.push(rule);
              }
            } else {
              this.metricsList.push(rule);
            }
          });
          // set pagination
          this.setPaginatedRules(pageIndex, pageSize);
        } else {
          this.pageMetrics = [];
        }
      },
      (err: any) => {
        // this.stopProcessingWithError(err, 'paginateRules');
      }
    );
  }

  setPaginator(event?: PageEvent): PageEvent {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize; // set pagesize
    this.setPaginatedRules(event.pageIndex, event.pageSize);

    return event;
  }

  setPaginatedRules(pageIndex: number, pageSize: number, searchText?: string) {
    const startIndex = pageIndex * pageSize;
    const endtIndex = (pageIndex * pageSize) + pageSize;
    if (this.metricsList && this.metricsList.length > 0) {
      this.pageMetrics = this.metricsList.slice(startIndex, endtIndex);
    } else {
      this.pageMetrics = [];
    }
  }
}
