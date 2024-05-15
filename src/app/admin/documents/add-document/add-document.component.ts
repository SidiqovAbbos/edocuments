import { Component, OnInit } from "@angular/core";
import { DocumentsService } from "../documents.service";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Location } from "@angular/common";
import { Template, TemplatesService } from "../../templates/teplates.service";
import { MatDialog } from "@angular/material/dialog";
import { VewDocumentComponent } from "../vew-document/vew-document.component";

@Component({
  selector: "app-add-document",
  templateUrl: "./add-document.component.html",
  styleUrls: ["./add-document.component.scss"],
})
export class AddDocumentComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
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
  selectedTemplate?: Template;
  steps = [];

  documentForm: FormGroup;
  templates: Template[] = [];
  constructor(
    private location: Location,
    private documentsService: DocumentsService,
    private templatesService: TemplatesService,
    _fb: FormBuilder
  ) {
    this.documentForm = _fb.group({
      name: [""],
      description: [""],
      content: [""],
      routes: _fb.array([])      
    });
  }

  onSelectTemplate(template: Template) {
    this.selectedTemplate = template;
    this.documentForm.patchValue(template);
  }

  addStep() {
    this.steps.push(true);
  }

  deleteStep(index: number) {
    this.steps = this.steps.filter((_, i) => i !== index);
  }

  create() {
    const inputs = document.querySelectorAll('.my-custom-control');
    let result = this.selectedTemplate.content as string;
    
    for (let i = 0; i < inputs.length; i++) {
      const element: HTMLInputElement = inputs[i] as HTMLInputElement;
      result = result.replace(element.outerHTML, element.value);
    }
   
    this.documentForm.value.content = result;
    this.documentsService.addDoc(this.documentForm.value);
    this.location.back();
  }
  
  get routes() {
    return this.documentForm.get("routes") as FormArray;
  }

  onClickAddInput(executeCommandFn: any) {
    const text = this.getSelectionText();
    if (!text) return;
    executeCommandFn("insertHtml", `{{${text}}}`);
  }

  private getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    return text;
  }

  ngOnInit(): void {
    this.templates = this.templatesService.templates.map((x) => x);
  }
}
