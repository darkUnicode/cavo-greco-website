<template>
  <div class="navWrapper">
    <v-container>
      <div class="d-none d-md-block">
        <v-row>
          <v-col md="5">
            <div class="d-flex justify-end align-center" style="height: 100%;">
              <div><a class="pa-5 navLinks" href="#our_products">Our Products</a></div>
              <div><a class="pa-5 navLinks" href="#who_we_are">Who We Are</a></div>
            </div>
          </v-col>
          <v-col md="2">
            <div class="d-flex justify-center align-center ma-auto navImageWrapper">
              <img src="/images/logo/logo-no-background.png" alt="cavo greco" class="navImage"/>
            </div>
          </v-col>
          <v-col md="5">
            <div class="d-flex justify-center justify-md-start align-center" style="height: 100%;">
              <div><a class="pa-1 pa-sm-5 navLinks" href="#message_us">Message Us</a></div>
              <div><a class="pa-1 pa-sm-5 navLinks" href="#find_us">Find Us</a></div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="d-block d-md-none">
        <v-row>
          <v-col cols="5">
            <div class="d-flex justify-start align-center">
              <!--              <strong>CAVO GRECO</strong>-->
              <img src="/images/logo/logo-no-background.png" alt="cavo greco" style="max-width: 70px; width: 100%;"/>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="d-flex justify-end align-center" style="height: 100%">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="black"
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                    >
                      <v-list-item-title><a class="pa-1 pa-sm-5 navLinks" :href="item.path">{{ item.title }}</a></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Header",
  data: () => ({
    items: [
      {title: 'Our Foods', path: '#our_products'},
      {title: 'Who We Are', path: '#who_we_are'},
      {title: 'Message Us', path: '#message_us'},
      {title: 'Contact Us', path: '#find_us'},
    ],
  }),
};
</script>
<style>
.navWrapper {
  position: fixed;
  width: 100%;
  padding: 10px;
  background-color: white;
  z-index: 2;
  border-bottom: 2px solid red;
}

.navImageWrapper {
  width: 150px;
  /*background-color: white;*/
  /*border: 1px solid black;*/
  padding: 10px;
}

.navImageWrapperMobile {
  width: 100px;
  background-color: white;
  padding: 5px;
}

.navImage {
  max-width: 150px;
  width: 100%;
}

.navLinks {
  text-decoration: none;
  color: black !important;
}
</style>
