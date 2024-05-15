import { Injectable } from "@angular/core";

export interface Template {
  name: string;
  description: string;
  content: string;
  category: string;
  routes?: any[]; 
}

@Injectable({
  providedIn: "root",
})
export class TemplatesService {
  templates: Template[] = [
    {
      name: "My Template 1",
      category: "Spravka",
      content:
        'Salom&nbsp;<input type="text" class="my-custom-control" data-name="Name" placeholder="Name">',
      description: "desc ...",
    },
    {
      name: "My Template 2",
      category: "Spravka007",
      content: `Salom`,
      description: "",
    },
    {
      name: "My Template 2",
      category: "Otchet",
      content: `
      <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">СПРАВКА</p>
      <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; font-size:16pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt;">Выдана&nbsp;<input type="text" class="my-custom-control" data-name="(ФИО)" placeholder="(ФИО)">&nbsp;о том, что он действительно работает в&nbsp;<input type="text" class="my-custom-control" data-name="(название организации)" placeholder="(название организации)">&nbsp;в должности&nbsp;<input type="text" class="my-custom-control" data-name="(название должности)" placeholder="(название должности)"><br>&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt;"><b>Справка дана для предоставления по месту требования.</b></p>
      <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>
      <p style="margin-top:0pt; margin-bottom:0pt;">&nbsp;</p>`,
      description: "",
    },
  ];
  constructor() {}

  add(template: Template) {
    this.templates.push(template);
  }
}
