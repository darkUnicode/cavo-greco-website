<template>
  <v-container>
    <v-carousel

        continuous
        interval="4000"
        light
        delimiter-icon="mdi-minus"
        hide-delimiter-background
        show-arrows-on-hover
        style="height: 845px"
    >

      <v-carousel-item
          v-for="(item,i) in items"
          :key="i">
        <v-card
            max-height="845">
          <v-row class="d-flex">
            <v-col
                md="6"
                order="1"
                order-md="0"
                class="text-right d-flex">
              <div class="align-center">
                <v-card-title class="d-flex justify-end text-h3">{{ item.title.toUpperCase() }}</v-card-title>
                <v-card-text>
                  <p class="text-h5">{{ item.subtitle }}</p>
                  <v-row class="text-center">
                    <v-col cols="12">
                      <p>{{ item.smallDescription }}</p>

                      <v-row>
                        <v-col
                            cols="6">
                          <v-btn
                              color="primary"
                              dark
                              @click="productsInfoDialog = !productsInfoDialog"
                          >
                            Info
                          </v-btn>
                        </v-col>

                        <v-col
                            cols="6">
                          <v-btn href="#contact-us-card"> Contact Us</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </div>
            </v-col>
            <v-col
                md="6"
                order="0"
                order-md="1">
              <v-img :src="item.src" alt="" :lazy-src="item.src" max-height="100%" max-width="100%" cover/>
            </v-col>
          </v-row>

        </v-card>
            <products-info-dialog
                              :title="item.title"
                              :subtitle="item.subtitle"
                              :src="item.src"
                              :vegan="item.vegan"
                              :smallDescription="item.smallDescription"
                              :description="item.description"
                              :productsInfoDialog.sync="productsInfoDialog"
                          ></products-info-dialog>
      </v-carousel-item>

    </v-carousel>

    <template>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="6"
              class="my-0 my-auto">
            <v-img src="/images/logo/logo.png" alt="cavo greco" class="ma-0 ma-auto " contain width="450px"/>
          </v-col>

          <v-col
              cols="12"
              md="6">
            <h2 class="text-center">WHO WE ARE</h2>
            <p class="text-justify"> We are a family owned food manufacturing and
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
              <br><br>
              Our story began in Cyprus, on the sunny coast of Cavo
              Greco, in the heart of the Mediterranean Sea. From Cavo
              Greco to the bustling streets of New York City our passion
              for good food travelled with us.
              With that spirit in mind, we've put together a series of
              recipes that bring exciting flavors of our past back to live.
              With passion and dedication we perfected each one of our
              recipes.
              <br><br>

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
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="6">
            <v-card
                elevation="3"
                rounded
                class=" pa-2 mx-auto my-12"
                max-height="612"
                id="contact-us-card"
            >
              <v-card-title class="d-flex justify-center">
                <h2>Drop us a message</h2>
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
                    <div class="g-recaptcha" data-sitekey="6LfnbaghAAAAAJpubPwmenjYK1gwAmgB7mxVAQeW"></div>
                    <v-row>
                      <v-col>
                        <v-btn
                            class="mr-4"
                            color="green"

                            type="submit">

                          submit
                        </v-btn>
                        <v-btn
                            @click="clear">
                          clear
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </ValidationObserver>
              </v-card-text>
            </v-card>
          </v-col>

          <v-divider
              inset
              vertical
              class=""
          ></v-divider>

          <v-col
              cols="12"
              md="6">
            <v-card
                elevation="3"
                rounded
                class=" pa-2 mx-auto my-12"
                height="512"
                max-height="612">
              <v-card-title class="d-flex justify-center mb-8">
                <h2>Where to find us</h2>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
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
                </v-row>
                <v-row>
                  <v-col>
                    <v-input
                        prepend-icon="mdi-email"
                    >
                      <a href="mailto:info@cavogrecofoods.com">info@cavogrecofoods.com</a>
                    </v-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-input
                        prepend-icon="mdi-phone"
                    >
                      <a href="tel:+1-516-424-5181">+1-516-424-5181</a>
                    </v-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <a class="text-decoration-none" href="https://www.facebook.com/cavogrecofoods" target="_blank">
                      <v-icon class="px-2 social-icon" color="black">mdi-facebook</v-icon>
                    </a>
                    <a class="text-decoration-none" href="https://www.instagram.com/cavogrecofoods/" target="_blank">
                      <v-icon class="px-2 social-icon" color="black">mdi-instagram</v-icon>
                    </a>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import products from "assets/products";

export default {
  head: {
    script: [
      {type: 'text/javascript', src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true},
    ],
  },
  data() {
    return {
      items: products,
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      productsInfoDialog: false
    }
  },
  methods: {
    clear() {
      this.name = '';
      this.email = '';
      this.phoneNumber = '';
      this.message = '';
    },
    submit() {

    },
    openModal() {

    }
  }
}
</script>

<style>

</style>

