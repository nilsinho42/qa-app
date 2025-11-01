# QA App

## Overview
This project is a web application built using Next.js and TypeScript, styled with Tailwind CSS. It includes various components for user interaction and functionality, such as uploading CSV files and displaying questions.

## Project Structure
The project is organized into the following main directories and files:

- **app/**: Contains the main application files.
  - `globals.css`: Global CSS styles for the application.
  - `layout.tsx`: Layout component wrapping around page components.
  - `page.tsx`: Main page component for rendering content.

- **components/**: Contains reusable React components.
  - `Controls.tsx`: UI controls for user interaction.
  - `QuestionCard.tsx`: Component for displaying questions.
  - `UploadCsv.tsx`: Component for uploading CSV files.

- **lib/**: Contains TypeScript types and interfaces.
  - `types.ts`: Type definitions used throughout the application.

- **public/**: Contains static files.
  - `favicon.ico`: Favicon for the application.

- **Configuration Files**:
  - `package.json`: npm configuration file listing dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration file.
  - `next.config.mjs`: Next.js configuration file.
  - `tailwind.config.ts`: Tailwind CSS configuration file.
  - `postcss.config.js`: PostCSS configuration file.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd qa-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## Usage
Once the development server is running, you can access the application at `http://localhost:3000`. Explore the various components and functionalities provided by the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Q&A App (pt-BR) — Next.js + Tailwind (Vercel Free)

App de perguntas e respostas baseado em CSV, 100% client-side.

## Requisitos do CSV

- Arquivo `.csv` com cabeçalho contendo **pergunta**, **nivel**, **resposta**.
- Codificação UTF-8.

Exemplo:

```csv
pergunta,nivel,resposta
O que é DNS?,iniciante,Sistema de nomes de domínio que traduz nomes para IPs.
Explique ACID,intermediario,Atomicidade, Consistência, Isolamento e Durabilidade.