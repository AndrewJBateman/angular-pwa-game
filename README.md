# Angular PWA TicTacToe

* App using Angular 8 to show a tictactoe game that is deployed to Firestore at [https://angular-pwa-tictactoe.firebaseapp.com/](https://angular-pwa-tictactoe.firebaseapp.com/).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Simple tictactoe game that shows a message when a player wins.

* Firestore hosting used to make the game available on the web.

* [Angular service worker](https://angular.io/guide/service-worker-intro) added to manage app caching and help this to be a Progressive Web App (PWA).

## Screenshots

![Example screenshot](./img/game.png).

## Technologies

* [Angular v8.2.14](https://angular.io/)

* [Angular CLI v8.3.19](https://cli.angular.io/).

* [Nebular UI Customising](https://akveo.github.io/nebular/)]

+ [Angular Service Worker](https://github.com/angular/angular)

* [Angular Firebase library](https://www.npmjs.com/package/@angular/fire)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

Run `ng build` to create the build file.

See the app on the web at [https://angular-pwa-tictactoe.firebaseapp.com/](https://angular-pwa-tictactoe.firebaseapp.com/)

## Code Examples

* Code to calculate the winner, by Jeff Delaney at [Fireship.io](https://fireship.io/).

```typescript
calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
```

## Features

* Game works offline thanks to the PWA service worker.

## Status & To-Do List

* Status: Working, deployed to [https://angular-pwa-tictactoe.firebaseapp.com/](https://angular-pwa-tictactoe.firebaseapp.com/).

* To-Do: Improve lighthouse score (currently 85%).

## Inspiration

* [Fireship: Youtube tutorial 'Angular for Beginners - Let's build a Tic-Tac-Toe PWA'](https://www.youtube.com/watch?v=G0bBLvWXBvc)]

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!