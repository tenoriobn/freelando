import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CadastroData {
  areaAtuacao?: string;
  nivelExperiencia?: string;
  nomeCompleto?: string;
  estado?: string;
  cidade?: string;
  email?: string;
  senha?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private cadastroDataSubject = new BehaviorSubject<CadastroData>({});

  cadastroData$ = this.cadastroDataSubject.asObservable();

  constructor() {
    const savedData = localStorage.getItem('cadastroData');

    if (savedData) {
      this.cadastroDataSubject.next(JSON.parse(savedData));
    }
  }

  updateCadastroData(data: Partial<CadastroData>): void {
    const currentData = this.cadastroDataSubject.value;
    const updatedData = { ...currentData, ...data };
    this.cadastroDataSubject.next(updatedData);
    localStorage.setItem('cadastroData', JSON.stringify(updatedData));
  }

  getCadastroData(): CadastroData {
    return this.cadastroDataSubject.value;
  }
}
