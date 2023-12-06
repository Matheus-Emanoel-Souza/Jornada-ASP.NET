$(function() {
    $("input[name=enviar]").click(function() {
        // Declaração de variáveis de quem vê o formulário.
        let nome = $('#nome').val();
        let sobrenome = $('#sobrenome').val();
        let email = $('#email').val();
        let telefone = $('#telefone').val();
        let descricao = $('#descricao').val();
        let dia = $('#dia option:selected').val();
        let mes = $('#mes option:selected').val();
        let ano = $('#ano option:selected').val();
        let check = 0;

        // Validando os campos.
        if (nome === '') {
            nome = "\n O campo [Nome] é necessário";
            check = 1;
        } else {
            nome = "\n Nome: " + nome;
        }

        if (sobrenome === '') {
            sobrenome = "\n O campo [Sobrenome] é necessário";
            check = 1;
        } else {
            sobrenome = "\n Sobrenome: " + sobrenome;
        }

        if (email === '') {
            email = "\n O campo [email] é necessário";
            check = 1;
        } else {
            email = "\n email: " + email;
        }

        if (telefone === '') {
            telefone = "\n O campo [telefone] é necessário";
            check = 1;
        } else {
            telefone = "\n telefone: " + telefone;
        }

        if (dia === '') {
            dia = "\n O campo [dia] é necessário";
            check = 1;
        } else {
            dia = "\n Data de nascimento: " + dia+" /"+mes+" /"+ano;
        }

        if (mes === '') {
            mes = "\n O campo [mes] é necessário";
            check = 1;
        } 

        if (ano === '') {
            ano = "\n O campo [ano] é necessário";
            check = 1;
        } 

        if (descricao === '') {
            descricao = "\n O campo [descricao] é necessário";
            check = 1;
        } else {
            descricao = "\n descrição: "+descricao;
        }


        // ... (repetir para outros campos)

        if (check === 1) {
            alert(nome + sobrenome + email + telefone + dia + mes + ano + descricao);
        } else {
            alert("Cadastro realizado com sucesso \n" + nome + sobrenome + email + telefone + dia + descricao);
        }
    });

    $("input[name=reset]").click(function() {
        let campos = $('input');
        let textArea = $('textarea');
        let dia = $('#dia');
        let mes = $('#mes');
        let ano = $('#ano');
        let go = $('#enviar');
        let limpa = $('#reset');
        let valor = "";

        campos.val(valor);
        textArea.val(valor);
        dia.val('dia');
        mes.val('mes');
        ano.val('ano');
        go.val('Enviar');
        limpa.val('Limpar');
    });
});
