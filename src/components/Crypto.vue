<template>
  <div class="hello">
    <div id="crypto-container" v-for="(value, key) in cryptos">
      <span class="left">{{ key }}</span>
      <span class="right">${{ value.USD }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Crypto',
  data: () => ({
    cryptos: [],
    errors: []
  }),

  created() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SUB,TRX,LTC,ADA,XLM&tsyms=USD&api_key=7af357bed366e9dc5afedc3c07b890655b0960616efb2632ba2c5920870e00f7')
      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
  body {
    background: #f1f1f1;
  }

  div#crypto-container {
    background: ivory;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
  }

  span.left {
    font-weight: bold;
  }

  span.right {
    float: right;
  }
</style>
