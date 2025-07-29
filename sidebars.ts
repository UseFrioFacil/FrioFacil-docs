import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar do Frio Fácil
 * - Categorias com índice gerado automaticamente
 * - Itens apontando para os arquivos .md (IDs = nomes dos arquivos sem .md)
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Visão geral',
      link: {
        type: 'generated-index',
        title: 'Visão geral',
        description:
          'Contexto e objetivos do Frio Fácil: proposta, ODS e posicionamento.',
        slug: '/visao-geral',
      },
      items: [
        // docs/introducao.md
        'introducao',
      ],
    },
    {
      type: 'category',
      label: 'Planejamento',
      link: {
        type: 'generated-index',
        title: 'Planejamento',
        description:
          'Problema, análise competitiva, personas, SWOT e Lean Canvas.',
        slug: '/planejamento',
      },
      items: [
        // docs/problema.md
        'problema',
        // docs/analise-concorrencia.md
        'analise-concorrencia',
        // docs/swot.md
        'swot',
        // docs/personas.md
        'personas',
        // docs/lean-canvas.md
        'lean-canvas',
      ],
    },
    {
      type: 'category',
      label: 'Produto',
      link: {
        type: 'generated-index',
        title: 'Produto',
        description:
          'Arquitetura, backend, frontend e direção técnica do produto.',
        slug: '/produto',
      },
      items: [
        // docs/backend.md
        'backend',
        // docs/frontend.md
        'frontend',
        // Se quiser adicionar depois:
        // 'arquitetura',
        // 'api',
      ],
    },
    // Você pode adicionar mais categorias depois, por exemplo:
    // {
    //   type: 'category',
    //   label: 'Operação',
    //   link: {
    //     type: 'generated-index',
    //     title: 'Operação',
    //     description: 'Roadmap, métricas, governança e suporte.',
    //     slug: '/operacao',
    //   },
    //   items: ['roadmap', 'metricas', 'governanca', 'suporte'],
    // },
  ],
};

export default sidebars;
