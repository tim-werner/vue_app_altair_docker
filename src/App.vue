<template>
  <v-app>
    <v-content>
      <Plots/>
    </v-content>
    <app-navigation></app-navigation>
  </v-app>
</template>

<script>
import Plots from './views/Plots'
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    Plots,
    AppNavigation
  },
  data () {
    return {
      //
    }
  }
}
</script>
