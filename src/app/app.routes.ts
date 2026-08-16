import { Routes } from '@angular/router';
import { CadastroFormComponent } from './pages/cadastro-form/cadastro-form.component';
import { DadosPessoaisFormComponent } from './pages/dados-pessoais-form/dados-pessoais-form.component';
import { PerfilFormComponent } from './pages/perfil-form/perfil-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cadastro/area-atuacao', pathMatch: 'full' },
  { path: 'cadastro/area-atuacao', component: CadastroFormComponent },
  { path: 'cadastro/dados-pessoais', component: DadosPessoaisFormComponent },
  { path: 'cadastro/perfil', component: PerfilFormComponent }
];
