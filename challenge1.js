let option1 = 'Piedra';
let option2 = 'Papel';
let option3 = 'Tijeras';

function play(user, server) {
  if(user != server) {
    if((user === option1 && server === option2) || (user === option2 && server === option3) || (user === option3 && server === option1)){
      console.log(`Has perdido contra ${server}`)
    } else {
      console.log(`Has vencido a ${server}`)
    }
  } else {
    console.log('Has empatado')
  }
}
