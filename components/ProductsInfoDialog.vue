<template>
  <v-row justify="center">
    <v-dialog
        v-model="productsInfoDialog"
        max-width="380"
        class="mx-auto my-12"
        @click:outside="closeDialog"
    >

      <v-card
          class="mx-auto"
          max-width="374"
      >
        <v-img
            height="250"
            :src="src"
        ></v-img>

        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1"> {{ subtitle }}</v-card-subtitle>
        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
          </v-row>
          <v-row v-if="vegan">
            <v-col class="d-flex d-inline-block">
              <v-img class="mx-1" src="/images/product_info/vegetarian-mark.svg" max-height="30" max-width="20"></v-img>
              VEGAN
            </v-col>

          </v-row>

          <div class="mt-4">{{ smallDescription }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>More Information</v-card-title>

        <v-card-text :v-html="description">
<!--          {{ description }}-->
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="mainColor"
              text
              @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ProductsInfoDialog",
  props: {
    title: String,
    subtitle: String,
    src: String,
    smallDescription: String,
    description: String,
    vegan: Boolean,
      productsInfoDialog: Boolean,
  },
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  methods:{
    closeDialog() {
      this.$emit('update:productsInfoDialog', false)
    }
  }
}
</script>

<style scoped>

</style>