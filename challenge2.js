let options = ['Piedra', 'Papel', 'Tijeras'];

let user = options[Math.floor(Math.random() * 3)];
let server = options[Math.floor(Math.random() * 3)];

console.log(user)
console.log(server)

switch(true){
  case (user === server):
    console.log('Has empatado');
    break;
  case ((user === options[0] && server === options[1]) || (user === options[1] && server === options[2]) || (user === options[2] && server === options[0])) :
    console.log(`Has perdido contra ${server}`)
    break;
  default:
    console.log(`Has vencido a ${server}`)
}