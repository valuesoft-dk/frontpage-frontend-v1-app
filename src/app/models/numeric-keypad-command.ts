import { Action } from '../enums/action';

export class Command {
    
    constructor(
        action: Action,
        character: string
    )
    {
        this.Action = action;
        this.Character = character;
    }
    public Action: Action;
    public Character: string;
}

export class CommandFactory {
    static create(command: Command) {
        return new Command(command.Action, command.Character);
    }
}