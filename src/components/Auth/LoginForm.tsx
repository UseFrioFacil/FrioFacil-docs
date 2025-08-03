import React, { useState } from 'react';
import clsx from 'clsx';
import { AUTH_CONFIG } from '@site/src/config/auth';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onLogin: (password: string) => void;
  error?: string;
}

export default function LoginForm({ onLogin, error }: LoginFormProps): React.JSX.Element {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular um pequeno delay para melhor UX
    setTimeout(() => {
      onLogin(password);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles['auth-container']}>
      <div className={styles['auth-card']}>
        <div className={styles['auth-header']}>
          <img 
            src="/FrioFacil-docs/img/floco.png" 
            alt="Frio Fácil" 
            className={styles['auth-logo']}
          />
          <h1>Frio Fácil Docs</h1>
          <p>{AUTH_CONFIG.MESSAGES.LOGIN_REQUIRED}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles['auth-form']}>
          <div className={styles['form-group']}>
            <label htmlFor="password" className={styles['form-label']}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={clsx(styles['form-input'], { [styles.error]: error })}
              placeholder="Digite a senha"
              required
              disabled={isLoading}
            />
            {error && <div className={styles['error-message']}>{error}</div>}
          </div>

          <button 
            type="submit" 
            className={clsx(styles['auth-button'], { [styles.loading]: isLoading })}
            disabled={isLoading || !password}
          >
            {isLoading ? 'Verificando...' : 'Acessar Documentação'}
          </button>
        </form>

        <div className={styles['auth-footer']}>
          <p>Documentação protegida por senha</p>
        </div>
      </div>
    </div>
  );
} 