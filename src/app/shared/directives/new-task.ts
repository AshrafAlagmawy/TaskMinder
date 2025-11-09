import { AfterViewInit, Directive, ElementRef, signal } from '@angular/core';

@Directive({
  selector: '[appNewTask]',
})
export class NewTask implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  userRole = signal<string>(localStorage.getItem('userRole')!);
  ngAfterViewInit(): void {
    if (this.userRole().toLocaleLowerCase().trim() === 'user') {
      this.elementRef.nativeElement.style.display = 'none';
    }

    if (this.userRole().toLocaleLowerCase().trim() === 'admin') {
      this.elementRef.nativeElement.style.display = '';
    }
  }
}
