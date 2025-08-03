import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { AUTH_CONFIG } from '@site/src/config/auth';
import styles from './AuthWrapper.module.css';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string>('');

  // Verificar se já está autenticado ao carregar a página
  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_CONFIG.STORAGE_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string) => {
    if (password === AUTH_CONFIG.PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      // Salvar no localStorage para persistir a sessão
      localStorage.setItem(AUTH_CONFIG.STORAGE_KEY, 'true');
    } else {
      setError(AUTH_CONFIG.MESSAGES.INCORRECT_PASSWORD);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_CONFIG.STORAGE_KEY);
    setError('');
  };

  // Se não estiver autenticado, mostrar o formulário de login
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} error={error} />;
  }

  // Se estiver autenticado, mostrar o conteúdo com botão de logout
  return (
    <div className={styles['auth-protected-content']}>
      {/* Botão de logout flutuante */}
      <button 
        onClick={handleLogout}
        className={styles['logout-button']}
        title="Sair da documentação"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16,17 21,12 16,7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Sair
      </button>

      {/* Conteúdo da documentação */}
      {children}
    </div>
  );
} 