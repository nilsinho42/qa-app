'use client'

import { useMemo, useState } from 'react'
import UploadCsv from '@/components/UploadCsv'
import Controls from '@/components/Controls'
import QuestionCard from '@/components/QuestionCard'
import { QAItem, AnswerMode } from '@/lib/types'

export default function Page() {
const [rows, setRows] = useState<QAItem[] | null>(null)
const [started, setStarted] = useState(false)

// Configs
const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
const [answerMode, setAnswerMode] = useState<AnswerMode>('always')
const [seconds, setSeconds] = useState<number>(30)

const levels = useMemo(() => {
const set = new Set<string>()
rows?.forEach(r => set.add(r.nivel))
return Array.from(set).sort()
}, [rows])

const filtered = useMemo(() => {
if (!rows) return []
return rows.filter(r => !selectedLevel || r.nivel === selectedLevel)
}, [rows, selectedLevel])

function handleStart() {
if (!rows || rows.length === 0) {
alert('Envie um CSV válido primeiro.')
return
}
if (filtered.length === 0) {
alert('Nenhuma pergunta encontrada para o filtro atual.')
return
}
setStarted(true)
}

function handleExhausted() {
alert('Você concluiu todas as perguntas deste conjunto!')
setStarted(false)
}

return (
<div className="space-y-6">
<UploadCsv onLoaded={setRows} />

<Controls
levels={levels}
selectedLevel={selectedLevel}
setSelectedLevel={setSelectedLevel}
answerMode={answerMode}
setAnswerMode={setAnswerMode}
seconds={seconds}
setSeconds={setSeconds}
onStart={handleStart}
started={started}
/>

{started && (
<QuestionCard
questions={filtered}
answerMode={answerMode}
seconds={seconds}
onExhausted={handleExhausted}
/>
)}

{!started && (
<div className="card">
<p className="text-gray-700">
Envie um CSV, ajuste as configurações e clique em <strong>Iniciar sessão</strong>.
</p>
</div>
)}
</div>
)
}