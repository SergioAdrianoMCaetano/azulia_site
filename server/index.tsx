const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

// Rota de exemplo para a API de IA
app.post('/api/ia-resposta', (req, res) => {
  const { mensagem } = req.body
  // Lógica de IA aqui (integração futura)
  res.json({ resposta: 'Resposta automática da IA' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
