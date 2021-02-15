import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.init();
  }

  clear() {
    this.formGroup.reset();
  }
  onSubmit() {
    console.log(this.formGroup.status);
  }
}
