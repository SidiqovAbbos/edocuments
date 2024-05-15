import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddTemplateComponent } from "./add-template/add-template.component";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { TemplatesService } from "./teplates.service";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '100ms',
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
      ])
    ])
  ],
  styleUrls: ["./templates.component.scss"],
})
export class TemplatesComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['number', 'name', 'description', 'category'];
  constructor(private router: Router, private templatesService: TemplatesService) { }

  ngOnInit(): void {
    this.dataSource = this.templatesService.templates.map((a, i) => ({ ...a, number: i + 1 }));
  }

  onNew() {
    this.router.navigate(['template-new'])
  }
}
