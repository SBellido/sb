// popup.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<PopupComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
