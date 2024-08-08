export class Livro{
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number; 

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
}