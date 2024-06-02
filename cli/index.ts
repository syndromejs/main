import { Command, Option, runExit } from "npm:clipanion@4.0.0-rc.3";

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
      await this.context.stdout.write(`${this.text}\n`);
    }
  }
);
