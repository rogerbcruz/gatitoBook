import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this.usuarioservice.retornaUsuario();
  constructor(private usuarioservice: UsuarioService, private router: Router) {}

  logout() {
    this.usuarioservice.logout();
    this.router.navigate(['']);
  }
}
