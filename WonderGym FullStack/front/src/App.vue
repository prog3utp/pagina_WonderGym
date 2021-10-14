<template>
  <v-app>
    
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> {{ title }} </v-list-item-title>
          <v-list-item-subtitle> {{ username }} </v-list-item-subtitle>
          <v-list-item-subtitle> {{ role }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    
      <v-divider></v-divider>
    
      <Menu></Menu>
    </v-navigation-drawer>
    
    <v-app-bar color="white" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><img src="./assets/logo.png" height="50"/></v-toolbar-title>

      <v-spacer>
        
      </v-spacer>

      <account-button @open-login="showLogin = true"></account-button>
    </v-app-bar>
  
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    
      
    

    <v-dialog v-model="showLogin" persistent max-width="400">
      <Login @login-success="showLogin = false"></Login>
    </v-dialog>
    <Footergym></Footergym>
  </v-app>
</template>

<script>
import AccountButton from "./components/AccountButton.vue";
import Login from "./components/Login.vue";
import Menu from "./components/Menu.vue";
import Footergym from "./components/Footergym.vue";


export default {
  components: {
    Menu,
    AccountButton,
    Login,
    
    Footergym,
  },
  data: () => ({
    showLogin: false,
    drawer: true,
    title: "WonderGym",
     
  }),
  computed: {
    username: () => sessionStorage.getItem("username"),
    role: () => sessionStorage.getItem("role"),
  },
};
</script>

<style>

.v-application .white{
  background-color: #222222 !important;
    
}
.v-toolbar__title{

  color: #ffffff;
  padding-top: 10px;


}
.theme--light.v-btn.v-btn--icon{
  color:#ffffff;
}
</style>