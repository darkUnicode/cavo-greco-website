<template>
  <div>
    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
      >
        <v-row>
          <v-col
              cols="6"
          >
            <v-img :src="item.src" alt="" cover height="100%"/>
          </v-col>
          <v-col
              cols="6">
            <div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
              <div class="desc w-100">
                <h2 class="mb-4">PREMIUM STUFFED <br> OLIVES</h2>
                <p class="h5">A GUARANTEED CROWD PLEASER</p>
                <!-- <p class="h5 mb-4">Email Address: email@info.com</p> -->
                <div class="row justify-content-end">
                  <div class="col-xl-8">
                    <p>Naturally cured, fleshy colossal olives
                      from Halkidiki, Greece, bathed in our oil
                      free signature brine.</p>
                  </div>
                </div>
                <p>
                  <button type="button" class="btn btn-dark mb-2 py-3 px-4">Contact
                    Us
                  </button>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>

    </v-carousel>

    <template>
      <v-container>
        <v-row>
          <v-col
              md="6"
              class="d-flex align-center">
            <v-img src="/images/logo/logo.png" alt="cavo greco" width="500px"/>
          </v-col>

          <v-col
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
            <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit  }">
              <form>

                <ValidationProvider name="Name" rules="required|alpha|min:3|max:25" v-slot="{ errors }">
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
                <v-btn
                    class="mr-4"
                    @click="submit"
                >
                  submit
                </v-btn>
                <v-btn @click="clear">
                  clear
                </v-btn>
              </form>
            </ValidationObserver>
          </v-col>
          <v-col
              cols="12"
              md="6">

          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      name: '',
      email: '',
      phoneNumber:'',
      message: '',
    }
  },
}
</script>s
