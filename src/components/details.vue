<template>
    <v-card>
        <v-progress-linear
                :active="this.loading"
                :indeterminate="true"
                class="ma-0"
                height="2"
                style="top: 0; position: absolute;"
        ></v-progress-linear>

        <v-card-title>
            {{ this.item.name }}
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item>
                    e-mail: {{ this.item.email }}
                </v-list-item>
                <v-list-item>
                    job: {{ this.item.job }}
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    export default {
        name: 'EmployeesDetails',
        props: {
            id: Number,
        },
        created() {
            this.getClient();
        },
        computed: {
            item: function () {
                return this.$store.state.current;
            },
            loading: function () {
                return this.$store.state.loadingItem;
            },
        },
        methods: {
            getClient() {
                this.$store.dispatch('getClient', {id: this.id});
            },
        },
        watch: {
            id: function (newValue, oldValue) {
                if (newValue != oldValue) {
                    this.getClient();
                }
            },
        },
    };
</script>

<style scoped lang="scss">

</style>
