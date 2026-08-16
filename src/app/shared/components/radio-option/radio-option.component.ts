import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  standalone: true,
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() selectionChange = new EventEmitter<string>();

  onChange(): void {
    this.selectionChange.emit(this.value);
  }
}
