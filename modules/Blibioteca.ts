import { Livro } from "./Livro";

export class Biblioteca{
    livros: Livro[] = [];
    private proximoID: number = 1;

    adicionarLivro(titulo: string, autor: string, anoPublicacao: number): Livro{
        const novoLivro = new Livro(this.proximoID++, titulo, autor, anoPublicacao);
        this.livros.push(novoLivro);
        return novoLivro;
    }

    listarTodosLivros(): Livro[]{
        return this.livros;
    }

    obterLivro(id: number): Livro | undefined{
        for (let livro of this.livros){
            if(livro.id === id){
                return livro;
            }
        }
        return undefined;
    }

    atualiazarLivro(id: number, titulo: string, autor: string, anoPublicacao: number): Livro | undefined{
        const livro = this.obterLivro(id);
        if(livro){
            livro.titulo = titulo;
            livro.autor = autor;
            livro.anoPublicacao = anoPublicacao;
        }
        return livro;
    }

    removerLivro(id: number) : boolean {
        for( let i = 0; i < this.livros.length; i++){
            if(this.livros[i].id === id){
                this.livros.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}