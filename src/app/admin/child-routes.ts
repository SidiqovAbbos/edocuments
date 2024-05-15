import { Route } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { TemplatesComponent } from "./templates/templates.component";
import { DocumentsComponent } from "./documents/documents.component";
import { AddTemplateComponent } from "./templates/add-template/add-template.component";
import { AddDocumentComponent } from "./documents/add-document/add-document.component";

export const childRoutes: Route[] = [
  {
    path: "categories",
    component: CategoriesComponent,
    data: { icon: 'category', text: 'Категория' }
  },
  {
    path: "templates",
    component: TemplatesComponent,
    data: { icon: "list_alt", text: "Шаблоны" },
  },
  {
    path: "template-new",
    component: AddTemplateComponent,
  },
  {
    path: "documents",
    component: DocumentsComponent,
    data: { icon: "insert_drive_file", text: "Документы" },
  },
  {
    path: "document-new",
    component: AddDocumentComponent,
  },
];
