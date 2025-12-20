# Backup Documentation

This folder contains backup copies of original Docusaurus tutorial content that came with the initial setup.

## Contents

- **tutorial-basics/** - Basic Docusaurus tutorial (original)
- **tutorial-extras/** - Advanced Docusaurus tutorial (original)

## Restoring Content

To restore any of these folders back to the active documentation:

```bash
# Restore tutorial-basics
mv docs/_backup/tutorial-basics docs/

# Restore tutorial-extras
mv docs/_backup/tutorial-extras docs/
```

## Blog Backup

The original blog folder has been moved to `_blog-backup/` at the project root.

To restore the blog:

```bash
# Restore blog
mv _blog-backup blog
```

---

**Note:** Folders starting with `_` are automatically ignored by Docusaurus and won't appear in the built site.
