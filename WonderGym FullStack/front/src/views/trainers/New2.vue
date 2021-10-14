<template>
  <div class="new-trainer">
    <h1>{{ isNew ? "New" : "Edit" }} Trainer</h1>
    <div v-if="!changeImage">
      <v-img v-if="!isNew" :src="imageUrl"></v-img>
      <v-file-input
        v-if="isNew"
        accept="image/*"
        label="Image"
        v-model="image"
        :rules="imageRules"
      ></v-file-input>
      <v-text-field
        label="Code"
        v-model="code"
        prepend-icon="mdi-code-tags"
      ></v-text-field>
      <v-text-field
        label="Name"
        v-model="name"
        prepend-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="Age"
        v-model="age"
        prepend-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="Profile"
        v-model="profile"
        prepend-icon="mdi-currency-usd"
      ></v-text-field>
      <v-text-field
        label="Experience"
        v-model="experience"
        prepend-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
        prepend-icon="mdi-account"
      ></v-text-field>
      
      <div class="botones">
        <v-btn color="primary" @click="guardarEntrenador()" v-if="isNew"
          >Guardar</v-btn
        >
        <v-btn color="warning" @click="changeImage = true" v-if="!isNew"
          >Actualizar imagen</v-btn
        >
        <v-btn color="success" @click="actualizarEntrenador()" v-if="!isNew"
          >Actualizar</v-btn
        >
      </div>
    </div>
    <div v-if="changeImage">
      <v-file-input
        accept="image/*"
        label="Image"
        v-model="image"
        :rules="imageRules"
      ></v-file-input>
      <div class="botones">
        <v-btn color="success" @click="cambiarImagen()"
          >Actualizar imagen</v-btn
        >
      </div>
    </div>

    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="closeConfirmation()">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {
  createTrainer,
  createTrainerWithImage,
  getTrainer,
  updateTrainer,
  updateTrainerImage,
} from "../../controllers/Trainer.controller";

export default {
  data() {
    return {
      image: null,
      code: 0,
      name: "",
      price: 0,
      categories: [],
      imageUrl: "",
      snackbar: false,
      snackbarText: "",
      isNew: true,
      imageRules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      changeImage: false,
    };
  },
  created() {
    const code = this.$route.params.code;
    if (code != undefined) {
      getTrainer(code)
        .then((response) => {
          const trainer = response.data;
          this.code = trainer.code;
          this.name = trainer.name;
          this.age = trainer.age;
          this.profile = trainer.profile;
          this.experience = trainer.experience;
          this.email = trainer.email;
          this.imageUrl = trainer.imageUrl;

          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardarEntrenador() {
      let request = null;
      if (this.image == null || this.image == undefined) {
        const trainer = {
          code: this.code,
          name: this.name,
          age:  this.age,
          profile: this.profile,
          experience: this.experience,
          email: this.email,
        };

        request = createTrainer(trainer);
      } else {
        const trainer = new FormData();
        trainer.append("code", this.code);
        trainer.append("name", this.name);
        trainer.append("age", this.age);
        trainer.append("profile", this.profile);
        trainer.append("experience", this.experience);
        trainer.append("email", this.email);
        trainer.append("image", this.image);

        request = createTrainerWithImage(trainer);
      }

      request
        .then(() => {
          this.openSuccessDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    actualizarEntrenador() {
      if (
        this.code == undefined ||
        this.code == "" ||
        this.name == undefined ||
        this.name == "" ||
        this.age == undefined ||
        this.age == ""  ||
        this.profile == undefined ||
        this.profile == ""  ||
        this.experience == undefined ||
        this.experience == ""  ||
        this.email == undefined ||
        this.email == ""  
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      }

      const trainer = {
        code: this.code,
        name: this.name,
        age: this.age,
        profile: this.profile,
        experience: this.experience,
        email: this.email,
      };
      updateTrainer(this.code, trainer)
        .then(() => {
          this.changeImage = false;
          this.openSuccessDialog("Se ha actualizado el entrenador: " + this.code);
        })
        .catch(() => this.openErrorDialog("Error al actualizar el entrenador"));
    },
    cambiarImagen() {
      if (this.image == undefined || this.image == "") {
        this.openErrorDialog("La imagen es un campo obligatorio");
        return;
      }

      const data = new FormData();
      data.append("image", this.image);
      updateTrainerImage(this.code, data)
        .then(() =>
          this.openSuccessDialog("Se ha actualizado el entrenador: " + this.code)
        )
        .catch(() => this.openErrorDialog("Error al actualizar el entrenador"));
    },
    removeChip(item) {
      this.categories.splice(this.categories.indexOf(item), 1);
      this.categories = [...this.categories];
    },
    openSuccessDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    openErrorDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    closeConfirmation() {
      this.snackbar = false;
      this.$router.push("/trainers");
    },
  },
};
</script>

<style scope>
.botones {
  display: flex;
  justify-content: right;
}
</style>