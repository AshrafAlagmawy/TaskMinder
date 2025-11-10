import { AfterViewInit, Directive, ElementRef, Renderer2, signal } from '@angular/core';
import { UserRole } from '../../core/enums/user-role.enum';

@Directive({
  selector: '[appNewTask]',
})
export class NewTask implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  userRole = signal<string>(localStorage.getItem('userRole')!);

  private parentNode: Node | null = null;
  private nextSibling: Node | null = null;
  private removedElement: Node | null = null;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    if (this.userRole().toLocaleLowerCase().trim() === UserRole.User) {
      this.parentNode = this.elementRef.nativeElement.parentNode;
      this.nextSibling = this.elementRef.nativeElement.nextSibling;
      this.removedElement = this.elementRef.nativeElement;

      this.renderer.removeChild(this.parentNode, this.removedElement);
    } else if (this.userRole().toLocaleLowerCase().trim() === UserRole.Admin) {
      if (this.removedElement && this.parentNode) {
        this.renderer.insertBefore(this.parentNode, this.removedElement, this.nextSibling);
      }
    }
  }
}
