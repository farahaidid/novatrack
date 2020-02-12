<template>
  <div class="text-center">
    <div v-if="!loading">
      <b-row class="m-0 p-2">
        <b-col>
          <b-row>
            <b-col sm="12" md="6">
              <h5 class="text-left">From</h5>
              <b-form-input v-model="fromDate" type="date"></b-form-input>
            </b-col>
            <b-col sm="12" md="6">
              <h5 class="text-left">To</h5>
              <b-form-input v-model="toDate" type="date"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col md="6">
              <h5 class="text-left">Vehicle</h5>
              <!-- @change="loading=true;openFuelReport(selectedUnit)" -->
              <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="selectedUnit">
                <option :value="null">Choose...</option>
                <option v-for="(unit, indexOpt) in units" :key="indexOpt" :value="unit">{{ unit.getName() }}</option>
              </b-form-select>
            </b-col>
            <b-col md="6" class="pt-md-4 mt-md-2">
              <b-btn @click="openFuelReport(selectedUnit)" >Get Report</b-btn>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <v-card v-if="!fetchingReport && selectedUnit!=null && fuelReportData.length>0">
        <v-card-title>
          <v-layout row align-center justify-right>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-title>
        <v-card-text class="px-1 py-3 text-xs-center w-100" style="width:1180px">
          <apexchart
            type="line"
            height="400"
            :width="width-50"
            :options="fuelChartOptions"
            :series="fuelChartSeries"
          ></apexchart>
          <div id="chart"></div>
          <div id="summary">
            <b-card class="my-2">
              <h6 class="text-xs-left">Summary</h6>
              <b-table
                class="caption w-100 data-table"
                sticky-header
                head-variant="light"
                hover
                striped
                show-empty
                small
                responsive
                :items="fuelReportSummaryData"
                :fields="fuelReportSummaryTableHeader"
                :filter="fuelReportSummaryTableSettings.filter"
                :sort-by.sync="fuelReportSummaryTableSettings.sortBy"
                :sort-desc.sync="fuelReportSummaryTableSettings.sortDesc"
                :sort-direction="fuelReportSummaryTableSettings.sortDirection"
                @filtered="onFuelReportSummaryTableFiltered"
                :busy="isFuelReportSummaryTableBusy"
              >
                <template v-slot:cell(grouping)="row">
                  <span>{{dateRange}}</span>
                </template>
              </b-table>
            </b-card>
          </div>
          <div>
            <b-card class="main-card mb-4">
              <div class="d-flex flex-row justify-end"></div>
              <b-row>
                <b-col md="6" class="mb-2 text-left">
                  <b-form-group horizontal label="Search" class="mb-0">
                    <b-input-group>
                      <b-form-input
                        v-model="fuelReportTableSettings.filter"
                        placeholder="Type to Search"
                      />
                      <b-input-group-append>
                        <b-btn
                          :disabled="!fuelReportTableSettings.filter"
                          @click="fuelReportTableSettings.filter = ''"
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
                          <b-form-select v-model="fuelReportTableSettings.perPage" slot="append">
                            <option
                              :value="num"
                              :selected="i==0"
                              v-for="(num,i) in fuelReportTableSettings.pageOptions"
                              :key="i"
                            >{{num}}</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" class="pt-md-3">
                      <download-excel
                        class="btn btn-sm btn-secondary mt-md-4"
                        :data="fuelReportData"
                        :fields="fuelReportFieldsForXcel"
                        :name="selectedUnitName"
                        :title="excelTitle"
                        worksheet="FuelFillings"
                      >Save EXCEL</download-excel>
                      <b-btn @click="enableEditing" v-if="!editMode" class="btn btn-sm btn-secondary ml-md-3 mt-md-4" >Edit</b-btn>
                      <b-btn @click="disableEditing" v-else class="btn btn-sm btn-secondary ml-md-3 mt-md-4">Save</b-btn>
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
                :items="fuelReportData"
                :fields="fuelReportTableHeader"
                :filter="fuelReportTableSettings.filter"
                :sort-by.sync="fuelReportTableSettings.sortBy"
                :sort-desc.sync="fuelReportTableSettings.sortDesc"
                :sort-direction="fuelReportTableSettings.sortDirection"
                @filtered="onFuelReportTableFiltered"
                :busy="isFuelReportTableBusy"
              >
                <template v-slot:cell(bill)="row">
                  <span v-if="editingRows[row.item.sl-1]==false" >{{row.item.bill==''?'-':row.item.bill}}</span>
                  <b-form-input v-else @keyup="calculateBillRM(row.item);rowsTouchedForEditing[row.item.sl-1] = true;" v-model="row.item.bill" placeholder="Bill" />
                </template>
                <template v-slot:cell(diffL)="row">
                  {{
                    calculateDiffL(row.item)
                  }}
                </template>
                <template v-slot:cell(accuracy)="row">
                  {{
                    calculateAccuracy(row.item)
                  }}
                </template>

                <template v-slot:cell(filledRM)="row">
                  {{
                    calculatefilledRM(row.item)
                  }}
                </template>

                <template v-slot:cell(billRM)="row">
                  <span v-if="editingRows[row.item.sl-1]==false" >{{row.item.billRM}}</span>
                  <b-form-input @keyup="calculateBill(row.item);rowsTouchedForEditing[row.item.sl-1] = true;" v-else v-model="row.item.billRM" placeholder="Bill" />
                </template>
                <template v-slot:cell(fuelPrice)="row">
                  <span v-if="editingRows[row.item.sl-1]==false" >{{row.item.fuelPrice}}</span>
                  <b-form-input v-else v-model="row.item.fuelPrice" placeholder="Price" />
                </template>
                <template v-slot:cell(fuelType)="row">
                  <span v-if="editingRows[row.item.sl-1]==false" >{{row.item.fuelType}}</span>
                  <b-form-select v-else v-model="row.item.fuelType" @change="handleFuelTypeChange(row.item)" slot="append">
                    <option
                      :value="fT.type"
                      :selected="fT.selected"
                      v-for="(fT,i) in row.item.fuelTypes"
                      :key="i"
                    >{{fT.type}}</option>
                  </b-form-select>
                </template>
              </b-table>
            </b-card>
          </div>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
      <div v-else-if="fetchingReport" class="d-flex flenx-row justify-center align-center">
        <pulse-loader
          :loading="fetchingReport"
          color="#162337"
          loadersize="5px"
          class="d-inline"
          style="flex:unset!important"
        ></pulse-loader>
      </div>
    </div>
    <div v-else class="d-flex flenx-row justify-center align-center">
      <pulse-loader
        :loading="loading"
        color="#162337"
        loadersize="5px"
        class="d-inline"
        style="flex:unset!important"
      ></pulse-loader>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import VueApexCharts from "vue-apexcharts"
