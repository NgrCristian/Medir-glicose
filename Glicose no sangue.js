let n1 = Number (prompt( Digite valor da quantidade de glicose no sangue: '))


if(n1<=100){
  alert('Classificação :Normal')

}
else if(n1 >100 && n1<=140){
  alert('Classificação: Elevado')
}
else{
  alert('Classificação:Diabetico')
}
