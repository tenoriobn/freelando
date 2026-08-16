import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CadastroFormComponent } from './pages/cadastro-form/cadastro-form.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  CadastroFormComponent
];

const MODULES = [
  ReactiveFormsModule
];

@Component({
  selector: 'app-root',
  imports: [
    ...COMPONENTS,
    ...MODULES
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freelando-reactive-form';
}
