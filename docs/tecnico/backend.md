# Backend

:::info
**Stack:** Node.js • PostgreSQL • API REST • JWT • Docker  
**Versão da API:** `1.0`  
**Formato:** JSON (UTF-8)  
**Autenticação:** `Authorization: Bearer <token>` nas rotas protegidas.
:::

## Sumário
- [Autenticação (Auth)](#autenticação-auth)
- [Callback](#callback)
- [Empresa (Company)](#empresa-company)
- [Home](#home)
- [Convites (Invite)](#convites-invite)
- [Modelos (Schemas)](#modelos-schemas)

---

## Autenticação (Auth)

### POST /api/friofacil/register
Cadastra um novo usuário.

**Request Body (`RegisterRequest`):**

| Campo        | Tipo   | Descrição                             | Obrigatório |
|--------------|--------|---------------------------------------|-------------|
| fullName     | string | Nome completo                         | Não         |
| email        | string | Email válido                           | **Sim**     |
| userPassword | string | Senha (mín. 8 caracteres)             | **Sim**     |
| cpf          | string | CPF (somente dígitos, 11)             | Não         |
| phone        | string | Telefone                              | Não         |

**Respostas:**
- `201 Created` – usuário criado com sucesso.
- `400 Bad Request` – validação falhou.
- `409 Conflict` – e-mail já cadastrado.

---

### POST /api/friofacil/login
Faz login do usuário.

**Request Body (`LoginRequest`):**

| Campo        | Tipo   | Descrição                 | Obrigatório |
|--------------|--------|---------------------------|-------------|
| email        | string | Email                     | **Sim**     |
| userPassword | string | Senha (mín. 8 caracteres) | **Sim**     |

**Respostas:**
- `200 OK` – retorna tokens (`accessToken`, `refreshToken?`, `expiresIn`).
- `401 Unauthorized` – credenciais inválidas.

---

### GET /api/friofacil/myaccount 🔒
Retorna dados da conta autenticada.

**Respostas:**
- `200 OK` – dados do usuário e empresas associadas.
- `401 Unauthorized` – token ausente/ inválido.

---

### DELETE /api/friofacil/userdelete 🔒
Exclui o usuário autenticado.

**Respostas:**
- `204 No Content` – excluído.
- `401 Unauthorized`.

---

## CallBack

### POST /api/friofacil/payment-callback
Recebe callback de pagamento do provedor.

**Headers (opcional):**
- `X-Signature`: assinatura HMAC do provedor.

**Request Body (`PaymentCallbackRequest`):**

| Campo          | Tipo   | Descrição                                 | Obrigatório |
|----------------|--------|-------------------------------------------|-------------|
| companyid      | string | ID da empresa (UUID v4)                   | **Sim**     |
| subscriptionId | string | ID da assinatura                          | Não         |
| status         | string | `ACTIVE \| PAST_DUE \| CANCELED \| TRIAL \| INACTIVE` | Não |

**Respostas:**
- `202 Accepted` – recebido para processamento.
- `400 Bad Request`.

---

## Empresa (Company)

### POST /api/friofacil/createtempcompany 🔒
Cria uma empresa temporária.

**Request Body (`CompanyRequest`):**

| Campo              | Tipo   | Descrição                           | Obrigatório |
|--------------------|--------|-------------------------------------|-------------|
| tradename          | string | Nome fantasia                       | **Sim**     |
| email              | string | Email da empresa                     | **Sim**     |
| legalname          | string | Razão social                        | Não         |
| cnpj               | string | CNPJ (14 dígitos)                   | Não         |
| stateregistration  | string | Inscrição estadual                  | Não         |
| fullname           | string | Nome do responsável                 | Não         |
| cpf                | string | CPF do responsável                  | Não         |
| subscriptionid     | string | ID da assinatura                    | Não         |
| phone              | string | Telefone                            | Não         |
| cep                | string | CEP                                 | Não         |
| address            | string | Endereço                            | Não         |
| number             | string | Número                              | Não         |
| complement         | string | Complemento                         | Não         |
| district           | string | Bairro                              | Não         |
| city               | string | Cidade                              | Não         |
| state              | string | Estado                              | Não         |
| createdat          | string | Data de criação (ISO 8601)          | Não         |
| status             | string | `PENDING \| ACTIVE \| INACTIVE`     | Não         |

**Respostas:**
- `201 Created` – empresa criada.
- `400 Bad Request`.
- `401 Unauthorized`.

---

### DELETE /api/friofacil/companydelete/\{companyId\} 🔒
Remove empresa pelo ID.

**Parâmetros de URL:**

| Nome      | Tipo   | Descrição             | Obrigatório |
|-----------|--------|-----------------------|-------------|
| companyId | string | ID da empresa (UUID)  | **Sim**     |

**Respostas:**
- `204 No Content` – removida.
- `401 Unauthorized`.
- `404 Not Found` – empresa não encontrada.

---

## Home

### GET /api/friofacil/home
Endpoint de status/boas-vindas.

**Respostas:**
- `200 OK` – status e metadados básicos.

---

## Convites (Invite)

### POST /api/friofacil/createinvite 🔒
Cria convite para associação a uma empresa.

**Request Body (`CreateInviteRequest`):**

| Campo           | Tipo   | Descrição                        | Obrigatório |
|-----------------|--------|----------------------------------|-------------|
| recipientEmail  | string | Email do convidado               | **Sim**     |
| senderCompanyId | string | ID da empresa remetente (UUID)   | **Sim**     |

**Respostas:**
- `201 Created` – convite criado.
- `400 Bad Request`.
- `401 Unauthorized`.

---

### PATCH /api/friofacil/respondinvite 🔒
Responde a um convite.

**Request Body (`RespondInviteRequest`):**

| Campo    | Tipo   | Descrição                | Obrigatório |
|----------|--------|--------------------------|-------------|
| inviteId | string | ID do convite (UUID)     | **Sim**     |
| status   | string | `ACCEPTED \| DECLINED`   | **Sim**     |

**Respostas:**
- `200 OK` – convite atualizado.
- `400 Bad Request`.
- `401 Unauthorized`.
- `404 Not Found` – convite não encontrado.

---

## Modelos (Schemas)

### RegisterRequest

| Campo        | Tipo   | Descrição                 |
|--------------|--------|---------------------------|
| fullName     | string | Nome completo             |
| email        | string | Email válido              |
| userPassword | string | Senha (mín. 8 caracteres) |
| cpf          | string | CPF (11 dígitos)          |
| phone        | string | Telefone                  |

**Obrigatórios:** `email`, `userPassword`

---

### LoginRequest

| Campo        | Tipo   | Descrição                 |
|--------------|--------|---------------------------|
| email        | string | Email                     |
| userPassword | string | Senha (mín. 8 caracteres) |

**Obrigatórios:** `email`, `userPassword`

---

### PaymentCallbackRequest

| Campo          | Tipo   | Descrição                                           |
|----------------|--------|-----------------------------------------------------|
| companyid      | string | ID da empresa (UUID v4)                             |
| subscriptionId | string | ID da assinatura                                    |
| status         | string | `ACTIVE \| PAST_DUE \| CANCELED \| TRIAL \| INACTIVE` |

**Obrigatórios:** `companyid`

---

### CompanyRequest

| Campo              | Tipo   | Descrição                       |
|--------------------|--------|---------------------------------|
| tradename          | string | Nome fantasia                   |
| email              | string | Email da empresa                |
| legalname          | string | Razão social                    |
| cnpj               | string | CNPJ (14 dígitos)               |
| stateregistration  | string | Inscrição estadual              |
| fullname           | string | Nome do responsável             |
| cpf                | string | CPF do responsável              |
| subscriptionid     | string | ID da assinatura                |
| phone              | string | Telefone                        |
| cep                | string | CEP                             |
| address            | string | Endereço                        |
| number             | string | Número                          |
| complement         | string | Complemento                     |
| district           | string | Bairro                          |
| city               | string | Cidade                          |
| state              | string | Estado                          |
| createdat          | string | Data de criação (ISO 8601)      |
| status             | string | `PENDING \| ACTIVE \| INACTIVE` |

**Obrigatórios:** `tradename`, `email`

---

### CreateInviteRequest

| Campo           | Tipo   | Descrição                      |
|-----------------|--------|--------------------------------|
| recipientEmail  | string | Email do convidado             |
| senderCompanyId | string | ID da empresa remetente (UUID) |

**Obrigatórios:** `recipientEmail`, `senderCompanyId`

---

### RespondInviteRequest

| Campo    | Tipo   | Descrição                 |
|----------|--------|---------------------------|
| inviteId | string | ID do convite (UUID)      |
| status   | string | `ACCEPTED \| DECLINED`    |

**Obrigatórios:** `inviteId`, `status`

---

> **Dúvidas ou sugestões?** Abra uma _issue_ no repositório ou entre em contato.

