import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Grain } from '../../../models/grain';
import { MatPaginator, PageEvent } from '@angular/material';
import { GrainService } from '../../../services/grain.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-grain-list',
  templateUrl: './grain-list.component.html',
  styleUrls: ['./grain-list.component.css']
})
export class GrainListComponent implements OnInit {

  grainListForm: FormGroup;
  initialRuleSet: any;
  pageIndex = 0;
  pageSize = 10;
  pageGrains: Array<Grain>;
  grainList: Array<Grain>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _router: Router,
    private _grainService: GrainService,
    private fb: FormBuilder) {
    this.createForm();
    this.grainListForm.controls['search'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).
      subscribe(searchTxt => {
        if (searchTxt.length > 0) {
          this.searchGrains(searchTxt);
        } else if (searchTxt === '') {
          this.grainList = [];
          this.initialRuleSet.forEach(rule => {
            this.grainList.push(rule);
          });
          this.setPaginatedRules(this.pageIndex, this.pageSize);
        }
      });
  }

  createForm() {
    this.grainListForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.paginateRules(this.pageIndex, this.pageSize);
  }

  searchGrains(searchText: string) {
    const grainSet = this.initialRuleSet as Grain[];
    this.grainList = [];
    this.initialRuleSet.forEach(grain => {
      if (grain.project.toLowerCase().search(searchText.toLowerCase()) !== -1) {
        this.grainList.push(grain);
      }
    });
    this.setPaginatedRules(0, this.pageSize);
  }

  paginateRules(pageIndex: number, pageSize: number): void {
    this.grainList = [];
    this._grainService.getGrainList().subscribe(
      data => {
        if (data) {
          this.initialRuleSet = data;
          const searchText = '';
          data.forEach(rule => {
            if (searchText !== '') {
              if (rule.name.toLowerCase().search(searchText) !== -1) {
                this.grainList.push(rule);
              }
            } else {
              this.grainList.push(rule);
            }
          });
          // set pagination
          this.setPaginatedRules(pageIndex, pageSize);
        } else {
          this.pageGrains = [];
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
    if (this.grainList && this.grainList.length > 0) {
      if (this.grainList && this.grainList.length > 0) {
        this.pageGrains = this.grainList.slice(startIndex, endtIndex);
      } else {
        this.pageGrains = [];
      }
    }
  }
}
