export const metadata = {
title: 'Perguntas & Respostas',
description: 'App simples de Q&A (CSV) — Next.js + Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR">
<body>
<div className="container py-8">
<h1 className="text-2xl font-bold mb-2">Perguntas & Respostas</h1>
<p className="text-sm text-gray-600 mb-6">Sem backend • CSV obrigatório • Aleatório sem repetição • Filtro por nível • Timer configurável</p>
{children}
</div>
</body>
</html>
);
}