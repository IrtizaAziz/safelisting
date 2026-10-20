# Deploy prototype to Vercel (after GitHub is published)

1. Import your **private** GitHub repository into Vercel (authorize repository access when prompted).
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. No project secrets required for the current synthetic demo.
4. Deploy a preview branch before releasing a production demo URL.
5. Test page refresh/deep links, phone layout, and the operator-resolve interaction in the deployed preview.
6. Keep source, design and research repository private unless your team and competition terms permit publication.
7. Verify any third-party provider, AI model and mapping service rates/licenses before connecting them.

The current implementation is entirely client-side; there is no remote database, user authentication or live geospatial API. It can be demonstrated offline from a local Vite build.
