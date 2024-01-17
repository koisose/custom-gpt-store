# What's This?

This is a custom GPT store. It's basically inspired by [GPT store](https://openai.com/blog/introducing-the-gpt-store) itself.

# Web demo

[https://gpt-ask-anything-haenfpbaufe8kshkbycejo.streamlit.app](https://gpt-ask-anything-haenfpbaufe8kshkbycejo.streamlit.app)

# Clarifai Project

[https://clarifai.com/e7z8rl0sfw2a/koisose](https://clarifai.com/e7z8rl0sfw2a/koisose)

# Develop

### Create Commit Message Automatically and Push It Straight Away

When you want to commit changes, you can use GPT-4 Turbo through Clarifai. You need to set the environment variable `CLARIFAI_API_KEY`. Go to [https://clarifai.com/settings/security](https://clarifai.com/settings/security), and copy and paste your personal access token there. Then run:

```
pnpm run commit-clarifai
```

You can also use a less powerful AI, Gemini Pro by Google, but be aware that because it's a free version, Google will use all your input for training data. To use Gemini Pro to create a commit, you need to set `GOOGLE_API_KEY`. You can obtain the API key here: [https://makersuite.google.com](https://makersuite.google.com). In `packages/scripts`, see `.env.example`, then change the filename to `.env`. After you've done that, you can use it by running:

```
pnpm run commit
```

### Auto Fix `README.md` Grammar

You can easily fix grammar in the `README.md` using the power of Clarifai GPT-4 Turbo by running `pnpm run fix-grammar`. And if you want to fix grammar and create a commit message automatically and push it straight away, use the command `pnpm run fix-and-commit`.

### Some Notes

- Every commit message created with `pnpm run commit-clarifai` or `pnpm run fix-and-commit` is translated to Indonesian below the original commit. You can change the system prompt [here](packages/scripts/commit-clarifai.js).