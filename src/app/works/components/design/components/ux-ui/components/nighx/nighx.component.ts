import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, GalleryImage } from 'src/app/models/models';

@Component({
  selector: 'app-nighx',
  templateUrl: './nighx.component.html',
  styleUrls: ['./nighx.component.scss','../../../../../gallery/gallery.component.scss'],
})

export class NighxComponent implements OnInit {
    
/*--------VARIABLES -------*/ 
  public area: string = 'diseño';
  public icon: string = 'local_florist';
  
  imgGallery = "../assets/images/ux_ui/nighx/inicio/0.png";
  images : GalleryImage[] = [
    { src: '../assets/images/ux_ui/nighx/inicio/0.png', position: 0, alt: 'string', first: true, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/1.png', position: 1, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/2.png', position: 2, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/3.png', position: 3, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/4.png', position: 4, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/5.png', position: 5, alt: 'string', first: false, last: false },
    { src: '../assets/images/ux_ui/nighx/inicio/6.png', position: 6, alt: 'string', first: false, last: false }
  ] 

  brands : Button[] = [
    {
      route: 'works/design/ux-ui/ypf',
      img: '../assets/images/ux_ui/ypf/YPF_logo.png',
      title: 'YPF',
      text: 'Logo de YPF',
    },
    {
      route: 'works/design/ux-ui/v-life',
      img: '../assets/images/ux_ui/v-life/logo/v_life_isologo.png',
      title: 'V-Life',
      text: 'Logo V-Life',
    },
    {
      route: 'works/design/ux-ui/nighx',
      img: '../assets/images/ux_ui/nighx/logo/nighx_isologo.png',
      title: 'Nighx',
      text: 'Logo de Nighx',
    },
    {
      route: 'works/design/ux-ui/travel-log',
      img: '../assets/images/ux_ui/travel_log/logo/travelLog_isologo.png',
      title: 'TravelLog',
      text: 'Logo de TravelLog',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
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