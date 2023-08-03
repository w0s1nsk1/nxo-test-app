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
            {{ this.item.firstName }} {{ this.item.lastName }}
        </v-card-title>

        <v-card-text>
            <v-list class="data-list">
                <v-list-item>Maiden name: {{ this.item.maidenName }}</v-list-item>
                <v-list-item>Age: {{ this.item.age }}</v-list-item>
                <v-list-item>Gender: {{ this.item.gender }}</v-list-item>
                <v-list-item>Email: {{ this.item.email }}</v-list-item>
                <v-list-item>Phone Number: {{ this.item.phone }}</v-list-item>
                <v-list-item>Username: {{ this.item.username }}</v-list-item>
                <v-list-item>Birth date: {{ this.item.birthDate }}</v-list-item>
                <v-list-item>Address: {{ this.item.address.address }}</v-list-item>
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
                this.$store.dispatch('getClient', this.id);
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
    .data-list {
        font-size: 20px;
    }
</style>
