# typescript-lerna-example
A playground example of using Lerna and TypeScript

Example usage:
```bash
npm i
lerna bootstrap
lerna run tsc
lerna run start
```

Relationships:
The Doctor and Patient packages are independent. These should be treated as entities in the model.
The Scheduler package makes appointments between Doctors and Patients. This should be treated as a service that operates on entities in the model.
The App module uses the Scheduler. This is thought of as the entry point to the application.