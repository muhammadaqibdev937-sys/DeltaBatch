# 🌟 Git & GitHub – Beginner Friendly Guide

This guide is written for anyone who wants to **start using Git and GitHub** with zero prior knowledge. It explains **commands, workflow, and best practices** clearly.

---

## 🔧 Configuring Git

Before using Git, set your identity (name & email) for commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --list  # To verify configuration
```

**Why?**
Git tracks who made changes using this info.

---

## 📥 Clone a Repository

Download a repository from GitHub to your local computer:

```bash
git clone <repository-url>
```

---

## 🔍 Check Project Status

See modified, staged, and untracked files:

```bash
git status
```

---

## ✏️ Making Changes

Steps to save your work locally and push to GitHub:

```bash
git init               # Start a new repository

git add .              # Stage all files/folders
git add <file/folder>  # Stage specific file/folder

git commit -m "message" # Save changes locally (mandatory)

git push origin main   # Upload changes to GitHub
```

---

## 🌿 Branch Commands

Manage and navigate branches safely:

```bash
git branch                  # List branches
git branch -M main           # Rename branch to 'main'
git checkout <branch-name>   # Switch to branch
git checkout -b <new-branch> # Create and switch branch
git branch -m <old> <new>   # Rename a branch
```

---

## 🔄 Workflow

### Local Git

```
Code change → Stage (git add) → Commit (git commit) → Push (git push)
```

### GitHub

```
Commit → Push → Share/Collaborate
```

---

## 🚀 Push Branch & Set Upstream

```bash
git push --set-upstream origin <branch-name>
```

**Benefit:**
Links local branch to remote branch so future `git push` or `git pull` works automatically.

---

## 🔀 Merging Code

```bash
git diff <branch-name>   # Compare changes

git merge <branch-name>  # Merge branches

git pull origin main     # Update local branch with remote changes
```

* Or create a **Pull Request (PR)** on GitHub.
* **Merge Conflict:** Happens when two people change the same line differently. Resolve manually.

---

## 🛠 Fixing Mistakes

### Case 1: Staged Changes

```bash
git reset <file-name>
git reset
```

### Case 2: Last Commit Only

```bash
git reset HEAD~1
```

### Case 3: Multiple Commits

```bash
git reset <commit-hash>
git reset --hard <commit-hash>
```

⚠️ `--hard` deletes changes permanently.

---

## 🍴 Forking a Repository

**Fork = Your own copy of someone else's repo**. Useful when you want to experiment safely.

---

## 🆕 First Time Project (From Scratch)

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 🔁 Daily Work (Most Common)

```bash
git status
git add .
git commit -m "feature update"
git push
```

---

## 📦 Get Your Own Existing Project

```bash
git clone <your-repo-url>
cd project-folder
git add .
git commit -m "update"
git push
```

---

## 🤝 Work on Someone Else’s Project

1. Fork the repo on GitHub (GUI)
2. Clone your fork:

```bash
git clone <your-forked-repo-url>
```

3. After making changes:

```bash
git add .
git commit -m "my changes"
git push
```

---

## 🔑 One-Line Memory Rule

> **New project → init | Existing repo → clone | Your repo → push | Other repo → fork + clone**
