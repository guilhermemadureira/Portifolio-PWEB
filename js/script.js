alert("Bem vindo!!!");

function validar() {

    if (document.forms.formulario1.elements["idAssunto"].value == "" || document.forms.formulario1.elements["idAssunto"].value.length <= 3) {
        alert("Preencha campo Assunto corretamente!");
        document.forms.formulario1.elements["idNome"].focus();
        return false;
    };

    if (document.forms.formulario1.elements.idNome.value == "" || document.forms.formulario1.elements.idNome.value.length <= 9) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements["idNome"].focus();
        return false;
    };

    if (document.forms.formulario1.elements.idComentario.value == "" || document.forms.formulario1.elements.idComentario.value.length <= 10) {
        alert("É necessario preencher o campo Mensagem com mais de 20 caracteres!");
        document.getElementById("idComentario").focus();
        return false;
    };

    var assunto = document.forms.formulario1.elements["idAssunto"].value;
    var comentario = document.forms.formulario1.elements["idComentario"].value;
    var nome = document.forms.formulario1.elements["idNome"].value;

    document.location.href = "mailto:guilhermemadureira789@gmail.com?subject="
        + encodeURIComponent(assunto)
        + "&body=" + encodeURIComponent("Nome: " + nome + ", Mensagem: " + comentario);

    document.forms.formulario1.elements["idAssunto"].value = "";
    document.forms.formulario1.elements["idComentario"].value = "";
    document.forms.formulario1.elements["idNome"].value = "";

    return alert("Abrindo Caixa de entrada");
}