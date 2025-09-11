<script setup>
import { reactive } from "vue";

  const nome = 'Felipe';
  const meuObj ={
    nome:'Felipe',
    filmeFav: 'Pulp Fiction'
  }

  function dizOi(nome) {
    return `${nome} diz oi!`;
  }

  const endDaImg = 'https://i.pinimg.com/736x/07/53/02/0753021842af5ecb8748282d33ffdffc.jpg'
  const imgSuperman = 'https://i.pinimg.com/736x/04/20/f8/0420f8039aee7c472dd42050c74411aa.jpg'

  const desabilita = true;
  const gostaDoBatman = false;
  const gostadoSuperman = false;

  // let contador = 0;

  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['Felipe', 'Sonica', 'Cleide', 'Chiclete'],
    nomeATranferir: '',

  });
  function incrementar(){
    estado.contador++;
  }
  function decrementar(){
    estado.contador--;
  }
  
  function alteraEmail(evento){
    estado.email = evento.target.value;
  }

  function mostraSaldoFututo(){
    const {saldo,transferindo} = estado;
    return saldo - transferindo;
  }

  function validaTransferencia(){
    const {saldo,transferindo} = estado;
    return saldo >= transferindo;
  }

  function transfereNome(evento){
    estado.nomeATranferir = evento.target.value;
  }

  function cadastraNome(){
    estado.nomes.push(estado.nomeATranferir)
  }
</script>

<template>
  <h1>{{ nome }}</h1>
  <h1>{{ meuObj.filmeFav }}</h1>
  <h1>{{ dizOi("Paula") }}</h1>

  <!-- Renderização condicional -->
  <img v-if="gostaDoBatman" v-bind:src='endDaImg' alt=''/>
  <img v-else-if="gostadoSuperman" v-bind:src='imgSuperman' alt=''/>
  <h2 v-else>Não curte herois da DC</h2>

  <button :disabled="desabilita">Veja o Botao</button>

  <br/>
  <hr/>
  {{estado.email}}
  <input type="email" @keyup="alteraEmail"> <!-- @keyup intantaneo/ @change só qnd sai do campo-->

  {{ estado.contador }}

  <button @click='incrementar' type="button">+</button>
  <button @click='decrementar' type="button">-</button>

  <br/>
  <hr/>
    <!-- Estilo condicionais -->
  Saldo: {{estado.saldo}} <br/>
  Transferindo: {{estado.transferindo}}<br/>
  Saldo após transferencia: {{mostraSaldoFututo()}} <br/>
  <input :class="{invalido: !validaTransferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir" />
  <button v-if="validaTransferencia()" type="button">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

<br/>
<hr/>

<ul>
  <li v-for="nome in estado.nomes">
    {{nome}}
  </li>
</ul>
<input @keyup="transfereNome" type="text" placeholder="Digite um nome" />
<button @click="cadastraNome" type="button">Confirmar</button>
</template>

<style scoped>
  img{
    max-width: 200px;
  }
  .invalido{
    outline-color: red;
    border-color: red;
  }
</style>
