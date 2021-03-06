# Permissões

O sistema de permissões do AtlasJS é o responsável por gerenciar usuários e grupos de usuários para defir quem tem ou não acesso a determinados recursos.

## Configurações

Veja as configurações de permissões disponíveis no arquivo `.env`:

{<atlas_permission>}

{<atlas_auth_model>}

{<atlas_auth_group_model>}

## Definindo Permissões

Por padrão, o AtlasJS considera que todos os usuários e grupos de usuários tem acesso **negado** a todos os recursos, sendo preciso liberar caso a caso.

Para liberar (ou bloquear) um recurso, adicionamos um novo registro no [Modelo de Permissão](#access.models) contendo o nome do recurso, o id do usuário ou grupo de usuário e o status da liberação.

O nome do recurso deve ser a `url` da chamada ao backend e a liberação (`allow`) deve ser um dos três valores:

* `false` - Proibe o acesso;
* `true` - Libera o acesso;
* `null` - Proibe o acesso a menos que outro esteja liberando;

Explicando: Um usuário pode estar em um ou mais grupos, sendo assim, é possível que ele esteja liberado para acessar um recurso, mas não em um de seus grupos. Então... qual é o resultado final?

Em caso de conflito de permissão concedida ao usuário e aos grupos, a permissão ou proibição dada para o usuário terá prioridade sobre as permissões dos grupos. Ou seja, não importa se todos os grupos do usuário proíbem ele de acessar o recurso, se ele estiver diretamente liberado para acessar, poderá acessar.

Por outro lado, se o conflito estiver entre os grupos, ou seja, alguns grupos liberam e outros proíbem, o acesso será negado.

Por fim, embora a permissão `default` proíba o acesso, ela não irá sobrepor uma liberação de acesso em outro grupo. Ou seja, se temos dois grupos, um com permissão `default` (proíbe) e outro como `true` (libera), o acesso será liberado.

## Métodos de Requisições HTTP

Por padrão a URL (ou nome do recurso) será considerada para todos os [métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods), caso deseje alterar a permissão para um método em específico, adicione o método desejado ao início da URL separando-os por um pipe `|`.

Por exemplo: `POST|minha/url/`.

## URLs Dinâmicas

Eventualmente iremos querer URLs mais dinâmicas, contendo por exemplo o `id` de um determinado registro, mas não faz sentido adicionar uma nova permissão para cada id, certo?

Para resolver isso basta adicionar uma variável na parte da URL que deseja que seja dinâmica.

Por exemplo: `POST|minha/url/dinamica/(:id)` ou `POST|minha/url/dinamica(/:id)`.

Nos exemplos acima, temos uma URL dinâmica cuja ultima posição poderá ser qualquer valor.

> O nome das variáveis não importa, nomeie-as considerando apenas a legibilidade do código.