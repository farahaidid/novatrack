const functions = require('firebase-functions');
const wialon = require("wialon")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
async function getUnits() {
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
    function (error, result) {
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
        async function (code) {
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
          console.log("RESOURCES", resources)
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
              console.log("FUEL-RESOURCE", resource);
              _this.fuelRes = resource
              _this.fuelReportObj = resource[0]
            }
          });
          var units = _this.sess.getItems("avl_unit");
          let data = [];
          let sl = 0
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
                if (i) {
                  obj.lastActive = moment(moment(i * 1000)).tz("Etc/GMT+8").format("DD MMM HH:mm")
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
                  .replace('"', "");
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
          for (let key in ehg) {
            if (ehg[key].n == "Engine hour group") {
              rId = ehg[key].id
            }
          }
          try {
            console.log("group-results", groupResults)
            //ALL-VEHICLE GROUP ID-20171323
            _this.executeReport(_this.resource.getId(), rId, groupResults.length > 0 ? groupResults[0].getId() || 20171323 : 20171323)
          } catch (gidex) {
            setTimeout(() => {
              _this.executeReport(_this.resource.getId(), rId, groupResults.length > 0 ? groupResults[0].getId() || 20171323 : 20171323)
            }, 1000)
          }
          _this.isTableBusy = false;
          _this.lastUpdated = new Date().getTime();
          _this.$forceUpdate();
        }
      );
    }
  );
}
function initWialon(request, response) {
  // wialon.core.Session.getInstance().initSession(
  //   "https://hst-api.wialon.com"
  // );
  // wialon.core.Session.getInstance().loginToken(
  //   request.body.token,
  //   "", // try to login
  //   function(code) {
  //     if (code) {
  //       return response.send("Invalid Session");
  //     }
  //     wialon.render.Renderer.prototype.setLocale(wialon.util.DateTime.getTimezoneOffset(),"en",{flags:0,formatDate:"%H"},function (e,d){
  //       console.log(e);console.log(d)
  //       // getUnits();
  //       return response.status(200).json(JSON.stringify(wialon.core.Session.getInstance()))
  //     })
  //   }
  // );
  var opts = {
    // authz params
    authz: {
      token: request.body.token,
      operateAs: request.body.username
    }
  };

  var session = wialon(opts).session;
  console.log(session)
  response.send(session)
}
exports.helloWorld = functions.https.onRequest((request, response) => {
  //  response.send("Hello from Firebase!");
  // console.log(wialon)
  //         return response.send(request.body.token)
  initWialon(request, response)
});

