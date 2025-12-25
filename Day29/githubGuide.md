## GitGithub

## Configuring Git

-- first we configure git from which name and email we want changes.
-- git config --global user.name "Muhammad Aqib"
-- git config --global user.email "muhammadaqibdev937@gmail.com"
-- git  config --list

## Clone any repository
-- git clone repository name(https://github.com/muhammadaqibdev937-sys/DeltaBatch.git)

# Status command
-- to  check the status of code
-- git status


# For changes:
-- git init,Starts a new repository in your current folder.
-- git add .,Stages all your current folders and files for saving.
-- git add file/folder name
-- "git commit -m ""msg""",Saves your staged changes with a descriptive message.         <!-- compulsory -->
-- git push origin main,Uploads your saved work to a remote site like GitHub.



# Branch Command
-- git branch   to check branch name
-- git branch -M main   ot rename  main branch
-- git checkout branch name to navigate to branch 
-- git checkout-b new branch name  to create new branch
-- git branch -m old branch name new branch name to rename branch



# Workflow
# Github
--  code change ----->commit

# Local Git
-- code change ---->add(stage change)----->commit(commit change)----->push



### 🚀 Push Branch and Set Upstream

```bash
git push --set-upstream origin branchname

✨ Benefit:
Links your local branch to the remote branch on GitHub, so future git push and git pull work without extra arguments.




Merging Code
git diff <branch name> — (to compare commits, branches, files & more)

git merge <branch name> — (to merge 2 branches)

or create a pr




pull request
tell you let pf chnage you have doo



git pull origin main

merge conflict
 when github confused when we doo same changes at different place

 
 ## **Fixing Mistakes**
 
 ### **Case 1: staged changes**
 
 * `git reset <- file name ->`
 * `git reset`
 
 ### **Case 2: commited changes (for one commit)**
 
 * `git reset HEAD~1`
 
 ### **Case 3: commited changes (for many commits)**
 
 * `git reset <- commit hash ->`
 * `git reset --hard <- commit hash ->`
 
 ---

 fork
 //define
 // fork is a rough copy



first time in project
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main


While working on the project (daily use)
git status
git add .
git commit -m "feature update"
git push


✅ CASE 2: When YOU want to get YOUR project from GitHub (existing repo)
git clone <your-repo-url>
cd project-folder
After changes:
git add .
git commit -m "update"
git push

✅ CASE 3: When you want to get ANOTHER PERSON’S project
# 1. Fork repo on GitHub (GUI)
git clone <your-forked-repo-url>
after chnage
git add .
git commit -m "my changes"
git push

🔑 One-Line Memory Rule

New project → init | Existing repo → clone | Your repo → push | Other repo → fork + clone
