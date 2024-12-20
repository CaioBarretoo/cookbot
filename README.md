# CookBot

Um aplicativo de geração de receitas usando IA para sugerir receitas baseadas nos ingredientes disponíveis.

## Estrutura do Projeto

```
src/
├── App.tsx                # Componente principal do aplicativo
├── screens/              # Telas do aplicativo
│   └── HomeScreen.tsx    # Tela principal
├── components/           # Componentes reutilizáveis
├── contexts/             # Contextos React
│   └── ThemeContext.tsx  # Gerenciamento de tema
├── services/             # Serviços externos
│   └── ai/
│       └── generator.ts  # Serviço de IA para geração de receitas
├── theme/                # Estilos e temas
│   ├── styles.ts        # Estilos globais
│   └── theme.ts         # Configuração de temas (light/dark)
├── config/               # Configurações
│   └── constants.ts     # Constantes globais
├── hooks/               # Hooks personalizados
└── utils/               # Utilitários e helpers
```

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

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
