import { Component, OnInit } from '@angular/core';
import { CalculateList, DropDown, TrackList } from '../shared/code-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MetricsService } from '../services/metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  show: boolean;
  calculateList: Array<DropDown>;
  trackList: Array<DropDown>;
  metricsForm: FormGroup;
  constructor(
    private _router: Router,
    private _metricsService: MetricsService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.calculateList = CalculateList;
    this.trackList = TrackList;
    // this.show = true;
  }

  createForm() {
    this.metricsForm = this.fb.group({
      sliceName: ['', Validators.required],
      column: ['', Validators.required],
      groupBy: ['', Validators.required],
      track: ['', Validators.required],
      calculate: ['', Validators.required]
    });
  }

  onCancelClick() {
    this.metricsForm.reset();
    this.show = false;
  }

  onSubmit(form: any) {

  }

}
