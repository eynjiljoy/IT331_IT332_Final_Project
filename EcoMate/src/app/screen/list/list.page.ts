import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router' 
 
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
   
})
export class ListPage implements OnInit {
  constructor(private router:Router,) { }
  ngOnInit() {
  }


  logMeIn(){
    this.router.navigate(['/intro'])
  }
  
 
  swiperSlideChanged(e:any){
    console.log('event', event);
  }

 expandCategory: boolean = false;  

  categories: any[] = [
    {
      label: 'Paper',
      link: 'paper',
      imageSrc: 'assets/c1.png'
    },
    {
      label: 'Glass Bottle',
      link: 'gbottle',
      imageSrc: 'assets/c2.png'
    },
    {
      label: 'Cans',
      link: 'cans',
      imageSrc: 'assets/c3.png'
    },
    {
      label: 'Wrappers',
      link: 'wrapper',
      imageSrc: 'assets/c5.png'
    },
    {
      label: 'Plastic Bottle',
      link: 'pbottle',
      imageSrc: 'assets/pb.png'
    },
    {
      label: 'Tire',
      link: 'tire',
      imageSrc: 'assets/c6.png'
    },
    {
      label: 'Carton',
      link: 'carton',
      imageSrc: 'assets/c7.png'
    }
  ];

  
}
 