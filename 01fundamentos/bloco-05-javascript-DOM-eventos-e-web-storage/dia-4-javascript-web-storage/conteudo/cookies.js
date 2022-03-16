//Criação básica 'chave=valor':
document.cookie = 'email=isabella@email.com';

//Com data de expiração (o padrão é que o cookie seja deletado ao fechar o navegador):
//document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//Com data de expiração e caminho:
//document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

//Armazenando cookies em variáveis:
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

//E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.
document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';
//Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'