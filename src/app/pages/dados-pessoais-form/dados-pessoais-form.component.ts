import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { CadastroService } from '../../shared/services/cadastro.service';
import {
  BehaviorSubject,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import {
  Cidade,
  Estado,
  IbgeService,
} from '../../shared/services/ibge.service';

export const senhasIguaisValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const senha = control.get('senha');
  const confirmaSenha = control.get('confirmaSenha');

  return senha && confirmaSenha && senha.value === confirmaSenha.value
    ? null
    : { senhasNaoIguais: true };
};

@Component({
  selector: 'app-dados-pessoais-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './dados-pessoais-form.component.html',
  styleUrls: ['./dados-pessoais-form.component.scss'],
})
export class DadosPessoaisFormComponent implements OnInit {
  dadosPessoaisForm!: FormGroup;

  estado$!: Observable<Estado[]>;
  cidades$!: Observable<Cidade[]>;

  carregandoCidades$ = new BehaviorSubject<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cadastroService: CadastroService,
    private ibgeService: IbgeService,
  ) {}

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {
      validators: senhasIguaisValidator,
    };

    this.dadosPessoaisForm = this.fb.group(
      {
        nomeCompleto: ['', Validators.required],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmaSenha: ['', Validators.required],
      },
      formOptions,
    );

    this.carregarEstados();
    this.configurarListernerEstado();
  }

  senhasIguaisValidator(group: FormGroup): { [key: string]: any } | null {
    const senha = group.get('senha')?.value;
    const confirmaSenha = group.get('confirmaSenha')?.value;

    return senha === confirmaSenha ? null : { senhasNaoIguais: true };
  }

  onAnterior(): void {
    this.salvarDadosAtuais();
    this.router.navigate(['/cadastro/area-atuacao']);
  }

  onProximo(): void {
    if (this.dadosPessoaisForm.valid) {
      this.salvarDadosAtuais();
      this.router.navigate(['/cadastro/confirmacao']);
    } else {
      this.dadosPessoaisForm.markAllAsTouched();
    }
  }

  private carregarEstados(): void {
    this.estado$ = this.ibgeService.getEstados();
  }

  private configurarListernerEstado(): void {
    const estadoControl = this.dadosPessoaisForm.get('estado');

    if (estadoControl) {
      this.cidades$ = estadoControl.valueChanges.pipe(
        startWith(''),
        tap(() => {
          this.resetarCidade();
          this.carregandoCidades$.next(true);
        }),
        switchMap((uf) => {
          if (uf) {
            return this.ibgeService
              .getCidadesPorEstado(uf)
              .pipe(tap(() => this.carregandoCidades$.next(false)));
          }

          this.carregandoCidades$.next(false);
          return of([]);
        }),
      );
    }
  }

  private carregarCidades(uf: string): void {
    this.carregandoCidades$.next(true);
    this.cidades$ = this.ibgeService.getCidadesPorEstado(uf);
    this.cidades$.subscribe(() => {
      this.carregandoCidades$.next(false);
    });
  }

  private salvarDadosAtuais() {
    const formValue = this.dadosPessoaisForm.value;

    this.cadastroService.updateCadastroData({
      nomeCompleto: formValue.nomeCompleto,
      estado: formValue.estado,
      cidade: formValue.cidade,
      email: formValue.email,
      senha: formValue.senha,
    });
  }

  private resetarCidade(): void {
    this.dadosPessoaisForm.get('cidade')?.setValue('');
  }
}
