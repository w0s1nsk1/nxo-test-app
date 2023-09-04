<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-card>
            <v-data-table
                    :headers="headers"
                    :items="clients"
                    :loading="loading"
                    :search="search"
            >
                <template v-slot:top>
                    <v-container class="d-sm-flex ma-0 pa-4" flat color="white">

                        <v-toolbar-title class="text-center text-sm-left mt-1 mb-5 mb-sm-auto">
                            Lista klientów
                        </v-toolbar-title>
                        <v-spacer></v-spacer>

                        <v-text-field
                                append-icon="search"
                                label="Szukaj"
                                single-line
                                hide-details
                                v-model="search"
                                class="pt-sm-0 mb-5 mb-sm-0"
                        ></v-text-field>

                    </v-container>

                    <v-divider></v-divider>
                </template>

                <template v-slot:item.name="{item}">
                    <a v-on:click="openDetails(item.id)">{{ item.name }}</a>
                </template>

            </v-data-table>
        </v-card>

        <v-dialog v-model="detailsDialog" max-width="700px">
            <employees-details :id="id"></employees-details>
        </v-dialog>
    </v-container>
</template>

<script lang="js">
    import clientsListHeaders from '../config/data-settings';
    import EmployeesDetails from './details.vue';

    export default {
        name: 'clients-list',
        components: {
            EmployeesDetails,
        },
        created() {
            this.$store.dispatch('fetchClients');
        },
        data() {
            return {
                id: 0,
                formDialog: false,
                detailsDialog: false,
                search: '',
                headers: clientsListHeaders,
            }
        },
        methods: {
            openDetails(id) {
                this.detailsDialog = true;
                this.id = id-1;
            }
        },
        computed: {
            clients: function () {
                return this.$store.state.data;
            },
            loading: function () {
                return this.$store.state.loading;
            }
        }
    };
</script>
