import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-add-template",
  templateUrl: "./add-template.component.html",
  styleUrls: ["./add-template.component.scss"],
})
export class AddTemplateComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "auto",
    minHeight: "0",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
    placeholder: "Enter text here...",
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
    uploadUrl: "v1/image",
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["bold", "italic"], ["fontSize"]],
  };
  // editor: EditorJS;
  // editorREADONLY: EditorJS;

  // editorState = {};

  save() {
    this.dialogRef.close(this.templateForm.value);
  }
  templateForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddTemplateComponent>,
    _fb: FormBuilder
  ) {
    this.templateForm = _fb.group({
      name: [""],
      description: [""],
      content: [""],
      category: [""],
    });
  }

  onClickAddInput(executeCommandFn: any) {
    const text = this.getSelectionText();
    executeCommandFn(
      "insertHtml",
      `{{${text}}}`
    );
  }

  private getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    return text;
  }

  ngOnInit(): void {}
}
