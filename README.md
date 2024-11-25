[![Project banner](https://cdn.hoshiro.space/choco/gh-banner.png)](https://chocolatte.hoshiro.space)
![Netlify status](https://api.netlify.com/api/v1/badges/a02a6f4e-ab85-4ba6-b949-612849ca920a/deploy-status) ![CI Status](https://img.shields.io/github/actions/workflow/status/gifaldyazkaa/chocolattech/lint.yml?label=CI&logo=github-actions&style=flat&labelColor=black) ![Wakatime stats](https://wakatime.com/badge/user/aac434b8-a027-4f92-ac90-e5b2ae48b541/project/73821d0e-fb85-4c7b-9e23-737ab53076e6.svg?style=flat&labelColor=black)

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

## 🚧 Project Paused!

Sorry. You may ask why, but it's happened because something unwanted happens.

If you want to know, this thing is created especially for [**Choco Latte**](https://youtube.com/@ChocoLatteCh), a Virtual YouTuber based in Indonesia. She is suddenly decides to stopping her process as Virtual YouTuber & Virtual Streamer. So, I decided to pause this project too. **project's commit may be slowed**.

> a short message:
>
> Farewell and thank you, Choco. I will always waiting for your comeback. :sob:

[**Read the official post!**](https://www.facebook.com/catchocolattech/posts/772195144406766)

## 🗓️ Roadmap \[Paused\]

I will put this here because I know well I won't do them. Things that can be added or improved, priority, and the reason why I didn't do it:

| Task name                    | Priority | Reason                                                                                                                                                                                                            |
| ---------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔍 Massive SEO               | High     | I was planning to rank up this website on Google & other search engines by taking SEO adventages. But I think it's bit confusing to understand about it. Unless something good happens, I will do this on next PR |
| 📱 Progressive Web App (PWA) | Low      | Too lazy to create a service-workers, serving lots of 64x64, 128x128, 256x256 icons, and there is a lot additional meta for PWA (apple-touch-icon, etc), and who cares about installable website?                 |

## 🧑‍💻️ Developing

To get this running on your machine, you could try these steps below:

### 🛠️ Requirements

A [node.js](https://nodejs.org) >= 12.16.2 setup with [pnpm](https://pnpm.io) is highly recommended.

### 📥️ Clone the repository

```bash
$ git clone https://github.com/gifaldyazkaa/chocolattech.git
$ cd chocolattech
```

### 📦️ Install dependencies

```bash
$ pnpm install
```

### 🏃️ Run it on development server

```bash
$ pnpm run dev
# Running on http://localhost:3000
# or
$ pnpm run dev --host=0.0.0.0
# Running on http://localhost:3000
# Running on http://192.x.x.x:3000
```

### ⚡️ Optimizing for production

```bash
# Server deployment (SSR)
$ pnpm run build

# Static deployment (Pre-rendered)
$ pnpm run generate
```

## 📃️ License

Source code distributed under MIT License. See [LICENSE](./LICENSE) for more information.
