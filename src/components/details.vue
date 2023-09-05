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
            <v-list-item class="details" v-for="(value, prop, index) in this.item" :key="index">
                <v-list v-if="prop =='address'||prop=='company'">
                    <span class="bold">{{ prop }}:</span>
                    <v-list-item v-for="(v,p,i) in value" :key="i">
                        <span class="bold">{{ p }}:&nbsp;</span> {{ p=='geo'? v.lat + ', ' + v.lng : v }}
                    </v-list-item>
                </v-list>
                    <span v-else>
                        <span class="bold">{{ prop }}:&nbsp;</span>{{ value }}
                    </span>
            </v-list-item>
            <v-list-item @click="throwError('CLIENT_DETAILS_FAIL')">Error with hide</v-list-item> <!-- DEBUG -->
            <v-list-item @click="throwError('Error Message')">Normal error</v-list-item> <!-- DEBUG -->
            </v-list>

        </v-card-text>
    </v-card>
</template>

<script>

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
                this.$store.dispatch('getClient', {id: this.id})
            },
            throwError(msg) {
                this.$store.dispatch('raiseError', msg)
            }
        },
        watch: {
            id: function (newValue, oldValue) {
                if (newValue != oldValue) {
                    this.getClient();
                }
            }
        },
    };
</script>

<style scoped lang="scss">
.bold{
    font-weight: bolder;
}
.details:nth-last-child(n+2){
    border-bottom: 1px solid black;
}

</style>
