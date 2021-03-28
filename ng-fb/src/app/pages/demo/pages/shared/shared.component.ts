import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null]
    })
  }

onSubmit(): void {
        console.log('Submit!');

        // if (!this.form.valid) {
        //     markFormGroupTouched(this.form);
        // }
    }

  onPatchValue(): void {
    this.form.patchValue({input: 'test'});
       /* input: 123,
        password: 'qwerty',
        autocomplete: 1,
        select: 2,
        checkboxes: [3],
        radios: 4,
        date: new Date().getTime(),
        dateRange: {
            from: new Date(2019, 5, 10).getTime(),
            to: new Date(2019, 5, 25).getTime()
        }
    });*/
}

}
