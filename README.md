<div align="center">
    <img src="./static/img/logo.png" alt="logo" />
</div>

<p align="center">
    <a href="CONTRIBUTING.md#pull-requests"><img alt="Static Badge" src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&label=PRs&labelColor=c382f0&color=ffffff"></a>
    <a href="https://github.com/prettier/prettier"><img alt="Static Badge" src="https://img.shields.io/badge/-Prettier-c382f0?style=for-the-badge&label=Code%20style&labelColor=c382f0&color=ffffff"></a>
    <a href="https://app.netlify.com/sites/astralopedia/deploys"><img alt="Netlify" src="https://img.shields.io/netlify/2f0592f0-a097-40cd-90e8-029cf5ba1a6f?style=for-the-badge&logo=netlify&logoColor=ffffff&label=Netlify&labelColor=c382f0&color=ffffff"></a>
    <a href="https://discord.gg/mNeHyuZdqm"><img alt="Discord" src="https://img.shields.io/discord/813762487253860373?style=for-the-badge&logo=discord&logoColor=ffffff&label=Discord&labelColor=c382f0&color=ffffff"></a>
    <a href="LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/Astralopedia/Astralopedia?style=for-the-badge&label=License&labelColor=c382f0&color=ffffff"></a>
</p>

# What is Astralopedia?

Astralopedia is an unofficial wiki for Create: Astral which is built with
[Docusaurus](https://docusaurus.io/)

# Installation

## Requirements

-   [Bun](https://bun.sh/)

## Building

1. Clone this repository from
   [GitHub](https://github.com/Astralopedia/Astralopedia)

```shell
git clone https://github.com/Astralopedia/Astralopedia
```

2. Download dependencies

```bash
cd Astralopedia
bun install
```

3. Build

If you want to build and serve it locally, run:

```bash
bun start
```

It'll start a server at `https://localhost:3000`.

For production, run:

```bash
bun run build
```

> After the command is executed successfully, there will be a `/build` directory
> which contains all you need for deploying

4. Serve it

```bash
bun serve
```

## Credits:

-   All images in [homepage](https://astral.toby7002.dev/) belong to Create:
    Astral

## License

Licensed under the [MIT](./LICENSE) license.
