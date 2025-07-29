import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comece pelo essencial ❄️',
    description: (
      <>
        Introdução, visão do produto e como navegar pela doc. Guias rápidos
        para configurar o ambiente, rodar o projeto e entender o fluxo
        cliente ↔ prestador.
      </>
    ),
  },
  {
    title: 'Planejamento claro 🧊',
    description: (
      <>
        Problema e oportunidade, personas, análise de concorrência, SWOT e
        Lean Canvas — tudo alinhado aos ODS 8, 9 e 11, com métricas de
        sucesso para orientar decisões.
      </>
    ),
  },
  {
    title: 'Base técnica sólida 🏔️',
    description: (
      <>
        Arquitetura do sistema, backend (Node.js + PostgreSQL), APIs REST,
        autenticação (JWT), padrões de código, testes, deploy (Docker/nuvem)
        e observabilidade.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
