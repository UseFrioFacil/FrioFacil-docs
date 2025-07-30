import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Este arquivo roda em Node.js

const config: Config = {
  // ====== Identidade do site ======
  title: 'Frio Fácil Docs',
  tagline: 'Documentação do Frio Fácil',
  favicon: 'img/floco.png',

  // ====== Compatibilidade com Docusaurus v4 ======
  future: {
    v4: true,
  },

  // ====== URL/baseUrl ======
  // TODO: Se tiver domínio próprio, troque pela sua URL de produção
  url: 'https://usefriofacil.github.io/FrioFacil-docs/',
  // Para GitHub Pages: baseUrl geralmente é '/<repo>/'
  // Ex.: baseUrl: '/frio-facil-docs/'
  baseUrl: '/FrioFacil-docs/',

  // ====== Deploy no GitHub Pages (opcional) ======
  // TODO: Ajuste para sua org/usuário e repositório
  organizationName: 'UseFrioFacil',
  projectName: 'usefriofacil.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // ====== Idioma ======
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // ====== Presets ======
  presets: [
    [
      'classic',
      {
        docs: {
          // Rota da documentação na raiz do site
          routeBasePath: '/',
          // Garante caminho correto do sidebar em setups variados
          sidebarPath: require.resolve('./sidebars.ts'),
          // TODO: Ajuste para seu repositório se quiser "Editar esta página"
          editUrl: 'https://github.com/UseFrioFacil/FrioFacil-docs/tree/main/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // Desativei o blog por ora (pode reativar depois)
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  // ====== Tema / Navegação / Rodapé ======
  themeConfig: {
  image: 'img/floco.png',

  navbar: {
    title: 'Frio Fácil',
    logo: { alt: 'Frio Fácil', src: 'img/floco.png' },
    items: [
      { to: '/', label: 'Docs', position: 'left' },
      { to: '/planejamento', label: 'Planejamento', position: 'left' },
      { to: '/produto', label: 'Produto', position: 'left' },
      { href: 'https://usefriofacil.com.br', label: 'Site', position: 'right' },
      { href: 'https://github.com/UseFrioFacil', label: 'GitHub', position: 'right' },
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Documentação',
        items: [
          { label: 'Introdução', to: '/introducao' },
          { label: 'Problema', to: '/problema' },
          { label: 'SWOT', to: '/swot' },
          { label: 'Lean Canvas', to: '/lean-canvas' },
        ],
      },
      {
        title: 'Produto',
        items: [
          { label: 'Backend', to: '/backend' },
          { label: 'Frontend', to: '/frontend' },
        ],
      },
      {
        title: 'Links Úteis',
        items: [
          { label: 'Site Oficial', href: 'https://usefriofacil.com.br' },
          { label: 'GitHub', href: 'https://github.com/UseFrioFacil' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} <strong>Frio Fácil</strong>. Todos os direitos reservados.`,
  },

  // >>> Estes DOIS blocos devem ficar AQUI, fora do "footer"
  colorMode: {
    defaultMode: 'light',
    respectPrefersColorScheme: true,
  },

  // Use os objetos que você já tinha, ou prismThemes.github/dracula
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    // additionalLanguages: ['bash', 'json', 'sql'],
  },
    }satisfies Preset.ThemeConfig,

};

export default config;
