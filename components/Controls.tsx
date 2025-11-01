'use client'

import { AnswerMode } from '@/lib/types'

export default function Controls({
levels,
selectedLevel,
setSelectedLevel,
answerMode,
setAnswerMode,
seconds,
setSeconds,
onStart,
started,
}: {
levels: string[]
selectedLevel: string | null
setSelectedLevel: (v: string | null) => void
answerMode: AnswerMode
setAnswerMode: (m: AnswerMode) => void
seconds: number
setSeconds: (n: number) => void
onStart: () => void
started: boolean
}) {
return (
<div className="card">
<h2 className="text-lg font-semibold mb-4">2) Configurações</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* Filtro por nível */}
<div>
<label className="block text-sm font-medium mb-1">Nível</label>
<select
className="select"
value={selectedLevel ?? ''}
onChange={(e) => setSelectedLevel(e.target.value || null)}
>
<option value="">Todos</option>
{levels.map((lvl) => (
<option key={lvl} value={lvl}>{lvl}</option>
))}
</select>
</div>

{/* Modo de resposta */}
<div>
<label className="block text-sm font-medium mb-1">Exibição da resposta</label>
<select
className="select"
value={answerMode}
onChange={(e) => setAnswerMode(e.target.value as AnswerMode)}
>
<option value="always">Sempre visível</option>
<option value="onClick">Mostrar ao clicar</option>
</select>
</div>

{/* Timer */}
<div>
<label className="block text-sm font-medium mb-1">Timer (segundos)</label>
<input
type="number"
min={0}
placeholder="Ex: 30"
className="input"
value={seconds}
onChange={(e) => setSeconds(Math.max(0, Number(e.target.value)))}
/>
</div>
</div>

<div className="mt-4 flex gap-3">
<button className="button-primary" onClick={onStart} disabled={started}>Iniciar sessão</button>
</div>
</div>
)
}