import { Component, input } from '@angular/core';

@Component({
  selector: 'app-short-text-field',
  imports: [],
  templateUrl: './short-text-field.html',
  styleUrl: './short-text-field.scss',
})
export class ShortTextField {
  designMode=input<boolean>();

  field=input.required();

}
