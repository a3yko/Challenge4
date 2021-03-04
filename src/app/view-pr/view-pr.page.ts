import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, PR } from '../services/data.service';

@Component({
  selector: 'app-view-pr',
  templateUrl: './view-pr.page.html',
  styleUrls: ['./view-pr.page.scss'],
})
export class ViewPrPage implements OnInit {
  public pr: PR;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getPrsById(id).then(result =>{
      this.pr = result;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Prs' : '';
  }
}
