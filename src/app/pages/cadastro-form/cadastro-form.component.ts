import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const MODULES = [
  CommonModule,
  ReactiveFormsModule
];

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    ...MODULES
  ],
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {
  cadastroForm!: FormGroup;

  areasAtuacao = [
    { id: 'ti', value: 'ti', label: 'TI e Programação' },
    { id: 'design', value: 'design', label: 'Design e Multimídia' },
    { id: 'revisao', value: 'revisao', label: 'Revisão' },
    { id: 'traducao', value: 'traducao', label: 'Tradução' },
    { id: 'transcricao', value: 'transcricao', label: 'Transcrição' },
    { id: 'marketing', value: 'marketing', label: 'Marketing' }
  ];

  niveisExperiencia = [
    {
      id: 'iniciante',
      label: 'Iniciante',
      description: '(1 a 3 anos)'
    },
    {
      id: 'intermediario',
      label: 'Intermediário',
      description: '(3 a 6 anos)'
    },
    {
      id: 'avancado',
      label: 'Avançado',
      description: '(6 anos ou mais)'
    }
  ];
}
