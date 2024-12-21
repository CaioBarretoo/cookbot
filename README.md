# CookBot 
![CookBot](assets/images/icon.png)


Um aplicativo de geração de receitas usando IA para sugerir receitas baseadas nos ingredientes disponíveis.

## Funcionalidades

- Geração de receitas baseada em ingredientes disponíveis
- Suporte a tema claro/escuro com persistência
- Interface moderna e responsiva
- Animações suaves
- Integração com OpenAI GPT-3.5

## Tecnologias

- React Native
- Expo
- TypeScript
- OpenAI API
- AsyncStorage para persistência
- Moti para animações

## Como executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto
- Adicione sua chave da API OpenAI:
```
EXPO_PUBLIC_OPENAI_API_KEY=sua_chave_aqui
```

4. Execute o projeto:
```bash
npm start
```

## Estrutura de Temas

O aplicativo suporta temas claro e escuro, com persistência da preferência do usuário. A configuração de temas está localizada em `src/theme/theme.ts`.