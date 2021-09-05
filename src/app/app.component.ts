import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataBean } from './DataBean';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  candidateForm: FormGroup;
  fname: string;
  lname: string;
  email: string;
  gender: string;
  count = 5;
  isMChecked: any;
  isFChecked: any;
  data: DataBean[] ;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.candidateForm = this.formBuilder.group({
      fname: [],
      lname: [],
      email: [],
      gender: []
    });

    this.data=[
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];
  }

  add() {
    var data = new DataBean();
    data.id = this.count + 1;
    data.first_name = this.candidateForm.get('fname').value;
    data.last_name = this.candidateForm.get('lname').value;
    data.email = this.candidateForm.get('email').value;
    data.gender = this.candidateForm.get('gender').value;
    this.data.push(data);
  }

  checkValue(event: any) {
    this.data=this.data.filter(d => d.gender == event);
  }
}
