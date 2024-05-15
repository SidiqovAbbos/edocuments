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
      name: "Мой Шаблон_1",
      category: "Университет",
      content:
        'Salom&nbsp;<input type="text" class="my-custom-control" data-name="Name" placeholder="Name">',
      description: "опис ...",
    },
    {
      name: "Мой Шаблон_2",
      category: "Поликлника",
      content: `Salom`,
      description: "",
    },
    {
      name: "Мой Шаблон_3",
      category: "Компания",
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
  constructor() { }

  add(template: Template) {
    this.templates.push(template);
  }
}
