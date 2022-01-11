import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = [
    {
      path: "users",
      title: "Users",
    },
    {
      path: "organaizer",
      title: "Organaizer",
    },
    {
      path: "characters",
      title: 'Rick&Morty'

    },
    {
      path: "about",
      title: "About",
    },
  ]

  ngOnInit(): void {
  }

}
