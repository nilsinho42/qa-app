'use client'

import Papa from 'papaparse'
import { QAItem } from '@/lib/types'
import { useRef } from 'react'

export default function UploadCsv({
onLoaded,
}: { onLoaded: (rows: QAItem[]) => void }) {
const inputRef = useRef<HTMLInputElement | null>(null)

function handleFile(file: File) {
Papa.parse(file, {
header: true,
skipEmptyLines: true,
transformHeader: (h) => h.trim().toLowerCase(),
complete: (results) => {
const data = (results.data as any[]).map((r) => ({
pergunta: String(r['pergunta'] ?? '').trim(),
nivel: String(r['nivel'] ?? '').trim(),
resposta: String(r['resposta'] ?? '').trim(),
})) as QAItem[]

// validação mínima
const invalid = data.find(d => !d.pergunta || !d.nivel || !d.resposta)
if (invalid) {
alert('CSV inválido. Colunas obrigatórias: pergunta, nivel, resposta.')
return
}
onLoaded(data)
},
error: (err) => {
console.error(err)
alert('Falha ao ler CSV.')
},
encoding: 'utf-8',
})
}

return (
<div className="card">
<h2 className="text-lg font-semibold mb-3">1) Envie o CSV</h2>
<p className="text-sm text-gray-600 mb-3">Colunas obrigatórias: <code>pergunta</code>, <code>nivel</code>, <code>resposta</code></p>
<div className="flex items-center gap-3">
<input
ref={inputRef}
type="file"
accept=".csv,text/csv"
className="block"
onChange={(e) => {
const f = e.target.files?.[0]
if (f) handleFile(f)
}}
/>
</div>
</div>
)
}