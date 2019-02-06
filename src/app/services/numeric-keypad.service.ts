import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs/Rx';

import { Action } from '../enums/action';
import { Command } from '../models/numeric-keypad-command';


@Injectable({
  providedIn: 'root'
})
export class NumericKeypadService {
  private _numericKeypadCommands: Subject<Command> = new Subject();
  public numericKeypadCommands: Observable<Command> = this._numericKeypadCommands.asObservable();

  constructor() { }


  public SendCommand(command: Command): void {
    this._numericKeypadCommands.next(command);
  }

  public ApplyCommand(s: string, command: Command): string {
    switch (command.Action) {
      case Action.DeleteLastCharacter:
        return s.slice(0, -1);
        break;

      case Action.DeleteAllCharacters:
        return '';
        break;

      default:
        return (`${s}${command.Character}`);
        break;
    }

  }
}
