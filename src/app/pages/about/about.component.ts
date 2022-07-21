import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {



  showSidebar = true;



  constructor() { }

  ngOnInit(): void {
  }


  consultationVenues: any = [
    {
      _id: '1',
      img: '../../../assets/images/jpg-image/contulation-venue1.jpg'
    },
    {
      _id: '2',
      img: '../../../assets/images/jpg-image/contulation-venue2.jpg'
    },
    {
      _id: '3',
      img: '../../../assets/images/jpg-image/contulation-venue7.jpg'
    },
    {
      _id: '4',
      img: '../../../assets/images/jpg-image/image-105.png'
    },
    {
      _id: '5',
      img: '../../../assets/images/jpg-image/image-106.png'
    },
    {
      _id: '6',
      img: '../../../assets/images/jpg-image/image-107.png'
    },
    {
      _id: '7',
      img: '../../../assets/images/jpg-image/image-107.png'
    },
    {
      _id: '8',
      img: '../../../assets/images/jpg-image/image-108.png'
    },
    {
      _id: '9',
      img: '../../../assets/images/jpg-image/image-109.png'
    },
    {
      _id: '10',
      img: '../../../assets/images/jpg-image/image-86.png'
    },
    {
      _id: '11',
      img: '../../../assets/images/jpg-image/contulation-venue1.jpg'
    },
    {
      _id: '12',
      img: '../../../assets/images/jpg-image/contulation-venue2.jpg'
    },
    {
      _id: '13',
      img: '../../../assets/images/jpg-image/contulation-venue7.jpg'
    },
    {
      _id: '14',
      img: '../../../assets/images/jpg-image/image-105.png'
    },
    {
      _id: '15',
      img: '../../../assets/images/jpg-image/image-106.png'
    },
    {
      _id: '16',
      img: '../../../assets/images/jpg-image/image-107.png'
    },
    {
      _id: '17',
      img: '../../../assets/images/jpg-image/image-107.png'
    },
    {
      _id: '18',
      img: '../../../assets/images/jpg-image/image-108.png'
    },
    {
      _id: '19',
      img: '../../../assets/images/jpg-image/image-109.png'
    },
    {
      _id: '20',
      img: '../../../assets/images/jpg-image/image-86.png'
    },
  ];


  investigateArray: any = [
    {
      _id: '1',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home1.jpg'
    },
    {
      _id: '2',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home2.jpg'
    },
    {
      _id: '3',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home3.jpg'
    },
    {
      _id: '4',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home4.jpg'
    },
    {
      _id: '5',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home5.jpg'
    },
    {
      _id: '6',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home6.jpg'
    },
    {
      _id: '7',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home7.jpg'
    },
    {
      _id: '8',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home8.jpg'
    },
    {
      _id: '9',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home9.jpg'
    },
    {
      _id: '10',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home10.jpg'
    },
    {
      _id: '11',
      title: '終活で考える基礎的なこと',
      img: '../../../assets/images/jpg-image/home11.jpg'
    },
    {
      _id: '12',
      title: '家族で行う財産管理と新しい遺言と財産承継の形',
      img: '../../../assets/images/jpg-image/home12.jpg'
    }
  ];


  onShowSideBar() {
    this.showSidebar = !this.showSidebar;
  }


  showDropFirst = false;

  onshowDropFirst(){
    this.showDropFirst =! this.showDropFirst;
  }

  showDropSecond = true;

  onshowDropSecond(){
    this.showDropSecond =! this.showDropSecond;
  }

}
