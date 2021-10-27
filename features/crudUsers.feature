Feature: CRUD Usuários
Como usuário do sistema
Eu quero criar, remover, modificar e deletar meu cadastro no sistema

Cenário: Cadastro inicial
Dado que eu estou na página de cadastro
E não existe cadastro no sistema com "pjcs@cin.ufpe.br" no campo "e-mail"
Quando eu insiro "pjcs@cin.ufpe.br" no campo "e-mail"
E "p12345" no campo "senha"
E solicito criação de conta
Então o cadastro é efetuado com "pjcs@cin.ufpe.br" como "e-mail" e "p12345" como senha 

Cenário: Usuário já existe no sistema
Dado que eu estou na página de cadastro
E já existe cadastro no sistema com "pjcs@cin.ufpe.br" no campo "e-mail"
Quando eu insiro "pjcs@cin.ufpe.br" no campo "e-mail"
E "p12345" no campo "senha"
E solicito criação de conta
Então é exibida uma mensagem falando que já existe usuário com "pjcs@cin.ufpe.br" no campo "e-mail"

