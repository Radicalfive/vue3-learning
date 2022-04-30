<template>
  <v-app>
    <v-navigation-drawer app color="blue-grey" dark clipped>
      <v-list>
        <!-- 一个一级菜单，没有子菜单-->
        <v-list-item dark link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>我的博客</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item dark link>
          <v-list-item-icon>
            <v-icon>mdi-music</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> 播放器 </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- 一个菜单group，包含子菜单项-->
        <v-list-group
          no-action
          prepend-icon="mdi-creative-commons"
          color="white"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>学习列表</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item dark dense link>
            <v-list-item-title>Spring-Boot</v-list-item-title>
          </v-list-item>
          <v-list-item dark dense link>
            <v-list-item-title>Vue</v-list-item-title>
          </v-list-item>
          <v-list-item dark dense link>
            <v-list-item-title>Axios</v-list-item-title>
          </v-list-item>
          <v-list-item dark dense link>
            <v-list-item-title>vuetify</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue-grey" dark clipped-left>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>