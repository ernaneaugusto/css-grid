import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  private readonly KEY = 'lesson';
  public lesson = +this.getLocalstorage();
  public fullPageStyle = false;
  public fullPageText = 'Tela cheia';
  public lessonsQuantity = 13;

  ngOnInit(): void {
    // this.init();
  }

  public init(): void {
    this.lesson = 1;
    this.setLocalstorage();
  }

  public prev(): void {
    if (this.lesson < 0) return;
    this.lesson--;
    this.setLocalstorage();
  }

  public next(): void {
    if (this.lesson > this.lessonsQuantity) return;
    this.lesson++;
    this.setLocalstorage();
  }

  public toggleFullPageStyle(): void {
    this.fullPageStyle = !this.fullPageStyle;
    this.fullPageText = this.fullPageStyle
      ? 'Sair da tela cheia'
      : 'Tela cheia';
  }

  private setLocalstorage(): void {
    localStorage.setItem(this.KEY, this.lesson.toString());
  }

  private getLocalstorage(): string {
    return localStorage.getItem(this.KEY) || '0';
  }
}
