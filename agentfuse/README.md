# AgentFuse Project Page (v2)

A lightweight academic project page for **AgentFuse: Task-Driven Agentic Evidence Arbitration for Infrared–Visible Image Fusion**.

## Page order
1. Paper title and resource buttons
2. Abstract
3. Framework overview, rendered from the latest user-provided `framework (1).pdf`
4. Experiments: task-conditioned plan comparison, MSRS semantic-segmentation mIoU, and qualitative examples
5. Inference efficiency
6. Resources and BibTeX

## Files
- `index.html`: page structure and manuscript text
- `styles.css`: responsive academic layout
- `config.js`: author names, paper URL, code URL, and BibTeX
- `script.js`: navigation, resource-link, and copy-BibTeX behavior
- `assets/agentfuse-framework.png`: high-resolution PNG rendered from the supplied one-page framework PDF
- `assets/task-conditioned-comparison.png`: qualitative figure
- `assets/favicon.svg`: favicon

## Publish to the existing GitHub Pages repository
After extracting this folder as `agentfuse-site-v2`, copy its contents into the existing repository's `agentfuse` folder:

```bash
cp -R ~/Downloads/agentfuse-site-v2/. ~/Downloads/shuruil2.github.io/agentfuse/
cd ~/Downloads/shuruil2.github.io
git add agentfuse
git commit -m "Refine AgentFuse project page layout"
git -c http.proxy=http://127.0.0.1:7890 push origin main
```

Adjust the first path if you extracted the ZIP elsewhere. Keep the website under `agentfuse/` so the public URL remains `https://shuruil2.github.io/agentfuse/`.

## Before final public release
- Update `config.js` with confirmed author names and affiliations.
- Add public paper and code URLs only when ready to share.
- Update BibTeX author/publication metadata once finalized.
- Verify experimental values against the final manuscript before publication.
