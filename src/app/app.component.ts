import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [HeaderComponent, FooterComponent];

const MODULES = [RouterOutlet, ReactiveFormsModule];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'freelando-reactive-form';
}
