// src/data.js
export const commandsData = [
  // --- Git Commands ---
  {
    id: 1,
    category: "Git",
    name: "git init",
    description: "Initializes a new Git repository in the current directory.",
  },
  {
    id: 2,
    category: "Git",
    name: "git clone [url]",
    description: "Creates a copy of a remote repository on your local machine.",
  },
  {
    id: 3,
    category: "Git",
    name: "git add [file]",
    description: "Adds a file to the staging area, preparing it for a commit.",
  },
  {
    id: 4,
    category: "Git",
    name: 'git commit -m "[msg]"',
    description: "Records the staged changes to the repository with a message.",
  },
  {
    id: 5,
    category: "Git",
    name: "git status",
    description:
      "Displays the state of the working directory and the staging area.",
  },
  {
    id: 6,
    category: "Git",
    name: "git push",
    description: "Uploads local repository content to a remote repository.",
  },
  {
    id: 7,
    category: "Git",
    name: "git pull",
    description:
      "Fetches and integrates with another repository or a local branch.",
  },
  {
    id: 8,
    category: "Git",
    name: "git branch",
    description: "Lists all branches. Add a name to create a new branch.",
  },
  {
    id: 9,
    category: "Git",
    name: "git checkout [branch]",
    description:
      "Switches to the specified branch and updates the working directory.",
  },
  {
    id: 10,
    category: "Git",
    name: "git merge [branch]",
    description:
      "Merges the specified branch’s history into the current branch.",
  },
  {
    id: 23,
    category: "Git",
    name: "git log",
    description: "Shows the commit history for the current branch.",
  },
  {
    id: 24,
    category: "Git",
    name: "git diff",
    description:
      "Shows the differences between commits, commit and working tree, etc.",
  },
  {
    id: 25,
    category: "Git",
    name: "git stash",
    description: "Temporarily stores all modified tracked files.",
  },

  // --- Docker Commands ---
  {
    id: 11,
    category: "Docker",
    name: "docker run [image]",
    description: "Creates and starts a new container from an image.",
  },
  {
    id: 12,
    category: "Docker",
    name: "docker ps",
    description: "Lists all running containers.",
  },
  {
    id: 13,
    category: "Docker",
    name: "docker ps -a",
    description: "Lists all containers, including stopped ones.",
  },
  {
    id: 14,
    category: "Docker",
    name: "docker stop [id]",
    description: "Stops one or more running containers.",
  },
  {
    id: 15,
    category: "Docker",
    name: "docker rm [id]",
    description: "Removes one or more containers.",
  },
  {
    id: 16,
    category: "Docker",
    name: "docker images",
    description:
      "Lists all images that are locally stored with the Docker engine.",
  },
  {
    id: 17,
    category: "Docker",
    name: "docker rmi [id]",
    description: "Removes one or more images.",
  },
  {
    id: 26,
    category: "Docker",
    name: "docker build -t [name]",
    description:
      "Builds a Docker image from a Dockerfile in the current directory.",
  },

  // --- NPM Commands ---
  {
    id: 18,
    category: "NPM",
    name: "npm install",
    description: "Installs all dependencies from the package.json file.",
  },
  {
    id: 19,
    category: "NPM",
    name: "npm install [package]",
    description: "Installs a specific package.",
  },
  {
    id: 20,
    category: "NPM",
    name: "npm uninstall [package]",
    description: "Uninstalls a specific package.",
  },
  {
    id: 21,
    category: "NPM",
    name: "npm run dev",
    description: 'Runs the "dev" script from package.json.',
  },
  {
    id: 22,
    category: "NPM",
    name: "npm run build",
    description: 'Runs the "build" script from package.json.',
  },

  // --- VS Code Shortcuts ---
  {
    id: 27,
    category: "VS Code",
    name: "Ctrl + P",
    description: "Go to File... Quickly search for and open a file.",
  },
  {
    id: 28,
    category: "VS Code",
    name: "Ctrl + Shift + P",
    description: "Show Command Palette. Access all available commands.",
  },
  {
    id: 29,
    category: "VS Code",
    name: "Ctrl + D",
    description:
      "Add selection to next find match. Selects the next occurrence of the current word.",
  },
  {
    id: 30,
    category: "VS Code",
    name: "Ctrl + /",
    description:
      "Toggle line comment. Comments or uncomments the current line.",
  },
  {
    id: 31,
    category: "VS Code",
    name: "Alt + Up/Down Arrow",
    description:
      "Move line up/down. Moves the current line of code up or down.",
  },
  {
    id: 32,
    category: "VS Code",
    name: "Shift + Alt + F",
    description:
      "Format document. Automatically formats the code in the current file.",
  },
];
