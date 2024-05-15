import { Injectable } from "@angular/core";

export interface Document {
  name: string;
  description?: string;
  content: string;
}

@Injectable({
  providedIn: "root",
})
export class DocumentsService {
  documents: Document[] = [
    {
      name: "Мой Документ_1",
      content: "",
    },
    {
      name: "Мой Документ_2",
      content: "",
    },
    {
      name: "Мой Документ_3",
      content: "",
    },
  ];
  constructor() { }

  addDoc(document: Document) {
    this.documents.push(document);
  }
}
