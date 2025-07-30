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
      label: 'Negócio',
      link: {
        type: 'generated-index',
        title: 'Negócio',
        description: 'Documentação de negócio: introdução, problema, personas, Lean Canvas, SWOT e análise de concorrência.',
        slug: '/negocio',
      },
      items: [
        'negocio/introducao',
        'negocio/problema',
        'negocio/personas',
        'negocio/lean-canvas',
        'negocio/swot',
        'negocio/analise-concorrencia',
      ],
    },
    {
      type: 'category',
      label: 'Técnico',
      link: {
        type: 'generated-index',
        title: 'Técnico',
        description: 'Documentação técnica: backend, frontend e arquitetura do Frio Fácil.',
        slug: '/tecnico',
      },
      items: [
        'tecnico/backend',
        'tecnico/frontend',
      ],
    },
    {
      type: 'category',
      label: 'Tutoriais - Básico',
      link: {
        type: 'generated-index',
        title: 'Tutorial - Básico',
        description: '5 minutos para aprender os conceitos mais importantes do Docusaurus.',
        slug: '/tutorial-basics',
      },
      items: [], // Geração automática
    },
    {
      type: 'category',
      label: 'Tutoriais - Extras',
      link: {
        type: 'generated-index',
        title: 'Tutorial - Extras',
        description: 'Funcionalidades extras e dicas para o Docusaurus.',
        slug: '/tutorial-extras',
      },
      items: [], // Geração automática
    },
  ],
};

export default sidebars;
