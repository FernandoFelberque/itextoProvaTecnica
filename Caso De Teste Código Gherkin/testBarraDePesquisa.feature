            #language: pt

            Funcionalidade: Barra de pesquisa da plataforma
            Como usuário da devAll
            Quero fazer buscas na plataforma
            Para visualizar notícias

            Contexto:
            Dado que eu acesse a página devAll Home

            Esquema do Cenário: Busca por notícias na plataforma
            Quando eu digitar o <valorBusca>
            Então deve exibir as <noticias>

            Exemplos:
            | valorBusca                                  | noticias                            |
            # Exemplo de busca válida
            | "CUIDADO ao CRIAR IMAGENS com IA!!"         | "CUIDADO ao CRIAR IMAGENS com IA!!" |
            # Exemplo de busca inválida
            | "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" | ""                                  |