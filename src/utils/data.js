function emitize(obj, eventName) {
  let _subscriptions = new Set();
  Object.defineProperty(obj, eventName, {
    set(func) {
      _subscriptions.add(func);
    },
    get() {
      var emit = (...args) => {
        _subscriptions.forEach(f => f(...args));
      };

      Object.defineProperty(emit, "off", {
        set(func) {
          _subscriptions.delete(func);
        },
        get() {
          _subscriptions = new Set();
        }
      });

      return emit;
    }
  });
}

const studentsData = [
  {
    id: Math.random().toString(),
    names: "Existing parent",
    route: "Malawa route",
    gender: "Male",
    parent: "Existing parent"
  }
];

const parentsData = [
  {
    id: Math.random().toString(),
    names: "Existing parent",
    gender: "Father",
    phone: "109876543",
    email: "test@dfgh.com"
  }
];

const bussesData = [
  {
    id: Math.random().toString(),
    names: "Existing Bus",
    size: "small",
    plate: "plate"
  }
];

const driversData = [
  {
    id: Math.random().toString(),
    names: "Existing driver",
    gender: "male",
    phone: "109876543"
  }
];

const routesData = [
  {
    id: Math.random().toString(),
    names: "Existing route"
  }
];

var Data = (function() {
  var instance;
  var students = studentsData;
  var parents = parentsData;
  var drivers = driversData;
  var busses = bussesData;
  var routes = routesData;

  var subs = {};
  emitize(subs, "students");

  // watchers.students = log; //subscribe to events (named 'x') with cb (log)
  // //another subscription won't override the previous one
  // watchers.students = logPlus1;
  // watchers.students(9); //emits '9' to all listeners;

  function createInstance() {
    var object = new Object("Instance here");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
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
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            students = [...students, data];
            subs.students({ students });
            reject({
              message: "the student is already registered"
            });
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = students.filter(({ id }) => id !== data.id);
            students = [data, ...subtract];
            subs.students({ students });
            reject();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = students.filter(({ id }) => id !== data.id);
            students = [...subtract];
            subs.students({ students });
            reject();
          }, 2000);
        }),
      list() {
        return students;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.students = cb;
        return students;
      },
      getOne(id) {}
    },
    parents: {
      create: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            parents = [...parents, data];
            subs.parents({ parents });
            resolve();
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = parents.filter(({ id }) => id !== data.id);
            parents = [data, ...subtract];
            subs.parents({ parents });
            resolve();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = parents.filter(({ id }) => id !== data.id);
            parents = [...subtract];
            subs.parents({ parents });
            resolve();
          }, 2000);
        }),
      list() {
        return parents;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.parents = cb;
        return parents;
      },
      getOne(id) {}
    },
    drivers: {
      create: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            drivers = [...drivers, data];
            subs.parents({ drivers });
            resolve();
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = drivers.filter(({ id }) => id !== data.id);
            drivers = [data, ...subtract];
            subs.drivers({ drivers });
            resolve();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = drivers.filter(({ id }) => id !== data.id);
            drivers = [...subtract];
            subs.drivers({ drivers });
            resolve();
          }, 2000);
        }),
      list() {
        return drivers;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.drivers = cb;
        return drivers;
      },
      getOne(id) {}
    },
    busses: {
      create: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            busses = [...busses, data];
            subs.busses({ busses });
            resolve();
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = busses.filter(({ id }) => id !== data.id);
            busses = [data, ...subtract];
            subs.busses({ busses });
            resolve();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = busses.filter(({ id }) => id !== data.id);
            busses = [...busses];
            subs.busses({ busses });
            resolve();
          }, 2000);
        }),
      list() {
        return busses;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.busses = cb;
        return busses;
      },
      getOne(id) {}
    },
    routes: {
      create: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            routes = [...routes, data];
            subs.busses({ routes });
            resolve();
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = routes.filter(({ id }) => id !== data.id);
            routes = [data, ...subtract];
            subs.busses({ routes });
            resolve();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = routes.filter(({ id }) => id !== data.id);
            routes = [...routes];
            subs.busses({ routes });
            resolve();
          }, 2000);
        }),
      list() {
        return routes;
      },
      subscribe(cb) {
        // listen for even change on the students observables
        subs.routes = cb;
        return routes;
      },
      getOne(id) {}
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
      getOne(id) {}
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
      getOne(id) {}
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
        getOne(id) {}
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
        getOne(id) {}
      }
    }
  };
})();

export default Data;
