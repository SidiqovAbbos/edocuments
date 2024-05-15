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
      content: "",
    },
    {
      name: "My Document 1",
      content: "",
    },
    {
      name: "My Document 1",
      content: "",
    },
  ];
  constructor() {}
}
