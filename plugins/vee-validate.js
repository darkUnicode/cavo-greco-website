import Vue from 'vue'
import {ValidationObserver, ValidationProvider, extend} from 'vee-validate'
import {required, email, min, alpha_dash, alpha_spaces, max, numeric, double} from 'vee-validate/dist/rules'

//https://codesandbox.io/s/9vs4l

extend('required', required)
extend('email', email)
extend('min', min)
extend('numeric', numeric)
extend('alpha_spaces', alpha_spaces)
extend('alpha_dash',alpha_dash)
extend('max', max)
extend('double',double)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
