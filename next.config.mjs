/** @type {import('next').NextConfig} */

// --- IMPORTANTE PARA GITHUB PAGES ---
// Detecta se estamos rodando dentro do GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

// Se for um deploy no GitHub Pages, precisamos definir o 'basePath'
// e o 'assetPrefix' para o nome do seu repositório.
if (isGithubActions) {
  // ATENÇÃO: Troque 'meu-repo-de-traducao' pelo nome EXATO do seu repositório
  const repoName = 'robertarfa.github.io';

  assetPrefix = `/${repoName}/`;
  basePath = `/${repoName}`;
}
// -------------------------------------

const nextConfig = {
  // --- ESSENCIAL PARA GITHUB PAGES ---
  // Habilita a exportação estática (SSG)
  output: 'export',

  // Configura o prefixo dos assets (CSS, JS, imagens)
  // para funcionar no subdiretório do GitHub Pages
  assetPrefix: assetPrefix,

  // Configura o caminho base da aplicação
  // para funcionar no subdiretório do GitHub Pages
  basePath: basePath,

  // O 'trailingSlash: true' é opcional, mas às vezes
  // ajuda a evitar problemas de rotas 404 entre /sobre e /sobre/
  trailingSlash: true,

  // Desativa a otimização de imagens do Next.js, pois ela
  // não funciona na exportação estática.
  // Use a tag <img /> normal ou exporte suas imagens.
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
