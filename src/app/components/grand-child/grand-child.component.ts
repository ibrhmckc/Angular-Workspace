import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
})
export class GrandChildComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.form;
  }
}
