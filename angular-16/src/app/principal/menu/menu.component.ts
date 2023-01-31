import { Component, OnInit,AfterViewChecked,DoCheck } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,DoCheck {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  home= false
  peru= false
  chile=false
  uru=false
  ngDoCheck(){
    console.log(this.router.url)
    console.log(typeof this.router.url)
    switch (this.router.url) {
      case "/":
        console.log("estas en la home")
        this.home = true
        this.peru = false
        this.chile = false
        this.uru = false
        break;
      case "/peru":
          console.log("estas en peru")
          this.home = false
          this.peru = true
          this.chile = false
          this.uru = false
          break;
      case "/chile":
          console.log("estas en chile")
          this.home = false
          this.peru = false
          this.chile = true
          this.uru = false
          break;
      case "/uruguay":
          console.log("estas en usuruay")
          this.home = false
          this.peru = false
          this.chile = false
          this.uru = true
          break;
      default:
        break;
    }
  }
}
