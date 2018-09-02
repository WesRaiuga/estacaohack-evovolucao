let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");
let link3 = document.querySelector("#link3");

let div1 = document.querySelector("#content-1");
let div2 = document.querySelector("#content-2");
let div3 = document.querySelector("#content-3");

let btEnviar = document.querySelector("#f-enviar");
let itNome = document.querySelector("#f-nome");

link1.addEventListener('click',function(){
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
});

link2.addEventListener('click',function(){
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
});

link3.addEventListener('click',function(){
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
});

btEnviar.addEventListener('click',function(){
    alert("Obrigado, " + itNome.value + ", por enviar a mensagem!");
});
