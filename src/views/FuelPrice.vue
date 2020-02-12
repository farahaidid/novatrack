<template>
  <div>
    <v-card>
        <v-card-title>
          <h3>Fuel Types</h3>
          <v-layout row align-center justify-right>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-title>
        <v-card-text class="px-1 py-3 text-xs-center w-100" style="width:1180px">
          <div>
            <b-card class="main-card mb-4">
              <div class="d-flex flex-row justify-end"></div>
              <b-row>
                <b-col md="6" class="mb-2 text-left">
                  <b-form-group horizontal label="Search" class="mb-0">
                    <b-input-group>
                      <b-form-input
                        v-model="tableSettings.filter"
                        placeholder="Type to Search"
                      />
                      <b-input-group-append>
                        <b-btn
                          :disabled="!tableSettings.filter"
                          @click="tableSettings.filter = ''"
                        >Clear</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="6" class="mb-2">
                  <b-row>
                    <b-col md="6">
                      <b-form-group horizontal label="Rows" class="mb-0 text-left">
                        <b-input-group>
                          <b-form-select v-model="tableSettings.perPage" slot="append">
                            <option
                              :value="num"
                              :selected="i==0"
                              v-for="(num,i) in tableSettings.pageOptions"
                              :key="i"
                            >{{num}}</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" class="pt-md-3">
                      <b-btn v-if="isAdmin" @click="openModal" class="btn btn-sm btn-secondary ml-md-3 mt-md-4">Add</b-btn>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-table
                class="caption w-100 data-table"
                sticky-header
                head-variant="light"
                hover
                striped
                show-empty
                small
                responsive
                :items="fuelTypes"
                :fields="tableHeader"
                :filter="tableSettings.filter"
                :sort-by.sync="tableSettings.sortBy"
                :sort-desc.sync="tableSettings.sortDesc"
                :sort-direction="tableSettings.sortDirection"
                @filtered="onTableFiltered"
                :busy="isTableBusy"
              >
              <template v-slot:cell(date)="row">
                <div @click="showInfo(row.item)">
                  {{formatDateTime(row.item.date)}}
                </div>
              </template>
              <template v-slot:cell(diesel)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.diesel}}
                </div>
              </template>
              <template v-slot:cell(euro5)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.euro5}}
                </div>
              </template>
              <template v-slot:cell(petrol)="row">
                <div @click="showInfo(row.item)">
                  {{row.item.petrol}}
                </div>
              </template>
              <template v-slot:cell(selected)="row">
                <b-form-radio
                  class="d-inline-block"
                  v-model="row.item.selected"
                  :value="true"
                  @change="checkDefault(row.item)"
                  name="some-radios"
                >
                </b-form-radio>

                <v-icon @click="openDeleteWarnig(row.item)" size="20">delete</v-icon>
              </template>
              </b-table>
            </b-card>
          </div>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>

    <v-dialog v-model="deleteWarning" width="400">
      <v-card>
        <v-card-text class="text-xs-center">
          <h4>Are you sure?</h4>
          <h6>You want to delete?</h6>
          <v-layout row>
            <v-spacer></v-spacer>
              <b-btn @click="closeDeleteWarnig" class="btn btn-sm btn-success mr-3">NO</b-btn>
              <b-btn @click="deleteType" class="btn btn-sm btn-danger mr-2">DELETE</b-btn>
        </v-layout>
        <div v-if="deleting" class="d-flex flenx-row justify-center align-center">
          <pulse-loader
            :loading="deleting"
            color="#162337"
            loadersize="5px"
            class="d-inline"
            style="flex:unset!important"
          ></pulse-loader>
        </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <v-dialog id="fuel-type-dialog" :persistent="true" v-model="formDialog" width="1200">
      <v-card>
        <v-toolbar color="tenant">
          <v-spacer></v-spacer>
          <v-toolbar-title>Fuel Type</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon @click="closeModal">clear</v-icon>
        </v-toolbar>
        <v-card-text class="px-3 py-3">
          <v-form>
            <v-layout row>
              <v-flex xs12 md6>
                <v-menu
                  ref="dateMenu"
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="formData.date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="formData.date"
                      label="Date"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="formData.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dateMenu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dateMenu.save(formData.date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 md6>
                <v-menu
                  ref="timeMenu"
                  v-model="timeMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="formData.time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="formData.time"
                      label="Time"
                      prepend-icon="access_time"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="timeMenu" full-width @click:minute="$refs.timeMenu.save(formData.time)" color="primary" v-model="formData.time" format="24hr"></v-time-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-text-field
              v-model="formData.diesel"
              label="Diesel"
              required
            ></v-text-field>
            <v-text-field
              v-model="formData.euro5"
              label="Euro 5"
              required
            ></v-text-field>
            <v-text-field
              v-model="formData.petrol"
              label="Petrol"
              required
            ></v-text-field>

            <v-layout row>
              <v-spacer></v-spacer>
              <v-btn @click="save">Done</v-btn>
            </v-layout>

            <div v-if="submitting" class="d-flex flenx-row justify-center align-center">
              <pulse-loader
                :loading="submitting"
                color="#162337"
                loadersize="5px"
                class="d-inline"
                style="flex:unset!important"
              ></pulse-loader>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {db} from "@/firebase"
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import moment from "moment"
import mtz from "moment-timezone"
import { mapGetters } from 'vuex'

