import { Biblioteca } from './modules/Blibioteca';

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro("livro 1", "Eu", 1925);
biblioteca.adicionarLivro("livro x", "Eu", 1625);
biblioteca.adicionarLivro("livro cds", "Eu", 1525);

biblioteca.atualiazarLivro(1, "Teste novo", "euu", 2015);
biblioteca.removerLivro(2);


console.log(biblioteca.listarTodosLivros());