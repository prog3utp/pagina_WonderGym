<template>
  <div class="trainers">
    <h1>Trainer List</h1>
    <v-btn color="primary" to="/trainers/new">New trainer</v-btn>
    <v-container>
      <v-row>
        <v-col
          v-for="trainer in trainers"
          :key="trainer.code"
          md="4"
          sm="6"
          cols="12"
        >
          <TrainerCard :item="trainer"></TrainerCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAllTrainers } from "../../controllers/Trainer.controller";
import TrainerCard from "../../components/TrainerCard.vue";

export default {
  components: {
    TrainerCard,
  },
  data() {
    return {
      trainers: [],
    };
  },
  created() {
    getAllTrainers()
      .then((response) => {
          this.trainers = response.data;
      })
      .catch((err) => console.error(err.response.data.message));
  },
};
</script>

<style>
</style>