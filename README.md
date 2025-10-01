# TypeScript Design Patterns & Rocket Launch Simulator

Welcome to **TypeScript Design Patterns & Rocket Launch Simulator**, a full-stack console-based project that demonstrates **practical implementations of software design patterns** along with a **terminal-based rocket launch simulation**. This repository emphasizes **clean code, SOLID principles, defensive programming, logging, and real-time simulation**.

---

## 📌 Project Overview

### 1. Design Patterns Demonstration
This part of the project includes **six different use cases** to demonstrate understanding of software design patterns:

- **Behavioral Patterns (2)**  
  Observer (NewsPublisher), Strategy (Payment + Sorting)

- **Creational Patterns (2)**  
  Factory Method (Vehicles), Builder (User / House)

- **Structural Patterns (2)**  
  Adapter (Temperature sensor), Decorator (Text)  

Each pattern is implemented in **TypeScript** with separate files, adhering to **clean code practices**, **proper folder structure**, and **consistent naming conventions**.  

The goal is to showcase **creativity, clarity, and best practices** in coding design patterns.

---

### 2. Rocket Launch Simulator
A **terminal-based simulation** that models a rocket launch and satellite orbit placement.  

**Features:**
- Pre-launch system checks (`start_checks`)
- Real-time rocket status updates after launch (`launch`)
- Stage transitions and fuel management
- Fast-forward simulation (`fast_forward X`) to skip time
- Automatic stop on mission success (orbit achieved) or failure (fuel depletion)
- Console logging for all stages

**Rocket Parameters:**
- **Stage:** Pre-Launch, Stage 1, Stage 2, Orbit
- **Fuel:** 0–100%
- **Altitude:** 0+ km
- **Speed:** 0+ km/h

**Commands:**
```bash
start_checks   # Run pre-launch system checks
launch         # Start rocket simulation
fast_forward X # Skip X seconds instantly
exit           # Quit the simulation


**Run locally:**
1. npm install
2. npm run start (for patterns)
3. npm run rocket (for simulation)