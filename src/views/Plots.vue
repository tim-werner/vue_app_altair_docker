<template>
<div class="dashboard">
  <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md12 lg12>
          <v-btn @click.native="reloadImage('#vega-box'); ">Reload</v-btn>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
          <v-card id="vega-box"></v-card>
        </v-flex>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import {default as vegaEmbed} from 'vega-embed'

export default {
  methods: {
    reloadImage (args) {
      fetch('/vega-example').then(response => {
        response.json().then(spec => {
          vegaEmbed(args, spec, {actions: false})
        })
      })
    }
  }
}
</script>