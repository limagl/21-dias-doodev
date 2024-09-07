let num =  parseInt ((prompt("Digite o numero 1")))
let Num2= parseInt ((prompt("Digite o numero 2")))
let conta =  parseInt(prompt("escolha a soma que deseja fazer, \n1 = +; \n2 = -; \n3 = *; \n4 = /"))


switch(conta){
   case 1:
       console.log (Num + "+" + Num2 + "=" + (Num + Num2))
       break;

   case 2:
      console.log (Num + "-" + Num2 + "=" + (Num - Num2))
      break;

   case 3: 
      console.log (Num + "*" + Num2 + "=" + (Num * Num2))
   
   default:
      console.log (Num + "/" + Num2 + "=" + (Num / Num2))
}

   
   













