module.exports = {
  branches: ["main", "next"],
  extends: "semantic-release-monorepo",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
  ],
};
