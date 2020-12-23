import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) { } 
  
  ShowMessageSuccess(message: string, duration: number): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  ShowMessageError(message: string, duration: number): void {
    this.snackBar.open(message, '', {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    })
  }
}
