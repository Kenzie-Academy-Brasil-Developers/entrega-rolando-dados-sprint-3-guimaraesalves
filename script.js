

  document.getElementById("demo").onclick = function() {gerar()};

  function gerar() {
      
    let count = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0
  }
  
  let sum2 = 0
  let sum3 = 0
  let sum4 = 0
  let sum5 = 0
  let sum6 = 0
  let sum7 = 0
  let sum8 = 0
  let sum9 = 0
  let sum10 = 0
  let sum11 = 0
  let sum12 = 0
  
  arr = []
  
  for (let i = 0; i < 1000; i++){
      
      let resp = Math.floor(6* Math.random() + 1);       
      let resp2 = Math.floor(6* Math.random() + 1);  

       somaDados = resp + resp2;

      if (somaDados === 2){
          sum2 += 1
          count[2] = sum2;
      }
      if (somaDados === 3){
          sum3 += 1
          count[3] = sum3;
      }
      if (somaDados === 4){
          sum4 += 1
          count[4] = sum4;
      }
      if (somaDados === 5){
          sum5 += 1
          count[5] = sum5;
      }
      if (somaDados === 6){
          sum6 += 1
          count[6] = sum6;
      }
      if (somaDados === 7){
          sum7 += 1
          count[7] = sum7;
      }
      if (somaDados === 8){
          sum8 += 1
          count[8] = sum8;
      }
      if (somaDados === 9){
          sum9 += 1
          count[9] = sum9;
      }
      if (somaDados === 10){
          sum10 += 1
          count[10] = sum10;
      }
      if (somaDados === 11){
          sum11 += 1
          count[11] = sum11;
      }
      if (somaDados === 12){
          sum12 += 1
          count[12] = sum12;
      }
      
      arr.push(somaDados) 
      
    }
    let exibe = JSON.stringify(count);

    
    
    
    const resposta = document.getElementById('d1');
    let newElement = document.createElement("p");
    newElement.innerText = exibe;

   
    for(let i = 2; i <= 11; i++){
        
        larg = count[i]
        let novo = document.createElement("div");
        novo.className ="box";
        novo.style.height = "20px";
        novo.style.width = `${larg}px`;        
        let imprime = document.getElementById("d2");
        imprime.appendChild(novo);        
    }  

    return resposta.appendChild(newElement); 

}









  

