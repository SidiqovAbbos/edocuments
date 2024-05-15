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
      name: "My Document 1",
      content: "Salom <b>Abbos</b>",
    },
    {
      name: "My Document 1",
      content: "Salom <b>Shuhrat</b>",
    },
    {
      name: "My Document 1",
      content: "Empty",
    },
  ];
  constructor() {}

  addDoc(document: Document) {
    this.documents.push(document);
  }
}
