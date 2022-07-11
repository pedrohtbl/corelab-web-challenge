No Front-end eu utilizei o react com o typescript para criar a pagina, fiz duas paginas uma de login apenas com um botão, mas que faz um requisição na minha api onde realmente é posssivel criar um usuario e fazer login, mas para essa pagina eu fixei sempre o msm usuario, tomei a liberdade de fazer algumas mudanças que eu achei que fariam mais sentindo, como por exemplo os favoritos são obtidos atraves de um endpoit na api onde a tabela de usuarios tem uma realção com a tabela de veiculos e cada usuario vai ter seus favoritos, outra alteração que eu fiz foi que apenas o usuario que adicionou aquele veiculo, pode edita-lo ou apaga-lo, se ele não criou os botões nem aparecem para ele, mas ainda é possivel favoritar veiculos de outro usuarios.
a listagem de veiculos é feita atraves de dois endpoints diferentes, um pra listar os favoritos do usuario logado e renderizar na tela com auxilio do useEffect e outro pra listar todos os veiculos cadastrados na api. Caso não tenha nenhum veiculo aparece uma mensagem falando que não tem nada.
os filtros estão funcionando normalmente, o do input verifica qualquer dado do carro que for digitado e o busca na base de dados, ja o do modal eu utilizei selects e é necessario passar todos os dados de um determinado veiculo para que ele seja encontrado, caso contrario ele não encontra o veiculo e mostra uma notificação na tela com o erro.
a seta no canto da tela "limpa" os filtros e volta para a tela incial do dashboard com todos os veiculos

Durante o projeto eu utilizei as seguitnes bibliotecas
-styled-components
-react-hook-form
-yup
-Material ui
-react-route-dom
-react-icons
-react-tostify
-axios

além do context api mas poderia usar o redux tb sem  problemas.
