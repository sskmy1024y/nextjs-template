<p align="center">
<h1 align="center">Next.js template</h1>
<p align="center">
<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Framework-Next.js-0076f0.svg"></a>
<a href="https://github.com/sskmy1024y/nextjs-template/actions?query=workflow%3ACI"><img src="https://github.com/sskmy1024y/nextjs-template/workflows/CI/badge.svg" alt="CI Badge"></a>
<br>Next.js template repository.
</p>

## 🔖 Usage

```sh
npx create-next-app --example https://github.com/sskmy1024y/nextjs-template <project-name>
# or
yarn create next-app --example https://github.com/sskmy1024y/nextjs-template <project-name>
```

## 📦 Installed Packages

| Package           | version |
| ----------------- | ------- |
| Next.js           | 10.0.8  |
| React             | ^17.0.1 |
| Typescript        | ^4.0.0  |
| Styled-components | ^5.2.1  |
| eslint            | ^7.13.0 |

## 💁‍♀️ Development Setup

### 🐳 With docker

#### System Requirements

* docker
* docker-compose

#### Setup

```sh
$ docker-compose build  # Build development image
$ docker-compose run --rm app yarn
$ docker-compose up -d  # Start server container
```

### 📦 Without Docker

#### System Requirements

* Node.js >= 12.13.1
* yarn >= 1.17.0

#### Setup

```sh
$ yarn      # Initialize npm packages
$ yarn dev  # Start development server
```

## 📚 Development Guide

### 📂 Directory structure

* Basically, it conforms to the Nextjs directory structure.
* The directory structure for state management adopts the [Re-ducks](https://github.com/erikras/ducks-modular-redux) pattern.

```sh
──  README.md
├── .github
│   └── workflows       # Github Actions
├── public              # Public dir
├── src
│   ├── components      # UI Components
│   ├── hooks           # hooks functions
│   ├── libs            # fetch functions to be executed at Rendering (may be removed in the future)
│   ├── pages
│   │   ├── api         # API to be used internally during SSR
│   │   └── index.tsx
│   ├── modules         # State Managements
│   │   └── auth
│   │       ├── actions.ts
│   │       ├── index.ts
│   │       ├── operations.ts
│   │       ├── reducers.ts
│   │       ├── selectors.ts
│   │       └── types.ts
│   └── utils           # A set of highly versatile functions and constants
├── .babelrc
├── .gitignore
├── .eslintrc.json
├── .prettier.json
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── yarn.lock
```

## 🤝 Collaborator Guide

### Components

* Use function components for code uniformity.
* It is important to be aware of versatility, but avoid complex components that are difficult to maintain.
* Don't define components in Pages!

### Styles

* Basically, use styled-copmonent (do not use scss).
* If you want to write CSS that affects the whole page, fill in `utils/GlobalStyle.ts` (but be very careful)

### Formatter

* For the formatter, we use Prettier + ESLint (it is useful to have a plugin in your editor)
* husky is installed so that the formatter runs just before the commit

## 🔥 Deployment Guide

Commands for the production environment.

```sh
# For docker
$ docker-compose -f docker-compose.yml -f production.yml build
$ docker-compose -f docker-compose.yml -f production.yml up -d
```
