## 🛠️ Project Setup Guide (Using Bun)

This project uses [Turborepo](https://turbo.build/repo) with [Bun](https://bun.sh/) as the package manager.

### 🚀 Prerequisites

Make sure you have the following installed:

* [Bun](https://bun.sh/) – Install it using:

  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

* Node.js (if required for tooling)

* Git

---

### 📦 Install Dependencies

Clone the repo and install dependencies for all apps and packages:

```sh
git clone https://github.com/whateverui/whatever-ui
cd whatever-ui
bun install
```

---

### 🧪 Development

To run all apps/packages in development mode:

```sh
bun run dev
```

---

### 🔨 Build

To build all apps and packages:

```sh
bun run build
```

---

### 📦 Remote Caching (Optional)

To enable Vercel Remote Caching for faster CI and team collaboration:

1. Log in to Vercel:

   ```sh
   bunx turbo login
   ```

2. Link your Turborepo to your Vercel project:

   ```sh
   bunx turbo link
   ```

> Remote Caching is free and improves build times across machines.

---

### 🧭 Useful Commands

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `bun install`      | Install dependencies             |
| `bun run dev`    | Run dev servers for all apps     |
| `bun run build`  | Build all apps/packages          |
| `bunx run login` | Authenticate with Vercel         |
| `bunx run link`  | Link repo to Vercel Remote Cache |
