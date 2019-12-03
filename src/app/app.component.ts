import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from './shared/models/item';

@Component({
  selector: 'cdk-drag-drop-nested-lists-example',
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class CdkDragDropNestedListsExample implements OnInit {
  // public parentItem: Item;
  public get connectedDropListsIds(): string[] {
    // We reverse ids here to respect items nesting hierarchy
    return this.getIdsRecursive(this.parentItem).reverse();
  }

  parentItem: Task = {
	"taskName": "",
	"taskID": "59397bad-5453-4da7-8000-fd7b75f58eed",
	"tasks": [
      {
            "taskName": "Task A",
            "taskID": "5de184ed6d07b2a9a20b7c56",
            "tasks": [
              {
                "taskName": "Task A1",
                "taskID": "5de184edb4f3e6fe6afc80a2",
                "tasks": []
              },
              {
                "taskName": "Task A2",
                "taskID": "5de184ed2076dddf100a451b",
                "tasks": []
              }
            ]
      },
      {
        "taskName": "Task B",
        "taskID": "5de184ed27757aa222285f6d",
        "tasks": [
        ]
      }
    ]
}

  constructor() {
    // this.parentItem = new Item({ name: 'parent-item' });
  }

  public ngOnInit() {
    
  }

  public onDragDrop(event: CdkDragDrop<Task>) {
    event.container.element.nativeElement.classList.remove('active');
    if (this.canBeDropped(event)) {
      const movingItem: Task = event.item.data;
      event.container.data.tasks.push(movingItem);
      event.previousContainer.data.tasks = event.previousContainer.data.tasks.filter((child) => child.taskID !== movingItem.taskID);
    } else {
      moveItemInArray(
        event.container.data.tasks,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  private getIdsRecursive(item: Task): string[] {
    let ids = [item.taskID];
    item.tasks.forEach((childItem) => { ids = ids.concat(this.getIdsRecursive(childItem)) });
    return ids;
  }

  private canBeDropped(event: CdkDragDrop<Task, Task>): boolean {
    const movingItem: Task = event.item.data;

    return event.previousContainer.id === event.container.id
      && this.isNotSelfDrop(event)
      && !this.hasChild(movingItem, event.container.data);
  }

  private isNotSelfDrop(event: CdkDragDrop<Task> | CdkDragEnter<Task> | CdkDragExit<Task>): boolean {
    console.log('test')
    return event.container.data.taskID !== event.item.data.taskID;
  }

  private hasChild(parentItem: Task, childItem: Task): boolean {
    const hasChild = parentItem.tasks.some((item) => item.taskID === childItem.taskID);
    return hasChild ? true : parentItem.tasks.some((item) => this.hasChild(item, childItem));
  }
}
