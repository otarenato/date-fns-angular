import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  parseISO,
  format,
  formatRelative,
  formatDistance
} from 'date-fns';
import { pt } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'date-fns-angular';
  dateForm!: FormGroup;
  firstDate!:Date;
  lastDate!:Date;
  dateToday: string = '';
  relative: string = '';
  ngOnInit(): void {
    this.dateForm = new FormGroup({
      dataInicial: new FormControl('')
    });

    this.firstDate = parseISO('2021-09-02 10:00:00');
    this.lastDate = parseISO('2021-09-01 10:00:00');
    this.dateToday = format(new Date(), 'dd/MM/yyyy', { locale: pt });
    this.relative = formatRelative(this.firstDate, this.lastDate, {locale: pt});
  }
}