import JsonExcel from "vue-json-excel"
import { mapMutations , mapGetters } from "vuex"
import moment from "moment"
import mtz from "moment-timezone"
import EventBus from "@/services/eventBus";
import {db} from "@/firebase"

export default {
  components: {
    apexchart: VueApexCharts,
    downloadExcel: JsonExcel,
    PulseLoader
  },
  data() {
    return {
      width: 0,
      height: 0,
      fuelTypes: [],
      fromDate: new Date().toISOString().substr(0,10),
      toDate: new Date().toISOString().substr(0,10),
      fuelReportTableSettings: {
        currentPage: 1,
        perPage: 100,
        totalRows: 0,
        pageOptions: [100, 250, 500, 1000],
        sortBy: 'time',
        sortDesc: false,
        sortDirection: "desc",
        filter: null
      },
      fuelReportSummaryTableSettings: {
        currentPage: 1,
        perPage: 1,
        totalRows: 0,
        pageOptions: [1],
        sortBy: '',
        sortDesc: false,
        sortDirection: "asc",
        filter: null
      },
      isFuelReportTableBusy: true,
      isFuelReportSummaryTableBusy: true,
      sess: null,
      fetchingReport: false,
      loading: true,
      units: [],
      selectedUnit: null,
      fuelRes: null,
      fuelReportObj: null,
      fuelReportObj: null,
      fuelChartOptions: {
        chart: {
          id: "fuel-report-chart-1",
          stacked: false,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: "zoom"
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1,
          dashArray: 0,      
        },
        plotOptions: {
          line: {
            curve: "smooth"
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: "full"
        },
        xaxis: {
          labels: {
            formatter: function(val) {
              return moment(val * 1000).format("MMM DD HH:mm");
            }
          },
          title: {
            text: "Time"
          }
        },
        yaxis: [{
          labels: {
            formatter: function(val) {
              return val.toFixed(0);
            }
          },
          title: {
            text: "Volume , Liters"
          }
        },
        // {
        //   opposite: true,
        //   title: {
        //     text: 'Volume'
        //   }
        // }
        ]
      },
      fuelReportDialog: false,
      fuelChartSeries: [],

      editingRows: [],
      rowsTouchedForEditing: [],
      editMode: false,

      fuelReportSummaryTableHeader: [
        {
          key: "grouping",
          label: "DATE",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "mileage",
          label: "Mileage",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "consumed",
          label: "Consumed",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "avgConsumption",
          label: "Avg Consumption",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "kmL",
          label: "KM / L",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "filled",
          label: "Filled",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "engineHours",
          label: "Engine Hours",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "moveTime",
          label: "Move Time",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "avgSpeed",
          label: "Avg Speed",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "maxSpeed",
          label: "Max Speed",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
      ],

      fuelReportTableHeader: [
        {
          key: "sl",
          label: "No.",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "time",
          label: "Time",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "location",
          label: "Location",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "initFuelLevel",
          label: "Initial Fuel Level",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "finalFuelLevel",
          label: "Final Fuel Level",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "filled",
          label: "Filled",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "filledRM",
          label: "Filled RM",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "bill",
          label: "Bill (L)",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "billRM",
          label: "Bill (RM)",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "diffL",
          label: "Different Lt.",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "accuracy",
          label: "Accuracy %",
          sortable: true,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "fuelPrice",
          label: "Fuel Price",
          sortable: false,
          thClass: "text-left",
          tdClass: "text-left"
        },
        {
          key: "fuelType",
          label: "Fuel",
          sortable: false,
          thClass: "text-left",
          tdClass: "text-left"
        },
      ],
      fuelReportData: [],
      fuelReportFieldsForXcel: {
        SL: "sl",
        Time: "time",
        Location: "location",
        "Initial Fuel Level": "initFuelLevel",
        "Final Fuel Level": "finalFuelLevel",
        Filled: "filled",
        "Bill (L)": "bill",
        "Bill (RM)": "billRM",
        "Different Lt.": "diffL",
        Accuracy: "accuracy",
        "Fuel Price": "fuelPrice",
        "Fuel": "fuelType",
      },
      fuelDefaultReports: [],
      reportSummary: null,
      selectedDate: {
        from: '',
        to: ''
      },
      fuelTypesFromDB: []
    };
  },
  async created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // console.log(this.$route)
    await this.getFuelTypes()
    this.WIALON()
    // this.getFuelTypes()
    // wialon.render.Renderer.prototype.setLocale(wialon.util.DateTime.getTimezoneOffset(),"en",{flags:0,formatDate:"%H"},function (e,d){
    //   if(e){
    //     console.log(wialon.core.Errors.getErrorText(e))
    //   }
    // })
    // this.getUnits()
  },
  methods: {
    ...mapMutations("loginInfo", [
      "SET_ISLOGGED",
      "SET_TOKEN",
      "CLEAR_LOGIN_DATA",
      "SET_SESSION_ID"
    ]),
    handleFuelTypeChange(item){
      item.fuelPrice = item.fuelTypes.find(x=>x.type==item.fuelType).price
    },
    async getFuelTypes(){
      await db.collection('fuelType').orderBy('date','desc').get()
      .then(docs=>{
        docs.forEach(doc=>{
          this.fuelTypesFromDB.push(Object.assign({},{id:doc.id},doc.data()))
        })
        let data = docs.docs
        let flag = true
        if(data.length == 0){
          let today = moment().format('X')
          this.fuelTypes = [
            {type: 'Diesel',price: 0, date: today},
            {type: 'Euro 5',price: 0, date: today},
            {type: 'Petrol',price: 0, date: today},
          ]
        }
        for(let i=0;i<data.length;i++){
          if(data[i].data().selected){
            this.fuelTypes = [
              {type: 'Diesel',price:data[i].data().diesel || 0, date: data[i].data().date},
              {type: 'Euro 5',price:data[i].data().euro5 || 0 , date: data[i].data().date},
              {type: 'Petrol',price:data[i].data().petrol || 0, date: data[i].data().date},
            ]
            flag = false
            break
          }
        }
        if(flag){
          this.fuelTypes = [
            {type: 'Diesel',price:data[0].data().diesel || 0, date: data[0].data().date},
            {type: 'Euro 5',price:data[0].data().euro5 || 0 , date: data[0].data().date},
            {type: 'Petrol',price:data[0].data().petrol || 0, date: data[0].data().date},
          ]
        }
      })
    },
    WIALON(){
      let _this = this
      if (
        wialon.core.Session.getInstance().__cT == null ||
        wialon.core.Session.getInstance().__cT.length == 0
      ) {
        wialon.core.Session.getInstance().initSession(
          "https://hst-api.wialon.com"
        );
        wialon.core.Session.getInstance().loginToken(
          _this.token,
          "", // try to login
          function(code) {
            if (code) {
              EventBus.$emit("LOG_OUT");
              // _this.logout()
              // alert(wialon.core.Errors.getErrorText(code))
              return;
            }
            _this.SET_SESSION_ID(wialon.core.Session.getInstance().__cT);
            _this.getUnits()
          }
        );
      }else{
        _this.getUnits()
      }
    },
    enableEditing(){
      this.editMode = true
      this.editingRows = new Array(this.editingRows.length).fill(true)
    },
    disableEditing(){
      
      let _this = this
      this.editMode = false
      this.editingRows = new Array(this.editingRows.length).fill(false)

      // console.log(wialon.util.DateTime.getTimezoneOffset())
      let i = -1;
      this.fuelReportData.forEach(data=>{
        i++
        if(this.rowsTouchedForEditing[i] == true){
          // console.log(this.selectedUnit.getId())
          if(data.bill.trim().length == 0) data.bill = '-'
          if(!data.bill.includes('-')){
            let dt = moment(data.time).tz('Etc/GMT+8').subtract(0,'hours').format('X')
            console.log(dt)
            // let dt = moment(data.time).format('X')
            let pos = this.selectedUnit.getPosition()
            let desc = `Fuel filling of ${parseFloat(data.bill)} l to the amount of ${parseFloat(data.billRM)} was made.`
            let unit = this.sess.getItem(this.selectedUnit.getId());
            let defRep = this.fuelDefaultReports.find(x=>x.time==data.time)
            let defIndex = this.fuelDefaultReports.findIndex(x=>x.time==data.time)
            let customRenderer = this.sess.getRenderer();
            console.log('def-rep',defRep.bill)
            if(defRep.bill != ''){
              customRenderer.setLocale(wialon.util.DateTime.getTimezone(),"en",{flags:256,formatDate:"%Y-%m-%E %H:%M:%S"}, (code) => { 
                if(code){
                  console.log(wialon.core.Errors.getErrorText(code))
                }
                unit.registryFuelFillingEvent(parseInt(dt), desc, 0, 0, data.location,(-1)*parseFloat(data.bill), (-1)*parseFloat(data.billRM), 30, function (code) {  
                  if (code) {
                    console.log(wialon.core.Errors.getErrorText(code));
                  }
                });  
              })
            }
            customRenderer.setLocale(wialon.util.DateTime.getTimezone(),"en",{flags:256,formatDate:"%Y-%m-%E %H:%M:%S"}, (code) => { 
              if(code){
                console.log(wialon.core.Errors.getErrorText(code))
              }  
              unit.registryFuelFillingEvent(parseInt(dt), desc, 0, 0, data.location,parseFloat(data.bill), parseFloat(data.billRM), 30, function (code) {  
                if (code) {
                  console.log(wialon.core.Errors.getErrorText(code));
                }
                _this.fuelDefaultReports[defIndex] = Object.assign({},data)
              });
            })
          }
        }
      })
      _this.rowsTouchedForEditing = new Array(this.fuelReportData.length).fill(false)
    },
    onFuelReportTableFiltered(filteredItems) {
      this.fuelReportTableSettings.totalRows = filteredItems.length;
      this.fuelReportTableSettings.currentPage = 1;
    },
    onFuelReportSummaryTableFiltered(filteredItems) {
      this.fuelReportSummaryTableSettings.totalRows = filteredItems.length;
      this.fuelReportSummaryTableSettings.currentPage = 1;
    },
    calculateDiffL(item){
      let d = (parseFloat(item.bill.split('lt')[0]) - parseFloat(item.filled.split('lt')[0])).toFixed(2)
      if(isNaN(d)) return '-'
      return d
    },
    calculatefilledRM(item){
      let d = (parseFloat(item.filled.split('lt')[0]) * parseFloat(item.fuelPrice)).toFixed(2)
      if(isNaN(d)) return '-'
      return d
    },
    calculateAccuracy(item){
      let d = ((parseFloat(item.filled.split('lt')[0])/parseFloat(item.bill.split('lt')[0]))*100).toFixed(2)
      if(isNaN(d)) return '-'
      return d
    },
    calculateBillRM(item){
      if(item.bill.trim().length==0) {
        item.billRM = ''
      }else{
        let d = ((parseFloat(item.bill.split('lt')[0])*parseFloat(item.fuelPrice))).toFixed(2)
        if(isNaN(d)) {
          item.billRM = ''
        }else{
          item.billRM = d
        }
      }
      this.$forceUpdate()
      return item.billRM
    },
    calculateBill(item){
      if(item.billRM.trim().length==0) {
        item.bill = ''
        return
      }
      item.bill = (item.billRM/item.fuelPrice).toFixed(2)
    },
    async getUnits() {
      this.units = [];
      let _this = this;
      _this.sess = wialon.core.Session.getInstance();
      _this.sess.loadLibrary("userNotifications"); //wialon.item.User.dataFlag.notifications
      _this.sess.loadLibrary("itemCustomFields"); //wialon.item.Item.dataFlag.customFields    //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemAdminFields"); //wialon.item.Item.dataFlag.adminFields //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemProfileFields"); //wialon.item.Item.dataFlag.profileFields //sample: {id: X, n: “name”, v: “value”}
      _this.sess.loadLibrary("itemIcon"); //require wialon.item.Item.dataFlag.image
      _this.sess.loadLibrary("unitCommandDefinitions"); //wialon.item.Unit.dataFlag.commandAliases   //sample: {id: X, n: “my command”, c: “query_pos”, l: “gsm”, p: ””, a: 0×1}
      _this.sess.loadLibrary("unitSensors"); //wialon.item.Unit.dataFlag.sensors    //sample: {id: X, n: “my sensor”, t: “unk”, d: ””, m: “km/h”, p: “param”, f: 0, c: ””, vt: 0, vs: 0, tbl: [[0, 1, 2]]}
      _this.sess.loadLibrary("unitServiceIntervals"); //wialon.item.Unit.dataFlag.maintenance

      _this.sess.loadLibrary("unitTripDetector"); //
      _this.sess.loadLibrary("unitMessagesFilter"); //
      _this.sess.loadLibrary("unitReportSettings");
      _this.sess.loadLibrary("unitFuelSettings");
      _this.sess.loadLibrary("resourceNotifications"); //require wialon.item.Resource.dataFlag.notifications

      _this.sess.loadLibrary("resourceJobs"); //wialon.item.Resource.dataFlag.jobs
      _this.sess.loadLibrary("resourcePois"); //wialon.item.Resource.dataFlag.poi
      _this.sess.loadLibrary("resourceZones"); //wialon.item.Resource.dataFlag.zones
      _this.sess.loadLibrary("resourceZoneGroups"); //wialon.item.Resource.dataFlag.zoneGroups
      _this.sess.loadLibrary("resourceDrivers"); //wialon.item.Resource.dataFlag.drivers
      _this.sess.loadLibrary("resourceDriverGroups"); // wialon.item.Resource.dataFlag.driverGroups
      _this.sess.loadLibrary("resourceTrailers"); //wialon.item.Resource.dataFlag.trailers
      _this.sess.loadLibrary("resourceTrailerGroups"); //wialon.item.Resource.dataFlag.trailerGroups
      _this.sess.loadLibrary("resourceAccounts");
      _this.sess.loadLibrary("resourceReports");
      _this.sess.loadLibrary("unitEvents");
      _this.sess.loadLibrary("mobileApps");
      _this.sess.loadLibrary("unitEventRegistrar");
      let unitFlags =
      wialon.item.MUnitEventRegistrar|
        wialon.item.Item.dataFlag.base |
        0x00000001 |
        0x00000002 |
        0x00000004 |
        0x00000008 |
        0x00000010 |
        0x00000020 |
        0x00000040 |
        0x00000080 |
        0x00000100 |
        0x00000200 |
        0x00000400 |
        0x00001000 |
        0x00002000 |
        0x00008000 |
        0x00020000 |
        0x00080000 |
        0x00100000 |
        0x00200000 |
        0x00400000 |
        0x00800000 |
        0x00010000 |
        0x00100000 |
        0x0600 |
        0x0300 |
        0x0500 |
        0x0900 |
        0x1000 |
        0x1 |
        0x2 |
        0x20 |
        0x200 |
        0x4000 |
        0x400000000 |
        0x400000 |
        0x1000000 |
        0x10000000 |
        0x40000000 |
        0x200000000 |
        0x800000000 |
        0x100000000000 |
        0x10000000 |
        0x200000 |
        0x100000 |
        0x4000000 |
        0x10 |
        0x40 |
        0x80 |
        0x100 |
        0x8000 |
        0x2000000 |
        0x800000000 |
        0x200000 |
        0x800000 |
        0x2000000 |
        0x4 |
        0x20000000 |
        0x4000000000 |
        0x100000 |
        0x400000 |
        0x100000 |
        0x200000 |
        0x8000000 |
        0x20000000 |
        0x80000000 |
        0x400000000 |
        0x1000000000 |
        0x200000000000 |
        0x8 |
        0x800 |
        0x1000 |
        0x2000 |
        0x100000 |
        0x200000 |
        0x400000 |
        0x800000 |
        0x40000000 |
        0x80000000 |
        0x1000000 |
        0x400 |
        0x4000000 |
        0x8000000 |
        0x1000000000 |
        0x2000000000 |
        0x8000000000 |
        0x100000000 |
        wialon.item.Unit.dataFlag.commandAliases |
        wialon.item.Unit.dataFlag.sensors |
        wialon.item.Unit.dataFlag.maintenance |
        wialon.item.Item.dataFlag.customFields |
        wialon.item.Item.dataFlag.adminFields |
        wialon.item.Item.dataFlag.profileFields |
        wialon.item.Item.dataFlag.image |
        wialon.item.Resource.dataFlag.jobs |
        wialon.item.Resource.dataFlag.poi |
        wialon.item.Resource.dataFlag.zones |
        wialon.item.Resource.dataFlag.zoneGroups |
        wialon.item.Resource.dataFlag.drivers |
        wialon.item.Resource.dataFlag.driverGroups |
        wialon.item.Resource.dataFlag.trailers |
        wialon.item.Resource.dataFlag.trailerGroups |
        wialon.item.Unit.accessFlag.viewCmdAliases |
        wialon.item.Unit.accessFlag.executeCommands |
        wialon.item.Unit.accessFlag.editCmdAliases |
        wialon.item.Unit.dataFlag.commands;

      _this.sess.updateDataFlags(
        [
          { type: "type", data: "avl_unit", flags: unitFlags, mode: 0 },
          { type: "type", data: "avl_resource", flags: unitFlags, mode: 0 }
        ],
        async function(code) {
          if (code) {
            console.log(wialon.core.Errors.getErrorText(code));
            _this.WIALON()
            return;
          }
          var resources = _this.sess.getItems("avl_resource");
          let allDrivers = {};
          let allTrailers = {};
          console.log("RESOURCES", resources);
          resources.forEach(resource => {
            if (resource.getName() == "Fuel Report") {
              console.log("FUEL-RESOURCE", resource);
              _this.fuelRes = resource;
              _this.fuelReportObj = resource[0];
            }
          });
          _this.units = _this.sess.getItems("avl_unit");
          _this.units.sort((a,b)=>{
            if(a.getName()>b.getName()) return 1
            if(a.getName()<b.getName()) return -1
            return 0
          })
          _this.loading = false;
          console.log(_this.loading)
          _this.$forceUpdate();
        }
      );
    },
    openFuelReport(unit) {
      let fuelType =  this.fuelTypes.find(x=>x.selected==true)
      console.log("fuelType",fuelType)
      let fT = fuelType == null ? this.fuelTypes[0].type : fuelType.type
      let fP = fuelType == null ? this.fuelTypes[0].price :  fuelType.price
      if(this.selectedUnit==null)return
      let _this = this;
      this.fetchingReport = true
      // let ydm = moment().format("YYYY-MM-DD");
      let from = new Date(this.fromDate + " 00:00").getTime() / 1000;
      let to = new Date(this.toDate + " 23:59").getTime() / 1000;

      this.selectedDate.from = this.fromDate
      this.selectedDate.to = this.toDate
      
      // console.log("YDM",ydm,sess.getServerTime(),from,to)
      console.log(unit);
      let uId = unit.getId();
      let template = this.fuelRes.getReport(1);
      console.log("FUEL-RES", this.fuelRes);
      console.log(
        moment(from * 1000).format("YYYY-MM-DD HH:mm:ss"),
        moment(to * 1000).format("YYYY-MM-DD HH:mm:ss")
      );
      // specify time interval object
      let interval = {
        from: from,
        to: to,
        flags: wialon.item.MReport.intervalFlag.absolute
      };
      this.fuelRes.execReport(
        template,
        uId,
        0,
        interval, // execute selected report
        function(code, data) {
          // execReport template
          if (code) {
            console.log("ERROR->", wialon.core.Errors.getErrorText(code));
            return;
          } // exit i
          var tables = data.getTables(); // get report tables
          if (!tables) return; // exit if no tables
          // console.log("datas",data)
          console.log("tables", tables);
          for (var i = 0; i < tables.length; i++) {
            if(tables[i].name == "unit_generic" && tables[i].label == "Summary") {
              _this.reportSummary = {
                grouping: tables[i].total[1],
                mileage: tables[i].total[2],
                consumed: tables[i].total[3],
                avgConsumption: tables[i].total[4],
                kmL: tables[i].total[5],
                filled: tables[i].total[6],
                engineHours: tables[i].total[7],
                moveTime: tables[i].total[8],
                avgSpeed: tables[i].total[9],
                maxSpeed: tables[i].total[10]
              }
              _this.$forceUpdate()
            }
            if(tables[i].name != "unit_fillings") continue
            // cycle on tables
            // console.log("table",tables[i])
            let config = {
              type: "range",
              data: { from: 0, to: tables[i].rows, level: 0 }
            };
            data.selectRows(
              i,
              config, // get Table rows
              qx.lang.Function.bind(
                async function(i, code, rows) {
                  // getTableRows callback
                  console.log("all-rows", rows);
                  if (code) {
                    console.log(
                      "ERROR_____@",
                      wialon.core.Errors.getErrorText(code)
                    );
                    return;
                  } // exit if error code
                  let rowIndex = -1;
                  let rDs = [];
                  this.isFuelReportTableBusy = true;
                  for (var j in rows) {
                    // cycle on table rows
                    rowIndex++;
                    if (typeof rows[j].c == "undefined") continue; // skip empty rows
                    let obj = {
                      sl: rowIndex + 1,
                      time:
                        "object" === typeof rows[j].c[1]
                          ? rows[j].c[1].t
                          : rows[j].c[1],
                      location:
                        "object" === typeof rows[j].c[2]
                          ? rows[j].c[2].t
                          : rows[j].c[2],
                      initFuelLevel: rows[j].c[3],
                      finalFuelLevel: rows[j].c[4],
                      filled: rows[j].c[5],
                      bill: rows[j].c[6] == null ? '' : rows[j].c[6].includes("-") ? "" : rows[j].c[6],
                      billRM: '',
                      diffL:
                        rows[j].c[7] == null || rows[j].c[7].length == 0
                          ? "-"
                          : rows[j].c[7],
                      accuracy:
                        rows[j].c[8] == null || rows[j].c[8].length == 0
                          ? "-"
                          : rows[j].c[8],
                      fuelType: fT,
                      fuelPrice: fP,
                      fuelTypes: _this.fuelTypes
                    };
                    for(let fi=_this.fuelTypesFromDB.length-1;fi>-1;fi--){
                      let t = moment(moment(obj.time).format('YYYY-MM-DD 00:00:00')).format('X')
                      let ft = moment(moment(_this.fuelTypesFromDB[fi].date*1000).tz('Etc/GMT+0').format('YYYY-MM-DD 00:00:00')).format('X')
                      if(t<ft){
                        console.log(moment(obj.time).format('YYYY-MM-DD 00:00:00'),moment(_this.fuelTypesFromDB[fi].date*1000).tz('Etc/GMT+0').format('YYYY-MM-DD 00:00:00'))
                        let types = [
                          {type: 'Diesel',price:_this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].diesel, date: _this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].date},
                          {type: 'Euro 5',price:_this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].euro5 , date: _this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].date},
                          {type: 'Petrol',price:_this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].petrol, date: _this.fuelTypesFromDB[fi==_this.fuelTypesFromDB.length-1?_this.fuelTypesFromDB.length-1:fi+1].date},
                        ]
                        obj.fuelTypes = types
                        obj.fuelType = types[0].type
                        obj.fuelPrice = types[0].price
                        break
                      }
                    }
                    _this.calculateBillRM(obj)
                    _this.fuelDefaultReports.push(Object.assign({},obj))
                    rDs.push(obj);
                  }
                  _this.fuelReportData = [];
                  _this.fuelReportData = rDs;
                  _this.editingRows = new Array(rDs.length).fill(false)
                  _this.rowsTouchedForEditing = new Array(rDs.length).fill(false)
                  _this.isFuelReportTableBusy = false;
                  _this.fetchingReport = false
                  _this.$forceUpdate();
                },
                this,
                ""
              )
            );
          }
          console.log("data",data,data.getAttachments());
          data.renderJSON(1, 1176, 0, 0, 0, function(chartErr, chartData) {
            let arr = [];
            let totX = chartData.datasets[0].data.x;
            let totY = chartData.datasets[0].data.y;
            for (let xi = 0; xi < totX.length; xi++) {
              arr.push([totX[xi], totY[xi]]);
            }
            // let trace1 = {
            //   x: totX,
            //   y: totY,
            //   type: 'scatter'
            // };
            // Plotly.newPlot('chart', [trace1]);
            _this.fuelChartSeries = [];
            _this.fuelChartSeries.push({
              name: 'Litres',
              type: 'line',
              data: arr
            });
            // _this.fuelChartSeries.push({
            //   name: 'Volume',
            //   type: 'Column',
            //   data: chartData.background_regions[0].regions
            // });
          });
          _this.fetchingReport = false
        }
      );
      // this.getTemplateObject('unit_trips','Trips',unit.id,this.fuelRes)
    },
    getFuelReportRows(result) {
      let _this = this;
      var tables = result.getTables(); // get report tables
      if (!tables) return; // exit if no tables
      // console.log("results",result)
      console.log("tables", tables);
      for (var i = 0; i < tables.length; i++) {
        // cycle on tables
        // console.log("table",tables[i])
        result.getTableRows(
          i,
          0,
          tables[i].rows, // get Table rows
          qx.lang.Function.bind(
            async function(i, code, rows) {
              // getTableRows callback
              console.log("all-rows", rows);
              if (code) {
                console.log(
                  "ERROR_____@",
                  wialon.core.Errors.getErrorText(code)
                );
                return;
              } // exit if error code
              let rowIndex = -1;
              for (var j in rows) {
                // cycle on table rows
                rowIndex++;
              }
            },
            this,
            ""
          )
        );
      }
    }
  },
  computed:{
    ...mapGetters("loginInfo", ["isLogged", "token", "sessionId"]),
    fuelReportSummaryData(){
      if(this.reportSummary==null) return []
      return [this.reportSummary]
    },
    dateRange(){
      console.log(this.fromDate,this.toDate,this.selectedDate)
      let from = moment(this.selectedDate.from).format("D MMM YYYY")
      let to = moment(this.selectedDate.to).format("D MMM YYYY")
      return from + ' - ' + to
    },
    selectedUnitName(){
      if(this.selectedUnit == null) return ''
      console.log("selected-unit",this.selectedUnit)
      let from = moment(this.selectedDate.from).format("D/MM/YYYY")
      let to = moment(this.selectedDate.to).format("D/MM/YYYY")
      let name = this.selectedUnit.getName()
      return `${name}_refuel_report_from_${from}_to${to}`
    },
    excelTitle(){
      let from = moment(this.selectedDate.from).format("D/MM/YYYY")
      let to = moment(this.selectedDate.to).format("D/MM/YYYY")
      let name = this.selectedUnit.getName()
      return [
        'Refuel Report',
        'vehicle plate number: '+ name,
        'Report from: ' + from + ' to: ' + to
      ]
    },
  },
};
</script>

<style>
</style>