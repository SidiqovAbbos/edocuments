import { Injectable } from '@angular/core';

export interface Template {
  name: string;
  description: string;
  content: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeplatesService {
  templates: Template[] = [
    {
      name: 'My Template 1',
      category: "Spravka",
      content: '<p>Salom</p>',
      description: 'desc ...'
    },
    {
      name: 'My Template 2',
      category: "Spravka007",
      content: '<p>Salom</p>',
      description: ''
    }
  ]
  constructor() { }


}
