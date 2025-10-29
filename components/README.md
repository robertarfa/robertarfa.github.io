# Estrutura de Componentes

Esta pasta contém todos os componentes React do projeto, organizados seguindo o padrão Atomic Design (adaptado):

## 📁 Estrutura

- **ui/** - Componentes atômicos reutilizáveis (Button, Logo, etc.)
- **layout/** - Componentes de layout (Header, Footer, Navigation, etc.)
- **sections/** - Seções completas de página (Hero, ServicesList, etc.)

## 💡 Princípios

- Componentes devem ser **puros** e **reutilizáveis**
- Aplicar **SOLID** (Single Responsibility Principle)
- Receber dados via **props** (Dependency Injection)
- Não importar diretamente arquivos de tradução
