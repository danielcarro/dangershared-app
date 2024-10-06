# DangerShared App

## Descrição do Projeto
**DangerShared App** é uma aplicação móvel desenvolvida em **React Native** que permite aos usuários registrar pequenos focos de incêndio em tempo real. Através da aplicação, os usuários podem filmar o local do incêndio, enviar o vídeo junto com suas coordenadas de localização, e essas informações serão processadas por uma API que alimenta um banco de dados. Em seguida, os dados são enviados para os órgãos competentes para que medidas apropriadas sejam tomadas.

## Funcionalidades Principais
- **Captura de vídeo**: O usuário pode gravar um vídeo de até 30 segundos do foco de incêndio.
- **Envio de localização**: A localização do usuário é enviada automaticamente junto com o vídeo.
- **Integração com API**: O vídeo e a localização são enviados para uma API que gerencia os dados e notifica as autoridades competentes.
- **Notificação de órgãos**: Informações sobre o incidente são passadas diretamente para os órgãos responsáveis pela contenção de incêndios.

## Tecnologias Utilizadas
- **React Native**: Para o desenvolvimento da interface do usuário e funcionalidades da aplicação.
- **Expo**: Utilizado para facilitar o desenvolvimento e a gestão de dependências no React Native.
- **Styled-Components**: Para a estilização da interface.
- **TypeScript**: Para tipagem estática no projeto, melhorando a legibilidade e a manutenção do código.
- **API REST**: A aplicação se comunica com uma API externa para envio de dados.
- **Geolocalização**: Para capturar automaticamente a localização do usuário.

## Como Clonar e Instalar a Aplicação

### Pré-requisitos
Certifique-se de que você tenha instalado em sua máquina:
- [Node.js](https://nodejs.org) (versão recomendada: LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Git

### Passos para Clonar o Repositório

1. Abra o terminal ou prompt de comando em sua máquina.

2. Execute o comando abaixo para clonar o repositório:

   ```bash
   git clone https://github.com/seu-usuario/dangershared-app.git
