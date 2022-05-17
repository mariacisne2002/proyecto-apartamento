import { Component, OnInit } from '@angular/core';
import {apartamento, tipodeapartamento} from '../../SERVICES/equipo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  Apartamento: apartamento[];
  
  constructor(private tipodeapartamento:tipodeapartamento, private router:Router) { }

  ngOnInit(): void {

    this.listarApartamento();
    
  }


  listarApartamento()
  {
    this.tipodeapartamento.getApartamentos().subscribe(
      res=>{
        console.log(res);
        this.ListarApartamento=<any>res;
      },
      err=> console.log(err)
    );
  }





}








