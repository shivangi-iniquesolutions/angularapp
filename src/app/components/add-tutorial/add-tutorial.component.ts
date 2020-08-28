import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    name: '',
    year: '',
    color: '',
    pantone_value: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      year: this.tutorial.year,
      color: this.tutorial.color,
      pantone_value: this.tutorial.pantone_value
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      year: '',
      color: '',
      pantone_value: ''
    };
  }

}
