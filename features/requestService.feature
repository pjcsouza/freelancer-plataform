
Feature: Solicitar serviço
Como um contratante
Eu quero solicitar um serviço

Cenário: Solicitar serviço 
Dado que estou na página de meus serviços
Quando eu tento cadastrar um serviço com descrição “webpage” com valor “5000”
Então eu vejo o serviço “webpage” com valor “5000” na lista dos meus serviços
