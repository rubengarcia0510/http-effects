import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id:number=0


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscar(id: any) {
    if(!id) return;

    this.id=id
    this.router.navigate(['/usuario',id]);
    }

}
