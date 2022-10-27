import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly KEY = "lesson";
  public lesson = +this.getLocalstorage();

  public init(): void {
    this.lesson = 1;
    this.setLocalstorage();
  }

  public prev(): void {
    if (this.lesson === 0) return;
    this.lesson--;
    this.setLocalstorage();
  }

  public next(): void {
    if (this.lesson > 67) return;
    this.lesson++;
    this.setLocalstorage();
  }

  private setLocalstorage(): void {
    localStorage.setItem(this.KEY, this.lesson.toString());
  }

  private getLocalstorage(): string {
    return localStorage.getItem(this.KEY) || '0';
  }
}
