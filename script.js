function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}
function calcular() {
 
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
  
    
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
  
   
    document.getElementById("resultado").innerHTML = `
      Soma: ${soma}
      Média: ${media}
    `;
  }