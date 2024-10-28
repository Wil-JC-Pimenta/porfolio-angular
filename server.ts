import express from 'express';
import { join } from 'path';

const app = express();
const port = process['env']['PORT'] || 3000;

// Servir arquivos estáticos da pasta 'dist/portfolioAngular'
app.use(express.static(join(__dirname, 'dist', 'portfolioAngular')));

// Rota principal
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'portfolioAngular', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
