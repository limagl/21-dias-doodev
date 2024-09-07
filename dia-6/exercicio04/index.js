let numero = parseInt(prompt("Escolha a tabuada que voce deseja"))

for (let contador = numero; contador <=numero + 2; contador++) {
    console.log ("Tabuada do numero:" + contador)
    for (let x = 0; x <=10; x++) {
      console.log (contador+ " x " +x+  "=" + x*contador)
  }
}   