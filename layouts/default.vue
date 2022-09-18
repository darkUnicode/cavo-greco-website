<template>
  <v-app dark>
    <Header />
      <div class="fixedHeaderSpace">
        <nuxt/>
      </div>
    <Footer/>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

}
</script>

<style>
.fixedHeaderSpace {
  margin-top: 180px;
}

/* -- xs -- */
@media (max-width: 599px) {
  .fixedHeaderSpace {
    margin-top: 100px;
  }
}

/* -- sm -- */
@media (min-width: 600px) {
  .fixedHeaderSpace {
    margin-top: 100px;
  }
}
/* -- md -- */
@media (min-width: 960px) {
  .fixedHeaderSpace {
    margin-top: 180px;
  }
}

/* -- lg -- */
@media (min-width: 1264px) {

}

/* -- xl -- */
@media (min-width: 1904px) {

}
</style>
