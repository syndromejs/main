import { Command, Option, runExit } from "npm:clipanion";

/**
 * EchoCommand using clipanion
 */
runExit(
  class EchoCommand extends Command {
    static paths = [["echo"]];

    text = Option.String({
      required: true,
    });

    async execute() {
      this.context.stdout.write(`${this.text}\n`);
    }
  }
);
