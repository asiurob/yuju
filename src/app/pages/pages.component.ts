import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public options: Array<Option> = [
    {name: 'Inicio', icon: 'fa-home', route: '/'},
    {name: 'Ordenes', icon: 'fa-shopping-cart', route: '/ordenes'},
    {name: 'Mensajes', icon: 'fa-comment-alt', route: '/mensajes'}];
  constructor() { }

  ngOnInit() {
  }

}

interface Option {
  name: string;
  icon: string;
  route: string;
}
