import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="chip"
      [class.chip--selected]="selected"
      [disabled]="disabled"
      (click)="onClick()">
      {{ text }}
      <span *ngIf="selected" class="chip__icon">✓</span>
    </button>
  `,
  styles: [`
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      border: 1px solid #ddd;
      background-color: white;
      color: #333;
      cursor: pointer;
      transition: all 0.2s;
      gap: 0.5rem;

      &:hover:not(:disabled) {
        border-color: #0066cc;
        color: #0066cc;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &--selected {
        background-color: #0066cc;
        color: white;
        border-color: #0066cc;

        &:hover {
          background-color: #0055aa;
          color: white;
        }
      }

      &__icon {
        font-size: 0.8rem;
      }
    }
  `]
})
export class ChipComponent {
  @Input() text: string = '';
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
