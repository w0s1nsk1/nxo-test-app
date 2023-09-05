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
                    <v-list-item @click="testError()">Error</v-list-item> <!-- DEBUG -->
                </v-list>
            </v-navigation-drawer>
            <v-layout>
                <router-view/>
            </v-layout>
            <v-dialog v-model="showAlert">
                <v-alert type="error">{{ this.errors }}</v-alert>
            </v-dialog>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        computed: {
                errors: function () {
                    return this.$store.state.errorMessage
            }
        },
        
        methods:{
            testError(){ // DEBUG
                this.$store.dispatch('raiseError', 'example error')
            },
        },
        watch:{
            showAlert(to){
                if (to==false){
                this.$store.dispatch('clearError')
                }
            },
            errors(to){
                if (to!=""){
                this.showAlert=true
                }
            }
        },
        data (){
            return {
                showAlert: false
            }
        }
    };
</script>

<style>
.v-alert{
    margin: 0 !important;
}
</style>