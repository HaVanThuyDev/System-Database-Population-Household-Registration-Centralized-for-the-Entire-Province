# AGENTS.md

## Purpose
This file helps AI coding agents (including Gemini-style assistants) understand the project structure, conventions, and local workflows so they can be productive immediately.

## Project overview
- React Native app with Expo-supported fonts and navigation.
- TypeScript project using Redux Toolkit for state management.
- Supports mobile and web via `react-native-web` and Expo tooling.
- No dedicated README or documentation in repo root; use code structure as source of truth.

## Important files and directories
- `App.tsx` - app root, loads custom fonts and wraps the app with Redux and safe area provider.
- `src/navigation/RootNavigator.tsx` - app routing and auth/dashboard flow.
- `src/store/` - Redux store setup.
- `src/store/auth/authSlice.ts` - auth state and selectors.
- `src/features/` - feature-based organization with `components/`, `hooks/`, `screens/`, `services/`, and `styles/`.
- `src/components/common/` - reusable UI components such as buttons, inputs, and modals.
- `src/utils/http.ts` - common HTTP helper.
- `src/theme/colors.ts` - shared color values.

## Build and validation commands
Use these commands from the repo root:
- `npm run start` - start Metro bundler for development.
- `npm run web` - run Expo web.
- `npm run android` - build/run Android.
- `npm run ios` - build/run iOS.
- `npm run lint` - ESLint check for `src` files.
- `npm run type-check` - TypeScript type checking.

## Coding conventions and patterns
- Prefer `React.FC` with TypeScript props.
- `features/*` are organized by domain and often include:
  - `screens/` for page-level components
  - `components/` for nested UI pieces
  - `hooks/` for reusable logic
  - `services/` for API or domain helpers
  - `styles/` for styling definitions
- Navigation uses `@react-navigation/native` and `@react-navigation/native-stack`.
- Maintain platform-compatible RN code; avoid web-only DOM APIs unless under platform guard.
- Use existing `src/assets/fonts/` font resource imports in `App.tsx`.
- When editing code, keep file paths and import names aligned with current folder structure.

## Agent guidance for Gemini
- Focus on React Native / Expo + TypeScript patterns.
- Do not assume a backend API exists unless found under `src/features/*/services`.
- Changes should be validated against `npm run lint` and `npm run type-check`.
- Keep new dependencies minimal and consistent with existing Expo/RN versions.
- For UI changes, follow the existing style organization and reuse `src/components/common` when appropriate.

## Notes
- This repo likely targets an internal dashboard app with auth gating and multiple feature screens.
- No tests are present in the file tree, so static validation is the primary safeguard.
