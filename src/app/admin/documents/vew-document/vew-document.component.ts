import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Document } from "../documents.service";

@Component({
  selector: "app-vew-document",
  templateUrl: "./vew-document.component.html",
  styleUrls: ["./vew-document.component.scss"],
})
export class VewDocumentComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: false,
    height: "auto",
    minHeight: "12rem",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: false,
    defaultParagraphSeparator: "",
    defaultFontName: "",
    defaultFontSize: "",
    fonts: [
      { class: "arial", name: "Arial" },
      { class: "times-new-roman", name: "Times New Roman" },
      { class: "calibri", name: "Calibri" },
      { class: "comic-sans-ms", name: "Comic Sans MS" },
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    sanitize: false,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["undo", "redo"], ["toggleEditorMode"]],
  };
content: string = '';
  constructor(
    public dialogRef: MatDialogRef<VewDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Document
  ) {
   
  }

  ngOnInit(): void {
    this.content = this.data.content;
  }
}
