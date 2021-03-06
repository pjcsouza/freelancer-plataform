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

Cenário: senha inválida
Dado que eu estou na página de cadastro
E não existe cadastro no sistema com "pjcs@cin.ufpe.br" no campo "e-mail"
Quando eu insiro "pjcs@cin.ufpe.br" no campo "e-mail"
E "123" no campo "senha"
E solicito criação de conta
Então é exibida uma mensagem falando que a senha é inválida

Cenário: Modificar email
Dado que eu estou na página de perfil
E não existe cadastro no sistema com "pjcs2@cin.ufpe.br" no campo "e-mail"
Quando eu solicito edição no meu perfil
E insiro o novo "e-mail" como "pjcs2@cin.ufpe.br"
E solicito a edição de conta
Então é exibida uma mensagem de sucesso na edição
E volta para a tela de perfil

Cenário: Modificar senha
Dado que eu estou na página de perfil
Quando eu solicito edição no meu perfil
E insiro a nova "senha" como "p54321"
E solicito a edição de conta
Então é exibida uma mensagem de sucesso na edição
E volta para a tela de perfil

Cenário: Modificar email para email inválido
Dado que eu estou na página de perfil
E existe cadastro no sistema com "pjcs2@cin.ufpe.br" no campo "e-mail"
Quando eu solicito edição no meu perfil
E insiro o novo "e-mail" como "pjcs2@cin.ufpe.br"
E solicito a edição de conta
Então é exibida uma mensagem de erro na edição mostrando que já existe conta com o email "pjcs2@cin.ufpe.br"

Cenário: Modificar senha para senha inválida
Dado que eu estou na página de perfil
Quando eu solicito edição no meu perfil
E insiro a nova "senha" como "p543"
E solicito a edição de conta
Então é exibida uma mensagem de erro na edição por senha inválida

Cenário: Deletar conta
Dado que eu estou na página de perfil
Quando eu solicito apagar no meu perfil
E insiro a nova "senha" como "p543"
E solicito a edição de conta
Então é exibida uma mensagem de erro na edição por senha inválida


