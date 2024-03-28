# Components

- [x] Text
- [x] Heading
- [x] Box
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] CheckBox
- [x] Avatar
- [x] MultiStep


# Organizando o design system

## 1. Estrutura:

packages
| docs (storybook)
| eslint-config
| react (components)
| tokens (default colors, spaces, etc)
| ts-config


## 2. Configuração do storybook

- `$ npx storybook@latest init`
- use React + Vite
- `$ npm i vite @vitejs/plugin-react -D`
- `$ npm i react react-dom`