import { Stage } from "./RocketStage";

export class RocketSimulator {
  private stage: Stage = Stage.PRE_LAUNCH;
  private fuel: number = 100;
  private altitude: number = 0;
  private speed: number = 0;
  private checksDone: boolean = false;
  private launched: boolean = false;
  private interval: ReturnType<typeof setInterval> | null = null;

  startChecks() {
    this.checksDone = true;
    console.log("Pre-Launch Checks: All systems are 'Go' for launch.");
  }

  launch() {
    if (!this.checksDone) {
      console.log("Cannot launch before system checks!");
      return;
    }
    if (this.launched) {
      console.log("Rocket already launched!");
      return;
    }

    this.stage = Stage.STAGE1;
    this.launched = true;
    console.log("🚀 Launch initiated!");

    // Start automatic ticking every second
    this.interval = setInterval(() => this.tick(1), 5000);
  }

  fastForward(seconds: number) {
    if (!this.launched) {
      console.log("Rocket not launched yet.");
      return;
    }

    // Stop the interval temporarily
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    console.log(`⏩ Fast forwarding ${seconds} seconds...`);
    this.tick(seconds);

    // Resume automatic ticking if still flying
    if (this.launched) {
      this.interval = setInterval(() => this.tick(1), 5000);
    }
  }

  private tick(seconds: number) {
    for (let i = 0; i < seconds; i++) {
      if (this.fuel <= 0) {
        console.log("💥 Mission Failed due to insufficient fuel.");
        this.stopSimulation();
        return;
      }

      // Simulate rocket physics
      if (this.stage === Stage.STAGE1) {
        this.fuel -= 5;
        this.altitude += 10;
        this.speed += 1000;
      } else if (this.stage === Stage.STAGE2) {
        this.fuel -= 3;
        this.altitude += 20;
        this.speed += 2000;
      }

      console.log(
        `Stage: ${this.stage}, Fuel: ${this.fuel}%, Altitude: ${this.altitude} km, Speed: ${this.speed} km/h`
      );

      // Stage transitions
      if (this.altitude >= 50 && this.stage === Stage.STAGE1) {
        this.stage = Stage.STAGE2;
        console.log("⚡ Stage 1 complete. Entering Stage 2.");
      }

      if (this.altitude >= 100 && this.stage === Stage.STAGE2) {
        this.stage = Stage.ORBIT;
        console.log("🏆 Orbit achieved! Mission Successful.");
        this.stopSimulation();
        return;
      }
    }
  }

  private stopSimulation() {
    this.launched = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
