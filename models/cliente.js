module.exports = class Cliente{
  constructor(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
  }

  validarCPF(){
    let strCPF = this.cpf
    if(!strCPF) return false;
  
    strCPF = strCPF.toString();
    strCPF = strCPF.replace(/\.|-/g, "")
    var soma;
    var resto;
    soma = 0;
    if (strCPF.length != 11) return false;
    if (strCPF == "00000000000") return false;
    if (strCPF == "11111111111") return false;
    if (strCPF == "22222222222") return false;
    if (strCPF == "33333333333") return false;
    if (strCPF == "44444444444") return false;
    if (strCPF == "55555555555") return false;
    if (strCPF == "66666666666") return false;
    if (strCPF == "77777777777") return false;
    if (strCPF == "88888888888") return false;
    if (strCPF == "99999999999") return false;
  
    for (let i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
  
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
  
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }
}