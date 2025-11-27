import { Component, input } from '@angular/core';

@Component({
  selector: 'app-long-text-field',
  imports: [],
  templateUrl: './long-text-field.html',
  styleUrl: './long-text-field.scss',
})
export class LongTextField {
  field=input({
    label: 'Long Text Field',
    type: 'longText',
    id: 'long-text-field-1',
    placeholder: 'Enter your long text here',
  });

}
