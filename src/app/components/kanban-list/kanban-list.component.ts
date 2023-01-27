import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.css'],
})
export class KanbanListComponent {
  ideas = [
    'Some random ideas',
    'This is another random idea',
    'Build an awesome application',
    'Something to do',
    'More big ideas',
    'Too many ideas',
  ];
  research = ['Lorem Ipsum', 'Kung fu', 'This must go in the Research column'];
  todo = [
    'Get to work',
    'First get a job',
    'Fall asleep',
    'Go home',
    'Pick up groceries',
  ];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Pet cats'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
