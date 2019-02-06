import { Component, OnInit } from '@angular/core';
import { Action } from '../enums/action';
import { Command, CommandFactory } from '../models//numeric-keypad-command';
import { NumericKeypadService } from '../services/numeric-keypad.service';
import { SharepointService } from '../services/sharepoint.service';
import { WindowrefService } from '../services/windowref.service';

@Component({
  selector: 'app-numeric-keypad',
  templateUrl: './numeric-keypad.component.html',
  styleUrls: ['./numeric-keypad.component.css']
})
export class NumericKeypadComponent implements OnInit {

  constructor(
    private numericKeypadService: NumericKeypadService,
    private sharepointService: SharepointService,
    private winRef: WindowrefService    
  ) { }

  ngOnInit() {
  }

  Command(event: any, s: string): void {
    var command: Command = null;

    event.preventDefault();

    switch (s) {
      case "backspace":
        command = CommandFactory.create(
          {
            Action: Action.DeleteLastCharacter,
            Character: ''
          });
        break;

      case "clear":
        command = CommandFactory.create(
          {
            Action: Action.DeleteAllCharacters,
            Character: ''
          });
        break;

      default:
      command = CommandFactory.create(
        {
          Action: Action.TypeOneCharacter,
          Character: s
        });
        break;
    }

    this.numericKeypadService.SendCommand(command);
  }

  test(event: any): void {
    event.preventDefault();
    console.log(this.winRef.nativeWindow.location.href);
  }

}
