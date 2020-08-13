<template>
    <v-card>
        <v-progress-linear
                :active="loading"
                :indeterminate="true"
                class="ma-0"
                height="2"
                style="top: 0; position: absolute;"
        ></v-progress-linear>

        <v-card-title>

        </v-card-title>

        <v-card-text>

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
