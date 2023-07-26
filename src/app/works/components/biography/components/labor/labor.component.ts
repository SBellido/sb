import { Component, OnInit } from '@angular/core';
import { ItemProfile } from 'src/app/models/models';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})

export class LaborComponent implements OnInit {
  
  /*--------VARIABLES -------*/ 

  items: ItemProfile[] = [ 
    {
      img: '../../../../assets/images/biography/profetional/coderhouse.png',
      description_img: 'Logo de Coderhouse',
      acronyms_career: 'Docente',
      year: '2021 | en curso',
      name_career: 'Curso de Desarrollo Web online multitudinario a través de la plataforma digital',
      link: 'https://www.coderhouse.es/nosotros',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/tsoft.png',
      description_img: 'Logo de la Tsoft',
      acronyms_career: 'UX/UI Sr.',
      year: '2022 | 2023',
      name_career: 'Diseño de Herramienta digital para Gestión de Inversiones en YPF Argentina.',
      link: 'https://www.tsoftglobal.com/',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/stormtech.png',
      description_img: 'Logo de la Stormtech',
      acronyms_career: 'UX/UI & Frontend Dev',
      year: '2020 | 2022',
      name_career: 'Desarrollos en Angular, Bootstrap y JavaScript.',
      link: 'https://stormtechlabs.com/#container-home',
      description_link: 'empresa'
    },
    {
      img: '../../../../assets/images/biography/profetional/medialab.png',
      description_img: 'Logo de MediaLab',
      acronyms_career: 'Desarrollador Web',
      year: '2020 | 2021',
      name_career: 'Práctica Profesional Supervisada (PPS). Desarrollo en Angular y Firebase',
      link: 'https://medialab.com.ar/',
      description_link: 'institución'
    },
    {
      img: '../../../../assets/images/biography/profetional/trenda.png',
      description_img: 'Logo de la Trenda Software',
      acronyms_career: 'Lead UX/UI',
      year: '2019 | 2020',
      name_career: 'Captura de requerimientos, test con usuarios, prototipado.',
      link: 'http://trendasoftware.com/',
      description_link: 'empresa'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
