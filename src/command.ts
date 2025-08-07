export interface CommandDetails {
  name: string;
  arguments?: string;
}

export class Command {
  private matcher: RegExp = /^\/([a-zA-Z0-9]+(?:[-_][a-zA-Z0-9]+)*) *(.*)?$/m;

  constructor(readonly name: string) {
  }

  public checkComment(comment: string = ""): CommandDetails | undefined {
    const command = comment.match(this.matcher);

    if (command && this.name === command[1]) {
      return {
        name: this.name,
        arguments: command[2],
      };
    }
  }
}
