import { Component, OnInit } from "@angular/core";
import { DocumentsService } from "./documents.service";
import { Router } from "@angular/router";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
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
})
export class DocumentsComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = ["number", "name", "description", "category", "actions"];
  constructor(
    private documentsService: DocumentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = this.documentsService.documents.map((d, i) => ({
      ...d,
      number: i + 1,
    }));
  }

    onNew() {
    this.router.navigate(["document-new"]);
  }
}
