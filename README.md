# Dashboard HeroUI

A modern dashboard application built with Vite and HeroUI (v2).

🌐 **Live Demo**: [https://MaximInvent.github.io/dahsboard-hero-ui](https://MaximInvent.github.io/dahsboard-hero-ui)

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/heroui-inc/vite-template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when you push to the `main` branch.

### Manual Deployment (if needed)

If you need to deploy manually, follow these steps:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push your changes** to the main branch:
   ```bash
   git add .
   git commit -m "Update dashboard"
   git push origin main
   ```

3. **Check the Actions tab** in your GitHub repository to see the deployment progress.

### Troubleshooting

If you encounter deployment issues:

1. **Check GitHub Actions logs** in the Actions tab
2. **Verify repository settings** - ensure Pages is enabled
3. **Clear browser cache** when testing the deployed site
4. **Check the base path** in `vite.config.ts` matches your repository name

## License

Licensed under the [MIT license](https://github.com/MaximInvent/dahsboard-hero-ui/blob/main/LICENSE).
