import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ExperienceLevel {
  id: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-experience-level',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience-level.component.html',
  styleUrls: ['./experience-level.component.scss']
})
export class ExperienceLevelComponent {
  @Input() levels: ExperienceLevel[] = [];
  @Input() selectedLevel: string = '';
  @Output() levelChange = new EventEmitter<string>();

  selectLevel(levelId: string): void {
    this.selectedLevel = levelId;
    this.levelChange.emit(levelId);
  }
}
