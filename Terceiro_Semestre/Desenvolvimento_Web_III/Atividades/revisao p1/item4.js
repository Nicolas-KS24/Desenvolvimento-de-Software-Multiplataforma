const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

// 1 - Cadastro com sucesso
// {
//   "email": "estudante@fatec.sp.gov.br"
// }

// Agora deve gerar erro
// {
//   "email": "estudante@fatec.sp.gov.br"
// }