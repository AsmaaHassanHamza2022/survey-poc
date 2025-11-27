import { Component, input } from '@angular/core';

@Component({
  selector: 'app-long-text-field',
  imports: [],
  templateUrl: './long-text-field.html',
  styleUrl: './long-text-field.scss',
})
export class LongTextField {
  designMode=input<boolean>();
}
