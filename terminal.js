/* var name = window.prompt(`Digite seu Nome: `);
        var locate = window.Number(prompt(`SR_A: ${name}, Digite seu endereço e Número da Residencia`));
        window.alert("https://wa.me/5511957580025?text=Boa%20noite%20meu%20nome%20é%20"+name);*/

        let a1 = window.document.querySelector("header#cabeçalho-001");
        var name = window.prompt(`Digite seu Nome:`);
        var address = prompt(`Digite seu endereço: `);
        a1.innerHTML = `<a href="https://wa.me/5511957580025?text=Boa%20noite%20meu%20nome%20é%20${name}">
        Proxima etapa</a>`;