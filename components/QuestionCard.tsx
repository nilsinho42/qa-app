'use client'
useEffect(() => {
// reseta timer quando muda de pergunta
setRemaining(seconds)
setExpired(false)
}, [current, seconds])

useEffect(() => {
if (seconds <= 0) return // sem timer
if (!current) return
if (expired) return

const id = setInterval(() => {
setRemaining((r) => {
if (r <= 1) {
clearInterval(id)
setExpired(true)
return 0
}
return r - 1
})
}, 1000)

return () => clearInterval(id)
}, [current, seconds, expired])

function nextQuestion() {
// avança no deck; sem repetição até esgotar
deckRef.current.shift()
if (deckRef.current.length === 0) {
onExhausted()
return
}
setCurrent(deckRef.current[0])
setShowAnswer(answerMode === 'always')
}

const timerClass = useMemo(() => {
if (expired) return 'badge timer-expired'
if (seconds > 0 && remaining <= 5) return 'badge timer-warn'
return 'badge timer-ok'
}, [remaining, seconds, expired])

if (!current) return null

return (
<div className="card">
<div className="flex items-center justify-between mb-3">
<span className="badge">Nível: {current.nivel}</span>
<span className={timerClass}>
{seconds > 0 ? `⏱️ ${remaining}s` : '⏱️ sem timer'}
</span>
</div>

<h3 className="text-xl font-semibold mb-2">{current.pergunta}</h3>

{answerMode === 'onClick' && !showAnswer && (
<button className="button mb-3" onClick={() => setShowAnswer(true)}>
Mostrar resposta
</button>
)}

{(answerMode === 'always' || showAnswer) && (
<div className={`rounded-xl border p-3 mb-4 ${expired ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
<div className="text-sm text-gray-600 mb-1">Resposta esperada</div>
<div className="whitespace-pre-wrap">{current.resposta}</div>
{expired && (
<div className="text-sm text-red-600 mt-2">Tempo esgotado</div>
)}
</div>
)}

<div className="flex gap-3">
<button className="button-primary" onClick={nextQuestion}>
Próxima Pergunta
</button>
</div>
</div>
)
}