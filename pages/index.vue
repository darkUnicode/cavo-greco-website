<template>
  <div>
    <template>
      <v-container class="my-5" id="our_products">
        <v-row class="mb-5">
          <v-col
              cols="12"
              class="d-flex align-center justify-center">
            <h2 class="text-center mb-8 fs-48">Our Products</h2>
          </v-col>
        </v-row>
        <div class="d-flex justify-center align-center">
          <v-carousel
            v-model="carouselModel"
            continuous
            :cycle="productsInfoDialog"
            interval="4000"
            height="100%"
            class="customCarousel"
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            style="border-radius: 25px; max-width: 1000px">
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
                <v-card class="d-flex ma-auto row carouselCard mainColor" style="width: 100%;  box-shadow: none;">
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
                          <v-card-title class="fs-40 text-center d-flex align-center justify-center mt-10" style="word-break: break-word; white-space: pre; color: white; line-height: 1.5;" >{{ item.title.toUpperCase() }}</v-card-title>
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
                    <div style="height: 100%; background-position: right">
                      <img :src="item.src" alt="" style="min-height:550px; max-height:550px; width:100%; object-fit: cover;" class="productImage"/>
                    </div>
                  </v-col>
                </v-card>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        </div>

      </v-container>
    </template>

    <template>
      <v-container style="width: 100%; max-width: 1200px;" id="who_we_are">
        <v-row class="my-10">
          <v-col
              cols="12"
              class="d-flex align-center justify-center">
            <h2 class="text-center mb-8 fs-48 font-weight-bold">WHO WE ARE</h2>
          </v-col>

          <v-col cols="12" class="text-justify">
            <p>
              We are a family owned food manufacturing and
              distributing company based on Long Island, NY. We
              specialize in foods inspired by the region of the
              Mediterranean.
              <br><br>
              We operate a USDA & FDA licensed food processing facility
              that meets all federal, state, and local regulatory
              requirements. We utilize industry best practices to ensure
              our products are of the highest quality and safe. We supply
              our products to the Food Service and Retail sectors. Our
              products range from bite-size snacks to full-size meals
              perfect for anytime of the day.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <p class="text-justify ">
              Our story began in Cyprus, on the sunny coast of Cavo
              Greco, in the heart of the Mediterranean Sea. From Cavo
              Greco to the bustling streets of New York City our passion
              for good food travelled with us.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="d-flex justify-center align-center">
            <div class="pa-4">
              <img src="/images/logo/logo-no-background.png" alt="cavo greco" width="100%" style="max-width: 320px; min-width: 187px;"/>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <p class="text-justify">
              With that spirit in mind, we've put together a series of
              recipes that bring exciting flavors of our past back to live.
              With passion and dedication we perfected each one of our
              recipes.
            </p>
          </v-col>

          <v-col cols="12" class="text-justify">
            <p>
              All of our signature products were lovingly crafted to
              unlock our culture in just a few bites. Our recipes, like our
              journey, are about integrating our nostalgia for our
              Mediterranean home into the fast-paced lifestyle of our
              new home, in New York.
              <br><br>
              They are about people coming together and creating
              memorable moments; they are about the distant home that
              we miss and recreate in every meal.
            </p>
          </v-col>

        </v-row>
      </v-container>
    </template>

    <template>
      <v-container id="message_us">
        <v-row class="my-5">
          <v-col
              cols="12">
            <v-card
                elevation="3"
                rounded
                class="pa-8 mx-auto"
                max-width="900"
                id="contact-us-card"
                style="border-radius: 15px !important;"
            >
              <v-card-title class="d-flex justify-center">
                <h2 class="fs-22 font-weight-bold">DROP US A MESSAGE</h2>
              </v-card-title>
              <v-card-text>
                <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit  }">
                  <form
                      ref="form"
                      @submit.prevent="handleSubmit(submit)">

                    <ValidationProvider name="Name" rules="required|alpha_spaces|min:3|max:25" v-slot="{ errors }">
                      <v-text-field
                          v-model="name"
                          :error-messages="errors"
                          :counter="10"
                          label="Name"
                          prepend-inner-icon="mdi-account"
                          clearable
                          required
                      ></v-text-field>
                    </ValidationProvider>

                    <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                      <v-text-field
                          v-model="email"
                          :error-messages="errors"
                          label="E-mail"
                          prepend-inner-icon="mdi-email"
                          required
                          clearable
                          counter
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider name="Phone Number" rules="required|numeric" v-slot="{ errors }">
                      <v-text-field
                          label="Phone Number"
                          v-model="phoneNumber"
                          :error-messages="errors"
                          prepend-inner-icon="mdi-cellphone"
                          counter
                          required
                          clearable
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
                      <v-textarea
                          name="message"
                          filled
                          :error-messages="errors"
                          label="Message"
                          prepend-inner-icon="mdi-forum"
                          auto-grow
                          clearable
                          counter
                          v-model="message"
                      ></v-textarea>
                    </ValidationProvider>
                    <v-row>
                      <v-col>
                      </v-col>
                    </v-row>
                    <!--                    <div class="g-recaptcha" data-sitekey="6LfnbaghAAAAAJpubPwmenjYK1gwAmgB7mxVAQeW"></div>-->
                    <v-row class="py-5">
                      <v-col>
                        <v-btn
                            class="mr-4"
                            color="green"
                            style="color: white;"
                            type="submit">
                          submit
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </ValidationObserver>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template>
      <v-container id="find_us">
        <v-row class="my-5">
          <v-col
              cols="12">
            <v-card
                elevation="3"
                rounded
                class="pa-8 mx-auto"
                max-width="1200"
                style="border-radius: 15px !important;"
            >
              <v-card-title class="d-flex justify-center mb-8">
                <h2 class="fs-22">WHERE TO FIND US</h2>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.62041277832515!2d-73.55645523809454!3d40.71129241774923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27e74fbee7027%3A0x1e458f004a93db34!2zNTMyIEUgTWVhZG93IEF2ZSwgRWFzdCBNZWFkb3csIE5ZIDExNTU0LCDOl869z4nOvM6tzr3Otc-CIM6gzr_Ou865z4TOtc6vzrXPgg!5e0!3m2!1sel!2s!4v1663434324080!5m2!1sel!2s" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="row ma-0 pa-0" style="border:none; box-shadow: none;">
                      <v-col cols="12">
                        <p class="fs-20">ADDRESS</p>
                        <v-input
                            prepend-icon="mdi-map"
                            class="mb-0"
                        >
                          Cavo Greco Foods Inc.
                          <br>
                          532 East Meadow Ave,
                          <br>
                          East Meadow,
                          <br>
                          NY 11554
                        </v-input>
                      </v-col>
                      <v-col cols="12">
                        <p class="fs-20">EMAIL</p>
                        <v-input
                            prepend-icon="mdi-email"
                        >
                          <a href="mailto:info@cavogrecofoods.com" target="_top">info@cavogrecofoods.com</a>
                        </v-input>
                      </v-col>
                      <v-col cols="12">
                        <p class="fs-20">PHONE</p>
                        <v-input
                            prepend-icon="mdi-phone"
                        >
                          <a href="tel:0015164245181" target="_top">+1-516-424-5181</a>
                        </v-input>
                      </v-col>
                      <v-col cols="12">
                        <p class="fs-20">SOCIAL MEDIA</p>
                        <a href="https://www.facebook.com/cavogrecofoods" target="_blank">
                          <v-icon class="px-2 social-icon" color="black">mdi-facebook</v-icon>
                        </a>
                        <a href="https://www.instagram.com/cavogrecofoods/" target="_blank">
                          <v-icon class="px-2 social-icon" color="black">mdi-instagram</v-icon>
                        </a>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <ProductsInfoDialog
        :title.sync="item.title"
        :subtitle.sync="item.subtitle"
        :src.sync="item.src"
        :vegan.sync="item.vegan"
        :smallDescription.sync="item.smallDescription"
        :description.sync="item.description"
        :productsInfoDialog.sync="productsInfoDialog"
    />

  </div>
</template>

<script>
// import products from "assets/products";

export default {
  // head: {
  //   script: [
  //     {type: 'text/javascript', src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true},
  //   ],
  // },
  data() {
    return {
      carouselModel: 0,
      items: [],
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      productsInfoDialog: false,
      item: [],
    }
  },
  methods: {
    clear() {
      this.name = '';
      this.email = '';
      this.phoneNumber = '';
      this.message = '';
    },
    itemInfo(item) {
      this.item = item;
      this.productsInfoDialog = true
    },
  },
  computed: {
    hideDelimiters() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  },
  async created() {
    await this.$store.dispatch('productsRetrieve').then(response => {
      this.items = this.$store.getters['getProducts']
    })
  }
}
</script>

<style>
</style>

