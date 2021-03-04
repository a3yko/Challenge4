import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-prform',
  templateUrl: './prform.page.html',
  styleUrls: ['./prform.page.scss'],
})
export class PrformPage implements OnInit {
  prform: FormGroup;
  constructor(private form: FormBuilder, private http: HttpClient, private router: Router, private newpr : DataService) {
   }

  ngOnInit() {
    this.prform = this.form.group({
      name : new FormControl(null),
      reps : new FormControl(null),
      weight : new FormControl(null)
    });
  }


  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Prs' : '';
  }

  public async createPR(){
    let newid = await this.newpr.generateKey();
    let pr = {
      id : `${newid}`,
      date: new Date(),
      name: this.prform.controls.name.value,
      reps: this.prform.controls.reps.value,
      weight: this.prform.controls.weight.value,
    }
    await this.newpr.create(newid, pr);
    this.router.navigate(['/']);
  }

}
