## Estratégias de autocomplete 
 1. Autocomplete básico: Pesquisa a cada vez que o usuário escreve algo no input, aguardando um determinado intervalo de tempo após a última letra digitada; A quantidade de opções disponiveís é limitada pelo tamanho da página da API; 

 2. Parcialmente local: Após realizar a primeira consulta a API, se o usuário continuar digitando a palavra, tenta encontrar registros na lista salva em memória, se não encontra requisita a API para encontrar mais registros.

 3. Autcomplete básico com botão "Mostrar mais";