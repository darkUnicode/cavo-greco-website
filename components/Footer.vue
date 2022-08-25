<template>
  <v-container>
    <v-row>
      <v-col
          cols="12" class="text-center">

        <v-img src="/images/logo/logo-small.png" width="150px" class="ma-0 ma-auto" contain/>
        Copyright &copy; {{ new Date().getFullYear() }} Cavo Greco LTD
      </v-col>
    </v-row>

    <v-row class="mx-1 mx-md-15 d-flex align-center justify-end text-right">

      <v-col>
        <!--        <a class="text-decoration-none" href="https://www.facebook.com/cavogrecofoods" target="_blank">-->
        <!--          <v-icon class="px-2 social-icon" color="black">mdi-facebook</v-icon>-->
        <!--        </a>-->
        <!--        <a class="text-decoration-none" href="https://www.instagram.com/cavogrecofoods/" target="_blank">-->
        <!--          <v-icon class="px-2 social-icon" color="black">mdi-instagram</v-icon>-->
        <!--        </a>-->
        Powered by <a href="https://darkUnicode.dev"> darkUnicode </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer-size {
  font-size: 13px;
}

/*.text-light {*/
/*  color: #f8f9fa;*/
/*}*/

.social-icon {
  color: magenta;
}

.social-icon.v-icon:hover {
  color: #3D82C5 !important;
  caret-color: #3D82C5 !important;
}
</style>