# Demo01

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Server-Side Rendering

Add `ng add @nguniversal/express-engine` Universal package

Run `npm run dev:ssr` to start hot-reload SSR

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

With SSR added:
Run `ng build && ng run demo01:server`

Then Run `npm run serve:ssr` to test the app in production mode but when you deploy, use another server which can serve prod-grade nodejs.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
