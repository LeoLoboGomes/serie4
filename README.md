Sistema Operacional utilizado: Ubuntu 20.04

Para executar a aplicação utilizar o seguinte comando:

![Imagem do comando de inicio](images/start_server.png)

Durante a execução em **http://localhost:3000/** aparecerá a seguinte tela inicial:

![Imagem da tela de inicio](images/initia_screen.png)

Para dar o upload de arquivos clique em **Escolher arquivo** e depois de escolhe-lo clique em **Enviar** logo ao lado.

![Imagem de envio de arquivo](images/send_file.png)

Se o upload for feito com sucesso aparecerá a seguinte mensagem:

![Imagem de upload feito com sucesso](images/file_uploaded.png)

Já para a parte do processamento do formulário, depois de enviar um formulário, o texto presente neste formulário é imprimido no terminal.

![Imagem de envio do formulário](images/send_form.png)

![Imagem de impressão do texto no terminal](images/print_form.png)

E por último ao apertar no botão **Alterar** a frase **Texto que ira mudar devido ao AJAX** será substituída por uma frase dentro do arquivo JSON **newtext.json**

![Imagem antes da mudança](images/before_change.png)

![Imagem depois da mudança](images/afterchange.png)

Para ver os arquivos estáticos disponíveis basta escrever seus nome na url como **http://localhost:3000/image.png**.

![Imagem do estático de exemplo](images/static_example.png)

Inicialmente os únicos arquivos estáticos disponiveis são **image.png** e **change.js**, mas todos os arquivos usados para upload ficam disponiveis como estáticos.
