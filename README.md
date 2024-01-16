# What's this?

Using this module, you can ask GPT-4 Turbo.

# Develop

## Auto commit

When you want to commit changes, you can use GPT-4 Turbo as well via Clarifai. You need to set the environment variable `CLARIFAI_API_KEY`. Go to `https://clarifai.com/settings/security`, then copy and paste your personal access token there. Then run:

```bash
pnpm run commit-clarifai
```

You can also use a less powerful AI, Gemini Pro by Google, but beware that because it's a free version, all your input will be used by Google for training data. To use Gemini Pro for creating a commit, you need to set GOOGLE_API_KEY. You can get the API key here: https://makersuite.google.com. Inside packages/scripts, see .env.example, then change the filename to .env. After you've done that, you can use it by running:

```bash
pnpm run commit
```

### Some notes 

- You may have seen in packages/scripts/package.json a command like this: export GITHUB_TOKEN=$SUPER_TOKEN. You can delete that as we are using it for `gh cli` in Codespaces purposes.
- Any commit message is in indonesian languages you can change the prompt in `packages/scripts/commit-clarifai.js` especially the one saying:

```
Translate the commit <subject> and <body> to indonesian language. And here's an example of a good commit message:

---
✨ feat(README): tambah instruksi penggunaan Clarifai untuk pesan commit

Menambahkan bagian tentang penggunaan Clarifai untuk penerjemahan pesan commit yang lebih kuat ke dalam bahasa Indonesia. Pengguna harus menempatkan \`CLARIFAI_API_KEY\` di dalam file \`.env\` dan menjalankan perintah \`pnpm run commit-clarifai\`.
---
```