export default {
  components: {
    PulseLoader
  },
  data(){
    return {
      deleteWarning: false,
      tableSettings: {
        currentPage: 1,
        perPage: 100,
        totalRows: 0,
        pageOptions: [100, 250, 500, 1000],
        sortBy: 'time',
        sortDesc: false,
        sortDirection: "desc",
        filter: null
      },
      tableHeader: [
        {
          key: "date",
          label: "Date",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "diesel",
          label: "Diesel",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "euro5",
          label: "Euro 5",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "petrol",
          label: "Petrol",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "selected",
          label: "Selected",
          sortable: false,
          thClass: "text-left",
          tdClass: "text-left"
        },
      ],
      isTableBusy: true,
      fuelTypes: [],
      formDialog: false,
      dateMenu: false,
      timeMenu: false,
      formData: {
        id: '',
        date: new Date().toISOString().substr(0,10),
        time: '00:00',
        diesel: 0,
        euro5: 0,
        petrol: 0
      },
      defaultFormData: {
        id: '',
        date: new Date().toISOString().substr(0,10),
        time: '00:00',
        diesel: 0,
        euro5: 0,
        petrol: 0
      },
      selectedType: null,
      submitting: false,
      deleting: false,
    }
  },
  created(){
    // if(!this.isAdmin){
    //   this.$router.push({name: 'dashboard'})
    // }
    this.getFuelTypes()
  },
  watch: {
    formData:{
      handler(v){
        console.log(v.time)
      }
    }
  },
  computed:{
    ...mapGetters('loginInfo',["isAdmin"])
  },
  methods:{
    formatDateTime(dt){
      return moment(dt*1000).tz('Etc/GMT+8').format("DD MMMM, YYYY hh:mm A")
    },
    async checkDefault(item){
      await db.collection("fuelType").get()
      .then(docs=>{
        docs.forEach(async doc=>{
          await db.collection("fuelType").doc(doc.id)
          .update({selected: doc.id==item.id?true:false})
          .then(res=>{})
        })
      })
    },
    async getFuelTypes(){
      this.fuelTypes = []
      await db.collection('fuelType').get()
      .then(docs=>{
        docs.forEach(doc=>{
          this.fuelTypes.push(Object.assign({},{id:doc.id},doc.data()))
        })
        this.isTableBusy = false
      })
    },
    openDeleteWarnig(item){
      this.selectedType = item
      this.deleteWarning = true
    },
    closeDeleteWarnig(){
      this.deleteWarning = false
      this.selectedType = null
    },
    openModal(){
      this.formData = Object.assign({},this.defaultFormData)
      this.formDialog = true
    },
    closeModal(){
      this.selectedType = null
      this.formDialog = false
    },
    async deleteType(){
      this.deleting = true
      await db.collection("fuelType").doc(this.selectedType.id).delete().then(_=>{
        this.isTableBusy = true
        this.deleting = false
        this.selectedType = null
        this.deleteWarning = false
        this.getFuelTypes()
      })
    },
    async save(){
      this.submitting = true
      let d = moment(this.formData.date).format("YYYY-MM-DD ")
      let t = this.formData.time
      let obj = {
        diesel: parseFloat(this.formData.diesel),
        euro5: parseFloat(this.formData.euro5),
        petrol: parseFloat(this.formData.petrol),
        date: moment(d+t).format('X')
      }
      if(this.selectedType==null){
        //add
        await db.collection("fuelType").add(obj)
        .then(ref=>{
          this.isTableBusy = true
          this.submitting = false
          this.formData = Object.assign({},this.defaultFormData)
          this.closeModal()
          this.getFuelTypes()
        })
      }else{
        //update
        let id = this.selectedType.id
        // obj.date = this.selectedType.date
        await db.collection("fuelType")
        .doc(id)
        .update(obj)
        .then(ref=>{
          this.isTableBusy = true
          this.submitting = false
          this.formData = Object.assign({},this.defaultFormData)
          this.closeModal()
          this.getFuelTypes()
        })
      }
    },
    showInfo(type){
      this.selectedType = type
      this.formData = {
        id: type.id,
        date: moment(type.date*1000).format("YYYY-MM-DD"),
        time: moment(type.date*1000).format("HH:mm"),
        diesel: type.diesel,
        euro5: type.euro5,
        petrol: type.petrol,
      }
      this.formDialog = true
    },
    onTableFiltered(filteredItems) {
      this.tableSettings.totalRows = filteredItems.length;
      this.tableSettings.currentPage = 1;
    },
  },
}
</script>

<style>
.v-btn--active, .v-btn:hover, .v-btn:focus{
  background-color: grey !important;
}
.v-picker__title{
  background-color: dimgray;
}

</style>