import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTemplateComponent } from './add-template/add-template.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  onNew() {
    this.matDialog.open(AddTemplateComponent, {minWidth: '440px', minHeight: '200px'});
  }

}
