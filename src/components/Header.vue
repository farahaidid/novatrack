<template>
  <div class="app-header header-shadow">
    <div class="app-header__content pl-5">
        <div class="app-header-left">
            <img style="width:200px" :src="require('@/assets/logo.png')" alt="">
        </div>
        <div class="app-header-right mr-5">
            <button type="btn btn-sm" style="margin-right:50px" @click="goDash">DASHBOARD</button>
            <button v-if="isAdmin" type="btn btn-sm" style="margin-right:50px" @click="goFuelPrice">FUEL PRICE</button>
            <button type="btn btn-sm" style="margin-right:50px" @click="goReport">REFUEL REPORT</button>
            <button type="btn btn-sm" @click="logout">LOGOUT</button>
        </div>
    </div>
    <div class="app-header__mobile-menu">
        <div>
            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div class="app-header__menu">
        <span>
            <b-button class="btn-icon btn-icon-only" variant="primary" size="sm" v-bind:class="{ 'active' : isOpenMobileMenu }" @click="toggleMobile2('header-menu-open')">
                <div class="btn-icon-wrapper">
                    <font-awesome-icon icon="ellipsis-v"/>
                </div>
            </b-button>
        </span>
    </div>
  </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {mapMutations,mapGetters} from "vuex"
import EventBus from "@/services/eventBus"

library.add(faEllipsisV);

export default {
    components:{
        'font-awesome-icon': FontAwesomeIcon,
    },
    data() {
        return {
            isOpen: false,
            isOpenMobileMenu: false,
        }
    },
    created(){
    },
    mounted(){
        EventBus.$on('LOG_OUT',()=>{
            this.logout()
        })
    },
    computed:{
        ...mapGetters('loginInfo',['isAdmin'])
    },
    methods: {
        ...mapMutations("loginInfo",["CLEAR_LOGIN_DATA"]),
        logout(){
            this.CLEAR_LOGIN_DATA()
            this.$router.push({name:"login"})
        },
        toggleMobile(className) {
            const el = document.body;
            this.isOpen = !this.isOpen;

            if (this.isOpen) {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },

        toggleMobile2(className) {
            const el = document.body;
            this.isOpenMobileMenu = !this.isOpenMobileMenu;

            if (this.isOpenMobileMenu) {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
        goReport(){
            this.$router.push({name: "report"})
            EventBus.$emit("remove-dashboard-reload")
        },
        goDash(){
            this.$router.push({name: "dashboard"})
        },
        goFuelPrice(){
            this.$router.push({name: "fuelPrice"})
        },
    }
}
</script>