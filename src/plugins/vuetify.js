import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    theme: {
        primary: '#f6ad8',
        secondary: '#444054',
        accent: '#794c8a',
        error: '#FF5252',
        info: '#78C3FB',
        success: '#4CAF50',
        warning: '#f7b924'
    },
    options: {
        customProperties: true
    },
    iconfont: 'md' || 'mdi',
});