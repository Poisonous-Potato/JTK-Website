# Contributing Guidelines

In order to colaborate easily, please refer to this contributing guidelines before submitting any change. 

## Getting Started

### Clone Repository

Clone the repository using this command

```
git clone https://github.com/Poisonous-Potato/JTK-Website.git
```

Or if you prefer using SSH

```
git clone git@github.com:Poisonous-Potato/JTK-Website.git
```

If you already cloned this repository, you can pull the latest change from main.

```
git pull origin main
```

### Run in Development Mode

Refer to the [README.md](README.md) in Install section

## Creating Changes

### Task

*TBD*

### Branch

Avoid creating change in the `main` branch, create a new branch instead. To create a new branch, type this command.

```
git checkout -b <branch name>
```

Make sure to create a short and descriptive branch name.

### Commit

After finishing a step of a task, create a commit and push it to the branch used. To create a commit and push, type this command

```
git add .
git commit -m "<emoji> <message>"
git push -u origin <branch>
```

Refer to [gitmoji](https://gitmoji.dev) web to know what emoji to use.

## Submitting Changes

### Pull Request

After finishing a task, create a pull request to be reviewed and merged to `main` branch. The pull request must contain title and body. Body of pull request is generated from a template.

### Merge Pull Request

The maintainer will review and merge the pull request if it's already good. Format of the commit message for merging pull request is 

```
<emoji> <message> (<PR Number>)
```
