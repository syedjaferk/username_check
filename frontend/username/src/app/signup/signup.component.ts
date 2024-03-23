import { debounceTime, fromEvent, map } from 'rxjs';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements AfterViewInit {
  @ViewChild('inputField') inputField!: ElementRef;

  constructor(){}

  ngAfterViewInit(): void {
    if (this.inputField) {
      const inputObservable = fromEvent(this.inputField.nativeElement, 'input').pipe(map((event: any) => (event.target as HTMLInputElement).value), debounceTime(300));
      inputObservable.subscribe((inputValue: string) => {
        console.log('Input event occurred:', inputValue);
      });
    }
    
  }
}
