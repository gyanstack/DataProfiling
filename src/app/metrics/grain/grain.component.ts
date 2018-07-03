import { Component, OnInit } from '@angular/core';
import { DropDown, CalculateList, TrackList } from '../../shared/code-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-grain',
  templateUrl: './grain.component.html',
  styleUrls: ['./grain.component.css']
})
export class GrainComponent implements OnInit {

  show: boolean;
  tableList: Array<DropDown>;
  uniqueIdList: Array<DropDown>;
  grainForm: FormGroup;
  constructor(
    private _router: Router,
    private _metricsService: MetricsService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.tableList = CalculateList;
    this.uniqueIdList = TrackList;
    // this.show = true;
  }

  createForm() {
    this.grainForm = this.fb.group({
      project: ['', Validators.required],
      grainName: ['', Validators.required],
      schema: ['', Validators.required],
      table: ['', Validators.required],
      uniqueId: ['', Validators.required]
    });
  }

  onCancelClick() {
    this.grainForm.reset();
    this.show = false;
  }
}
