import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { TemplatesService } from "../teplates.service";

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
    minHeight: "12rem",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
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
    sanitize: false,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["undo", "redo"], ["toggleEditorMode"]],
  };
  steps = [];

  templateForm: FormGroup;
  constructor(
    private location: Location,
    private templatesService: TemplatesService,
    _fb: FormBuilder
  ) {
    this.templateForm = _fb.group({
      name: [""],
      description: [""],
      content: [""],
      category: [""],
      routes: _fb.array([]),
    });
  }

  save() {
    this.templatesService.add(this.templateForm.value);
    this.location.back();
  }
  get routes() {
    return this.templateForm.get("routes") as FormArray;
  }
  addStep() {
    this.routes.push(
      new FormGroup({
        name: new FormControl(),
        department: new FormControl(),
        role: new FormControl(),
      })
    );
  }

  deleteStep(index: number) {
    const routes = this.templateForm.get("routes") as FormArray;
    this.routes.removeAt(index);
  }

  onClickAddInput(executeCommandFn: any) {
    const text = this.getSelectionText();
    if (!text) return;
    executeCommandFn(
      "insertHtml",
      `<input type="text" class="my-custom-control" data-name="${text}" placeholder="${text}">`
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

  importWordDocument() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      this.templateForm.get("content").setValue(this.wordContent);
    };
    input.click();
  }

  wordContent = `
  <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">СПРАВКА</p>
  <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">Выдана (ФИО) о том, что он действительно работает в (название организации) в должности (название должности) <br>&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">Справка дана для предоставления по месту требования.</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>`;
}
