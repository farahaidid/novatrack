  export default {
    namespaced: true,
    state: {
      dashboardTableKeys: [
        {selected: true, key: "power", label: "Power", },
        {selected: true, key: "status", label: "Status",  },
        {selected: false, key: "onlineStatus", label: "Network",  },
        {selected: false, key: "satelliteStrength", label: "Setalite",  },
        {selected: true, key: "vehicleNo", label: "Vehicle No.", },
        {selected: true, key: "vehicleGroupName", label: "Group" ,},
        {selected: true, key: "lastUpdated", label: "Last Updated",  },
        {selected: true, key: "speed", label: "Speed",  },
        {selected: true, key: "totalMileage", label: "Mileage",  },
        {selected: true, key: "todayMileage", label: "Today Mileage",  },
        {selected: false, key: "lastActive", label: "Last Active",  },
        {selected: true, key: "idlling", label: "Idlling",  },
        {selected: true, key: "locationAddress", label: "Location",  },
        {selected: false, key: "battery", label: "Battery",  },
        {selected: false, key: "coordinates", label: "Coordinate",  },
        {selected: true, key: "fuel1L", label: "Fuel 1(L)",  },
        {selected: false, key: "fuel1Percent", label: "Fuel 1(%)",  },
        {selected: true, key: "fuel2L", label: "Fuel 2(L)",  },
        {selected: false, key: "fuel2Percent", label: "Fuel 2(%)",  },
        {selected: false, key: "temperature", label: "Temperature",  },
        {selected: false, key: "trailerId", label: "Trailer ID",  },
        {selected: false, key: "driver", label: "Driver",  },
        {selected: false, key: "rfid", label: "RFID",  },
        {selected: false, key: "pto", label: "PTO",  },
        {selected: false, key: "command", label: "Command",  },
        {selected: true, key: "startTime", label: "Start Time",  },
        {selected: false, key: "media", label: "Media",  },
        {selected: false, key: "video", label: "Video",  },
      ]
    },
    getters: {
        dashboardTableKeys:(state)=>state.dashboardTableKeys,
    },
    mutations: {
        SET_SELECTED_VAL_OF_FIELD: (state,val)=>{
            state.dashboardTableKeys[val.index].selected = val.value
        },
      CLEAR_FIELDS_DATA: (state,val) => {
        state.dashboardTableKeys = []
      }
    }
  };