# suffixed.dev 🏷️

> A curated cheat sheet for naming your code cleanly.

**suffixed.dev** is a cheat sheet for naming your code. Instead of calling every file a generic Manager or Service, use this community-driven guide to find precise, professional names based on exactly what your code does.

Built using **React, TypeScript, and Tailwind CSS**.

> ⚠️**Transparency disclaimer**: Since I'm not well-versed in UI/UX, I utilized AI-assisted engineering for this project. The initial dataset and interface layouts were generated using **Google Gemini**, built under the strict supervision, manual refactoring, and code review of a human developer (me).

---

## 🚀 How It Works

The platform uses a tag-based lookup engine. Developers can click behavioral, directional, or structural tags to instantly filter down to the exact industry-standard suffix they need, complete with concrete code examples and anti-pattern warnings.

The entire web app runs completely on the client side, powered by a single, typed registry file: `src/data/suffixes.json`.

---

## 🛠️ Tech Stack

- **Framework:** React 19+
- **Language:** TypeScript (Strictly Typed)
- **Styling:** Tailwind CSS (with custom Firefox/Webkit cross-browser dark scrollbars)
- **Bundler/Build Tool:** Vite

---

## 🤝 Open to Contributions!

Have an architectural suffix your team uses that isn't on the list? We love community additions! Contributing is incredibly low-friction because you don't even need to modify the application logic or set up a heavy local development environment. 

### How to Add a Suffix:

1. **Fork** this repository.
2. Open the global registry file: `src/data/suffixes.json`.
3. Add your suffix block adhering to the schema below:

```json
{
  "suffix": "YourSuffixName",
  "definition": "A clear, concise 1-2 sentence description of what a class with this suffix explicitly does.",
  "tags": ["data", "incoming", "transformation"], 
  "example": "RealWorldExampleUsageYourSuffixName",
  "antiPattern": "Clear explanation of when NOT to use this suffix to prevent architectural pollution."
}

```

4. Submit a **Pull Request** explaining your addition!

### Tag Guidelines

To keep the search engine accurate, try to map your new suffix to at least 2 or 3 of our core taxonomy tags:

* **Core Layers:** `data`, `logic`, `network`
* **Directional:** `incoming`, `outgoing`, `internal`
* **Intent/Behavior:** `transformation`, `orchestration`, `security`, `utility`, `event-driven`, `integration`, `clean-up`

---

## 📦 Local Development Setup

If you want to run the UI locally to check how your contributions look:

1. Clone your fork:
```bash
git clone [https://github.com/your-username/suffixed.dev.git](https://github.com/your-username/suffixed.dev.git)
cd suffixed.dev

```


2. Install dependencies:
```bash
npm install
# or
yarn install / pnpm install

```


3. Run the development server:
```bash
npm run dev

```


4. Open `http://localhost:5173` in your browser.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
