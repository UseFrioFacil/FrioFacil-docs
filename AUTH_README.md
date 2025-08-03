# Autenticação da Documentação

Este projeto inclui um sistema de autenticação simples para proteger o acesso à documentação.

## Como Funciona

- **Senha**: Configurada no arquivo `src/config/auth.ts`
- **Persistência**: A sessão é salva no localStorage do navegador
- **Interface**: Tela de login personalizada com design moderno
- **Logout**: Botão flutuante no canto superior direito

## Configuração

### Alterar a Senha

Para alterar a senha, edite o arquivo `src/config/auth.ts`:

```typescript
export const AUTH_CONFIG = {
  // Altere esta senha para a senha desejada
  PASSWORD: 'sua-nova-senha-aqui',
  
  // ... outras configurações
};
```

### Personalizar Mensagens

Você também pode personalizar as mensagens no mesmo arquivo:

```typescript
export const AUTH_CONFIG = {
  PASSWORD: 'sua-senha',
  STORAGE_KEY: 'DocsFrioFacil',
  
  MESSAGES: {
    INCORRECT_PASSWORD: 'Senha incorreta. Tente novamente.',
    LOGIN_REQUIRED: 'Digite a senha para acessar a documentação',
  }
};
```

## Arquivos Principais

- `src/components/Auth/` - Componentes de autenticação
- `src/config/auth.ts` - Configuração da senha e mensagens
- `src/theme/Layout/index.tsx` - Layout customizado que aplica autenticação

## Como Usar

1. **Desenvolvimento**: Execute `npm start` e acesse `http://localhost:3000`
2. **Produção**: Execute `npm run build` e `npm run deploy`

## Segurança

⚠️ **Importante**: Esta é uma autenticação client-side básica. Para maior segurança:

- Use HTTPS em produção
- Considere implementar autenticação server-side
- A senha está visível no código fonte (não é segura para dados sensíveis)

## Recursos

- ✅ Interface responsiva
- ✅ Persistência de sessão
- ✅ Design moderno e acessível
- ✅ Botão de logout flutuante
- ✅ Mensagens de erro personalizáveis
- ✅ Fácil configuração

## Desabilitar Autenticação

Para desabilitar a autenticação, remova ou comente o wrapper no arquivo `src/theme/Layout/index.tsx`:

```typescript
export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    // <AuthWrapper>
      <Layout {...props} />
    // </AuthWrapper>
  );
}
``` 