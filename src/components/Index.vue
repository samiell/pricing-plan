<template>
  <v-container>
    <v-row class="text-center">
      <v-col md="6" offset-md="3" class="brown--text">
          <h1>
            <v-icon color="brown  darken-2" large>mdi-coffee</v-icon> 
            Pay for Coffee Plan
          </h1>
      </v-col>
    </v-row>
    <v-row class="mx-auto mt-5">
      <v-col class="mx-auto mt-md-12" md="4">
        <v-hover
          v-slot:default="{ hover }">
          <v-card shaped :elevation="hover? 12: 3">
            <v-card-text class="mt-md-12 title text-center">
              Cream
              <v-divider></v-divider>
              Sugar
              <v-divider></v-divider>
              Milk
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                dark color="brown" 
                @click="subscribePlan('bronze')"
                v-if="!isSubscribed('bronze')">
                Start Plan
              </v-btn>
              <v-btn x-large color="green darken-2" dark raised v-else>Current Plan</v-btn>
            </v-card-actions>
            <v-img
              class="white--text align-start justify-end"
              height="160px" gradient="to left, rgba(0,0,0,0.5), rgba(1,1,1,0.4)"
              src="@/assets/coffee-bronze.jpg"
            >
              <v-card-title class="justify-center">
                Bronze Plan
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="mx-auto mt-md-12" md="4">
        <v-hover
          v-slot:default="{ hover }">
          <v-card shaped :elevation="hover? 12: 3" class="mt-md-4">
            <v-card-text class="title text-center">
              Cream
              <v-divider></v-divider>
              Sugar
              <v-divider></v-divider>
              Milk
              <v-divider></v-divider>
              Vanilla
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                dark color="brown darken-2" 
                @click="subscribePlan('silver')"
                v-if="!isSubscribed('silver')">
                Start Plan
              </v-btn>
              <v-btn x-large color="green darken-2" dark raised v-else>Current Plan</v-btn>
            </v-card-actions>
            <v-img
              class="white--text align-start justify-end"
              height="160px" gradient="to left, rgba(0,0,0,0.5), rgba(1,1,1,0.4)"
              src="@/assets/coffee-silver.jpg"
            >
              <v-card-title class="justify-center">
                Silver Plan
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="mx-auto" md="4">
        <v-hover
          v-slot:default="{ hover }">
          <v-card shaped :elevation="hover? 12: 3">
            <v-card-text class="title text-center">
              Cream
              <v-divider></v-divider>
              Sugar
              <v-divider></v-divider>
              Milk
              <v-divider></v-divider>
              Vanilla
              <v-divider></v-divider>
              Essence
              <v-divider></v-divider>
              Assorted Rare Spices
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                dark color="brown darken-4" 
                @click="subscribePlan('gold')"
                v-if="!isSubscribed('gold')">
                  Start Plan
              </v-btn>
              <v-btn x-large color="green darken-2" dark raised v-else>Current Plan</v-btn>
            </v-card-actions>
            <v-img
              class="white--text align-start"
              height="160px" gradient="to left, rgba(0,0,0,0.5), rgba(1,1,1,0.4)"
              src="@/assets/coffee-gold.jpg" 
            >
              <v-card-title class="justify-center">
                Gold Plan
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-overlay 
      class="mx-auto" :value="loading" 
      opacity="0.9" :absolute="loading"
      z-index="999"
    >
      <app-alert 
        light
        :loading= "loading"
        :color="alert.color"
        :text="alert.message"
        :icon="alert.icon"
      ></app-alert>
    </v-overlay>
    <br v-for="n in 4" :key="n">
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, MapActions, mapActions } from "vuex"
import AppAlert from './Alert'
  export default {
    name: 'Home',
    components: {
      AppAlert
    },
    data() {
      return {
        plans: [
          {
            name: 'bronze',
            isSubscribed: false
          },
          {
            name: 'silver',
            isSubscribed: false
          },
          {
            name: 'gold',
            isSubscribed: false
          }
        ]
      }
    },
    computed: {
      ...mapGetters('Alert', ['alert' ,'loading']),
    },
    methods: {
      ...mapMutations('Alert', ['setLoading', 'setAlert']),
      ...mapActions('Alert', ['clearLoading']),
      findPlanIndex(plan) {
        return this.plans.findIndex(
          p => p.name === plan
        )
      },
      isSubscribed(plan) {
        const planIndex = this.findPlanIndex(plan)
        if (planIndex !== -1)
        return this.plans[planIndex].isSubscribed
      },
      async subscribePlan(plan) {
        const planIndex = this.findPlanIndex(plan)
        const alert = {}
        if(planIndex !== -1) {
          this.plans.forEach((p, i) => {
            if(i === planIndex) {
              this.plans[i].isSubscribed = true
            } else {
              this.plans[i].isSubscribed = false
            }
          })
          alert.message = `Congratulations! You have subscribed to 
                            the ${plan.toUpperCase()} Package.`
          alert.icon = `mdi-check-circle`
          alert.color = "green darken-2"
          this.setAlert(alert)
          this.setLoading(true)
          this.clearLoading()
        }
      }
    }
  }
</script>

