
let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listElement1 = document.querySelector("#app1 ul1") as HTMLUListElement;
let inputElement1 = document.querySelector("#app1 select") as HTMLSelectElement;
let buttonElement1 = document.querySelector("#app1 button") as HTMLElement;

let listElement2 = document.querySelector("#app2 ul2") as HTMLUListElement;
let inputElement2 = document.querySelector("#app2 select") as HTMLSelectElement;
let buttonElement2 = document.querySelector("#app2 button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagem_nome");
let nome: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

let listaSalva1: (any | null) = localStorage.getItem("@listagem_curso");
let curso: any[] = listaSalva1 !== null && JSON.parse(listaSalva1) || [];

let listaSalva2: (any | null) = localStorage.getItem("@listagem_area");
let area: any[] = listaSalva2 !== null && JSON.parse(listaSalva2) || [];



function listarNome(){
  listElement.innerHTML = "";

  nome.map( item => {
    let todoElement = document.createElement("li");
    let nomeText = document.createTextNode(item);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let posicao = nome.indexOf(item);

    linkElement.setAttribute("onclick", `deletarNome(${posicao})`)
    linkElement.setAttribute("style", "margin-left: 10px")
    
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(nomeText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);

  })

} 

function listarCurso(){
  listElement1.innerHTML = "";

  curso.map( item1 => {
    let todoElement = document.createElement("li");
    let cursoText = document.createTextNode(item1);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let posicao = curso.indexOf(item1);

    linkElement.setAttribute("onclick", `deletarCurso(${posicao})`)
    linkElement.setAttribute("style", "margin-left: 10px")
    
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(cursoText);
    todoElement.appendChild(linkElement);
    listElement1.appendChild(todoElement);

  })

} 


function listarArea(){
  listElement2.innerHTML = "";

  area.map( item2 => {
    let todoElement = document.createElement("li");
    let areaText = document.createTextNode(item2);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let posicao = area.indexOf(item2);

    linkElement.setAttribute("onclick", `deletarArea(${posicao})`)
    linkElement.setAttribute("style", "margin-left: 10px")
    
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(areaText);
    todoElement.appendChild(linkElement);
    listElement2.appendChild(todoElement);

  })

} 

listarNome();
listarCurso();
listarArea();


function adicionarNome() {
  if(inputElement.value === ""){
    alert("Digite algum nome!")
    return false;
  }else{

    let nomeDigitado: string = inputElement.value;
    nome.push(nomeDigitado);
    
    inputElement.value = "";
    listarNome();
    salvarDados();

  }
}

function adicionarCurso() {
  if(inputElement1.value === ""){
    alert("Escolha algum curso!")
    return false;
  }else{

    let cursoDigitado: any = inputElement1.value;
    curso.push(cursoDigitado);

    
    inputElement1.value = "";
    listarCurso();
   

  }
}


function adicionarArea() {
  if(inputElement2.value === ""){
    alert("Escolha alguma area!")
    return false;
  }else{
  
    let areaDigitada: string = inputElement2.value;
    area.push(areaDigitada);
    
    inputElement2.value = "";
    listarArea();
    salvarDados();

  }
}



buttonElement.onclick = adicionarNome
buttonElement1.onclick = adicionarCurso
buttonElement2.onclick = adicionarArea

function deletarNome(posicao: number){
  nome.splice(posicao, 1);

  listarNome();
  salvarDados();

}

function deletarCurso(posicao: number){
  curso.splice(posicao, 1);

  listarCurso();
  salvarDados();

}

function deletarArea(posicao: number){
  area.splice(posicao, 1);

  listarArea();
  salvarDados();

}




function salvarDados(){
  localStorage.setItem("@listagem_nome", JSON.stringify(nome))
}

function salvarDados1(){
  localStorage.setItem("@listagem_curso", JSON.stringify(curso))
}

function salvarDados2(){
  localStorage.setItem("@listagem_area", JSON.stringify(area))
}
