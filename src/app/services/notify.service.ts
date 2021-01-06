import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  
  constructor(private snackBar: MatSnackBar) { }  

  ShowMessageSuccessTopRight(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  ShowMessageSuccessTopCenter(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }

  ShowMessageSuccessTopLeft(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "left",
      verticalPosition: "top",
    })
  }

  ShowMessageSuccessBottomRight(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "bottom",
    })
  }

  ShowMessageSuccessBottomCenter(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    })
  }

  ShowMessageSuccessBottomLeft(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "left",
      verticalPosition: "bottom",
    })
  }

  ShowMessageErrorTopRight(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['error-snackbar']
    })
  }

  ShowMessageErrorTopCenter(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['error-snackbar']
    })
  }

  ShowMessageErrorTopLeft(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "left",
      verticalPosition: "top",
      panelClass: ['error-snackbar']
    })
  }

  ShowMessageErrorBottomRight(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: ['error-snackbar']
    })
  }

  ShowMessageErrorBottomCenter(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['error-snackbar']
    })
  }

  ShowMessageErrorBottomLeft(
    message: string,
    duration: number,      
  ): void {
    this.snackBar.open(message, 'X', {
      duration: duration,
      horizontalPosition: "left",
      verticalPosition: "bottom",
      panelClass: ['error-snackbar']
    })
  }
}
