import { Component, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { newTaskData } from '../../../models/newTaskData.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output();
  add = output<newTaskData>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancelAddTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    });
  }
}
