# Design System

Este é o meu **Design System** criado e utilizado no curso [**Ignite: ReactJS**](https://www.rocketseat.com.br/formacao/react) da [**Rocketseat**](https://www.rocketseat.com.br/).

Ele é um **monorepo** utilizando [**Turborepo**](https://turbo.build/) e cache da [**Vercel**](https://vercel.com/) para publicações.

## Storybook 📖

Documentação do meu **Design System** utiliza o [**Storybook**](https://storybook.js.org/) e está disponível online:

- https://tufcoder.github.io/ignite-design-system/

## NPM 📦

Publiquei meus primeiros pacotes no NPM 🥳

Eles estão disponíveis no link abaixo:

- [tufcoder-ignite-ui](https://www.npmjs.com/org/tufcoder-ignite-ui)

Estes pacotes serão usados no projeto final do curso ReactJS.

### Instalação

Pacote `react` contendo os componentes do Design System.

```sh
npm i @tufcoder-ignite-ui/react
```

Pacote `tokens` contendo as definições de layout.

```sh
npm i @tufcoder-ignite-ui/tokens
```

## Components ⚛️

* [x] Text: font-family, font-size, color, line-height
* [x] Heading: h1...h6, font-family, font-weight
* [x] Box/Card: Facilmente reutilizável, border, padding
* [x] Button: padding, font, hover, background-color
* [x] TextInput: font, color, active, hover, error
* [x] TextArea: Customizado para evitar o uso do elemento nativo do HTML
* [x] Checkbox: Customizado para evitar o uso do elemento nativo do HTML
* [x] Avatar: image, border
* [x] MultiStep: Formulário de múltiplas etapas

### Desafio

* [x] Toast: aparece no canto inferior direito
* [x] Tooltip: mensagem de texto

```sh
# publicações no npm
npm run changeset
npm run version-packages
```
