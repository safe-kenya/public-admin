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
    names: "John H mwangi",
    route: {
      name: "Malawa route"
    },
    gender: "Male",
    parent: {
      name: "James mwangi"
    }
  },
  {
    id: Math.random().toString(),
    names: "Alice A mwali",
    route: {
      name: "mwali route"
    },
    gender: "Male",
    parent: {
      name: "Madam Essue"
    }
  },
  {
    id: Math.random().toString(),
    names: "Alice A mwali",
    route: {
      name: "mwali route"
    },
    gender: "Male",
    parent: {
      name: "Madam Essue"
    }
  }
];

var Data = (function() {
  var instance;
  var students = studentsData;
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
            resolve();
          }, 2000);
        }),
      update: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = students.filter(({ id }) => id !== data.id);
            students = [data,...subtract];
            subs.students({ students });
            resolve();
          }, 2000);
        }),
      delete: data =>
        new Promise((resolve, reject) => {
          data.id = Math.random().toString();
          setTimeout(() => {
            const subtract = students.filter(({ id }) => id !== data.id);
            students = [...subtract];
            subs.students({ students });
            resolve();
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
    busses: {
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
    routes: {
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