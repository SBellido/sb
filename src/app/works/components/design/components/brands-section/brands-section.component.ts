import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-brands-section',
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.scss', '../../../gallery-polaroid/gallery-polaroid.component.scss']
})

export class BrandsSectionComponent implements OnInit {


 /*--------VARIABLES -------*/ 
 public area: string = 'diseño/marcas';
 public icon: string = 'local_florist';
//  public isMobile: boolean = false;

 imgGallery = '../assets/images/brands/0.png';
 imagesList : GalleryImage[] = [
   { src: '../assets/images/brands/0.png', position: 0, alt: 'string', first: true, last: false },
   { src: '../assets/images/brands/1.png', position: 1, alt: 'string', first: false, last: false },
   { src: '../assets/images/brands/2.png', position: 2, alt: 'string', first: false, last: false },
   { src: '../assets/images/brands/4.png', position: 3, alt: 'string', first: false, last: true },
 ] 

brands: Button[] = [
  {
    route: 'works/design/competitions',
    img: '../assets/images/graph/eyeka_logo.png',
    title: 'Stormtech',
    text: 'Logo de Stormtech',
  },
]
 
  constructor(private router: Router) {}

  ngOnInit() {
    this.topFunction();
  }
   
 /* ----------- MÉTODOS ----------- */
 topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 
 routeBack() {    
   this.router.navigateByUrl('works/design/ux-ui')
 }

 

}

