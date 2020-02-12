<template>
  <!-- <div class="pb-5 pt-3" :style="{height:windowHeight+'px!important',overflow:'auto'}"> -->
  <div class="pb-5 pt-3">
    <!-- <button @click="test">TEST</button> -->

    <!-- <span>{{JSON.stringify(unitData,null,2)}}</span> -->

    <div>
      <b-card class="main-card mb-4">
        <div class="d-flex flex-row justify-end"></div>
        <b-row>
          <b-col md="6" class="mb-2">
            <b-form-group horizontal label="Filter" class="mb-0">
              <b-input-group>
                <b-form-input v-model="tableSettings.filter" placeholder="Type to Search" />
                <b-input-group-append>
                  <b-btn :disabled="!tableSettings.filter" @click="tableSettings.filter = ''">Clear</b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="mb-2">
            <b-row>
              <b-col md="3">
                <b-form-group horizontal label="Rows" class="mb-0">
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
              <b-col md="9">
                <button class="btn-secondary btn mt-3" @click="getUnits(true)">Refresh</button>
                <b-dropdown text="Show/Hide Parameter" variant="secondary" class="m-2 mx-2 mt-4">
                  <div class="px-4">
                    <b-form-checkbox
                      :checked="field.selected"
                      @change="showHideParameterCheckBoxChange(i)"
                      v-for="(field,i) in dashboardTableKeys"
                      :key="i"
                    >{{field.label}}</b-form-checkbox>
                  </div>
                </b-dropdown>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table
          class="caption w-100 data-table"
          sticky-header
          head-variant="light"
          hover
          striped
          show-empty
          small
          responsive
          :items="unitData"
          :fields="filteredHeaders"
          :filter="tableSettings.filter"
          :sort-by.sync="tableSettings.sortBy"
          :sort-desc.sync="tableSettings.sortDesc"
          :sort-direction="tableSettings.sortDirection"
          @filtered="onFiltered"
          :busy="isTableBusy"
        >
          <template v-slot:cell(sl)="row">
            <span>
              {{
                row.index + 1
              }}
            </span>
          </template>
          <template v-slot:cell(power)="row">
            <img style="height:22px" v-if="row.item.power != '-'" :src="require('@/assets/icons/power-green.png')"  />
            <img style="height:22px" v-else :src="require('@/assets/icons/power-red.png')" />
          </template>
          <template v-slot:cell(status)="row">
            <span style="margin-right: 2px;" :class="[getMovingStatusClass(row.item)]"></span>
          </template>
          <template v-slot:cell(onlineStatus)="row">
            <span
              :class="[row.item.onlineStatus == 0 ? 'icon-gprs-state red--text' : 'icon-gprs-state green--text']"
            ></span>
          </template>
          <template v-slot:cell(lastUpdated)="row">
            <span class="mr-1">{{getLastUpdatedUnit(row.item)}}</span>
            <!-- <span>{{formatDateTime(row.item.lastUpdated)}}</span> -->
          </template>
          <template v-slot:cell(speed)="row">
            <span v-if="!row.item.movingState.is_stale" >{{row.item.speed}}</span>
          </template>
          <template v-slot:cell(locationAddress)="row">
            <span @click="showUnitOnMap(row.item.id)">{{row.item.locationAddress}}</span>
          </template>
          <template v-slot:cell(idlling)="row">
            <!-- {{row.item.status}} -   {{row.item.idlling}} - {{row.item.movingState.is_ignition_on}} -->
            <span
              v-if="row.item.status == 1 && row.item.speed==0 && !row.item.movingState.is_stale"
            >{{row.item.idlling}}</span>
            <span v-else>-</span>
          </template>
          <template v-slot:cell(driver)="row">
            <span>
              {{
              row.item.driver != "-" ? row.item.driver.name : row.item.driver
              }}
            </span>
          </template>
          <template v-slot:cell(coordinates)="row">
            <span>
              {{
              row.item.coordinates != "-" ? `${row.item.coordinates.x} , ${row.item.coordinates.y}` : row.item.driver
              }}
            </span>
          </template>
          <template v-slot:cell(fuel1L)="row">
            <span>
              {{
              row.item.fuel1L
              }}
            </span>
          </template>
          <template v-slot:cell(pto)="row">
            <span>
              <span>
                {{
                  row.item.pto == 0 ? 'Off' : row.item.pto == 1 ? 'On':'-'
                }}
              </span>
            </span>
          </template>
          <template v-slot:cell(startTime)="row">
            <span>
              <span>
                {{
                  dateTimeToGmt8(row.item.startTime)
                }}
              </span>
            </span>
          </template>
          <template v-slot:cell(media)="row">
            <span>
              <span class="icon-picture icon-disabled"></span>
            </span>
          </template>
          <template v-slot:cell(command)="row">
            <span @click="openCommandDialog(row.item)" class="icon-cmd-exec-gprs"></span>
          </template>
          <template v-slot:cell(video)="row">
            <span>
              <span class="icon-video icon-disabled"></span>
            </span>
          </template>

          <template v-slot:cell(battery)="row">
            <div>
              <!-- {{row.item.battery}} -->
              <span v-if="!isNaN(row.item.battery)" :class="[batteryClass(row.item.battery)]"></span>
              <span v-else class="icon-sensor-uknown"></span>
            </div>
          </template>
          <div slot="table-busy" class="text-center my-2">
            <b-spinner class="align-middle"></b-spinner>&nbsp;
            <strong>Loading...</strong>
          </div>
        </b-table>
      </b-card>
    </div>

    <v-dialog v-model="commandDialog" max-width="500px">
      <v-card v-if="!fetchingAvlCommands">
        <v-card-text v-if="selectedUnit!=null">
          {{selectedUnit.availableCommands}}
          <v-data-table
            :headers="cmdHeaders"
            :items="selectedUnit.availableCommands"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td></td>
              <td>
                {{props.item.n}}
              </td>
              <td>
                <span class="icon-ok" ></span>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="error-btn white--text" @click="closeCommandDialog">Cancel</v-btn>
          <v-btn class="blue-grey darken-4 white--text" @click="closeCommandDialog">Ok</v-btn>
        </v-card-actions>
      </v-card>
      <div v-else class="d-flex flenx-row justify-center align-center">
        <pulse-loader
          :loading="fetchingAvlCommands"
          color="#162337"
          loadersize="5px"
          class="d-inline"
          style="flex:unset!important"
        ></pulse-loader>
      </div>
    </v-dialog>

    <v-dialog id="map-dialog" :persistent="true" v-model="openMapDialog" width="800">
      <v-card>
        <v-toolbar color="tenant">
          <v-spacer></v-spacer>
          <v-toolbar-title>Map</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon @click="closeMapModal">clear</v-icon>
        </v-toolbar>
        <v-card-text class="px-1 py-3">
          <div id="map"></div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog id="fuel-report-dialog" :persistent="true" v-model="fuelReportDialog" width="1200">
      
    </v-dialog>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapGetters, mapMutations } from "vuex";
