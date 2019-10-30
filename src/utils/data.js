import emitize from "./emitize";
import { query, mutate } from "./requests";

const studentsData = [];
const parentsData = [];
const bussesData = [];
const driversData = [];
const routesData = [];
const complaintsData = []
const tripsData = [];
const schedulesData = [];

var Data = (function () {
  var instance;

  // local variables to keep a cache of every entity
  var students = studentsData;
  var parents = parentsData;
  var drivers = driversData;
  var busses = bussesData;
  var routes = routesData;
  var schedules = schedulesData;
  var trips = tripsData;
  var complaints = complaintsData;

  // subscriptions for every entity to keep track of everyone subscribing to any data
  var subs = {};
  emitize(subs, "students");
  emitize(subs, "parents");
  emitize(subs, "drivers");
  emitize(subs, "busses");
  emitize(subs, "routes");
  emitize(subs, "schedules");
  emitize(subs, "trips");
  emitize(subs, "complaints");

  // subs.students = log; //subscribe to events (named 'x') with cb (log)
  // //another subscription won't override the previous one
  // subs.students = logPlus1;
  // subs.students(9); //emits '9' to all listeners;

  // when the data store gets innitialized, fetch all data and store in cache
  const init = () => {
    query(`{
      complaints{
        id
        time
        content
        parent{
          id,
          name
        }
      }
      students {
        id
        names
        gender
        registration
        route {
          id,
          name
        }
        parent {
          id,
          name
        }
        parent2 {
          id,
          name
        }
      }
      buses {
        id,
        plate
        make
        size
      }
      drivers {
        id
        username
        email
        phone
      }
      parents {
        id
        name
        gender
        email
        phone
        students {
          names
          gender
          route {
            name
          }
        }
      }
      routes {
        id
        name
        description
        path {
          lat
          lng
        }
      }
      schedules {
        id
        time
        end_time
        name
        days
        route {
          id,
          name
        },
        bus{
          id
          make
        }
      },
      trips {
        id
        driver{
          id
          username
        }
        schedule {
          name
          id
          time
          end_time,
          route{
            id,
            name
            students{
              id
            }
          }
        }
        startedAt,
        isCancelled
        completedAt
        bus{
          id,
          make,
          plate
        }
        driver{
          id,
          username
        }
        locReports{
          id
          time
          loc{
            lat
            lng
          }
        }
        events{
          time,
          type,
          student{
            id,
            names
          }
        }
      }
    }`).then(response => {
      // let { students } = response
      students = response.students.map(student => {

        if (student.parent) {
          student.parent_name = student.parent.name;
        }

        if (student.parent2) {
          student.parent2_name = student.parent2.name;
        }

        if (student.route) {
          student.route_name = student.route.name;
        }

        return student;
      });

      subs.students({ students });

      busses = response.buses;
      subs.busses({ busses });

      parents = response.parents;
      subs.parents({ parents });

      routes = response.routes;
      subs.routes({ routes });

      drivers = response.drivers;
      subs.drivers({ drivers });

      schedules = response.schedules.map(schedule => {
        if (schedule.bus)
          schedule.bus_make = schedule.bus.make

        if (schedule.route)
          schedule.route_name = schedule.route.name

        return schedule
      });
      subs.schedules({ schedules });

      trips = response.trips;
      subs.trips({ trips });

      complaints = response.complaints;
      subs.complaints({ complaints });
    });
  }

  init()

  function createInstance() {
    // eslint-disable-next-line no-new-object
    var object = new Object("Instance here");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
    init,
    comms: {
      send: ({ type, parents, message }) => new Promise(async (resolve, reject) => {
        resolve('ok')
      })
    },
    auth: {
      login(id) {
        return {};
      },
      getUser(id) {
        return {};
      },
      logout(id, data) {
        return;
      }
    },
    students: {
      create: data =>
        new Promise(async (resolve, reject) => {
          const { id } = await mutate(
            `
          mutation ($Istudent: Istudent!) {
            students {
              create(student: $Istudent) {
                id
              }
            }
          }`,
            {
              Istudent: data
            }
          );

          data.id = id;

          data.parent = parents.filter(p => p.id == data.parent)[0];
          data.parent_name = data.parent.name

          data.route = routes.filter(p => p.id == data.route)[0];
          data.route_name = data.route.name

          students = [...students, data];
          subs.students({ students });
          resolve();
        }),
      update: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($student: Ustudent!) {
            students {
              update(student: $student) {
                id
              }
            }
          } `,
            {
              student: Object.assign({}, data, {
                parent_name: undefined,
                parent2_name: undefined,
                parent: data.parent.id,
                parent2: data.parent2.id,
                route_name: undefined,
                route: data.route.id
              })
            }
          );

          const subtract = students.filter(({ id }) => id !== data.id);
          students = [data, ...subtract];
          subs.students({ students });
          resolve();
        }),
      delete: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($Istudent: Ustudent!) {
            students {
              archive(student: $Istudent) {
                id
              }
            }
          }  `,
            {
              Istudent: {
                id: data.id
              }
            }
          );

          const subtract = students.filter(({ id }) => id !== data.id);
          students = [...subtract];
          subs.students({ students });
          resolve();
        }),
      list() {
        return students;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.students = cb;
        return students;
      },
      getOne(id) { }
    },
    parents: {
      create: data =>
        new Promise(async (resolve, reject) => {
          const { id } = await mutate(
            `
          mutation ($Iparent: Iparent!) {
            parents {
              create(parent: $Iparent) {
                id
              }
            }
          }`,
            {
              Iparent: data
            }
          );

          data.id = id;

          parents = [...parents, data];
          subs.parents({ parents });
          resolve();
        }),
      update: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($parent: Uparent!) {
            parents {
              update(parent: $parent) {
                id
              }
            }
          }`,
            {
              parent: data
            }
          );

          const subtract = parents.filter(({ id }) => id !== data.id);
          parents = [data, ...subtract];
          subs.parents({ parents });
          resolve();
        }),
      delete: data =>
        new Promise(async (resolve, reject) => {
          mutate(
            `
          mutation ($Iparent: Uparent!) {
            parents {
              archive(parent: $Iparent) {
                id
              }
            }
          } `,
            {
              Iparent: {
                id: data.id
              }
            }
          );

          const subtract = parents.filter(({ id }) => id !== data.id);
          parents = [...subtract];
          subs.parents({ parents });
          resolve();
        }),
      list() {
        return parents;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.parents = cb;
        return parents;
      },
      getOne(id) { }
    },
    drivers: {
      create: data =>
        new Promise(async (resolve, reject) => {
          const res = await mutate(
            `
            mutation ($Idriver: Idriver!) {
              drivers {
                create(driver: $Idriver) {
                  id
                }
              }
            }`,
            {
              Idriver: data
            }
          );

          const { id } = res.drivers.create
          data.id = id;

          drivers = [...drivers, data];
          subs.drivers({ drivers });
          resolve();
        }),
      update: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($driver: Udriver!) {
            drivers {
              update(driver: $driver) {
                id
              }
            }
          } 
          `,
            {
              driver: data
            }
          );

          const subtract = drivers.filter(({ id }) => id !== data.id);
          drivers = [data, ...subtract];
          subs.drivers({ drivers });
          resolve();
        }),
      delete: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($Idriver: Udriver!) {
            drivers {
              archive(driver: $Idriver) {
                id
              }
            }
          } 
          `,
            {
              Idriver: {
                id: data.id
              }
            }
          );

          const subtract = drivers.filter(({ id }) => id !== data.id);
          drivers = [...subtract];
          subs.drivers({ drivers });
          resolve();
        }),
      list() {
        return drivers;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.drivers = cb;
        return drivers;
      },
      getOne(id) { }
    },
    busses: {
      create: bus =>
        new Promise(async (resolve, reject) => {
          const { id } = await mutate(
            `mutation ($bus: Ibus!) {
            buses {
              create(bus: $bus) {
                id
              }
            }
          }`,
            {
              bus
            }
          );

          bus.id = id;
          busses = [...busses, bus];
          subs.busses({ busses });
          resolve();
        }),
      update: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($bus: Ubus!) {
            buses {
              update(bus: $bus) {
                id
              }
            }
          }`,
            {
              bus: data
            }
          );

          const subtract = busses.filter(({ id }) => id !== data.id);
          busses = [data, ...subtract];
          subs.busses({ busses });
          resolve();
        }),
      delete: bus =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($Ibus: Ubus!) {
            buses {
              archive(bus: $Ibus) {
                id
              }
            }
          }  `,
            {
              Ibus: {
                id: bus.id
              }
            }
          );

          const subtract = busses.filter(({ id }) => id !== bus.id);
          busses = [...subtract];
          subs.busses({ busses });
          resolve();
        }),
      list() {
        return busses;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.busses = cb;
        return busses;
      },
      getOne(id) { }
    },
    trips: {
      list() {
        return trips;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.trips = cb;
        return trips;
      },
      getOne: id => {
        const trip = trips.find(trip => trip.id === id)
        return trip
      },
      delete: trip =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($Itrip: Utrip!) {
            trips {
              archive(trip: $Itrip) {
                id
              }
            }
          }  `,
            {
              Itrip: {
                id: trip.id
              }
            }
          );

          const subtract = trips.filter(({ id }) => id !== trip.id);
          trips = [...subtract];
          subs.trips({ trips });
          resolve();
        }),
    },
    complaints: {
      list() {
        return complaints;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.complaints = cb;
        return complaints;
      },
      delete: complaint =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($Icomplaint: Ucomplaint!) {
            complaints {
              archive(complaint: $Icomplaint) {
                id
              }
            }
          }  `,
            {
              Icomplaint: {
                id: complaint.id
              }
            }
          );

          const subtract = complaints.filter(({ id }) => id !== complaint.id);
          complaints = [...subtract];
          subs.complaints({ complaints });
          resolve();
        }),
      getOne(id) { }
    },
    routes: {
      create: data =>
        new Promise(async (resolve, reject) => {
          const { id } = await mutate(
            `
            mutation ($Iroute: Iroute!) {
              routes {
                create(route: $Iroute) {
                  id
                }
              }
            }`,
            {
              Iroute: data
            }
          );

          data.id = id;
          routes = [...routes, data];
          subs.routes({ routes });
          resolve();
        }),
      update: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($route: Uroute!) {
            routes {
              update(route: $route) {
                id
              }
            }
          } `,
            {
              route: {
                id: data.id,
                name: data.name,
                description: data.description
              }
            }
          );

          const subtract = routes.filter(({ id }) => id !== data.id);
          routes = [data, ...subtract];
          subs.routes({ routes });
          resolve();
        }),
      delete: data =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `mutation ($Iroute: Uroute!) {
            routes {
              archive(route: $Iroute) {
                id
              }
            }
          }`,
            {
              Iroute: {
                id: data.id
              }
            }
          );

          const subtract = routes.filter(({ id }) => id !== data.id);
          routes = [...subtract];
          subs.routes({ routes });
          resolve();
        }),
      list() {
        return routes;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.routes = cb;
        return routes;
      },
      getOne(id) { }
    },
    schedules: {
      create: schedule =>
        new Promise(async (resolve, reject) => {
          schedule.days = schedule.days.join(",");

          if (schedule.route) {
            schedule.route_name = undefined
          }

          if (schedule.bus) {
            schedule.bus_make = undefined
          }

          const res = await mutate(
            `
          mutation ($schedule: Ischedule!) {
            schedules {
              create(schedule: $schedule) {
                id
              }
            }
          }            
        `,
            {
              schedule
            }
          );

          const { id } = res

          schedule.id = id;
          schedule.days = schedule.days.split(",");

          schedule.route = routes.filter(
            route => route.id === schedule.route
          )[0];

          schedule.bus = busses.filter(bus => bus.id === schedule.bus)[0];
          schedule.bus_make = schedule.bus.make


          schedules = [...schedules, schedule];
          subs.schedules({ schedules });
          resolve();
        }),
      update: schedule =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($Uschedule: Uschedule!) {
            schedules {
              update(schedule: $Uschedule) {
                id
              }
            }
          }            
        `,
            {
              Uschedule: Object.assign({}, schedule, {
                bus_make: undefined,
                route_name: undefined,
                busses: undefined,
                routes: undefined,
                selectedDays: undefined,
                bus: schedule.bus.id,
                route: schedule.route.id
              })
            }
          );

          const subtract = schedules.filter(({ id }) => id !== schedule.id);
          schedule.bus_make = schedule.bus.make
          schedule.route_name = schedule.route.name
          schedule.days = schedule.days.split(',')

          schedules = [schedule, ...subtract];
          subs.schedules({ schedules });
          resolve();
        }),
      delete: schedule =>
        new Promise(async (resolve, reject) => {
          await mutate(
            `
          mutation ($Ischedule: Uschedule!) {
            schedules {
              archive(schedule: $Ischedule) {
                id
              }
            }
          }                  
        `,
            {
              Ischedule: {
                id: schedule.id
              }
            }
          );

          const subtract = schedules.filter(({ id }) => id !== schedule.id);
          schedules = [...subtract];
          subs.schedules({ schedules });
          resolve();
        }),
      list() {
        return schedules;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.schedules = cb;
        return schedules;
      },
      getOne(id) { }
    },
    picksAndDrops: {
      create(id) {
        return {};
      },
      update(id, data) {
        return;
      },
      delete(id) {
        return;
      },
      list() {
        return [];
      },
      getOne(id) { }
    },
    messages: {
      create(id) {
        return {};
      },
      update(id, data) {
        return;
      },
      delete(id) {
        return;
      },
      list() {
        return [];
      },
      getOne(id) { }
    },
    communication: {
      sms: {
        create(id) {
          return {};
        },
        update(id, data) {
          return;
        },
        delete(id) {
          return;
        },
        list() {
          return [];
        },
        getOne(id) { }
      },
      email: {
        create(id) {
          return {};
        },
        update(id, data) {
          return;
        },
        delete(id) {
          return;
        },
        list() {
          return [];
        },
        getOne(id) { }
      }
    }
  };
})();

export default Data;
