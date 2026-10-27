# AgentFuse Project Page (GitHub Pages)

A responsive, dependency-free academic project page for:

**AgentFuse: Task-Driven Agentic Evidence Arbitration for Infrared–Visible Image Fusion**

The page is plain HTML, CSS, and JavaScript. It is designed to deploy directly to GitHub Pages; no build step, package manager, backend, or external font/CDN is required.

## Files

- `index.html` — page structure and paper content
- `styles.css` — responsive academic styling
- `script.js` — mobile navigation, resource-link activation, and BibTeX copy button
- `config.js` — author metadata and paper/code URLs to update before publication
- `assets/agentfuse-framework.png` — framework figure extracted from the current manuscript PDF
- `assets/task-conditioned-comparison.png` — current three-example segmentation comparison supplied during figure revision

## Before public release

1. Replace `Author names and affiliations to be added` in `config.js` with the final author list and affiliations.
2. Replace `assets/agentfuse-framework.png` with the final high-resolution framework figure after the manuscript figure is frozen. Keep the same filename, or update its path in `index.html`.
3. Check `assets/task-conditioned-comparison.png` against the final manuscript figure and replace it if needed.
4. In `config.js`, set `paperUrl` and `codeUrl` only when those resources are ready to be shared publicly. They can be absolute URLs or relative paths such as `paper.pdf` and `https://github.com/USERNAME/REPO`.
5. Update the BibTeX fields in `config.js` once author and publication metadata are finalized.
6. Review the manuscript's copyright/submission rules before publicly hosting a PDF.

## Deploy with GitHub Pages

1. Create a **public** GitHub repository, e.g. `agentfuse-project-page`.
2. Upload the contents of this folder to the repository root (not the enclosing folder itself).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to finish deploying. The URL normally has the form:

   `https://USERNAME.github.io/agentfuse-project-page/`

7. Open the published URL in a private/incognito window to verify that it is publicly accessible.
8. Only after verifying the URL, add it to the LaTeX abstract, for example:

   ```latex
   Project page: \href{https://USERNAME.github.io/agentfuse-project-page/}{AgentFuse}.
   ```

If the site is published from a repository other than `USERNAME.github.io`, retain the repository path in the URL.

## Local preview

Open `index.html` directly in a browser. For a closer local-server preview, run from this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The paper and code buttons are intentionally disabled until URLs are supplied in `config.js`.
- The current author/citation fields are placeholders and must be updated before public release.
- The results table reproduces the task-oriented plan comparison reported in the manuscript; verify it again if the paper numbers change.
