
# Design Patterns Demo (TypeScript)

This project demonstrates **six design-pattern use-cases** in TypeScript:
- Behavioral: Observer (NewsPublisher), Strategy (Payment + Sorting)
- Creational: Factory Method (Vehicles), Builder (User / House)
- Structural: Adapter (Temperature sensor), Decorator (Text)

Run locally:
1. npm install
2. npm run start

Or for rapid dev with ts-node:
1. npm install
2. npm run dev

Project is organized with each class/interface in its own file, defensive checks, centralized logging (winston), and a long-running CLI that avoids naive infinite loops.
