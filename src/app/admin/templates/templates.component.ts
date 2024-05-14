import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddTemplateComponent } from "./add-template/add-template.component";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { TeplatesService } from "./teplates.service";

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.scss"],
})
export class TemplatesComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['number', 'name', 'description', 'category'];
  constructor(private matDialog: MatDialog, private templatesService: TeplatesService) {}

  ngOnInit(): void {
    this.dataSource = this.templatesService.templates.map((a, i) => ({ ...a, number: i + 1}));
  }

  onNew() {
    this.matDialog.open(AddTemplateComponent, {
      minWidth: "440px",
      minHeight: "200px",
    }).afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
