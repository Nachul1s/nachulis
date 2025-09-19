import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './componentes/navegacion/navegacion';         
import { Aside } from './componentes/aside/aside';
import { Main } from './componentes/main/main';
import { Footer } from './componentes/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navegacion, Aside, Main, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Nachulis');
}
