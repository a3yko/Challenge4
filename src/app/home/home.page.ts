import { Component } from '@angular/core';
import { DataService, PR } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public prs: Array <PR> = [];
  constructor(private data: DataService) {
  }

  async ngOnInit(){
    this.prs = await this.data.getPrs();
    console.log(this.prs);
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
}
