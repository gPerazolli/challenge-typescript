"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Livro_1 = require("./Livro");
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
        this.proximoID = 1;
    }
    Biblioteca.prototype.adicionarLivro = function (titulo, autor, anoPublicacao) {
        var novoLivro = new Livro_1.Livro(this.proximoID++, titulo, autor, anoPublicacao);
        this.livros.push(novoLivro);
        return novoLivro;
    };
    Biblioteca.prototype.listarTodosLivros = function () {
        return this.livros;
    };
    Biblioteca.prototype.obterLivro = function (id) {
        for (var _i = 0, _a = this.livros; _i < _a.length; _i++) {
            var livro = _a[_i];
            if (livro.id === id) {
                return livro;
            }
        }
        return undefined;
    };
    Biblioteca.prototype.atualiazarLivro = function (id, titulo, autor, anoPublicacao) {
        var livro = this.obterLivro(id);
        if (livro) {
            livro.titulo = titulo;
            livro.autor = autor;
            livro.anoPublicacao = anoPublicacao;
        }
        return livro;
    };
    Biblioteca.prototype.removerLivro = function (id) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].id === id) {
                this.livros.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
