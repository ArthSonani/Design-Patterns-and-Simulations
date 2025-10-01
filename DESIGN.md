# Design & Architecture

This document explains the **architecture**, **design decisions**, **pattern choices**, and **performance considerations** for the **TypeScript Design Patterns & Rocket Launch Simulator** project. It is intended to help reviewers understand the code structure and for the author to explain it during walkthroughs.

---

## 1. Project Architecture

The project is modular and follows **clean code principles** and **SOLID design principles**.

```
design-patterns-and-simulations/
├── 📁src/
│   ├── 📁patterns/
│   │   ├── 📁behavioral/
|   |   |   ├── 📁observer/
|   |   |   └── 📁strategy/
│   │   ├── 📁creational/
|   |   |   ├── 📁builder/
|   |   |   └── 📁factory/
│   │   └── 📁structural/
|   |   |   ├── 📁adapter/
|   |   |   └── 📁decorator/
│   └── 📁rocket-simulator/
│       ├── 📄RocketStage.ts
│       ├── 📄RocketSimulator.ts
│       └── 📄index.ts
├── 📄package.json
├── 📄tsconfig.json
├── 📄DESIGN.md
└── 📄README.md
```

**Key Points:**
- Each class or pattern is in a separate file for **modularity**.
- `RocketSimulator` is fully **decoupled** from CLI logic (`index.ts`) for testability.
- Folder separation ensures clarity between **pattern examples** and **simulation logic**.

---

## 2. Design Patterns

The project demonstrates **six design patterns**:  

### Behavioral Patterns
1. **Observer Pattern** –  
   - Use Case: Notifying components of state changes.  
   - Why: Demonstrates loose coupling and real-time updates in a system.  

2. **Strategy Pattern** –  
   - Use Case: Allowing different algorithms at runtime.  
   - Why: Demonstrates flexibility and encapsulation of behavior.  

### Creational Patterns
1. **Singleton Pattern** –  
   - Use Case: Ensuring a single instance exists.  
   - Why: Demonstrates controlled access and resource management.  

2. **Factory Pattern** –  
   - Use Case: Creating objects without exposing instantiation logic.  
   - Why: Simplifies object creation and enhances scalability.  

### Structural Patterns
1. **Adapter Pattern** –  
   - Use Case: Integrating incompatible interfaces.  
   - Why: Demonstrates abstraction and reusability.   

2. **Decorator Pattern** –  
   - Use Case: Dynamically adding behavior to objects.  
   - Why: Demonstrates open-closed principle.  

---

## 3. Rocket Launch Simulator Architecture

**Modules:**
- `RocketStage.ts` – Enum representing stages: PRE_LAUNCH, STAGE1, STAGE2, ORBIT.
- `RocketSimulator.ts` – Core logic:
  - `startChecks()` – Pre-launch validation.
  - `launch()` – Initiates simulation and starts real-time ticking.
  - `fastForward(seconds)` – Skips simulation by X seconds.
  - `tick(seconds)` – Updates fuel, altitude, speed, stage transitions.
  - `stopSimulation()` – Safely ends interval and updates state.

- `index.ts` – CLI interface using Node.js `readline`.

**Simulation Flow:**
1. User performs `start_checks`.
2. `launch` begins ticking every second.
3. Each tick:
   - Updates `fuel`, `altitude`, `speed`.
   - Checks for stage transitions.
   - Logs status.
4. `fast_forward` temporarily stops interval, advances simulation, then resumes ticking.
5. Simulation ends on:
   - `ORBIT` achieved → Mission success.
   - Fuel depleted → Mission failure.

---

## 4. Performance & Defensive Programming

**Defensive Programming:**
- Prevents launch without checks.
- Prevents multiple launches.
- Handles interval clearing safely.
- Validates fast-forward input.

**Extensibility:**
- New rocket stages, algorithms, or behaviors can be added without modifying core logic.
- Design patterns are modular and reusable across future projects.

---

## 5. Walkthrough Talking Points

When walking through the code, you can highlight:

1. **Design Pattern Choices**
   - Why Observer, Strategy, Singleton, Factory, Adapter, and Decorator were chosen.
   - How they make the project maintainable and scalable.

2. **Rocket Simulator Flow**
   - Stage transitions and telemetry.
   - Real-time vs fast-forward ticking.
   - Defensive checks preventing invalid operations.

3. **Logging and Error Handling**
   - Clear, informative console logs.
   - Safe interval handling.
   - Handling mission failure gracefully.

4. **Code Quality**
   - SOLID principles.
   - Each class in a separate file.
   - Modularity and separation of concerns.

---

## 6. Future Enhancements

- Add additional design patterns (e.g., Command, Composite).  
- Integrate graphical telemetry dashboard.  
- Implement unit tests for simulator stages and pattern modules.  
- Extend simulation with different rocket types or fuel consumption models.

---

**Author:** Arth Sonani – Computer Science Engineering Student, Pandit Deendayal Energy University
