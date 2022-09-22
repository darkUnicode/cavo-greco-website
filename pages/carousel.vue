<template>
  <v-container>
    <v-carousel v-model="model"
                height="100%"
                class="customCarousel"
                show-arrows-on-hover
                 delimiter-icon="mdi-minus"
                style="border-radius: 25px">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i">
        <v-sheet
            height="100%"
            min-height="550px">
          <v-row
              class="fill-height"
              align="center"
              justify="center">
            <v-card class="d-flex ma-auto row carouselCard" style="width: 100%; max-width: 1200px;   background-color: white; box-shadow: none;">
              <v-col
                  cols="12"
                  md="6"
                  order="1"
                  order-md="0"
                  class=" pa-0 ma-0 mainColor productsDetails"
                  style="position: relative; min-height: 550px; height: 100%">
                <div style="height: 100%;">
                  <v-row>
                    <v-col>
                      <v-card-title class="fs-48 text-center d-flex align-start justify-center my-10" style="word-break: break-word;color: white; line-height: 1.5;">{{ item.title.toUpperCase() }}</v-card-title>
                    </v-col>
                  </v-row>


                  <v-row>
                    <v-col
                        class="d-flex justify-center align-center"
                        style="height: 100%">
                      <v-card-text class="secondaryColor text-center mt-5" style="border-radius: 50px; width: 90%;">
                        <v-row class="text-center mt-3">
                          <v-col cols="12" v-if="item.subtitle">
                            <p class="my-4 fs-20 archdauFont" style="color: black; font-style: italic">{{ item.subtitle }}</p>
                          </v-col>

                          <v-col cols="12">
                            <p class="mx-auto archdauFont" style="color: black; width: 90%;">{{ item.smallDescription }}</p>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col
                  cols="12"
                  md="6"
                  order="0"
                  order-md="1"
                  class="pa-0"
              >
                <div style="height: 100%;">
                  <v-img :src="item.src" alt="" :lazy-src="item.src" min-height="550px" max-height="100%" max-width="100%" cover class="productImage"/>
                </div>
              </v-col>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "carousel",
  data: () => ({
    model: 0,
    items: [],
    item: [],
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
  async created() {
    await this.$store.dispatch('productsRetrieve').then(response => {
      this.items = this.$store.getters['getProducts']
    })
  }
}
</script>

<style scoped>

</style>