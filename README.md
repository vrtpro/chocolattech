[![Project banner](http://cdn.hoshiro.space/choco/gh-banner.png)](https://chocolatte.hoshiro.space)
![CI Status](https://img.shields.io/github/actions/workflow/status/gifaldyazkaa/chocolattech/lint.yml?label=CI&logo=github-actions&style=flat&labelColor=black) ![Wakatime stats](https://wakatime.com/badge/user/aac434b8-a027-4f92-ac90-e5b2ae48b541/project/73821d0e-fb85-4c7b-9e23-737ab53076e6.svg?style=flat&labelColor=black)

## 🤔 What's changed

This is an rewrite & major changes from previous version. Everything has changed here. Web framework, layouts, design, colors, theme, routing, etc. is re-designed and improved massively. I am now using Nuxt as web framework.

## :gem: Features

-   🎨 Modern design
-   💨 Blazing-fast performance
-   🚀 Fast build-time with Vite
-   ⚡️ Better routing performance
-   🏃️ Transitions while routing
-   🚧 Dynamic error handing
-   🤟 Better layouting
-   🎴 Card-as-container system
-   👀 you tell me

## 🗓️ Roadmap

I will put this here because I know well I won't do them. Things that can be added or improved, priority, and the reason why I didn't do it:

| Task name                    | Priority | Reason                                                                                                                                                                                                            |
| ---------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔍 Massive SEO               | High     | I was planning to rank up this website on Google & other search engines by taking SEO adventages. But I think it's bit confusing to understand about it. Unless something good happens, I will do this on next PR |
| 📱 Progressive Web App (PWA) | Low      | Too lazy to create a service-workers, serving lots of 64x64, 128x128, 256x256 icons, and there is a lot additional meta for PWA (apple-touch-icon, etc), and who cares about installable website?                 |

## 🧑‍💻️ Developing

To get this running on your machine, you could try these steps below:

### 🛠️ Requirements

A [node.js](https://nodejs.org) >= 12.16.2 setup with [bun](https://bun.sh) is highly recommended.

### 📥️ Clone the repository

```bash
$ git clone https://github.com/vrtpro/chocolattech.git
$ cd chocolattech
```

### 📦️ Install dependencies

```bash
$ bun install
```

### 🏃️ Run it on development server

```bash
$ bun dev
# Running on http://localhost:3000
# or
$ bun dev --host=0.0.0.0
# Running on http://localhost:3000
# Running on http://192.x.x.x:3000
```

### ⚡️ Optimizing for production

```bash
# Server deployment (SSR)
$ bun build

# Static deployment (Pre-rendered)
$ bun generate
```

## 📃️ License

This source code is licensed under [Mozilla Public License 2.0](./LICENSE).

I do not own any art or content assets on this site. All copyrights belong to their respective owners.
