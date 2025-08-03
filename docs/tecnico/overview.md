# Visão Geral da Arquitetura

FrioFácil é uma plataforma de gestão de manutenção preventiva para sistemas de refrigeração, composta por três principais componentes técnicos.

## 🏗️ Arquitetura do Sistema

```mermaid
graph TB
    subgraph "Frontend Layer"
        FE[React + Vite<br/>usefriofacil.com.br]
    end
    
    subgraph "Backend Layer"
        BE[ASP.NET Core API<br/>backend.usefriofacil.com.br]
        PA[Payment API (Node.js)<br/>payment.usefriofacil.com.br]
    end
    
    subgraph "External Services"
        DB[(PostgreSQL<br/>Database)]
        ST[Stripe<br/>Payment Gateway]
        DO[Dokploy<br/>Deployment]
    end
    
    FE --> BE
    FE --> PA
    BE --> DB
    PA --> ST
    PA --> DB
    BE --> DO
    PA --> DO
    FE --> DO
```

## 🚀 Componentes Principais

### [Backend API](./backend/overview.md)
- **Tecnologia**: ASP.NET Core 8
- **Domínio**: `backend.usefriofacil.com.br`
- **Porta**: 65012
- **Responsabilidades**:
  - Autenticação JWT
  - Gestão de usuários e empresas
  - CRUD de dados principais
  - Integração com banco PostgreSQL

### [Frontend](./frontend/overview.md)
- **Tecnologia**: React + TypeScript + Vite
- **Domínio**: `usefriofacil.com.br`
- **Porta**: 24319
- **Responsabilidades**:
  - Interface do usuário
  - Gestão de estado
  - Integração com APIs
  - Dashboard e relatórios

### [Payment API](./payment-api/overview.md)
- **Tecnologia**: Node.js + Express
- **Domínio**: `payment.usefriofacil.com.br`
- **Porta**: 15596
- **Responsabilidades**:
  - Processamento de pagamentos via Stripe
  - Gestão de assinaturas
  - Webhooks de pagamento
  - Sincronização com backend principal

## 🔐 Fluxo de Autenticação

1. **Login do usuário** no Frontend
2. **Validação** no Backend API
3. **Geração de JWT** pelo Backend
4. **Token compartilhado** entre Backend e Payment API
5. **Autorização** para todas as operações

## 🌐 Configuração de Domínios

| Serviço | Domínio | Porta Interna | Porta Externa |
|---------|---------|---------------|---------------|
| Frontend | usefriofacil.com.br | 24319 | 443 (HTTPS) |
| Backend | backend.usefriofacil.com.br | 65012 | 443 (HTTPS) |
| Payment API | payment.usefriofacil.com.br | 15596 | 443 (HTTPS) |

## 📦 Deployment

Todos os serviços são containerizados com Docker e orquestrados via **Dokploy**:

- **Produção**: Ambiente automatizado com HTTPS
- **Health Checks**: Monitoramento de saúde dos serviços
- **Auto-restart**: Reinicialização automática em caso de falha

## 🔄 CORS e Comunicação

Configuração de CORS para permitir comunicação segura entre os domínios:

```javascript
// Backend API (ASP.NET Core)
AllowedOrigins: [
  "https://usefriofacil.com.br",
  "https://frontend.usefriofacil.com.br"
]

// Payment API (Node.js)
CORS_ORIGINS: [
  "https://usefriofacil.com.br",
  "https://frontend.usefriofacil.com.br"
]
```

## 📊 Banco de Dados

- **PostgreSQL** centralizado
- **Host**: 136.248.104.23:5861
- **Database**: FrioFacil
- **Acesso**: Backend API e Payment API

## 📈 Monitoramento

Endpoints de health check para monitoramento:

- Backend: `https://backend.usefriofacil.com.br/api/friofacil/health`
- Payment API: `https://payment.usefriofacil.com.br/health`

## 🔧 Próximos Passos

Para mais detalhes sobre cada componente:

- [🔧 Backend API - Guia Completo](./backend/overview.md)
- [🎨 Frontend - Guia Completo](./frontend/overview.md)  
- [💳 Payment API - Guia Completo](./payment-api/overview.md)

## 📚 Recursos Adicionais

- [📋 Documentação de Negócio](../negocio/introducao.md)
- [🎯 Personas e Análises](../negocio/personas.md)
- [📊 Lean Canvas](../negocio/lean-canvas.md)
- [🏢 Site Oficial](https://usefriofacil.com.br)
- [🐙 GitHub Organization](https://github.com/UseFrioFacil)