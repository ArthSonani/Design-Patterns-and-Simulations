import * as readline from "readline";
import { RocketSimulator } from "./RocketSimulator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const simulator = new RocketSimulator();

console.log("Welcome to Rocket Launch Simulator 🚀");
console.log("Commands: start_checks | launch | fast_forward X | exit");

rl.on("line", (input) => {
  const [command, arg] = input.split(" ");
  switch (command) {
    case "start_checks":
      simulator.startChecks();
      break;
    case "launch":
      simulator.launch();
      break;
    case "fast_forward":
      simulator.fastForward(Number(arg));
      break;
    case "exit":
      process.exit(0);
    default:
      console.log("Unknown command!");
  }
});
