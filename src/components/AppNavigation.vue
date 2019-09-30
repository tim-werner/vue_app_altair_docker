<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Plot Data</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="grey lighten-4">
             <v-list>
                <template>
                    <v-list-tile  v-for="link in links"
                            :key="link.text"
                            router :to="link.route">
                        <v-list-tile-action>
                            <v-icon >{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                             <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            links: [
                { route: '/dashboard',
                text: 'Dashboard',
                icon: 'dashboard'}                
            ]
        }
    }
};
</script>

<style>
</style>