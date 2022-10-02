import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../models/skill.models";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input()
  skill: Skill = new Skill("","","")
}