import moment from "moment";
import mtz from "moment-timezone";
import EventBus from "@/services/eventBus";

export default {
  components: {
    PulseLoader,
  },
  data() {
    return {
      fetchingAvlCommands: false,
      units: [],
      idlling: {},
      unitData: [], // [ { "id": 14919959, "onlineStatus": 1, "satelliteStrength": 9, "vehicleNo": "WVV9888", "vehicleGroupName": "", "lastUpdated": 1573972831, "speed": 0, "totalMileage": 328229, "todayMileage": "", "idlling": "", "locationAddress": "Jalan Perubatan 3, Pandan Indah, Kuala Lumpur, Malaysia", "coordinates": { "x": 101.750977778, "y": 3.12837111112 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "Trailer 1101", "driver": { "id": 1, "name": "Dettori Wong", "icon": "https://hst-api.wialon.com/avl_driver_image/16446904/1/32/1/0.png?sid=091572774743d4258dde5cd30248ba9f" }, "rfid": "in27", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "__app__chatterbox_msg_gsm", "c": "custom_msg", "l": "gsm", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "__app__chatterbox_coords_vrt", "c": "custom_msg", "l": "vrt", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "__app__chatterbox_coords_udp", "c": "custom_msg", "l": "udp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "4": { "id": 4, "n": "__app__chatterbox_coords_tcp", "c": "send_position", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "5": { "id": 5, "n": "Ignition Cut off", "c": "block_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "6": { "id": 6, "n": "Ignition restore", "c": "unblock_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "7": { "id": 7, "n": "Query Position", "c": "query_pos", "l": "", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "8": { "id": 8, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "status": 0, "battery": "100.00" }, { "id": 16381781, "onlineStatus": 1, "satelliteStrength": 10, "vehicleNo": "WSG7441", "vehicleGroupName": "", "lastUpdated": 1573915439, "speed": 0, "totalMileage": 58570, "todayMileage": "", "idlling": "", "locationAddress": "J32, Muar, Malaysia", "coordinates": { "x": 102.581297778, "y": 2.07680444445 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "__app__chatterbox_msg_gsm", "c": "custom_msg", "l": "gsm", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "__app__chatterbox_coords_vrt", "c": "custom_msg", "l": "vrt", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "__app__chatterbox_coords_udp", "c": "custom_msg", "l": "udp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "4": { "id": 4, "n": "Ignition Cut Off", "c": "block_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "5": { "id": 5, "n": "Ignition restore", "c": "unblock_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "6": { "id": 6, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "status": 0, "battery": "100.00" }, { "id": 16381865, "onlineStatus": 1, "satelliteStrength": 11, "vehicleNo": "JBM1111", "vehicleGroupName": "", "lastUpdated": 1573973891, "speed": 0, "totalMileage": 39147, "todayMileage": "", "idlling": "", "locationAddress": "J32, Muar, Malaysia", "coordinates": { "x": 102.581333333, "y": 2.07681388888 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "__app__chatterbox_msg_gsm", "c": "custom_msg", "l": "gsm", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "__app__chatterbox_coords_vrt", "c": "custom_msg", "l": "vrt", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "__app__chatterbox_coords_udp", "c": "custom_msg", "l": "udp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "4": { "id": 4, "n": "Ignition Cut off", "c": "block_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "5": { "id": 5, "n": "Ignition Restore", "c": "unblock_engine", "l": "", "p": "", "a": 1, "f": 1, "canExecute": false, "canAccessCmd": true }, "6": { "id": 6, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "status": 0, "battery": "100.00" }, { "id": 19216530, "onlineStatus": 1, "satelliteStrength": 9, "vehicleNo": "AJW889", "vehicleGroupName": "", "lastUpdated": 1573971890, "speed": 0, "totalMileage": 324878, "todayMileage": "", "idlling": "", "locationAddress": "Lorong Kenari 10\\/2B, Taman Kenari, Kulim, Malaysia", "coordinates": { "x": 100.570355556, "y": 5.36514 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "__app__chatterbox_msg_gsm", "c": "custom_msg", "l": "gsm", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "__app__chatterbox_msg_virt", "c": "custom_msg", "l": "vrt", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "status": "-", "battery": "100.00" }, { "id": 19457824, "onlineStatus": 0, "satelliteStrength": 10, "vehicleNo": "PORTABLE 8934072579000394427", "vehicleGroupName": "", "lastUpdated": 1573972071, "speed": 0, "totalMileage": 6461, "todayMileage": "", "idlling": "", "locationAddress": "Jalan Perubatan 2, Pandan Indah, Kuala Lumpur, Malaysia", "coordinates": { "x": 101.75089, "y": 3.12842 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "__app__chatterbox_msg_gsm", "c": "custom_msg", "l": "gsm", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "__app__chatterbox_msg_virt", "c": "custom_msg", "l": "vrt", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "battery": "63.00" }, { "id": 20022689, "onlineStatus": 1, "satelliteStrength": 10, "vehicleNo": "PPA7699", "vehicleGroupName": "", "lastUpdated": 1573970323, "speed": 0, "totalMileage": 8645, "todayMileage": "", "idlling": "", "locationAddress": "Ah18, Kampung Kubang Pak Amin, Pasir Mas, Malaysia", "coordinates": { "x": 102.192053333, "y": 6.05411388888 }, "fuel1L": "-", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "-", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": { "1": { "id": 1, "n": "Query position", "c": "query_pos", "l": "tcp", "p": "", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "2": { "id": 2, "n": "fuel 900", "c": "custom_msg", "l": "tcp", "p": "adt,on,900#", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true }, "3": { "id": 3, "n": "fuel 60", "c": "custom_msg", "l": "tcp", "p": "adt,on,60#", "a": 1, "f": 0, "canExecute": false, "canAccessCmd": true } }, "status": "-", "battery": "100.00" }, { "id": 20137225, "onlineStatus": 1, "satelliteStrength": 10, "vehicleNo": "PHE2759", "vehicleGroupName": "", "lastUpdated": 1573975694, "speed": 52, "totalMileage": 1467, "todayMileage": "", "idlling": "", "locationAddress": "Lebuhraya Utara - Selatan, Kuala Kangsar, Malaysia", "coordinates": { "x": 101.01774, "y": 4.69266 }, "fuel1L": "25.40", "fuel1Percent": "-", "fuel2L": "-", "fuel2Percent": "-", "temperature": "-", "trailerId": "-", "driver": "-", "rfid": "-", "pto": "io_3", "command": "-", "startTime": "-", "media": "-", "video": "-", "availableCommands": {}, "status": 1 } ],
      fields: [
        { key: "sl", label: "No.", sortable: true, thClass: 'text-center', tdClass: 'text-center pt-7px', },
        { key: "power", label: "Power", sortable: true, thClass: 'text-center', tdClass: 'text-center pt-7px', },
        { key: "status", label: "Status", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "onlineStatus", label: "Network", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "satelliteStrength", label: "Setalite", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "vehicleNo", label: "Vehicle No.", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "vehicleGroupName", label: "Group", sortable: true, },
        { key: "lastUpdated", label: "Last Updated", sortable: true, },
        {
          key: "speed",
          label: "Speed",
          sortable: true,
          tdClass: (value, key, item) => {
            if (value > 90 && !item.movingState.is_stale) return "text-center bg-warning";
            return 'text-center'
          }
          , thClass: 'text-center',
        },
        { key: "totalMileage", label: "Mileage", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "todayMileage", label: "Today Mileage", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "lastActive", label: "Last Active", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        {
          key: "idlling",
          label: "Idlling",
          sortable: true,
          tdClass: (value, key, item) => {
            let v = parseInt(value.replace(":", ""));
            if (
              v > 30 &&
              (item.status == 1 && item.speed == 0 && !item.movingState.is_stale)
            )
              return "text-center red lighten-1 white--text";
              return 'text-center'
          }, thClass: 'text-center',
        },
        { key: "locationAddress", label: "Location", sortable: true },
        { key: "battery", label: "Battery", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "coordinates", label: "Coordinate", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "fuel1L", label: "Fuel 1(L)", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "fuel1Percent", label: "Fuel 1(%)", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "fuel2L", label: "Fuel 2(L)", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "fuel2Percent", label: "Fuel 2(%)", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "temperature", label: "Temperature", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "trailerId", label: "Trailer ID", sortable: true },
        { key: "driver", label: "Driver", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "rfid", label: "RFID", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "pto", label: "PTO", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "command", label: "Command", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "startTime", label: "Start Time", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "media", label: "Media", sortable: true, thClass: 'text-center', tdClass: 'text-center', },
        { key: "video", label: "Video", sortable: true, thClass: 'text-center', tdClass: 'text-center', }
      ],
      tableSettings: {
        currentPage: 1,
        perPage: 100,
        totalRows: 0,
        pageOptions: [100, 250, 500, 1000],
        sortBy: 'sl',
        sortDesc: false,
        sortDirection: "asc",
        filter: null
      },
      isTableBusy: true,

      sess: null,

      lastUpdate: new Date().getTime(),
      timeDiff: "",
      sec: 0,

      selectedUnit: null,

      filteredHeaders: [],

      openMapDialog: true,
      map: null,
      marker: null,
      latitude: 3.519863,
      longitude: 101.538116,
      zoom: 13,
      infowindow: null,
      infoWindowContent: "",
      timer: null,

      commandDialog: false,
      availableCommands: [],
      cmdHeaders: [
        {
          text: '',
          align: 'left',
          value: 'selected'
        },
        { text: 'Available Commands', value: 'n',sortable:true },
        { text: 'Supported', value: 'a' },
      ],

      fuelRes: null,
      fuelReportObj: null,
      fuelChartOptions: {
        chart: {
          id: 'fuel-report-chart-1',
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'full',
        },
        xaxis: {
          labels: {
            formatter: function (val) {
              return moment(val*1000).format("MMM DD HH:mm");
            },
          },
          title: {
            text: 'Time'
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val).toFixed(0);
            },
          },
          title: {
            text: 'Volume , Liters'
          },
        },
        
      },
      fuelReportDialog: false,
      fuelChartSeries: [],

      fuelReportTableHeader: [
        { key: "sl",              label: "No.",                 sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "time",            label: "Time",                sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "location",        label: "Location",            sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "initFuelLevel",   label: "Initial Fuel Level",  sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "finalFuelLevel",  label: "Final Fuel Level",    sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "filled",          label: "Filled",              sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "bill",            label: "Bill",                sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "diffL",           label: "Different Lt.",       sortable: true, thClass: 'text-left', tdClass: 'text-left', },
        { key: "accuracy",        label: "Accuracy %",          sortable: true, thClass: 'text-left', tdClass: 'text-left', },
      ],
      fuelReportData: [],
      fuelReportFieldsForXcel: {
        "SL": "sl",
        "Time": "time",
        "Location": "location",
        "Initial Fuel Level": "initFuelLevel",
        "Final Fuel Level": "finalFuelLevel",
        "Filled": "filled",
        "Bill": "bill",
        "Different Lt.": "diffL",
        "Accuracy": "accuracy",
      },

      loadDataInterval: null,

    };
  },
  created() {
    let _this = this
    window.onbeforeunload = this.removeIntervals
    this.filteredHeaders = this.fields;
    this.setTableHeaders()
  },
  mounted() {
    // this.isTableBusy = false
    let _this = this;
    this.initMap();
    this.closeMapModal();
    if (this.token.length == 0 && this.$route.query.access_token) {
      this.SET_TOKEN(this.$route.query.access_token);
    }
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
          wialon.render.Renderer.prototype.setLocale(wialon.util.DateTime.getTimezoneOffset(),"en",{flags:0,formatDate:"%H"},function (e,d){
            console.log(e);console.log(d)
            _this.getUnits(true);
            _this.loadDataInterval = setInterval(() => {
              _this.getUnits(false);
            }, 1 * 60 * 1000);
          })
        }
      );
    }else{
      wialon.render.Renderer.prototype.setLocale(wialon.util.DateTime.getTimezoneOffset(),"en",{flags:0,formatDate:"%H"},function (e,d){
            console.log(e);console.log(d)
            _this.getUnits(true);
            _this.loadDataInterval = setInterval(() => {
              _this.getUnits(false);
            }, 1 * 60 * 1000);
          })
    }
    if (this.sessionId.length == 0) {
      this.SET_SESSION_ID(wialon.core.Session.getInstance().__cT);
    }
    this.checkUser()
    // console.log("dash", this.token, "session", this.sessionId)
    // var user = wialon.core.Session.getInstance().getCurrUser()
    // console.log(user)
    // wialon.core.Session.getInstance().logout( // if user exist - logout
    //     function (code) { // logout callback
    //         if (code) msg(wialon.core.Errors.getErrorText(code)) // logout failed, print error
    //         else msg("Logout successfully") // logout suceed
    //     }
    // )
  },
  computed: {
    ...mapGetters("loginInfo", ["isLogged", "token", "sessionId","isAdmin"]),
    ...mapGetters("dashboardFields", ["dashboardTableKeys"]),
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    },
    windowHeight() {
      return window.innerHeight;
    }
  },
  methods: {
    ...mapMutations("loginInfo", [
      "SET_ISLOGGED",
      "SET_TOKEN",
      "CLEAR_LOGIN_DATA",
      "SET_SESSION_ID",
      "SET_IS_ADMIN"
    ]),
    ...mapMutations("dashboardFields", ["SET_SELECTED_VAL_OF_FIELD"]),
    checkUser(){
      let cu = wialon.core.Session.getInstance().getCurrUser()
      if(cu == null) {
        setTimeout(()=>{
          this.checkUser()
        },1000)
      }
      else if(cu.getName() == 'novatrack'){
        console.log("YES")
        this.SET_IS_ADMIN(true)
      }else{
        console.log("NO")
        this.SET_IS_ADMIN(false)
      }
    },
    logout(){
        this.CLEAR_LOGIN_DATA()
        this.$router.push({name:"login"})
    },
    removeIntervals(){
      console.log("DESTROY")
      clearInterval(this.loadDataInterval)
    },
    batteryClass(battery) {
      let str = "";
      if (battery == null) return "icon-sensor-err";

      if (battery < 25) {
        str += "icon-battery-low yellow--text";
      } else if (battery >= 25 && battery < 50) {
        str += "icon-battery-middle yellow--text";
      } else if (battery >= 50 && battery < 75) {
        str += "icon-battery-quater yellow--text";
      } else if (battery >= 75) {
        str += "icon-battery-high green--text";
      }
      return str;
    },
    getMovingStatusClass(unit) {
      let str = "";

      if (unit.movingState.is_lbs) str = "icon-device-move-lbs";
      else if (unit.movingState.is_moving) str = "icon-device-move";
      else str = "icon-device-stop";
      if (unit.status == 1 ) {
        str += "-sensor";
      }

      if (unit.movingState.is_stale) {
        str += " grey--text";
        str = str.replace("-sensor","")
      }
      else if (unit.movingState.is_moving || unit.movingState.is_lbs)
        str += " green--text";
      else str += " red--text";

      return str;
    },
    showIdling(idlling) {
      let h = parseInt(idlling.split(":")[0]);
      let m = idlling.split(":")[1];
      if (isNaN(h) || !m) return "-";
      if (h > 23) {
        return (h / 24).toFixed(0) + "d:" + (h % 24) + "h";
      } else {
        if (h == 0) return m + "m";
        return h + "h:" + m + "m";
      }
    },
    getLastUpdatedUnit(unit) {
      // return moment(moment().diff(moment(unit.lastUpdated*1000))).seconds
      // return moment().from(moment(unit.lastUpdated * 1000));
      return moment(unit.lastUpdated * 1000).format("D MMM YYYY HH:mm")
    },
    get_unit_moving_state_info(e) {
      var t = {
          is_moving: !1,
          is_ignition_on: null,
          is_lbs: !1,
          is_stale: !0,
          is_position_present: !1,
          is_ignition_present: !1,
          is_real_time_sensor_present: !1
        },
        i = e.getPosition();
      if (!i) return t;
      (t.is_position_present = !0),
        (t.is_lbs = !!(
          i.s <= 0 &&
          "number" == typeof i.f &&
          wialon.util.Number.and(i.f, wialon.item.Unit.dataMessageFlag.lbsFlag)
        ));
      var n = this.sess.getServerTime();
      t.is_stale = 3600 < n - i.t;
      var r,
        a,
        o,
        s = e.getSensors("engine operation");
      for (o in s)
        if ("real-time motion sensor" === s[o].t) {
          r = s[o];
          break;
        }
      for (o in s)
        if ("engine operation" === s[o].t) {
          a = s[o];
          break;
        }
      var _ = null;
      // console.log(e.calculateSensorValue(e, a),e.getName())
      a &&
        "number" == typeof (_ = e.calculateSensorValue(e, a)) &&
        (t.is_ignition_present = !0),
        (t.is_ignition_on = !_=="-348201.3876");
      var l = null;
      return (
        r &&
          "number" == typeof (l = e.calculateSensorValue(e, r)) &&
          (t.is_real_time_sensor_present = !0),
        (t.is_moving = "number" == typeof l ? 0 !== l : i.s > 0),
        t
      );
    },
    initMap() {
      let _this = this;
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: _this.latitude, lng: _this.longitude },
        zoom: this.zoom,
        mapTypeControl: true,
        mapTypeControlOptions: {
          mapTypeIds: [
            google.maps.MapTypeId.ROADMAP,
            google.maps.MapTypeId.SATELLITE
          ],
          position: google.maps.ControlPosition.LEFT_TOP,
          style: google.maps.MapTypeControlStyle.DEFAULT
        },
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControlOptions: {
          mapTypeIds: ["roadmap", "satellite"]
        }
      });
      this.map.data.setStyle(this.styleFeature);
      this.map.data.loadGeoJson(
        "https://storage.googleapis.com/mapsdevsite/json/states.js",
        { idPropertyName: "STATE" }
      );
    },
    styleFeature(feature) {
      var censusMin = Number.MAX_VALUE,
        censusMax = -Number.MAX_VALUE;
      var low = [5, 69, 54]; // color of smallest datum
      var high = [151, 83, 34]; // color of largest datum

      // delta represents where the value sits between the min and max
      var delta =
        (feature.getProperty("census_variable") - censusMin) /
        (censusMax - censusMin);

      var color = [];
      for (var i = 0; i < 3; i++) {
        // calculate an integer color based on the delta
        color[i] = (high[i] - low[i]) * delta + low[i];
      }

      // determine whether to show this shape or not
      var showRow = true;
      // if (feature.getProperty('census_variable') == null ||
      //     isNaN(feature.getProperty('census_variable'))) {
      //     showRow = false;
      // }

      var outlineWeight = 0.5,
        zIndex = 1;
      if (feature.getProperty("state") === "hover") {
        outlineWeight = zIndex = 2;
      }

      return {
        strokeWeight: outlineWeight,
        strokeColor: "#3b3b3b",
        zIndex: zIndex,
        fillColor: "#fff",
        fillOpacity: 0.75,
        visible: showRow
      };
    },
    closeMapModal() {
      document
        .querySelector("#map-dialog")
        .querySelector(".v-dialog__content")
        .querySelector(".v-dialog").style.display = "none";
    },
    showUnitOnMap(uid) {
      let _this = this;
      let unit = wialon.core.Session.getInstance().getItem(uid);
      if (unit.getPosition() == null) return;
      document
        .querySelector("#map-dialog")
        .querySelector(".v-dialog__content")
        .querySelector(".v-dialog").style.display = "block";
      if (this.map) {
        if (!unit) return; // exit if no unit
        let pos = unit.getPosition(); // get unit position
        if (!pos) return;
        if (!this.marker) {
          this.marker = new google.maps.Marker({
            position: { lat: pos.y, lng: pos.x },
            map: _this.map
            // icon: {
            //   url : unit.getIconUrl(32),// url
            //   scaledSize: new google.maps.Size(30, 30), // scaled size
            // }
          });
          this.map.panTo(this.marker.getPosition());
        } else {
          this.marker.setPosition({ lat: pos.y, lng: pos.x });
          // this.marker.setIcon(unit.getIconUrl(32))
          this.map.panTo(this.marker.getPosition());
        }
        this.setTimerOnMarker(pos, unit);
      }
    },
    setTimerOnMarker(pos, unit) {
      if (this.timer != null) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.marker.setPosition({ lat: pos.y, lng: pos.x });
        this.map.panTo(this.marker.getPosition());
      }, 5 * 1000);
    },
    dateTimeToGmt8(d){
      // return d;
      let dt = moment(d).format("DD MMM, YYYY hh:mm A")
      return dt.trim() == 'Invalid date' ? '-' : dt
    },
    showHideParameterCheckBoxChange(i) {
      this.SET_SELECTED_VAL_OF_FIELD({
        index: i,
        value: !this.dashboardTableKeys[i].selected
      });
      this.setTableHeaders()
      this.$forceUpdate();
    },
    setTableHeaders(){
      let comp = [];
      comp.push({...this.fields[0]})
      this.fields.forEach(f => {
        let a = this.dashboardTableKeys.find(
          x => x.key == f.key && x.selected == true
        );
        if (a != null) {
          comp.push({ ...f });
        }
      });
      this.filteredHeaders = comp;
    },
    closeCommandDialog() {
      this.commandDialog = false;
      this.fetchingAvlCommands = false;
    },
    openCommandDialog(u) {
      // this.executeReport(this.resource.getId(),1,u.id)
      // this.executeReport(this.resource.getId(),3,u.id)
      console.log(u);
      this.fetchingAvlCommands = true;
      let unit = this.sess.getItem(u.id);
      console.log(
        "FETCHED UNIT",
        u.vehicleNo,
        unit,
        u.availableCommands,
        unit.getCommands()
      );

      let cmd = unit.getCommandDefinitions();
      let canExecute = false,
        canAccessCmd = false;
      let cmmds = unit.getCommands();

      let r = unit.getMessageParams();
      let executableCmds = []
      // console.log(unit.getName(),"unit",unit,"COMMANDS",cmmds,unit.getUserAccess(),"last-msg",unit.getLastMessage(),"msg-params",unit.getMessageParams())
      for (let cmdKey in cmd) {
        if (
          cmmds &&
          cmmds.length &&
          unit.getUserAccess() &
            wialon.item.Unit.accessFlag.executeCommands
        )
          canExecute = true;
        if (
          wialon.util.Number.and(unit.getUserAccess(), cmd[cmdKey].a) ==
          cmd[cmdKey].a
        )
          canAccessCmd = true;
        canExecute = canExecute && canAccessCmd;
        cmd[cmdKey].canExecute = canExecute;
        cmd[cmdKey].canAccessCmd = canAccessCmd;
        if(canExecute) {
          executableCmds.push(cmd)
        }
      }
      // console.log(
      //   "comnmands",
      //   unit.getName(),
      //   unit.getCommands(),
      //   cmd,
      //   executableCmds,
      //   wialon.item.Unit.accessFlag.executeCommands
      // );
      console.log("HI",cmmds ,
      "executable", executableCmds,
          cmmds.length ,
          unit.getUserAccess() ,//19327369763 
            wialon.item.Unit.accessFlag.executeCommands) //16777216

      if(executableCmds.length>0) executableCmds[executableCmds.length-1].selected=true

      u.availableCommands = executableCmds
      console.log(executableCmds)
      
      this.selectedUnit = u
      this.$forceUpdate()
      // this.selectedUnit = unit;

      // console.log(unit.getIconClass(),unit)

      this.commandDialog = true;
      this.fetchingAvlCommands = false;
    },
    formatDateTime(dt) {
      let cdt = moment(dt).format("DD MMM, YYYY HH:mm");
      if (cdt == "Invalid date") {
        return "-";
      } else {
        return cdt;
      }
    },
    onFiltered(filteredItems) {
      this.tableSettings.totalRows = filteredItems.length;
      this.tableSettings.currentPage = 1;
    },
    onFuelReportTableFiltered(filteredItems) {
      this.fuelReportTableSettings.totalRows = filteredItems.length;
      this.fuelReportTableSettings.currentPage = 1;
    },
    test() {
      console.log(this.units);
      let unit = this.units[0];
      console.log(unit.getNetConn());
    },
    async getUnits(isFirstTime) {
      this.units = []
      // console.log("called")
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
      let unitFlags =
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

      let groupResults = [];
      _this.sess.searchItems(
        {
          itemsType: "avl_unit_group",
          propName: "sys_name",
          propValueMask: "",
          sortType: "",
          or_logic: false
        },
        1, // flags
        1, // force
        0, // from
        0, // to
        function(error, result) {
          console.log("SEARCH_ITEMS", error, result);
          groupResults = result.items;
          _this.sess.updateDataFlags(
            // load items to current session

            [
              { type: "type", data: "avl_unit", flags: unitFlags, mode: 0 },
              { type: "type", data: "avl_resource", flags: unitFlags, mode: 0 }
              // {type: "type", data: "avl_route", flags: unitFlags, mode: 0},
              // {type: "type", data: "search_items", flags: unitFlags, mode: 0}
            ],
            async function(code) {
              // updateDataFlags callback
              if (code) {
                console.log(code);
                // alert(wialon.core.Errors.getErrorText(code))
                return;
              } // exit if error code

              // var routes = _this.sess.getItems("avl_route")
              // console.log("ROUTES",routes)

              var resources = _this.sess.getItems("avl_resource");
              let allDrivers = {};
              let allTrailers = {};
              console.log("RESOURCES",resources)
              resources.forEach(resource => {
                for (let drv in resource.getDrivers()) {
                  let driver = resource.getDrivers()[drv];
                  let d_obj = {
                    id: driver.id,
                    name: driver.n,
                    icon: resource.getDriverImageUrl(driver, 32)
                  };
                  if (!allDrivers[driver.bu]) allDrivers[driver.bu] = [d_obj];
                  // if first element
                  else allDrivers[driver.bu].push(d_obj);
                }
                for (let tr in resource.getTrailers()) {
                  let trailer = resource.getTrailers()[tr];
                  let t_obj = {
                    id: trailer.id,
                    name: trailer.n
                  };
                  if (!allTrailers[trailer.bu]) allTrailers[trailer.bu] = [t_obj];
                  // if first element
                  else allDrivers[trailer.bu].push(t_obj);
                }
                if (resource.getName() == "z Start Time") {
                  console.log(resource);
                  _this.resource = resource
                }
                if (resource.getName() == "Fuel Report") {
                  console.log("FUEL-RESOURCE",resource);
                  _this.fuelRes = resource
                  _this.fuelReportObj = resource[0]
                }
              });          
              var units = _this.sess.getItems("avl_unit");
              let data = [];
              let sl=0
              units.forEach(async unit => {
                try {
                  let x = "-",
                    y = "-",
                    sc = "-",
                    t = "-",
                    s = "-";
                  if (unit.getPosition() != null) {
                    x = unit.getPosition().x;
                    y = unit.getPosition().y;
                    sc = unit.getPosition().sc;
                    t = unit.getPosition().t;
                    s = unit.getPosition().s;
                  }
                  let obj = {
                    sl: ++sl,
                    id: unit.getId(),
                    onlineStatus: unit.getNetConn(),
                    satelliteStrength: sc,
                    vehicleNo: unit.getName(),
                    vehicleGroupName: "-",
                    lastUpdated: unit.getLastMessage() == null ? '-' : unit.getLastMessage().t,
                    speed: s,
                    totalMileage: unit.getMileageCounter(),
                    todayMileage: "-",
                    lastActive: "-",
                    idlling: "-", //TODO: need to find,
                    locationAddress: "-",
                    coordinates: {
                      x: x || "-",
                      y: y || "-"
                    },
                    power: "-",
                    fuel1L: "-",
                    fuel1Percent: "-",
                    fuel2L: "-",
                    fuel2Percent: "-",
                    temperature: "-",
                    trailerId: "-",
                    driver: "-",
                    rfid: "-",
                    pto: "-",
                    command: "-",
                    startTime: "-",
                    media: "-",
                    video: "-",

                    availableCommands: [],
                    movingState: _this.get_unit_moving_state_info(unit),
                    idllingTime: 0
                  };

                  //GROUP-INFO

                  for (let i = 0; i < groupResults.length; i++) {
                    if (groupResults[i].getUnits().includes(obj.id)) {
                      obj.vehicleGroupName = groupResults[i].getName();
                      break;
                    }
                  }

                  if (allDrivers[unit.getId()] != null) {
                    obj.driver = allDrivers[unit.getId()][0];
                  }
                  if (allTrailers[unit.getId()] != null) {
                    obj.trailerId = allTrailers[unit.getId()][0].name;
                  }
                  let sensors = unit.getSensors();
                  for (const key in sensors) {
                    if (sensors[key].n.toUpperCase() == "IGNITION") {
                      let ignVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (ignVal != "-348201.3876") {
                        obj.status = ignVal;
                      } else {
                        obj.status = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "IDLIING") {
                      let idllingVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (idllingVal != "-348201.3876") {
                        obj.idlling = idllingVal;
                      } else {
                        obj.idlling = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "TEMPERATURE") {
                      let tempVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (tempVal != "-348201.3876") {
                        obj.temperature = tempVal;
                      } else {
                        obj.temperature = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "FUEL (L)") {
                      let flVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (flVal != "-348201.3876") {
                        obj.fuel1L = flVal.toFixed(2);
                      } else {
                        obj.fuel1L = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "FUEL 2(L)") {
                      let flVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (flVal != "-348201.3876") {
                        obj.fuel2L = flVal.toFixed(2);
                      } else {
                        obj.fuel2L = "-";
                      }
                    }

                    if (sensors[key].n.toUpperCase() == "TODAY MILEAGE") {
                      let milVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (milVal != "-348201.3876") {
                        obj.totalMileage = milVal.toFixed(2);
                      } else {
                        obj.totalMileage = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "BATTERY") {
                      let batVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (batVal != "-348201.3876") {
                        obj.battery = batVal.toFixed(2);
                      } else {
                        obj.battery = null;
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "POWER") {
                      let power = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (power != "-348201.3876") {
                        obj.power = power.toFixed(2);
                      } else {
                        obj.power = "-";
                      }
                    }

                    if (sensors[key].n.toUpperCase() == "PTO") {
                      let pto = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (pto != "-348201.3876") {
                        obj.pto = pto.toFixed(2);
                      } else {
                        obj.pto = "-";
                      }
                    }

                    if (sensors[key].n.toUpperCase() == "RFID") {
                      let rfid = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (rfid != "-348201.3876") {
                        obj.rfid = rfid.toFixed(2);
                      } else {
                        obj.rfid = "-";
                      }
                    }

                    if (sensors[key].n.toUpperCase() == "FUEL (%)") {
                      let flpVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (flpVal != "-348201.3876") {
                        obj.fuel1Percent = flpVal.toFixed(2);
                      } else {
                        obj.fuel1Percent = "-";
                      }
                    }
                    if (sensors[key].n.toUpperCase() == "FUEL 2(%)") {
                      let flpVal = unit.calculateSensorValue(
                        unit.getSensor(sensors[key].id),
                        unit.getLastMessage()
                      );
                      if (flpVal != "-348201.3876") {
                        obj.fuel2Percent = flpVal.toFixed(2);
                      } else {
                        obj.fuel2Percent = "-";
                      }
                    }
                  }
                  if (unit.getPosition() != null) {
                    let r = unit.getMessageParams();
                    //LAST-ACTIVE-SET --------------------------starts
                    let i, idl;
                    let n = unit.getPosition();
                    (idl =
                      r && r.speed && "number" == typeof r.speed.ct
                        ? (i = r.speed.ct)
                        : n && 0 === n.s && (i = n.t)),
                      _this.sess.getServerTime() - i;
                    if(i){
                      obj.lastActive = moment(moment(i*1000)).tz("Etc/GMT+8").format("DD MMM HH:mm")
                    }
                    //LAST-ACTIVE-SET --------------------------ends

                    var ajx = {
                      flags: " 0",
                      city_radius: " 0",
                      dist_from_unit: " 0",
                      txt_dist: " ",
                      house_detect_radius: "0",
                      coords:
                        '[{"lon":' +
                        unit.getPosition().x +
                        ',"lat":' +
                        unit.getPosition().y +
                        "}]",
                      uid: _this.sess.getCurrUser()._id,
                      sid: _this.sessionId
                    };

                    if(isFirstTime){
                      console.log("FIRST")
                      obj.locationAddress = $.ajax({
                        type: "POST",
                        url:
                          "https://geocode-maps.wialon.com/hst-api.wialon.com/gis_geocode",
                        contentType: "application/x-www-form-urlencoded",
                        data: ajx,
                        // processData: false,
                        async: false
                      })
                        .responseText.replace("[", "")
                        .replace("]", "")
                        .replace('"', "")
                        .replace("\\", "")
                        .replace('"', "");
                    }else{
                      try{
                        let un = _this.unitData.find(u=>u.id==unit.getId())
                        // console.log("FOUND",un)
                        obj.locationAddress = un.locationAddress
                      }catch(locEx){
                        obj.locationAddress = '-'
                      }
                    }

                  } else {
                    obj.locationAddress = "-";
                  }

                  //COMMANDS
                  // let cmd = unit.getCommandDefinitions();
                  // let canExecute = false,
                  //   canAccessCmd = false;
                  // let cmmds = unit.getCommands();

                  let executableCmds = []
                  // // console.log(unit.getName(),"unit",unit,"COMMANDS",cmmds,unit.getUserAccess(),"last-msg",unit.getLastMessage(),"msg-params",unit.getMessageParams())
                  // for (let cmdKey in cmd) {
                  //   if (
                  //     cmmds &&
                  //     cmmds.length &&
                  //     unit.getUserAccess() &
                  //       wialon.item.Unit.accessFlag.executeCommands
                  //   )
                  //     canExecute = true;
                  //   if (
                  //     wialon.util.Number.and(unit.getUserAccess(), cmd[cmdKey].a) ==
                  //     cmd[cmdKey].a
                  //   )
                  //     canAccessCmd = true;
                  //   canExecute = canExecute && canAccessCmd;
                  //   cmd[cmdKey].canExecute = canExecute;
                  //   cmd[cmdKey].canAccessCmd = canAccessCmd;
                  //   if(canExecute) {
                  //     executableCmds.push(cmd)
                  //   }
                  // }
                  // console.log(
                  //   "comnmands",
                  //   unit.getName(),
                  //   unit.getCommands(),
                  //   cmd,
                  //   executableCmds
                  // );

                  // if(executableCmds.length>0) executableCmds[executableCmds.length-1].selected=true

                  obj.availableCommands = executableCmds || []
                  data.push(obj);

                  _this.units.push(obj);
                } catch (exception) {
                  console.log("EXCEPTION->", exception, unit, unit.getPosition());
                }
              });
              _this.unitData = data;
              let ehg = _this.resource.getReports()
              let rId = 0
              for(let key in ehg){
                if(ehg[key].n == "Engine hour group"){
                  rId = ehg[key].id
                }
              }
              try{
                console.log("group-results",groupResults)
                //ALL-VEHICLE GROUP ID-20171323
                _this.executeReport(_this.resource.getId(),rId,groupResults.length>0?groupResults[0].getId() || 20171323:20171323)
              }catch(gidex){
                setTimeout(()=>{
                  _this.executeReport(_this.resource.getId(),rId,groupResults.length>0?groupResults[0].getId() || 20171323:20171323)
                },1000)
              }
              _this.isTableBusy = false;
              _this.lastUpdated = new Date().getTime();
              _this.$forceUpdate();
            }
          );
        }
      );
    },
    async executeReport(rId,tId,uid){ // execute selected report
      let _this = this
      let sess = wialon.core.Session.getInstance(); // get instance of current Session
      let res = sess.getItem(rId); // get resource by id
      let ydm = moment().format("YYYY-MM-DD")
      // let ydm2 = moment(moment().subtract(moment.duration(1,'days'))).format("YYYY-MM-DD")
      // let to = parseInt(moment(moment( sess.getServerTime()*1000).format("YYYY-MM-DD")+" 23:59:59" ).format('X')); // get current server time (end time of report time interval)
      // let from = parseInt(moment(moment( sess.getServerTime()*1000).format("YYYY-MM-DD")+" 00:00:00" ).format('X')); // calculate start time of report
      // let from = new Date(ydm2 + " 22:00:00").getTime()/1000
      let from = new Date(ydm + " 00:00").getTime()/1000
      let to = new Date(ydm + " 23:59").getTime()/1000
      console.log("YDM",ydm,sess.getServerTime(),from,to)
      console.log(moment(from*1000).format("YYYY-MM-DD HH:mm:ss"),moment(to*1000).format("YYYY-MM-DD HH:mm:ss"))
      // specify time interval object
      let interval = { "from": from, "to": to, "flags": 16777216 };
      let template = res.getReport(tId); // get report template by id
      //Set locale to +8
      let customRenderer = sess.getRenderer();
      customRenderer.setLocale(wialon.util.DateTime.getTimezone(),"en",{flags:256,formatDate:"%Y-%m-%E %H:%M:%S"}, (code) => { 
        if(code){ console.log("ERROR---->",wialon.core.Errors.getErrorText(code)); return; } // exit if error code
        res.execReport(template, uid, 0, interval, // execute selected report
          function(code, data) { // execReport template
            if(code){ console.log("ERROR>",wialon.core.Errors.getErrorText(code)); return; } // exit if error code
            if(!data.getTables().length){ return; }
            _this.showReportResult(tId,uid,data); // show report result
            console.log("result",data)
        },);
      });

    },

    async showReportResult(templId,uid,result){
      let _this = this
      var tables = result.getTables(); // get report tables
      if (!tables) return; // exit if no tables
      // console.log("results",result)
      console.log("tables",tables)
      for(var i=0; i < tables.length; i++){ // cycle on tables
      if(tables[i].label != 'Engine hours') continue
      // console.log("table",tables[i])
      let config = {"type":"range","data":{"from":0,"to":tables[i].rows,"level":0}}
        await result.selectRows(i, config, // get Table rows
          qx.lang.Function.bind( async function(i, code, rows) { // getTableRows callback
          console.log("all-rows",rows)
            if (code) {console.log("ERROR_____@",wialon.core.Errors.getErrorText(code)); return;} // exit if error code
            let rowIndex = -1
            for(var j in rows) { // cycle on table rows
            rowIndex++
              if (typeof rows[j].c == "undefined") continue; // skip empty rows
              let vehicleNo = rows[j].c[1]
              let bTime;
              let idle = '-'
              let tM = rows[j].c[8]
              console.log("start-time",rows[j].c)
              if('object'===typeof rows[j].c[2]){
                bTime = rows[j].c[2].t
              }else if('string'===typeof rows[j].c[2] && rows[j].c[2] == '-----'){
                bTime = '-'
              }else{
                bTime = rows[j].c[2]
              }
              let u = _this.units.find(x=>x.vehicleNo==vehicleNo)
              u.startTime = bTime
              u.todayMileage = tM
              u.idlling = rows[j].c[7]
              // result.getRowDetail(1,rowIndex,(c,rd)=>{
              //   if(c) console.log("ERROR_____@",wialon.core.Errors.getErrorText(c));
              //   // console.log("rd",rd,rd[rd.length-1].c[1],rd.length,vehicleNo,)
              //   let n = rd[rd.length-1].c[1].trim().toLowerCase()
              //   _this.units.forEach(u=>{
              //     // console.log(u.vehicleNo.trim().toLowerCase()==n,u.vehicleNo,n)
              //   })
              //   let u2 = _this.units.find(x=>x.vehicleNo.trim().toLowerCase()==n)
              //   u2.idlling = rd[rd.length-1].c[7]
              // })
            }
          }, this, "")
        );
      }
    },
    async getTemplateObject(templateId,templText,uId,res){
      let _this = this
      // get available reports table
      let c='',cl='';
      let sess = wialon.core.Session.getInstance()
      sess.getReportTables(
        function (code,data){
          console.log("report-table",data)
        var col = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].n == templateId) {//draw only selected report table
            col = data[i].col;
            for (var j = 0; j < col.length; j++){ // construct Select object using found report columns
              if( col[j].l != '' && col[j].n != '' ){
                c += (c==""?"":",") + col[j].n;
		            cl += (cl==""?"":",") + col[j].l;
              }
            }
          }
        };
        let template = {// fill template object
          "id": 0,
          "n": templateId,
          "ct": "avl_unit",
          "p": "",
          "tbl": [{
              "n": templateId,
              "l": templText,
              "c": c,
              "cl": cl,
              "s": "",
              "sl": "",
              "p": "",
              "sch": {
                "f1": 0,
                "f2": 0,
                "t1": 0,
                "t2": 0,
                "m": 0,
                "y": 0,
                "w": 0
              },
              "f": 0
            }]
        }
        let ydm = moment().format("YYYY-MM-DD")
        // let ydm2 = moment(moment().subtract(moment.duration(1,'days'))).format("YYYY-MM-DD")
        // let to = parseInt(moment(moment( sess.getServerTime()*1000).format("YYYY-MM-DD")+" 23:59:59" ).format('X')); // get current server time (end time of report time interval)
        // let from = parseInt(moment(moment( sess.getServerTime()*1000).format("YYYY-MM-DD")+" 00:00:00" ).format('X')); // calculate start time of report
        // let from = new Date(ydm2 + " 22:00:00").getTime()/1000
        let from = new Date(ydm + " 00:00").getTime()/1000
        let to = new Date(ydm + " 23:59").getTime()/1000
        console.log("YDM",ydm,sess.getServerTime(),from,to)
        console.log(moment(from*1000).format("YYYY-MM-DD HH:mm:ss"),moment(to*1000).format("YYYY-MM-DD HH:mm:ss"))
        // specify time interval object
        let interval = { "from": from, "to": to, "flags": wialon.item.MReport.intervalFlag.absolute };
        res.execReport(template, uId, 0, interval, // execute selected report

        function(code, data) { // execReport template
          if (code) {
            console.log("ERROR->",wialon.core.Errors.getErrorText(code));
            return;
          } // exit if error code
          console.log("attachments",data.getAttachments())
          let renJ = data.renderJSON(
            0, 1176, 0,0,0
          )
          console.log("tables",renJ)
          if (!data.getTables().length) { // exit if no tables obtained
            // msg("<b>There is no data generated</b>");
            return;
          } else _this.getFuelReportRows(data); // show report result
        });
      });
    },
    
  }
};
</script>

<style scoped>
.battery-icon {
  transform: rotate(90deg) !important;
  text-align: center;
  width: min-content;
  margin-top: 21%;
}
.x-monitoring-unit-sensor-square {
  background-color: #009933;
  line-height: 15px;
  margin-left: 4px;
}
#map {
  width: 660px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}
>>>td.text-center.pt-7px{
  padding-top: 7px !important;
}
.data-table{
  max-height: 500px !important;
}
>>>.table .thead-light th{
  position: sticky !important;
  top: 0 !important;
}
</style>