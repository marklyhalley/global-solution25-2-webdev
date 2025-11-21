# 🧩 Projeto — Inscrição para o Programa Henka de Reskilling

Este projeto foi desenvolvido como parte da avaliação da disciplina de **Web Dev** para a **FIAP Global Solution 2025/2**
O sistema implementa um **formulário de inscrição interativo**, que realiza **validação de campos** usando **JavaScript puro (Vanilla JS)**, sem bibliotecas externas.

---

## 📘 Descrição do Projeto

O site contém um formulário que permite ao usuário preencher seus dados pessoais e selecionar suas habilidades e tipo de interesse.  
A validação de entrada é feita por meio de funções JavaScript que verificam a consistência dos dados antes de exibir um resumo de sucesso ou mensagens de erro.

### ⚙️ Funcionalidades:
- Validação de **CPF** (estrutura e dígitos verificadores);
- Validação de **E-mail** (somente formato com um `@` e domínio terminando em `.com`);
- Conversão automática de letras maiúsculas para minúsculas no e-mail;
- Controle de **habilidades** adicionadas dinamicamente (mínimo de 3 exigidas);
- Verificação do **tipo de interesse** selecionado (radio button);
- Exibição de mensagens de erro ou resumo final utilizando `innerHTML`.

---

## 🧠 Estrutura do Projeto

📂 global-solution25-2-webdev/

├── index.html # Estrutura do formulário e feedback

├── main.js # Lógica JS de validação e manipulação de elementos

├── README.md # Documento explicativo do projeto

---

## 💻 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica da página;    
- **JavaScript (Vanilla)** – Validação e controle de interação;  
- **DOM API** – Manipulação dinâmica de elementos na página.

---

## 🧾 Instruções de Uso

1. Abra o arquivo `index.html` em um navegador moderno.  
2. Preencha os campos do formulário:  
   - Nome completo  
   - CPF  
   - E-mail  
   - Habilidades (adicione no mínimo 3)  
   - Tipo de Interesse  
3. Clique em **“Enviar Inscrição”**.  
4. Caso todos os campos estejam válidos, será exibido um resumo da inscrição.  
   Caso contrário, uma lista de erros aparecerá em vermelho.

---

## 👥 Integrantes do Grupo

| Nome do Aluno            | RM       |

| Camile Vitória Silva     | RM566649 |

| Helton Pacheco dos Santos| RM567113 |

| Marco Túlio Longo Conte  | RM568373 |

---

## 🧾 Observações Finais

- Todo o código JavaScript foi escrito **sem uso de frameworks ou bibliotecas externas**, utilizando apenas o JavaScript em sua forma **Vanilla**.  
- O projeto segue as especificações e restrições apresentadas no enunciado oficial da avaliação.  

---
