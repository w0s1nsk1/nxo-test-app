<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">

            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    disabled
                    text
            >
                <span class="mr-2">Wyloguj</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-navigation-drawer app>
                <v-app-bar>
                    <b>EXAM APP</b>
                </v-app-bar>
                <v-list nav>
                    <v-list-item link :to="{ name: 'ClientsList' }">
                        <v-list-title>Clients List</v-list-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-layout>
                <router-view/>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
    };
</script>
