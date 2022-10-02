import {Component, OnInit} from '@angular/core';
import {Developer} from "../models/developer.models";
import {Skill} from "../models/skill.models";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  developer: Developer = new Developer("Escarmant", "Adrien", 34, "male", "pipadouwap", [
      new Skill("java", "JAJA", "www.java.com"),
      new Skill("java1", "JAJA1", "www.java1.com"),
      new Skill("java2", "JAJA2", "www.java2.com"),
      new Skill("java3", "JAJA3", "www.java3.com"),
    ]
  )

}
