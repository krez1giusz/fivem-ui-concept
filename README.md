# FiveM UI Concept

A modular user-interface concept for FiveM built with React, TypeScript, and
Vite.

The project demonstrates a collection of reusable NUI components with shared
theme settings, draggable elements, configurable orientation, and
browser-compatible development utilities.

![FiveM UI Concept](https://github.com/user-attachments/assets/30773f0d-fddc-4503-a6b5-e4f34eb22220)

## Components

- Notification
- Nested context menu
- Text UI prompt
- Alert dialog
- Progress bar
- Player status bar
- UI settings panel

## Features

- React and TypeScript component architecture
- FiveM NUI event listener hook
- NUI callback helper
- Browser debug-data support
- Shared global state through React Context
- Configurable primary interface color
- Draggable UI components
- Configurable component tilt direction
- Nested context-menu navigation
- Font Awesome icon support
- Independent component stylesheets
- Vite development and production builds

## Technology

- React 18
- TypeScript
- Vite
- CSS
- React Context
- react-draggable
- react-resizable
- Font Awesome

## Running locally

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run start
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## FiveM integration

The project includes helpers for communication between React and FiveM:

```typescript
useNuiEvent<T>('eventName', handler)
```

```typescript
fetchNui<T>('callbackName', data)
```

Visibility can be controlled with:

```json
{
  "action": "setVisible",
  "data": true
}
```

Pressing `Escape` requests the `hideFrame` NUI callback when the interface is
running inside FiveM.

## Browser development

Mock events can be dispatched through `debugData`, allowing the interface to
be developed in a regular browser without starting FiveM.

Example:

```typescript
debugData([
  {
    action: "setVisible",
    data: true
  }
]);
```

## Project structure

```text
src/
├── components/
│   └── ui/
│       ├── context/
│       ├── dialogs/
│       ├── notification/
│       ├── playerbar/
│       ├── progressbars/
│       ├── settings/
│       └── textui/
├── hooks/
├── providers/
├── utils/
└── img/
```

## Current scope

This repository contains the React interface concept. A complete FiveM resource
wrapper, Lua callbacks, and `fxmanifest.lua` must be added when integrating it
with a server resource.

## Status

Legacy UI concept preserved as part of my early FiveM and frontend development
work. It can be used as a reference or starting point for a modern NUI system.
