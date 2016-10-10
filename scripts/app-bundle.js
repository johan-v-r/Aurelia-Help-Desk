define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-dialog').plugin('aurelia-validation').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot("login/login");
    });
  }
});
define('backend/lorem',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateSentence = generateSentence;
  exports.generateTitle = generateTitle;
  var text = 'In tempus neque mollis, pharetra arcu et, varius lacus. Sed nunc elit, cursus eget convallis sit amet, congue eget ligula. Nullam nec finibus arcu. Suspendisse vitae lectus mollis nunc laoreet dignissim vitae ut ligula. Vestibulum ut sodales libero. Pellentesque accumsan enim nunc, a facilisis magna porttitor quis. Pellentesque faucibus, erat nec aliquet consequat, turpis orci sollicitudin ante, et ultricies libero eros a diam. Aliquam pharetra sapien non gravida aliquet. Aliquam sed ante accumsan, auctor arcu ut, pretium arcu. Nullam nulla diam, suscipit in mollis sed, auctor ut risus. Maecenas lacinia non mauris quis rhoncus. Nunc purus sem, fringilla vitae pulvinar ac, egestas nec massa. Pellentesque imperdiet vitae ex nec eleifend. Vivamus dictum congue ex nec varius. Praesent ut augue sem. Vivamus commodo, risus sit amet tincidunt dignissim, nunc lectus feugiat odio, quis congue turpis ipsum sed sapien. Cras id dui dignissim, faucibus quam facilisis, congue ligula. Nunc sollicitudin justo a odio molestie, quis posuere magna tempor. Aliquam sodales nisi ex, in malesuada dolor posuere a. Cras iaculis pretium ipsum, mollis maximus urna. Proin fermentum lectus maximus efficitur pulvinar. Maecenas ac consequat velit, eget dapibus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis tortor a enim lobortis posuere quis non nisi. Morbi accumsan mauris et lectus fringilla rutrum sed in ante. Nulla velit purus, tristique eleifend lacinia quis, consectetur non justo. Duis vulputate efficitur facilisis. Cras a auctor libero. Proin pellentesque dolor in pretium tempus. In auctor ut lacus in viverra. Aenean pulvinar consequat lobortis. Phasellus luctus odio dui, vel tristique ipsum luctus id. Ut tincidunt diam quis quam tincidunt consequat sed sit amet elit. Nulla facilisi. Aenean elementum malesuada libero ac ultrices. Vivamus fermentum quis ex vel ultrices. Nullam urna dolor, pretium vel massa et, vestibulum lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius pretium leo. Nulla in euismod nibh. Curabitur tempus varius mauris, vitae consequat urna mollis sed. Vivamus efficitur justo id nisl sodales, non vehicula lectus pretium. Donec vel mi lorem. Integer dolor tortor, finibus eget semper nec, scelerisque et lacus. Integer id imperdiet ante. Integer placerat enim luctus luctus efficitur. Quisque eros enim, cursus id volutpat ac, finibus vel arcu. Donec a nibh nibh. Cras ligula enim, pretium nec sapien non, tempor feugiat urna. In ultricies diam ac eleifend feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec in velit sit amet est feugiat suscipit in sollicitudin odio. Suspendisse aliquam est vel neque dignissim consequat. Maecenas a diam id felis ultricies euismod. Nullam lacus urna, egestas ut orci volutpat, imperdiet commodo ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eleifend mattis diam, ac consectetur est cursus sit amet. Nam euismod risus vitae libero aliquet, viverra pellentesque sem pulvinar. Praesent tincidunt et enim et volutpat. Vestibulum vel lorem vitae purus facilisis ultrices. Nam dictum sodales justo, efficitur accumsan tortor posuere sit amet. Suspendisse imperdiet id lectus id suscipit. Duis ornare commodo bibendum. Fusce justo ante, scelerisque quis ex vel, auctor lacinia mauris. Maecenas elementum id dolor sit amet consequat. Phasellus sed nibh bibendum enim accumsan volutpat. Curabitur rhoncus euismod nibh, sit amet vestibulum arcu iaculis et. Ut eleifend ligula non lectus consequat, ut aliquam nunc accumsan. Curabitur eget justo ut ipsum maximus egestas. Praesent tempus, sapien vel lacinia euismod, odio enim blandit sem, eget congue mi enim ornare erat. Proin ornare, sem non sagittis mattis, nisi lorem porttitor erat, id euismod arcu diam ut augue. Ut tincidunt hendrerit nisl, sit amet tempor neque rutrum vitae. Sed dictum ante ac sem volutpat auctor. Fusce at fringilla neque. Cras vel nulla non arcu porttitor finibus. Aenean placerat condimentum enim luctus auctor. Pellentesque sit amet elit consequat, vulputate eros nec, ultrices mauris. Sed blandit sed diam id interdum. Proin vitae lectus non urna interdum imperdiet. Donec et velit ut lacus congue gravida. Aliquam efficitur a augue a pulvinar. Pellentesque sollicitudin nunc id mauris elementum fermentum. Praesent pellentesque mauris lorem, sit amet cursus nunc tristique ac. In pulvinar ullamcorper lacus, ac venenatis felis ultricies vitae. Etiam dolor nisi, fringilla non libero et, mollis blandit est. Fusce ultrices rhoncus elementum. Quisque et tortor nec sapien sodales ultricies. Phasellus commodo est massa, nec posuere lectus tristique vel. Etiam sagittis lacus eu sodales semper. In porta sit amet dolor et dignissim. In convallis nunc vel feugiat tincidunt. Nunc hendrerit pretium magna et mattis. Mauris et gravida justo. Mauris eleifend metus non odio eleifend, id iaculis dui consequat. Ut aliquam luctus vulputate. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut sapien gravida, consequat lectus vitae, aliquam felis. Pellentesque eget placerat ligula. In hac habitasse platea dictumst. In nec nulla feugiat, tincidunt tellus a, congue nibh. Morbi cursus condimentum arcu, sed faucibus metus ultrices quis. Aenean nec maximus justo. Nullam non justo velit. Nunc vestibulum pharetra neque eget sagittis. Phasellus volutpat semper massa, a accumsan dui bibendum id. Sed in egestas magna, nec blandit libero. Suspendisse ut lectus rutrum, imperdiet nisl in, imperdiet nisl. Pellentesque non bibendum lacus, sit amet sollicitudin ligula. Cras egestas tincidunt arcu, at porta justo ultricies sed. Suspendisse quam nisl, volutpat sed quam in, ornare mattis augue. Suspendisse eget ex mollis, hendrerit mauris sed, molestie leo. Pellentesque efficitur aliquam scelerisque. Vivamus at eros at metus semper suscipit. In neque enim, imperdiet id mattis sed, viverra non purus. Sed accumsan sodales ex, hendrerit scelerisque augue. In et eleifend sapien, vitae aliquam felis. Pellentesque faucibus sed tortor nec ullamcorper. Nulla tempus diam et gravida imperdiet. Ut volutpat dignissim porta. Etiam a finibus sem. Nulla facilisi. Nulla ac suscipit orci. Cras sit amet magna odio. Curabitur vel sapien dapibus, feugiat lacus vel, pellentesque justo. Donec vitae consectetur velit. Pellentesque ut risus a erat scelerisque mattis. Sed pellentesque lorem varius dictum pulvinar. Suspendisse vestibulum nec quam et sagittis. Nunc suscipit molestie.';

  var sentences = text.split('. ');

  var count = sentences.length;

  function generateSentence() {
    return sentences[Math.floor(Math.random() * count)] + '.';
  }

  function generateTitle() {
    return sentences[Math.floor(Math.random() * count)].trim().split(' ').slice(0, 3).join(' ').slice(0, -1);
  }
});
define('backend/server',['exports', './lorem'], function (exports, _lorem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Server = exports.User = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var latency = 0;

  function wait() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : latency;

    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function _clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  var User = exports.User = function () {
    function User(attrs) {
      _classCallCheck(this, User);

      if (attrs) {
        Object.assign(this, attrs);
      }
    }

    User.prototype.clone = function clone() {
      return new User(_clone(this));
    };

    _createClass(User, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }, {
      key: 'ticketCount',
      get: function get() {
        var _this = this;

        return ticketData.filter(function (t) {
          return t.fromId === _this.id;
        }).length;
      }
    }, {
      key: 'postCount',
      get: function get() {
        var _this2 = this;

        return ticketData.reduce(function (a, b) {
          return a.concat(b.posts);
        }, []).filter(function (p) {
          return p.fromId === _this2.id;
        }).length;
      }
    }]);

    return User;
  }();

  var userData = [new User({
    id: 1,
    username: 'EisenbergEffect',
    email: 'rob@eisenberg.com',
    firstName: 'Rob',
    lastName: 'Eisenberg',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: true
  }), new User({
    id: 2,
    username: 'bryanrsmith',
    email: 'bryan@smith.com',
    firstName: 'Bryan',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/2.jpg',
    avatarUrl: '/img/users/avatar/2.jpg',
    isActive: true
  }), new User({
    id: 3,
    username: 'cmichaelgraham',
    email: 'mike@graham.com',
    firstName: 'Mike',
    lastName: 'Graham',
    iconUrl: '/img/users/icon/3.jpg',
    avatarUrl: '/img/users/avatar/3.jpg',
    isActive: true
  }), new User({
    id: 4,
    username: 'jdanyow',
    email: 'jeremy@danyow.com',
    firstName: 'Jeremy',
    lastName: 'Danyow',
    iconUrl: '/img/users/icon/4.jpg',
    avatarUrl: '/img/users/avatar/4.jpg',
    isActive: true
  }), new User({
    id: 5,
    username: 'martingust',
    email: 'martin@gust.com',
    firstName: 'Martin',
    lastName: 'Gust',
    iconUrl: '/img/users/icon/5.jpg',
    avatarUrl: '/img/users/avatar/5.jpg',
    isActive: true
  }), new User({
    id: 6,
    username: 'AshleyGrant',
    email: 'ashley@grant.com',
    firstName: 'Ashley',
    lastName: 'Grant',
    iconUrl: '/img/users/icon/6.jpg',
    avatarUrl: '/img/users/avatar/6.jpg',
    isActive: true
  }), new User({
    id: 7,
    username: 'davismj',
    email: 'matthew@davis.com',
    firstName: 'Matthew',
    lastName: 'Davis',
    iconUrl: '/img/users/icon/7.jpg',
    avatarUrl: '/img/users/avatar/7.jpg',
    isActive: true
  }), new User({
    id: 8,
    username: 'PWKad',
    email: 'patrick@walters.com',
    firstName: 'Patrick',
    lastName: 'Walters',
    iconUrl: '/img/users/icon/8.jpg',
    avatarUrl: '/img/users/avatar/8.jpg',
    isActive: true
  })];

  function randomDateInLastThirtyDays() {
    return new Date(new Date().getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  }

  function addRandomNumberOfDaysToDate(start, maxDays) {
    return new Date(Math.min(new Date(start.getTime() + Math.random() * Math.floor(Math.random() * maxDays) * 24 * 60 * 60 * 1000), new Date()));
  }

  var ticketData = [{
    id: 1,
    title: null,
    createdAt: new Date(),
    fromId: 1,
    status: 'Open',
    priority: 'Normal',
    type: 'Problem',
    participants: [],
    posts: [{
      createdAt: null,
      fromId: null,
      content: null
    }]
  }];

  for (var i = 0; i < 100; i++) {
    ticketData[i] = _clone(ticketData[0]);
    ticketData[i].id = i + 1;
    ticketData[i].title = (0, _lorem.generateTitle)();
    ticketData[i].participants[0] = _clone(userData[Math.floor(Math.random() * 8)]);
    ticketData[i].fromId = ticketData[i].participants[0].id;
    ticketData[i].createdAt = randomDateInLastThirtyDays();
    ticketData[i].posts[0].createdAt = addRandomNumberOfDaysToDate(ticketData[i].createdAt, 30);
    ticketData[i].posts[0].fromId = ticketData[i].participants[0].id;
    ticketData[i].posts[0].content = (0, _lorem.generateSentence)();
  }

  ticketData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var activityData = [{
    id: 1,
    createdAt: new Date(),
    content: (0, _lorem.generateSentence)(),
    type: 'ticket',
    associatedId: 1
  }];

  var _loop = function _loop(_i) {
    activityData[_i] = _clone(activityData[0]);
    activityData[_i].id = _i + 1;
    activityData[_i].createdAt = randomDateInLastThirtyDays();
    activityData[_i].associatedId = _i + 1;
    activityData[_i].createdBy = _clone(userData[Math.floor(Math.random() * 8)]);

    var ticket = ticketData.find(function (t) {
      return t.id === activityData[_i].associatedId;
    });
    activityData[_i].title = activityData[_i].createdBy.firstName + ' ' + activityData[_i].createdBy.lastName + ' <strong>posted</strong> a message to the ticket "' + ticket.title + '"';
  };

  for (var _i = 0; _i < 100; _i++) {
    _loop(_i);
  }

  activityData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var Server = exports.Server = function () {
    function Server() {
      _classCallCheck(this, Server);
    }

    Server.prototype.login = function login(username, password) {
      return wait().then(function () {
        if (username === 'un' && password === 'pw') {
          return userData[0].clone();
        }
      });
    };

    Server.prototype.createUser = function createUser() {
      return new User({
        id: 0,
        username: 'NewUser',
        email: '',
        firstName: 'New',
        lastName: 'User',
        iconUrl: '/img/users/icon/1.jpg',
        avatarUrl: '/img/users/avatar/1.jpg',
        isActive: false
      });
    };

    Server.prototype.saveUser = function saveUser(user) {
      return wait().then(function () {
        var clone = user.clone();

        if (clone.id == 0) {
          clone.id = userData.length + 1;
          userData.unshift(clone);
        } else {
          var existing = userData.find(function (c) {
            return c.id === clone.id;
          });
          var index = userData.indexOf(existing);
          userData.splice(index, 1, clone);
        }

        return clone.clone();
      });
    };

    Server.prototype.getUser = function getUser(userId) {
      return wait().then(function () {
        var existing = userData.find(function (c) {
          return c.id === userId;
        });
        return existing ? existing.clone() : null;
      });
    };

    Server.prototype.getUserSummaries = function getUserSummaries() {
      return wait().then(function () {
        return userData.map(function (x) {
          return x.clone();
        });
      });
    };

    Server.prototype.createTicket = function createTicket(title) {
      var currentUser = _clone(userData[0]);

      return {
        id: 0,
        title: title,
        createdAt: new Date(),
        fromId: currentUser.id,
        status: 'Open',
        priority: 'Normal',
        type: 'Problem',
        participants: [currentUser],
        posts: []
      };
    };

    Server.prototype.saveTicket = function saveTicket(ticket) {
      return wait().then(function () {
        if (ticketData.indexOf(ticket) === -1) {
          ticket.id = ticketData.length + 1;
          ticketData.unshift(ticket);
        }

        return ticket;
      });
    };

    Server.prototype.getTicketSummaries = function getTicketSummaries() {
      return wait().then(function () {
        return _clone(ticketData);
      });
    };

    Server.prototype.getTicketDetails = function getTicketDetails(ticketId) {
      return wait().then(function () {
        return ticketData.find(function (x) {
          return x.id === ticketId;
        });
      });
    };

    Server.prototype.getRecentActivity = function getRecentActivity() {
      return wait().then(function () {
        return _clone(activityData);
      });
    };

    Server.prototype.getNews = function getNews() {
      return wait().then(function () {
        return [{
          title: "New Features Launched",
          content: "'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words: 'Yes, we went to school in the sea, though you mayn't believe it—' 'I never said I didn't!' interrupted Alice. 'You did,' said the Mock Turtle.",
          createdAt: new Date(),
          tags: ["release", "features", "blog"]
        }, {
          title: "Satisfaction Guaranteed",
          content: "'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain. 'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.",
          createdAt: new Date(),
          tags: ["release", "launch", "blog"]
        }];
      });
    };

    return Server;
  }();
});
define('home/home',['exports', 'aurelia-framework', 'backend/server', 'resources/messages/tab-opened', 'aurelia-router'], function (exports, _aureliaFramework, _server, _tabOpened, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaFramework.Aurelia, _aureliaRouter.Router), _dec(_class = function () {
    function Home(server, aurelia, router) {
      _classCallCheck(this, Home);

      this.server = server;
      this.aurelia = aurelia;
      this.router = router;
      this.activity = null;
      this.news = null;
    }

    Home.prototype.activate = function activate() {
      var _this = this;

      return Promise.all([this.server.getRecentActivity().then(function (activity) {
        return _this.activity = activity;
      }), this.server.getNews().then(function (news) {
        return _this.news = news;
      })]);
    };

    Home.prototype.openTab = function openTab(e, activity) {
      var _this2 = this;

      if (e && (e.which == 2 || e.button == 4)) {

        this.server.getTicketDetails(parseInt(activity.associatedId)).then(function (ticket) {
          if (ticket) {
            _this2.aurelia.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
          }
        });

        e.preventDefault();
      } else {
        if (activity.type == 'ticket') this.router.navigateToRoute('thread', { id: activity.associatedId });else this.router.navigateToRoute(activity.type, { id: activity.associatedId });
      }
    };

    return Home;
  }()) || _class);
});
define('login/login',['exports', 'aurelia-dependency-injection', 'aurelia-framework', 'backend/server'], function (exports, _aureliaDependencyInjection, _aureliaFramework, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Login = exports.Login = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFramework.Aurelia, _server.Server), _dec(_class = function () {
    function Login(aurelia, server) {
      _classCallCheck(this, Login);

      this.aurelia = aurelia;
      this.server = server;
      this.username = '';
      this.password = '';
      this.message = '';
    }

    Login.prototype.login = function login() {
      var _this = this;

      this.server.login(this.username, this.password).then(function (result) {
        if (result) {
          _this.message = '';
          _this.aurelia.use.instance(_server.User, result);
          _this.aurelia.setRoot("shell/shell");
        } else {
          _this.message = 'Incorrect Username or Password!';
        }
      });
    };

    return Login;
  }()) || _class);
});
define('resources/bootstrap-form-renderer',['exports', 'aurelia-validation'], function (exports, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BootstrapFormRenderer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BootstrapFormRenderer = exports.BootstrapFormRenderer = function () {
    function BootstrapFormRenderer() {
      _classCallCheck(this, BootstrapFormRenderer);
    }

    BootstrapFormRenderer.prototype.render = function render(instruction) {
      for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _ref3 = _ref;
        var error = _ref3.error;
        var elements = _ref3.elements;

        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref4 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref4 = _i3.value;
          }

          var element = _ref4;

          this.remove(element, error);
        }
      }

      for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _ref5 = _ref2;
        var error = _ref5.error;
        var elements = _ref5.elements;

        for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref6 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref6 = _i4.value;
          }

          var _element = _ref6;

          this.add(_element, error);
        }
      }
    };

    BootstrapFormRenderer.prototype.add = function add(element, error) {
      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      formGroup.classList.add('has-error');

      var message = document.createElement('span');
      message.className = 'help-block validation-message';
      message.textContent = error.message;
      message.id = 'validation-message-' + error.id;
      formGroup.appendChild(message);
    };

    BootstrapFormRenderer.prototype.remove = function remove(element, error) {
      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      var message = formGroup.querySelector('#validation-message-' + error.id);
      if (message) {
        formGroup.removeChild(message);

        if (formGroup.querySelectorAll('.help-block.validation-message').length === 0) {
          formGroup.classList.remove('has-error');
        }
      }
    };

    return BootstrapFormRenderer;
  }();
});
define('resources/index',['exports', 'chartjs'], function (exports, _chartjs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _chartjs2 = _interopRequireDefault(_chartjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _chartjs2.default.defaults.global.responsive = true;

  function configure(config) {
    config.globalResources(['./value-converters/activity-type-to-route', './value-converters/date', './elements/rich-text-editor', './elements/data-grid', './elements/chart-data', './elements/line-chart', './elements/bar-chart']);
  }
});
define('settings/index',['exports', './routes'], function (exports, _routes2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CategoriesValueConverter = exports.SettingsIndex = undefined;

  var _routes3 = _interopRequireDefault(_routes2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SettingsIndex = exports.SettingsIndex = function () {
    function SettingsIndex() {
      _classCallCheck(this, SettingsIndex);
    }

    SettingsIndex.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes3.default);
    };

    return SettingsIndex;
  }();

  var CategoriesValueConverter = exports.CategoriesValueConverter = function () {
    function CategoriesValueConverter() {
      _classCallCheck(this, CategoriesValueConverter);
    }

    CategoriesValueConverter.prototype.toView = function toView(navModels) {
      var categories = new Map();

      for (var _iterator = navModels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var model = _ref;

        var _routes = categories.get(model.settings.category);

        if (!_routes) {
          categories.set(model.settings.category, _routes = []);
        }

        _routes.push(model);
      }

      return categories;
    };

    return CategoriesValueConverter;
  }();
});
define('settings/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var adminHome = {
    title: 'Admin Home',
    iconClass: 'fa-home'
  };

  var channels = {
    title: 'Channels',
    iconClass: 'fa-external-link'
  };

  var settings = {
    title: 'Settings',
    iconClass: 'fa-cog'
  };

  exports.default = [{ route: '', moduleId: './overview/index', title: 'Overview', nav: true, settings: { category: adminHome } }, { route: 'email', moduleId: './email/index', title: 'Email', nav: true, settings: { category: channels } }, { route: 'web-portal', moduleId: './webportal/index', title: 'Web Portal', nav: true, settings: { category: channels } }, { route: 'twitter', moduleId: './twitter/index', title: 'Twitter', nav: true, settings: { category: channels } }, { route: 'facebook', moduleId: './facebook/index', title: 'Facebook', nav: true, settings: { category: channels } }, { route: 'feedback-tab', moduleId: './feedbacktab/index', title: 'Feedback Tab', nav: true, settings: { category: channels } }, { route: 'api', moduleId: './api/index', title: 'API', nav: true, settings: { category: channels } }, { route: 'account', moduleId: './account/index', title: 'Account', nav: true, settings: { category: settings } }, { route: 'subscription', moduleId: './subscription/index', title: 'Subscription', nav: true, settings: { category: channels } }, { route: 'security', moduleId: './security/index', title: 'Security', nav: true, settings: { category: settings } }];
});
define('shell/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    name: 'home',
    route: ['', 'home'],
    moduleId: 'home/home',
    nav: true,
    title: 'Home',
    settings: { iconClass: 'fa-home' }
  }, {
    route: 'tickets',
    moduleId: 'tickets/tickets',
    nav: true,
    settings: { iconClass: 'fa-ticket' }
  }, {
    name: 'thread',
    route: 'tickets/:id',
    moduleId: 'tickets/thread'
  }, {
    name: 'user',
    route: ['users', 'users/:id'],
    moduleId: 'users/users',
    href: '#users',
    nav: true,
    title: 'Users',
    settings: { iconClass: 'fa-group' }
  }, {
    name: 'settings',
    route: 'settings',
    moduleId: 'settings/index',
    href: '#settings',
    nav: true,
    settings: { iconClass: 'fa-cog' }
  }, {
    name: 'help',
    route: 'help',
    moduleId: 'help/help'
  }];
});
define('shell/shell',['exports', 'aurelia-framework', 'backend/server', 'resources/messages/tab-opened', './routes', 'resources/dialogs/common-dialogs'], function (exports, _aureliaFramework, _server, _tabOpened, _routes, _commonDialogs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Shell = undefined;

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Shell = exports.Shell = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia, _server.User, _commonDialogs.CommonDialogs), _dec(_class = function () {
    function Shell(aurelia, user, commonDialogs) {
      _classCallCheck(this, Shell);

      this.aurelia = aurelia;
      this.user = user;
      this.commonDialogs = commonDialogs;
      this.tabs = [];
    }

    Shell.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes2.default);
    };

    Shell.prototype.bind = function bind() {
      var _this = this;

      this.navigationCompleteSub = this.aurelia.subscribe('router:navigation:complete', function (msg) {
        return _this.onNavigationComplete(msg);
      });
      this.tabOpenedSub = this.aurelia.subscribe(_tabOpened.TabOpened, function (msg) {
        return _this.onTabOpened(msg);
      });
    };

    Shell.prototype.unbind = function unbind() {
      this.navigationCompleteSub.dispose();
      this.tabOpenedSub.dispose();
    };

    Shell.prototype.closeTab = function closeTab(tab) {
      var index = this.tabs.indexOf(tab);

      if (index === -1) {
        return;
      }

      this.tabs.splice(index, 1);

      if (!tab.isActive) {
        return;
      }

      var next = this.tabs[0];

      if (next) {
        this.router.navigateToRoute(next.route, next.params, true);
      } else {
        this.router.navigateToRoute('home', true);
      }
    };

    Shell.prototype.middleCloseTab = function middleCloseTab(e, tab) {
      if (e && (e.which == 2 || e.button == 4)) {
        this.closeTab(tab);
        e.preventDefault();
      } else {
        this.router.navigateToRoute(tab.route, tab.params);
      }
    };

    Shell.prototype.logout = function logout() {
      var _this2 = this;

      if (this.tabs.length == 0) this._doLogout();

      var message = "You have tabs open. Are you sure you want to log out?";

      this.commonDialogs.showMessage(message, "Logout", ["Yes", "No"]).then(function (response) {
        if (response.wasCancelled) return;

        _this2._doLogout();
      });
    };

    Shell.prototype._doLogout = function _doLogout() {
      this.aurelia.setRoot('login/login');
      this.aurelia.container.unregister(_server.User);
      this.router.reset();
      this.router.deactivate();
      this.tabs = [];
    };

    Shell.prototype.onTabOpened = function onTabOpened(tab) {
      var existing = this.tabs.find(function (x) {
        return x.matches(tab);
      });

      if (!existing) {
        this.tabs.push(tab);
      }
    };

    Shell.prototype.onNavigationComplete = function onNavigationComplete(msg) {
      if (!msg.result.completed) {
        return;
      }

      this.tabs.forEach(function (x) {
        return x.updateActivation(msg.instruction);
      });
    };

    return Shell;
  }()) || _class);
});
define('tickets/thread',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-router', 'resources/dialogs/common-dialogs', 'resources/messages/tab-opened', 'backend/server'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaRouter, _commonDialogs, _tabOpened, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Thread = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Thread = exports.Thread = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaRouter.Router, _commonDialogs.CommonDialogs, _aureliaEventAggregator.EventAggregator, _server.User), _dec(_class = function () {
    function Thread(server, router, commonDialogs, eventAggregator, user) {
      _classCallCheck(this, Thread);

      this.server = server;
      this.router = router;
      this.commonDialogs = commonDialogs;
      this.eventAggregator = eventAggregator;
      this.user = user;
    }

    Thread.prototype.getParticipant = function getParticipant(id) {
      return this.ticket.participants.find(function (x) {
        return x.id == id;
      });
    };

    Thread.prototype.save = function save() {
      var _this = this;

      var isNew = this.ticket.id == 0;
      this.server.saveTicket(this.ticket).then(function (ticket) {
        _this.ticket = ticket;

        if (isNew) {
          _this.router.navigateToRoute('thread', { id: ticket.id }, { replace: true, trigger: false });
          _this.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
        }
      });
    };

    Thread.prototype.submit = function submit(status) {
      if (this.message) {
        if (!this.getParticipant(this.user.id)) {
          this.ticket.participants.push(this.user);
        }

        this.ticket.posts.unshift({
          createdAt: new Date(),
          fromId: this.user.id,
          content: this.message
        });

        this.message = '';
      }

      this.ticket.status = status;
      this.save();
    };

    Thread.prototype.canActivate = function canActivate(params) {
      var _this2 = this;

      if (params.id == 'new') {
        if (params.title) {
          this.ticket = this.server.createTicket(params.title);
          this.from = this.getParticipant(this.ticket.fromId);
          return true;
        }

        return this.commonDialogs.prompt("Wat's jou issue?").then(function (response) {
          if (response.wasCancelled) {
            return false;
          }

          return new _aureliaRouter.RedirectToRoute('thread', { id: 'new', title: response.output });
        });
      }

      return this.server.getTicketDetails(parseInt(params.id)).then(function (ticket) {
        if (ticket) {
          _this2.ticket = ticket;
          _this2.from = _this2.getParticipant(ticket.fromId);
          _this2.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
          return true;
        }

        return new _aureliaRouter.RedirectToRoute('home');
      });
    };

    Thread.prototype.activate = function activate(params) {
      this.message = '';
    };

    Thread.prototype.canDeactivate = function canDeactivate() {
      if (this.ticket.id === 0) {
        var message = 'You have created a ticket but have not yet posted it with a status. If you leave now, your work will be lost. Do you wish to continue?';

        return this.commonDialogs.showMessage(message, 'Ticket Not Saved', ['Yes', 'No']).then(function (response) {
          return !response.wasCancelled;
        });
      }

      return true;
    };

    return Thread;
  }()) || _class);
});
define('tickets/tickets',['exports', 'backend/server', 'aurelia-framework'], function (exports, _server, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tickets = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Tickets = exports.Tickets = (_dec = (0, _aureliaFramework.inject)(_server.Server), _dec(_class = function () {
    function Tickets(server) {
      _classCallCheck(this, Tickets);

      this.server = server;
    }

    Tickets.prototype.activate = function activate() {
      var _this = this;

      return this.server.getTicketSummaries().then(function (tickets) {
        return _this.tickets = tickets;
      });
    };

    return Tickets;
  }()) || _class);
});
define('users/edit-user-controller',['exports', 'aurelia-framework', 'aurelia-validation', 'resources/bootstrap-form-renderer', 'backend/server'], function (exports, _aureliaFramework, _aureliaValidation, _bootstrapFormRenderer, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EditUserController = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

  var EditUserController = exports.EditUserController = (_dec = (0, _aureliaFramework.transient)(), _dec2 = (0, _aureliaFramework.inject)(_server.Server, _aureliaFramework.NewInstance.of(_aureliaValidation.ValidationController)), _dec3 = (0, _aureliaFramework.computedFrom)('validationController.errors.length'), _dec(_class = _dec2(_class = (_class2 = function () {
    function EditUserController(server, validationController) {
      _classCallCheck(this, EditUserController);

      this.server = server;
      this.validationController = validationController;
      this.validationController.validateTrigger = _aureliaValidation.validateTrigger.change;
      this.validationController.addRenderer(new _bootstrapFormRenderer.BootstrapFormRenderer());
      this.onSave = function () {};
    }

    EditUserController.prototype.startTracking = function startTracking(original) {
      var _this = this;

      if (original) {
        this.stopTracking();
        this.original = original;
        this.originalJSON = JSON.stringify(original);
        this.isDirty = false;
        this.editable = original.clone();

        _aureliaValidation.ValidationRules.ensure('firstName').displayName('First Name').required().minLength(3).maxLength(10).ensure('lastName').displayName('Last Name').required().minLength(3).maxLength(10).ensure('email').displayName('Email').required().email().on(this.editable);

        this.validationController.reset();

        this._timer = setInterval(function () {
          var currentJSON = JSON.stringify(_this.editable);
          if (currentJSON !== _this.originalJSON) {
            _this.isDirty = true;
          } else if (_this.isDirty) {
            _this.isDirty = false;
          }
        }, 500);
      } else {
        this.original = this.editable = null;
      }
    };

    EditUserController.prototype.stopTracking = function stopTracking() {
      clearInterval(this._timer);
    };

    EditUserController.prototype.validate = function validate() {
      return this.validationController.validate();
    };

    EditUserController.prototype.toggleActiveStatus = function toggleActiveStatus() {
      this.editable.isActive = !this.editable.isActive;
    };

    EditUserController.prototype.commit = function commit(other) {
      this.stopTracking();
      Object.assign(this.original, other || this.editable);
      this.startTracking(this.original);
    };

    EditUserController.prototype.revert = function revert() {
      this.startTracking(this.original);
    };

    EditUserController.prototype.save = function save() {
      var _this2 = this;

      return this.validate().then(function (errors) {
        if (errors.length !== 0) {
          return;
        }

        return _this2.server.saveUser(_this2.editable).then(function (user) {
          _this2.commit(user);
          _this2.onSave(user);
        });
      });
    };

    _createClass(EditUserController, [{
      key: 'isValid',
      get: function get() {
        return this.validationController.errors.length === 0;
      }
    }]);

    return EditUserController;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'isValid', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'isValid'), _class2.prototype)), _class2)) || _class) || _class);
});
define('users/users',['exports', 'aurelia-framework', 'aurelia-router', 'backend/server', 'resources/dialogs/common-dialogs', './edit-user-controller'], function (exports, _aureliaFramework, _aureliaRouter, _server, _commonDialogs, _editUserController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Users = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Users = exports.Users = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaRouter.Router, _commonDialogs.CommonDialogs, _editUserController.EditUserController), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
    function Users(server, router, commonDialogs, controller) {
      var _this = this;

      _classCallCheck(this, Users);

      this.server = server;
      this.router = router;
      this.commonDialogs = commonDialogs;
      this.controller = controller;
      this.controller.onSave = function (user) {
        return _this.onSave(user);
      };
    }

    Users.prototype.canActivate = function canActivate(params) {
      if (!params.id && this.activeId) {
        return new _aureliaRouter.RedirectToRoute('user', { id: this.activeId });
      }

      return true;
    };

    Users.prototype.activate = function activate(params) {
      var _this2 = this;

      if (!this.users) {
        return Promise.all([this.load(params.id), this.server.getUserSummaries().then(function (users) {
          return _this2.users = users;
        })]);
      } else {
        return this.load(params.id);
      }
    };

    Users.prototype.load = function load(id) {
      var _this3 = this;

      if (id == 'new') {
        this.activeId = 0;
        this.controller.startTracking(this.server.createUser());
      } else if (id) {
        this.activeId = parseInt(id);
        return this.server.getUser(this.activeId).then(function (user) {
          _this3.controller.startTracking(user);
        });
      } else {
        this.activeId = 0;
        this.controller.startTracking(null);
      }
    };

    Users.prototype.onSave = function onSave(user) {
      if (this.activeId == 0) {
        this.users.unshift(user);
        this.activeId = user.id;
        this.router.navigateToRoute('user', { id: user.id }, { replace: true, trigger: false });
      } else {
        var existing = this.users.find(function (c) {
          return c.id == user.id;
        });
        var index = this.users.indexOf(existing);
        this.users.splice(index, 1, user);
      }
    };

    Users.prototype.canDeactivate = function canDeactivate() {
      if (this.controller.isDirty) {
        var message = 'You have made changes. If you leave now, these changes will be lost. Do you wish to continue?';

        return this.commonDialogs.showMessage(message, 'User Has Changed', ['Yes', 'No']).then(function (response) {
          return !response.wasCancelled;
        });
      }

      return true;
    };

    Users.prototype.deactivate = function deactivate() {
      this.controller.revert();
      this.controller.stopTracking();
    };

    return Users;
  }()) || _class) || _class);
});
define('resources/data/countries',["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CountryBinder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var countries = [{ abbreviation: "AF", name: "Afghanistan" }, { abbreviation: "AL", name: "Albania" }, { abbreviation: "DZ", name: "Algeria" }, { abbreviation: "AS", name: "American Samoa" }, { abbreviation: "AD", name: "Andorra" }, { abbreviation: "AO", name: "Angola" }, { abbreviation: "AI", name: "Anguilla" }, { abbreviation: "AQ", name: "Antarctica" }, { abbreviation: "AG", name: "Antigua and Barbuda" }, { abbreviation: "AR", name: "Argentina" }, { abbreviation: "AM", name: "Armenia" }, { abbreviation: "AW", name: "Aruba" }, { abbreviation: "AU", name: "Australia" }, { abbreviation: "AT", name: "Austria" }, { abbreviation: "AZ", name: "Azerbaijan" }, { abbreviation: "BS", name: "Bahamas" }, { abbreviation: "BH", name: "Bahrain" }, { abbreviation: "BD", name: "Bangladesh" }, { abbreviation: "BB", name: "Barbados" }, { abbreviation: "BY", name: "Belarus" }, { abbreviation: "BE", name: "Belgium" }, { abbreviation: "BZ", name: "Belize" }, { abbreviation: "BJ", name: "Benin" }, { abbreviation: "BM", name: "Bermuda" }, { abbreviation: "BT", name: "Bhutan" }, { abbreviation: "BO", name: "Bolivia" }, { abbreviation: "BA", name: "Bosnia and Herzegowina" }, { abbreviation: "BW", name: "Botswana" }, { abbreviation: "BV", name: "Bouvet Island" }, { abbreviation: "BR", name: "Brazil" }, { abbreviation: "IO", name: "British Indian Ocean Territory" }, { abbreviation: "BN", name: "Brunei Darussalam" }, { abbreviation: "BG", name: "Bulgaria" }, { abbreviation: "BF", name: "Burkina Faso" }, { abbreviation: "BI", name: "Burundi" }, { abbreviation: "KH", name: "Cambodia" }, { abbreviation: "CM", name: "Cameroon" }, { abbreviation: "CA", name: "Canada" }, { abbreviation: "CV", name: "Cape Verde" }, { abbreviation: "KY", name: "Cayman Islands" }, { abbreviation: "CF", name: "Central African Republic" }, { abbreviation: "TD", name: "Chad" }, { abbreviation: "CL", name: "Chile" }, { abbreviation: "CN", name: "China" }, { abbreviation: "CX", name: "Christmas Island" }, { abbreviation: "CC", name: "Cocos (Keeling) Islands" }, { abbreviation: "CO", name: "Colombia" }, { abbreviation: "KM", name: "Comoros" }, { abbreviation: "CG", name: "Congo" }, { abbreviation: "CD", name: "Congo, the Democratic Republic of the" }, { abbreviation: "CK", name: "Cook Islands" }, { abbreviation: "CR", name: "Costa Rica" }, { abbreviation: "CI", name: "Cote d'Ivoire" }, { abbreviation: "HR", name: "Croatia (Hrvatska)" }, { abbreviation: "CU", name: "Cuba" }, { abbreviation: "CY", name: "Cyprus" }, { abbreviation: "CZ", name: "Czech Republic" }, { abbreviation: "DK", name: "Denmark" }, { abbreviation: "DJ", name: "Djibouti" }, { abbreviation: "DM", name: "Dominica" }, { abbreviation: "DO", name: "Dominican Republic" }, { abbreviation: "TP", name: "East Timor" }, { abbreviation: "EC", name: "Ecuador" }, { abbreviation: "EG", name: "Egypt" }, { abbreviation: "SV", name: "El Salvador" }, { abbreviation: "GQ", name: "Equatorial Guinea" }, { abbreviation: "ER", name: "Eritrea" }, { abbreviation: "EE", name: "Estonia" }, { abbreviation: "ET", name: "Ethiopia" }, { abbreviation: "FK", name: "Falkland Islands (Malvinas)" }, { abbreviation: "FO", name: "Faroe Islands" }, { abbreviation: "FJ", name: "Fiji" }, { abbreviation: "FI", name: "Finland" }, { abbreviation: "FR", name: "France" }, { abbreviation: "FX", name: "France, Metropolitan" }, { abbreviation: "GF", name: "French Guiana" }, { abbreviation: "PF", name: "French Polynesia" }, { abbreviation: "TF", name: "French Southern Territories" }, { abbreviation: "GA", name: "Gabon" }, { abbreviation: "GM", name: "Gambia" }, { abbreviation: "GE", name: "Georgia" }, { abbreviation: "DE", name: "Germany" }, { abbreviation: "GH", name: "Ghana" }, { abbreviation: "GI", name: "Gibraltar" }, { abbreviation: "GR", name: "Greece" }, { abbreviation: "GL", name: "Greenland" }, { abbreviation: "GD", name: "Grenada" }, { abbreviation: "GP", name: "Guadeloupe" }, { abbreviation: "GU", name: "Guam" }, { abbreviation: "GT", name: "Guatemala" }, { abbreviation: "GN", name: "Guinea" }, { abbreviation: "GW", name: "Guinea-Bissau" }, { abbreviation: "GY", name: "Guyana" }, { abbreviation: "HT", name: "Haiti" }, { abbreviation: "HM", name: "Heard and Mc Donald Islands" }, { abbreviation: "VA", name: "Holy See (Vatican City State)" }, { abbreviation: "HN", name: "Honduras" }, { abbreviation: "HK", name: "Hong Kong" }, { abbreviation: "HU", name: "Hungary" }, { abbreviation: "IS", name: "Iceland" }, { abbreviation: "IN", name: "India" }, { abbreviation: "ID", name: "Indonesia" }, { abbreviation: "IR", name: "Iran (Islamic Republic of)" }, { abbreviation: "IQ", name: "Iraq" }, { abbreviation: "IE", name: "Ireland" }, { abbreviation: "IL", name: "Israel" }, { abbreviation: "IT", name: "Italy" }, { abbreviation: "JM", name: "Jamaica" }, { abbreviation: "JP", name: "Japan" }, { abbreviation: "JO", name: "Jordan" }, { abbreviation: "KZ", name: "Kazakhstan" }, { abbreviation: "KE", name: "Kenya" }, { abbreviation: "KI", name: "Kiribati" }, { abbreviation: "KP", name: "Korea, Democratic People's Republic of" }, { abbreviation: "KR", name: "Korea, Republic of" }, { abbreviation: "KW", name: "Kuwait" }, { abbreviation: "KG", name: "Kyrgyzstan" }, { abbreviation: "LA", name: "Lao People's Democratic Republic" }, { abbreviation: "LV", name: "Latvia" }, { abbreviation: "LB", name: "Lebanon" }, { abbreviation: "LS", name: "Lesotho" }, { abbreviation: "LR", name: "Liberia" }, { abbreviation: "LY", name: "Libyan Arab Jamahiriya" }, { abbreviation: "LI", name: "Liechtenstein" }, { abbreviation: "LT", name: "Lithuania" }, { abbreviation: "LU", name: "Luxembourg" }, { abbreviation: "MO", name: "Macau" }, { abbreviation: "MK", name: "Macedonia, The Former Yugoslav Republic of" }, { abbreviation: "MG", name: "Madagascar" }, { abbreviation: "MW", name: "Malawi" }, { abbreviation: "MY", name: "Malaysia" }, { abbreviation: "MV", name: "Maldives" }, { abbreviation: "ML", name: "Mali" }, { abbreviation: "MT", name: "Malta" }, { abbreviation: "MH", name: "Marshall Islands" }, { abbreviation: "MQ", name: "Martinique" }, { abbreviation: "MR", name: "Mauritania" }, { abbreviation: "MU", name: "Mauritius" }, { abbreviation: "YT", name: "Mayotte" }, { abbreviation: "MX", name: "Mexico" }, { abbreviation: "FM", name: "Micronesia, Federated States of" }, { abbreviation: "MD", name: "Moldova, Republic of" }, { abbreviation: "MC", name: "Monaco" }, { abbreviation: "MN", name: "Mongolia" }, { abbreviation: "MS", name: "Montserrat" }, { abbreviation: "MA", name: "Morocco" }, { abbreviation: "MZ", name: "Mozambique" }, { abbreviation: "MM", name: "Myanmar" }, { abbreviation: "NA", name: "Namibia" }, { abbreviation: "NR", name: "Nauru" }, { abbreviation: "NP", name: "Nepal" }, { abbreviation: "NL", name: "Netherlands" }, { abbreviation: "AN", name: "Netherlands Antilles" }, { abbreviation: "NC", name: "New Caledonia" }, { abbreviation: "NZ", name: "New Zealand" }, { abbreviation: "NI", name: "Nicaragua" }, { abbreviation: "NE", name: "Niger" }, { abbreviation: "NG", name: "Nigeria" }, { abbreviation: "NU", name: "Niue" }, { abbreviation: "NF", name: "Norfolk Island" }, { abbreviation: "MP", name: "Northern Mariana Islands" }, { abbreviation: "NO", name: "Norway" }, { abbreviation: "OM", name: "Oman" }, { abbreviation: "PK", name: "Pakistan" }, { abbreviation: "PW", name: "Palau" }, { abbreviation: "PA", name: "Panama" }, { abbreviation: "PG", name: "Papua New Guinea" }, { abbreviation: "PY", name: "Paraguay" }, { abbreviation: "PE", name: "Peru" }, { abbreviation: "PH", name: "Philippines" }, { abbreviation: "PN", name: "Pitcairn" }, { abbreviation: "PL", name: "Poland" }, { abbreviation: "PT", name: "Portugal" }, { abbreviation: "PR", name: "Puerto Rico" }, { abbreviation: "QA", name: "Qatar" }, { abbreviation: "RE", name: "Reunion" }, { abbreviation: "RO", name: "Romania" }, { abbreviation: "RU", name: "Russian Federation" }, { abbreviation: "RW", name: "Rwanda" }, { abbreviation: "KN", name: "Saint Kitts and Nevis" }, { abbreviation: "LC", name: "Saint LUCIA" }, { abbreviation: "VC", name: "Saint Vincent and the Grenadines" }, { abbreviation: "WS", name: "Samoa" }, { abbreviation: "SM", name: "San Marino" }, { abbreviation: "ST", name: "Sao Tome and Principe" }, { abbreviation: "SA", name: "Saudi Arabia" }, { abbreviation: "SN", name: "Senegal" }, { abbreviation: "SC", name: "Seychelles" }, { abbreviation: "SL", name: "Sierra Leone" }, { abbreviation: "SG", name: "Singapore" }, { abbreviation: "SK", name: "Slovakia (Slovak Republic)" }, { abbreviation: "SI", name: "Slovenia" }, { abbreviation: "SB", name: "Solomon Islands" }, { abbreviation: "SO", name: "Somalia" }, { abbreviation: "ZA", name: "South Africa" }, { abbreviation: "GS", name: "South Georgia and the South Sandwich Islands" }, { abbreviation: "ES", name: "Spain" }, { abbreviation: "LK", name: "Sri Lanka" }, { abbreviation: "SH", name: "St. Helena" }, { abbreviation: "PM", name: "St. Pierre and Miquelon" }, { abbreviation: "SD", name: "Sudan" }, { abbreviation: "SR", name: "Suriname" }, { abbreviation: "SJ", name: "Svalbard and Jan Mayen Islands" }, { abbreviation: "SZ", name: "Swaziland" }, { abbreviation: "SE", name: "Sweden" }, { abbreviation: "CH", name: "Switzerland" }, { abbreviation: "SY", name: "Syrian Arab Republic" }, { abbreviation: "TW", name: "Taiwan, Province of China" }, { abbreviation: "TJ", name: "Tajikistan" }, { abbreviation: "TZ", name: "Tanzania, United Republic of" }, { abbreviation: "TH", name: "Thailand" }, { abbreviation: "TG", name: "Togo" }, { abbreviation: "TK", name: "Tokelau" }, { abbreviation: "TO", name: "Tonga" }, { abbreviation: "TT", name: "Trinidad and Tobago" }, { abbreviation: "TN", name: "Tunisia" }, { abbreviation: "TR", name: "Turkey" }, { abbreviation: "TM", name: "Turkmenistan" }, { abbreviation: "TC", name: "Turks and Caicos Islands" }, { abbreviation: "TV", name: "Tuvalu" }, { abbreviation: "UG", name: "Uganda" }, { abbreviation: "UA", name: "Ukraine" }, { abbreviation: "AE", name: "United Arab Emirates" }, { abbreviation: "GB", name: "United Kingdom" }, { abbreviation: "US", name: "United States" }, { abbreviation: "UM", name: "United States Minor Outlying Islands" }, { abbreviation: "UY", name: "Uruguay" }, { abbreviation: "UZ", name: "Uzbekistan" }, { abbreviation: "VU", name: "Vanuatu" }, { abbreviation: "VE", name: "Venezuela" }, { abbreviation: "VN", name: "Viet Nam" }, { abbreviation: "VG", name: "Virgin Islands (British)" }, { abbreviation: "VI", name: "Virgin Islands (U.S.)" }, { abbreviation: "WF", name: "Wallis and Futuna Islands" }, { abbreviation: "EH", name: "Western Sahara" }, { abbreviation: "YE", name: "Yemen" }, { abbreviation: "YU", name: "Yugoslavia" }, { abbreviation: "ZM", name: "Zambia" }, { abbreviation: "ZW", name: "Zimbabwe" }];

  var CountryBinder = exports.CountryBinder = (_dec = (0, _aureliaTemplating.viewEngineHooks)(), _dec(_class = function () {
    function CountryBinder() {
      _classCallCheck(this, CountryBinder);
    }

    CountryBinder.prototype.beforeBind = function beforeBind(view) {
      view.overrideContext.countries = countries;
    };

    return CountryBinder;
  }()) || _class);
});
define('resources/data/timezones',["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TimeZoneBinder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var timezones = [{ value: "-12.0", display: "(GMT -12:00) Eniwetok, Kwajalein" }, { value: "-11.0", display: "(GMT -11:00) Midway Island, Samoa" }, { value: "-10.0", display: "(GMT -10:00) Hawaii" }, { value: "-9.0", display: "(GMT -9:00) Alaska" }, { value: "-8.0", display: "(GMT -8:00) Pacific Time (US & Canada)" }, { value: "-7.0", display: "(GMT -7:00) Mountain Time (US & Canada)" }, { value: "-6.0", display: "(GMT -6:00) Central Time (US & Canada), Mexico City" }, { value: "-5.0", display: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima" }, { value: "-4.0", display: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz" }, { value: "-3.5", display: "(GMT -3:30) Newfoundland" }, { value: "-3.0", display: "(GMT -3:00) Brazil, Buenos Aires, Georgetown" }, { value: "-2.0", display: "(GMT -2:00) Mid-Atlantic" }, { value: "-1.0", display: "(GMT -1:00 hour) Azores, Cape Verde Islands" }, { value: "0.0", display: "(GMT) Western Europe Time, London, Lisbon, Casablanca" }, { value: "1.0", display: "(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris" }, { value: "2.0", display: "(GMT +2:00) Kaliningrad, South Africa" }, { value: "3.0", display: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg" }, { value: "3.5", display: "(GMT +3:30) Tehran" }, { value: "4.0", display: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi" }, { value: "4.5", display: "(GMT +4:30) Kabul" }, { value: "5.0", display: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent" }, { value: "5.5", display: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi" }, { value: "5.75", display: "(GMT +5:45) Kathmandu" }, { value: "6.0", display: "(GMT +6:00) Almaty, Dhaka, Colombo" }, { value: "7.0", display: "(GMT +7:00) Bangkok, Hanoi, Jakarta" }, { value: "8.0", display: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong" }, { value: "9.0", display: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk" }, { value: "9.5", display: "(GMT +9:30) Adelaide, Darwin" }, { value: "10.0", display: "(GMT +10:00) Eastern Australia, Guam, Vladivostok" }, { value: "11.0", display: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia" }, { value: "12.0", display: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka" }];

  var TimeZoneBinder = exports.TimeZoneBinder = (_dec = (0, _aureliaTemplating.viewEngineHooks)(), _dec(_class = function () {
    function TimeZoneBinder() {
      _classCallCheck(this, TimeZoneBinder);
    }

    TimeZoneBinder.prototype.beforeBind = function beforeBind(view) {
      view.overrideContext.timezones = timezones;
    };

    return TimeZoneBinder;
  }()) || _class);
});
define('resources/dialogs/common-dialogs',['exports', 'aurelia-framework', 'aurelia-dialog', './message-box', './prompt'], function (exports, _aureliaFramework, _aureliaDialog, _messageBox, _prompt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CommonDialogs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CommonDialogs = exports.CommonDialogs = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogService), _dec(_class = function () {
    function CommonDialogs(dialogService) {
      _classCallCheck(this, CommonDialogs);

      this.dialogService = dialogService;
    }

    CommonDialogs.prototype.showMessage = function showMessage(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Message';
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Ok'];

      return this.dialogService.open({ viewModel: _messageBox.MessageBox, model: { message: message, title: title, options: options } });
    };

    CommonDialogs.prototype.prompt = function prompt(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Prompt";

      return this.dialogService.open({ viewModel: _prompt.Prompt, model: { message: message, title: title } });
    };

    return CommonDialogs;
  }()) || _class);
});
define('resources/dialogs/message-box',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MessageBox = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MessageBox = exports.MessageBox = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function MessageBox(dialogController) {
      _classCallCheck(this, MessageBox);

      this.dialogController = dialogController;
    }

    MessageBox.prototype.activate = function activate(model) {
      this.model = model;
    };

    MessageBox.prototype.selectOption = function selectOption(option) {
      if (isCancel(option)) {
        this.dialogController.cancel(option);
      } else {
        this.dialogController.ok(option);
      }
    };

    return MessageBox;
  }()) || _class);


  function isCancel(option) {
    return ['cancel', 'no'].indexOf(option.toLowerCase()) !== -1;
  }
});
define('resources/dialogs/prompt',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Prompt = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Prompt = exports.Prompt = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function Prompt(dialogController) {
      _classCallCheck(this, Prompt);

      this.dialogController = dialogController;
      this.answer = null;
    }

    Prompt.prototype.activate = function activate(model) {
      this.model = model;
    };

    Prompt.prototype.ok = function ok() {
      if (this.answer) {
        this.dialogController.ok(this.answer);
      }
    };

    Prompt.prototype.cancel = function cancel() {
      this.dialogController.cancel();
    };

    return Prompt;
  }()) || _class);
});
define('resources/elements/bar-chart',['exports', './chart-element'], function (exports, _chartElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BarChart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BarChart = exports.BarChart = (_dec = (0, _chartElement.chartElement)('Bar'), _dec(_class = function BarChart() {
    _classCallCheck(this, BarChart);
  }) || _class);
});
define('resources/elements/chart-data',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartData = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  var ChartData = exports.ChartData = (_dec = (0, _aureliaFramework.noView)(), _dec(_class = (_class2 = function ChartData() {
    _classCallCheck(this, ChartData);

    _initDefineProp(this, 'data', _descriptor, this);

    _initDefineProp(this, 'label', _descriptor2, this);

    _initDefineProp(this, 'fillColor', _descriptor3, this);

    _initDefineProp(this, 'strokeColor', _descriptor4, this);

    _initDefineProp(this, 'pointStrokeColor', _descriptor5, this);

    _initDefineProp(this, 'pointHighlightFill', _descriptor6, this);

    _initDefineProp(this, 'pointHighlightStroke', _descriptor7, this);

    _initDefineProp(this, 'highlightFill', _descriptor8, this);

    _initDefineProp(this, 'highlightStroke', _descriptor9, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'fillColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,0.2)';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'strokeColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pointStrokeColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "#fff";
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'pointHighlightFill', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "#fff";
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pointHighlightStroke', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "rgba(220,220,220,1)";
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'highlightFill', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'highlightStroke', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  })), _class2)) || _class);
});
define('resources/elements/chart-element',['exports', 'chartjs', 'aurelia-framework'], function (exports, _chartjs, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chartElement = chartElement;

  var _chartjs2 = _interopRequireDefault(_chartjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function chartElement(api) {
    return function (target) {
      (0, _aureliaFramework.bindable)('labels')(target);
      (0, _aureliaFramework.children)({ selector: 'chart-data', name: 'datasets' })(target);
      (0, _aureliaFramework.inlineView)('\n    <template>\n      <canvas ref="canvas"></canvas>\n      <slot></slot>\n    </template>\n    ')(target);

      target.prototype.bind = function () {
        this.context = this.canvas.getContext('2d');
      };

      target.prototype.attached = function () {
        this.render();
      };

      target.prototype.render = function () {
        if (this.chart) {
          this.chart.destroy();
        }

        var data = {
          labels: this.labels,
          datasets: this.datasets
        };

        this.chart = new _chartjs2.default(this.context)[api](data);
      };

      target.prototype.detached = function () {
        if (this.chart) {
          this.chart.destroy();
        }
      };
    };
  }
});
define('resources/elements/data-grid',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataGrid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var DataGrid = exports.DataGrid = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.processContent)(parseColumns), _dec(_class = _dec2(_class = function () {
    function DataGrid(element) {
      var _this = this;

      _classCallCheck(this, DataGrid);

      this.element = element;
      this.onResize = function () {
        return _this.size();
      };
    }

    DataGrid.prototype.bind = function bind() {
      window.addEventListener('resize', this.onResize);
    };

    DataGrid.prototype.attached = function attached() {
      this.headerCells = this.element.getElementsByClassName('header-row')[0].children;
      this.sizingCells = this.element.getElementsByClassName('sizing-row')[0].children;
      this.size();
    };

    DataGrid.prototype.unbind = function unbind() {
      window.removeEventListener('resize', this.onResize);
    };

    DataGrid.prototype.size = function size() {
      for (var i = 0, ii = this.headerCells.length - 1; i < ii; ++i) {
        this.sizingCells[i].style.width = this.headerCells[i].offsetWidth + 'px';
      }
    };

    return DataGrid;
  }()) || _class) || _class);


  function parseColumns(compiler, resources, node, instruction) {
    var columns = node.querySelectorAll('grid-column');
    var headerCells = '';
    var dataCells = '';
    var sizingCells = '';
    var itemsExpression = node.getAttribute('items.bind');

    node.removeAttribute('items.bind');

    for (var i = 0, ii = columns.length; i < ii; ++i) {
      var column = columns[i];
      var cellTemplate = void 0;

      headerCells += '<th>' + column.getAttribute('heading') + '</th>';
      sizingCells += '<td></td>';
      cellTemplate = column.innerHTML.trim();

      if (cellTemplate) {
        dataCells += '<td>' + cellTemplate + '</td>';
      } else {
        dataCells += '<td>${item.' + column.getAttribute('property') + '}</td>';
      }
    }

    node.innerHTML = '\n  <table class="grid-header table">\n    <thead>\n      <tr class="header-row">' + headerCells + '</tr>\n    </thead>\n  </table>\n  <div class="grid-container">\n    <table class="grid-rows table table-striped">\n      <tbody>\n        <tr class="sizing-row">' + sizingCells + '</tr>\n        <tr repeat.for="item of ' + itemsExpression + '" class="item-row">' + dataCells + '</tr>\n      </tbody>\n    </table>\n  </div>\n  ';

    return true;
  }
});
define('resources/elements/line-chart',['exports', './chart-element'], function (exports, _chartElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LineChart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var LineChart = exports.LineChart = (_dec = (0, _chartElement.chartElement)('Line'), _dec(_class = function LineChart() {
    _classCallCheck(this, LineChart);
  }) || _class);
});
define('resources/elements/rich-text-editor',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RichTextEditor = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  CKEDITOR.config.skin = 'bootstrapck';

  var RichTextEditor = exports.RichTextEditor = (_dec = (0, _aureliaFramework.inject)(Element, _aureliaFramework.TaskQueue), _dec2 = (0, _aureliaFramework.noView)(), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function RichTextEditor(element, taskQueue) {
      _classCallCheck(this, RichTextEditor);

      _initDefineProp(this, 'value', _descriptor, this);

      this.element = element;
      this.taskQueue = taskQueue;
      this.guard = false;
    }

    RichTextEditor.prototype.created = function created(owningView) {
      var _this = this;

      var original = owningView.removeNodes;
      var that = this;

      owningView.removeNodes = function () {
        _this.editor.destroy();
        original.call(owningView);
      };
    };

    RichTextEditor.prototype.bind = function bind() {
      var _this2 = this;

      this.editor = CKEDITOR.appendTo(this.element, { removePlugins: 'resize, elementspath' }, this.value);

      this.editor.on('change', function () {
        var newValue = _this2.editor.getData();

        if (_this2.value === newValue) {
          return;
        }

        _this2.guard = true;
        _this2.value = newValue;
        _this2.taskQueue.queueMicroTask(function () {
          return _this2.guard = false;
        });
      });
    };

    RichTextEditor.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (this.guard || !this.editor) {
        return;
      }

      this.editor.setData(newValue);
    };

    return RichTextEditor;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('resources/messages/tab-opened',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TabOpened = exports.TabOpened = function () {
    function TabOpened(title, route, params) {
      _classCallCheck(this, TabOpened);

      this.title = title;
      this.route = route;
      this.params = params || {};
      this.isActive = true;
    }

    TabOpened.prototype.updateActivation = function updateActivation(instruction) {
      if (this.route !== instruction.config.name) {
        this.isActive = false;
        return;
      }

      var params = instruction.params;

      for (var key in params) {
        if (params[key] !== this.params[key].toString()) {
          this.isActive = false;
          return;
        }
      }

      this.isActive = true;
    };

    TabOpened.prototype.matches = function matches(other) {
      if (this.route !== other.route) {
        return false;
      }

      for (var key in other.params) {
        if (other.params[key] !== this.params[key]) {
          return false;
        }
      }

      return true;
    };

    return TabOpened;
  }();
});
define('resources/value-converters/activity-type-to-route',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ActivityTypeToRouteValueConverter = exports.ActivityTypeToRouteValueConverter = function () {
    function ActivityTypeToRouteValueConverter() {
      _classCallCheck(this, ActivityTypeToRouteValueConverter);
    }

    ActivityTypeToRouteValueConverter.prototype.toView = function toView(value) {
      switch (value) {
        case 'ticket':
          return 'thread';
        default:
          throw new Error('Unknown ticket type: ' + value + '.');
      }
    };

    return ActivityTypeToRouteValueConverter;
  }();
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY/MM/DD';

      return (0, _moment2.default)(value).format(format);
    };

    return DateValueConverter;
  }();
});
define('settings/account/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Account';
  };
});
define('settings/api/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'API';
  };
});
define('settings/email/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Email';
  };
});
define('settings/facebook/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Facebook';
  };
});
define('settings/feedbacktab/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Feedback Tab';
  };
});
define('settings/overview/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Overview';
  };
});
define('settings/security/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Security';
  };
});
define('settings/subscription/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Subscription';
  };
});
define('settings/twitter/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Twitter';
  };
});
define('settings/webportal/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Web Portal';
  };
});
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/validate-binding-behavior',["require", "exports", 'aurelia-task-queue', './validate-trigger', './validate-binding-behavior-base'], function (require, exports, aurelia_task_queue_1, validate_trigger_1, validate_binding_behavior_base_1) {
    "use strict";
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the validate trigger specified by the associated controller's
     * validateTrigger property occurs.
     */
    var ValidateBindingBehavior = (function (_super) {
        __extends(ValidateBindingBehavior, _super);
        function ValidateBindingBehavior() {
            _super.apply(this, arguments);
        }
        ValidateBindingBehavior.prototype.getValidateTrigger = function (controller) {
            return controller.validateTrigger;
        };
        ValidateBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateBindingBehavior = ValidateBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property will be validated
     * manually, by calling controller.validate(). No automatic validation
     * triggered by data-entry or blur will occur.
     */
    var ValidateManuallyBindingBehavior = (function (_super) {
        __extends(ValidateManuallyBindingBehavior, _super);
        function ValidateManuallyBindingBehavior() {
            _super.apply(this, arguments);
        }
        ValidateManuallyBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.manual;
        };
        ValidateManuallyBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateManuallyBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateManuallyBindingBehavior = ValidateManuallyBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs.
     */
    var ValidateOnBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnBlurBindingBehavior, _super);
        function ValidateOnBlurBindingBehavior() {
            _super.apply(this, arguments);
        }
        ValidateOnBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.blur;
        };
        ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnBlurBindingBehavior = ValidateOnBlurBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element is changed by the user, causing a change
     * to the model.
     */
    var ValidateOnChangeBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeBindingBehavior, _super);
        function ValidateOnChangeBindingBehavior() {
            _super.apply(this, arguments);
        }
        ValidateOnChangeBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.change;
        };
        ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnChangeBindingBehavior = ValidateOnChangeBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs or is changed by the user, causing
     * a change to the model.
     */
    var ValidateOnChangeOrBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeOrBlurBindingBehavior, _super);
        function ValidateOnChangeOrBlurBindingBehavior() {
            _super.apply(this, arguments);
        }
        ValidateOnChangeOrBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.changeOrBlur;
        };
        ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeOrBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnChangeOrBlurBindingBehavior = ValidateOnChangeOrBlurBindingBehavior;
});

define('aurelia-validation/validate-trigger',["require", "exports"], function (require, exports) {
    "use strict";
    /**
    * Validation triggers.
    */
    exports.validateTrigger = {
        /**
        * Manual validation.  Use the controller's `validate()` and  `reset()` methods
        * to validate all bindings.
        */
        manual: 0,
        /**
        * Validate the binding when the binding's target element fires a DOM "blur" event.
        */
        blur: 1,
        /**
        * Validate the binding when it updates the model due to a change in the view.
        */
        change: 2,
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event and
         * when it updates the model due to a change in the view.
         */
        changeOrBlur: 3
    };
});

define('aurelia-validation/validate-binding-behavior-base',["require", "exports", 'aurelia-dependency-injection', 'aurelia-pal', './validation-controller', './validate-trigger'], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, validation_controller_1, validate_trigger_1) {
    "use strict";
    /**
     * Binding behavior. Indicates the bound property should be validated.
     */
    var ValidateBindingBehaviorBase = (function () {
        function ValidateBindingBehaviorBase(taskQueue) {
            this.taskQueue = taskQueue;
        }
        /**
        * Gets the DOM element associated with the data-binding. Most of the time it's
        * the binding.target but sometimes binding.target is an aurelia custom element,
        * or custom attribute which is a javascript "class" instance, so we need to use
        * the controller's container to retrieve the actual DOM element.
        */
        ValidateBindingBehaviorBase.prototype.getTarget = function (binding, view) {
            var target = binding.target;
            // DOM element
            if (target instanceof Element) {
                return target;
            }
            // custom element or custom attribute
            for (var i = 0, ii = view.controllers.length; i < ii; i++) {
                var controller = view.controllers[i];
                if (controller.viewModel === target) {
                    var element = controller.container.get(aurelia_pal_1.DOM.Element);
                    if (element) {
                        return element;
                    }
                    throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
                }
            }
            throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
        };
        ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
            var _this = this;
            // identify the target element.
            var target = this.getTarget(binding, source);
            // locate the controller.
            var controller;
            if (rulesOrController instanceof validation_controller_1.ValidationController) {
                controller = rulesOrController;
            }
            else {
                controller = source.container.get(aurelia_dependency_injection_1.Optional.of(validation_controller_1.ValidationController));
                rules = rulesOrController;
            }
            if (controller === null) {
                throw new Error("A ValidationController has not been registered.");
            }
            controller.registerBinding(binding, target, rules);
            binding.validationController = controller;
            var trigger = this.getValidateTrigger(controller);
            if (trigger & validate_trigger_1.validateTrigger.change) {
                binding.standardUpdateSource = binding.updateSource;
                binding.updateSource = function (value) {
                    this.standardUpdateSource(value);
                    this.validationController.validateBinding(this);
                };
            }
            if (trigger & validate_trigger_1.validateTrigger.blur) {
                binding.validateBlurHandler = function () {
                    _this.taskQueue.queueMicroTask(function () { return controller.validateBinding(binding); });
                };
                binding.validateTarget = target;
                target.addEventListener('blur', binding.validateBlurHandler);
            }
            if (trigger !== validate_trigger_1.validateTrigger.manual) {
                binding.standardUpdateTarget = binding.updateTarget;
                binding.updateTarget = function (value) {
                    this.standardUpdateTarget(value);
                    this.validationController.resetBinding(this);
                };
            }
        };
        ValidateBindingBehaviorBase.prototype.unbind = function (binding) {
            // reset the binding to it's original state.
            if (binding.standardUpdateSource) {
                binding.updateSource = binding.standardUpdateSource;
                binding.standardUpdateSource = null;
            }
            if (binding.standardUpdateTarget) {
                binding.updateTarget = binding.standardUpdateTarget;
                binding.standardUpdateTarget = null;
            }
            if (binding.validateBlurHandler) {
                binding.validateTarget.removeEventListener('blur', binding.validateBlurHandler);
                binding.validateBlurHandler = null;
                binding.validateTarget = null;
            }
            binding.validationController.unregisterBinding(binding);
            binding.validationController = null;
        };
        return ValidateBindingBehaviorBase;
    }());
    exports.ValidateBindingBehaviorBase = ValidateBindingBehaviorBase;
});

define('aurelia-validation/validation-controller',["require", "exports", './validator', './validate-trigger', './property-info', './validation-error'], function (require, exports, validator_1, validate_trigger_1, property_info_1, validation_error_1) {
    "use strict";
    /**
     * Orchestrates validation.
     * Manages a set of bindings, renderers and objects.
     * Exposes the current list of validation errors for binding purposes.
     */
    var ValidationController = (function () {
        function ValidationController(validator) {
            this.validator = validator;
            // Registered bindings (via the validate binding behavior)
            this.bindings = new Map();
            // Renderers that have been added to the controller instance.
            this.renderers = [];
            /**
             * Errors that have been rendered by the controller.
             */
            this.errors = [];
            /**
             *  Whether the controller is currently validating.
             */
            this.validating = false;
            // Elements related to errors that have been rendered.
            this.elements = new Map();
            // Objects that have been added to the controller instance (entity-style validation).
            this.objects = new Map();
            /**
             * The trigger that will invoke automatic validation of a property used in a binding.
             */
            this.validateTrigger = validate_trigger_1.validateTrigger.blur;
            // Promise that resolves when validation has completed.
            this.finishValidating = Promise.resolve();
        }
        /**
         * Adds an object to the set of objects that should be validated when validate is called.
         * @param object The object.
         * @param rules Optional. The rules. If rules aren't supplied the Validator implementation will lookup the rules.
         */
        ValidationController.prototype.addObject = function (object, rules) {
            this.objects.set(object, rules);
        };
        /**
         * Removes an object from the set of objects that should be validated when validate is called.
         * @param object The object.
         */
        ValidationController.prototype.removeObject = function (object) {
            this.objects.delete(object);
            this.processErrorDelta('reset', this.errors.filter(function (error) { return error.object === object; }), []);
        };
        /**
         * Adds and renders a ValidationError.
         */
        ValidationController.prototype.addError = function (message, object, propertyName) {
            var error = new validation_error_1.ValidationError({}, message, object, propertyName);
            this.processErrorDelta('validate', [], [error]);
            return error;
        };
        /**
         * Removes and unrenders a ValidationError.
         */
        ValidationController.prototype.removeError = function (error) {
            if (this.errors.indexOf(error) !== -1) {
                this.processErrorDelta('reset', [error], []);
            }
        };
        /**
         * Adds a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.addRenderer = function (renderer) {
            var _this = this;
            this.renderers.push(renderer);
            renderer.render({
                kind: 'validate',
                render: this.errors.map(function (error) { return ({ error: error, elements: _this.elements.get(error) }); }),
                unrender: []
            });
        };
        /**
         * Removes a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.removeRenderer = function (renderer) {
            var _this = this;
            this.renderers.splice(this.renderers.indexOf(renderer), 1);
            renderer.render({
                kind: 'reset',
                render: [],
                unrender: this.errors.map(function (error) { return ({ error: error, elements: _this.elements.get(error) }); })
            });
        };
        /**
         * Registers a binding with the controller.
         * @param binding The binding instance.
         * @param target The DOM element.
         * @param rules (optional) rules associated with the binding. Validator implementation specific.
         */
        ValidationController.prototype.registerBinding = function (binding, target, rules) {
            this.bindings.set(binding, { target: target, rules: rules });
        };
        /**
         * Unregisters a binding with the controller.
         * @param binding The binding instance.
         */
        ValidationController.prototype.unregisterBinding = function (binding) {
            this.resetBinding(binding);
            this.bindings.delete(binding);
        };
        /**
         * Interprets the instruction and returns a predicate that will identify
         * relevant errors in the list of rendered errors.
         */
        ValidationController.prototype.getInstructionPredicate = function (instruction) {
            if (instruction) {
                var object_1 = instruction.object, propertyName_1 = instruction.propertyName, rules_1 = instruction.rules;
                var predicate_1;
                if (instruction.propertyName) {
                    predicate_1 = function (x) { return x.object === object_1 && x.propertyName === propertyName_1; };
                }
                else {
                    predicate_1 = function (x) { return x.object === object_1; };
                }
                // todo: move to Validator interface:
                if (rules_1 && rules_1.indexOf) {
                    return function (x) { return predicate_1(x) && rules_1.indexOf(x.rule) !== -1; };
                }
                return predicate_1;
            }
            else {
                return function () { return true; };
            }
        };
        /**
         * Validates and renders errors.
         * @param instruction Optional. Instructions on what to validate. If undefined, all objects and bindings will be validated.
         */
        ValidationController.prototype.validate = function (instruction) {
            var _this = this;
            // Get a function that will process the validation instruction.
            var execute;
            if (instruction) {
                var object_2 = instruction.object, propertyName_2 = instruction.propertyName, rules_2 = instruction.rules;
                // if rules were not specified, check the object map.
                rules_2 = rules_2 || this.objects.get(object_2);
                // property specified?
                if (instruction.propertyName === undefined) {
                    // validate the specified object.
                    execute = function () { return _this.validator.validateObject(object_2, rules_2); };
                }
                else {
                    // validate the specified property.
                    execute = function () { return _this.validator.validateProperty(object_2, propertyName_2, rules_2); };
                }
            }
            else {
                // validate all objects and bindings.
                execute = function () {
                    var promises = [];
                    for (var _i = 0, _a = Array.from(_this.objects); _i < _a.length; _i++) {
                        var _b = _a[_i], object = _b[0], rules = _b[1];
                        promises.push(_this.validator.validateObject(object, rules));
                    }
                    for (var _c = 0, _d = Array.from(_this.bindings); _c < _d.length; _c++) {
                        var _e = _d[_c], binding = _e[0], rules = _e[1].rules;
                        var _f = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source), object = _f.object, propertyName = _f.propertyName;
                        if (_this.objects.has(object)) {
                            continue;
                        }
                        promises.push(_this.validator.validateProperty(object, propertyName, rules));
                    }
                    return Promise.all(promises).then(function (errorSets) { return errorSets.reduce(function (a, b) { return a.concat(b); }, []); });
                };
            }
            // Wait for any existing validation to finish, execute the instruction, render the errors.
            this.validating = true;
            var result = this.finishValidating
                .then(execute)
                .then(function (newErrors) {
                var predicate = _this.getInstructionPredicate(instruction);
                var oldErrors = _this.errors.filter(predicate);
                _this.processErrorDelta('validate', oldErrors, newErrors);
                if (result === _this.finishValidating) {
                    _this.validating = false;
                }
                return newErrors;
            })
                .catch(function (error) {
                // recover, to enable subsequent calls to validate()
                _this.validating = false;
                _this.finishValidating = Promise.resolve();
                return Promise.reject(error);
            });
            this.finishValidating = result;
            return result;
        };
        /**
         * Resets any rendered errors (unrenders).
         * @param instruction Optional. Instructions on what to reset. If unspecified all rendered errors will be unrendered.
         */
        ValidationController.prototype.reset = function (instruction) {
            var predicate = this.getInstructionPredicate(instruction);
            var oldErrors = this.errors.filter(predicate);
            this.processErrorDelta('reset', oldErrors, []);
        };
        /**
         * Gets the elements associated with an object and propertyName (if any).
         */
        ValidationController.prototype.getAssociatedElements = function (_a) {
            var object = _a.object, propertyName = _a.propertyName;
            var elements = [];
            for (var _i = 0, _b = Array.from(this.bindings); _i < _b.length; _i++) {
                var _c = _b[_i], binding = _c[0], target = _c[1].target;
                var _d = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source), o = _d.object, p = _d.propertyName;
                if (o === object && p === propertyName) {
                    elements.push(target);
                }
            }
            return elements;
        };
        ValidationController.prototype.processErrorDelta = function (kind, oldErrors, newErrors) {
            // prepare the instruction.
            var instruction = {
                kind: kind,
                render: [],
                unrender: []
            };
            // create a shallow copy of newErrors so we can mutate it without causing side-effects.
            newErrors = newErrors.slice(0);
            // create unrender instructions from the old errors.
            var _loop_1 = function(oldError) {
                // get the elements associated with the old error.
                var elements = this_1.elements.get(oldError);
                // remove the old error from the element map.
                this_1.elements.delete(oldError);
                // create the unrender instruction.
                instruction.unrender.push({ error: oldError, elements: elements });
                // determine if there's a corresponding new error for the old error we are unrendering.
                var newErrorIndex = newErrors.findIndex(function (x) { return x.rule === oldError.rule && x.object === oldError.object && x.propertyName === oldError.propertyName; });
                if (newErrorIndex === -1) {
                    // no corresponding new error... simple remove.
                    this_1.errors.splice(this_1.errors.indexOf(oldError), 1);
                }
                else {
                    // there is a corresponding new error...        
                    var newError = newErrors.splice(newErrorIndex, 1)[0];
                    // get the elements that are associated with the new error.
                    var elements_1 = this_1.getAssociatedElements(newError);
                    this_1.elements.set(newError, elements_1);
                    // create a render instruction for the new error.
                    instruction.render.push({ error: newError, elements: elements_1 });
                    // do an in-place replacement of the old error with the new error.
                    // this ensures any repeats bound to this.errors will not thrash.
                    this_1.errors.splice(this_1.errors.indexOf(oldError), 1, newError);
                }
            };
            var this_1 = this;
            for (var _i = 0, oldErrors_1 = oldErrors; _i < oldErrors_1.length; _i++) {
                var oldError = oldErrors_1[_i];
                _loop_1(oldError);
            }
            // create render instructions from the remaining new errors.
            for (var _a = 0, newErrors_1 = newErrors; _a < newErrors_1.length; _a++) {
                var error = newErrors_1[_a];
                var elements = this.getAssociatedElements(error);
                instruction.render.push({ error: error, elements: elements });
                this.elements.set(error, elements);
                this.errors.push(error);
            }
            // render.
            for (var _b = 0, _c = this.renderers; _b < _c.length; _b++) {
                var renderer = _c[_b];
                renderer.render(instruction);
            }
        };
        /**
        * Validates the property associated with a binding.
        */
        ValidationController.prototype.validateBinding = function (binding) {
            if (!binding.isBound) {
                return;
            }
            var _a = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source), object = _a.object, propertyName = _a.propertyName;
            var registeredBinding = this.bindings.get(binding);
            var rules = registeredBinding ? registeredBinding.rules : undefined;
            this.validate({ object: object, propertyName: propertyName, rules: rules });
        };
        /**
        * Resets the errors for a property associated with a binding.
        */
        ValidationController.prototype.resetBinding = function (binding) {
            var _a = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source), object = _a.object, propertyName = _a.propertyName;
            this.reset({ object: object, propertyName: propertyName });
        };
        ValidationController.inject = [validator_1.Validator];
        return ValidationController;
    }());
    exports.ValidationController = ValidationController;
});

define('aurelia-validation/validator',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Validates.
     * Responsible for validating objects and properties.
     */
    var Validator = (function () {
        function Validator() {
        }
        return Validator;
    }());
    exports.Validator = Validator;
});

define('aurelia-validation/property-info',["require", "exports", 'aurelia-binding'], function (require, exports, aurelia_binding_1) {
    "use strict";
    function getObject(expression, objectExpression, source) {
        var value = objectExpression.evaluate(source, null);
        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
            return value;
        }
        if (value === null) {
            value = 'null';
        }
        else if (value === undefined) {
            value = 'undefined';
        }
        throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object.");
    }
    /**
     * Retrieves the object and property name for the specified expression.
     * @param expression The expression
     * @param source The scope
     */
    function getPropertyInfo(expression, source) {
        var originalExpression = expression;
        while (expression instanceof aurelia_binding_1.BindingBehavior || expression instanceof aurelia_binding_1.ValueConverter) {
            expression = expression.expression;
        }
        var object;
        var propertyName;
        if (expression instanceof aurelia_binding_1.AccessScope) {
            object = source.bindingContext;
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessMember) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessKeyed) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.key.evaluate(source);
        }
        else {
            throw new Error("Expression '" + originalExpression + "' is not compatible with the validate binding-behavior.");
        }
        return { object: object, propertyName: propertyName };
    }
    exports.getPropertyInfo = getPropertyInfo;
});

define('aurelia-validation/validation-error',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * A validation error.
     */
    var ValidationError = (function () {
        /**
         * @param rule The rule associated with the error. Validator implementation specific.
         * @param message The error message.
         * @param object The invalid object
         * @param propertyName The name of the invalid property. Optional.
         */
        function ValidationError(rule, message, object, propertyName) {
            if (propertyName === void 0) { propertyName = null; }
            this.rule = rule;
            this.message = message;
            this.object = object;
            this.propertyName = propertyName;
            this.id = ValidationError.nextId++;
        }
        ValidationError.prototype.toString = function () {
            return this.message;
        };
        ValidationError.nextId = 0;
        return ValidationError;
    }());
    exports.ValidationError = ValidationError;
});

define('aurelia-validation/validation-controller-factory',["require", "exports", './validation-controller', './validator'], function (require, exports, validation_controller_1, validator_1) {
    "use strict";
    /**
     * Creates ValidationController instances.
     */
    var ValidationControllerFactory = (function () {
        function ValidationControllerFactory(container) {
            this.container = container;
        }
        ValidationControllerFactory.get = function (container) {
            return new ValidationControllerFactory(container);
        };
        /**
         * Creates a new controller instance.
         */
        ValidationControllerFactory.prototype.create = function (validator) {
            if (!validator) {
                validator = this.container.get(validator_1.Validator);
            }
            return new validation_controller_1.ValidationController(validator);
        };
        /**
         * Creates a new controller and registers it in the current element's container so that it's
         * available to the validate binding behavior and renderers.
         */
        ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
            var controller = this.create(validator);
            this.container.registerInstance(validation_controller_1.ValidationController, controller);
            return controller;
        };
        return ValidationControllerFactory;
    }());
    exports.ValidationControllerFactory = ValidationControllerFactory;
    ValidationControllerFactory['protocol:aurelia:resolver'] = true;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-validation/validation-errors-custom-attribute',["require", "exports", 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-templating', './validation-controller'], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_templating_1, validation_controller_1) {
    "use strict";
    var ValidationErrorsCustomAttribute = (function () {
        function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
            this.boundaryElement = boundaryElement;
            this.controllerAccessor = controllerAccessor;
            this.errors = [];
        }
        ValidationErrorsCustomAttribute.prototype.sort = function () {
            this.errors.sort(function (a, b) {
                if (a.targets[0] === b.targets[0]) {
                    return 0;
                }
                return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
            });
        };
        ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
            var _this = this;
            return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
        };
        ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
            var _loop_1 = function(error) {
                var index = this_1.errors.findIndex(function (x) { return x.error === error; });
                if (index !== -1) {
                    this_1.errors.splice(index, 1);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var error = _a[_i].error;
                _loop_1(error);
            }
            for (var _b = 0, _c = instruction.render; _b < _c.length; _b++) {
                var _d = _c[_b], error = _d.error, elements = _d.elements;
                var targets = this.interestingElements(elements);
                if (targets.length) {
                    this.errors.push({ error: error, targets: targets });
                }
            }
            this.sort();
            this.value = this.errors;
        };
        ValidationErrorsCustomAttribute.prototype.bind = function () {
            this.controllerAccessor().addRenderer(this);
            this.value = this.errors;
        };
        ValidationErrorsCustomAttribute.prototype.unbind = function () {
            this.controllerAccessor().removeRenderer(this);
        };
        ValidationErrorsCustomAttribute.inject = [Element, aurelia_dependency_injection_1.Lazy.of(validation_controller_1.ValidationController)];
        ValidationErrorsCustomAttribute = __decorate([
            aurelia_templating_1.customAttribute('validation-errors', aurelia_binding_1.bindingMode.twoWay)
        ], ValidationErrorsCustomAttribute);
        return ValidationErrorsCustomAttribute;
    }());
    exports.ValidationErrorsCustomAttribute = ValidationErrorsCustomAttribute;
});

define('aurelia-validation/validation-renderer-custom-attribute',["require", "exports", './validation-controller'], function (require, exports, validation_controller_1) {
    "use strict";
    var ValidationRendererCustomAttribute = (function () {
        function ValidationRendererCustomAttribute() {
        }
        ValidationRendererCustomAttribute.prototype.created = function (view) {
            this.container = view.container;
        };
        ValidationRendererCustomAttribute.prototype.bind = function () {
            this.controller = this.container.get(validation_controller_1.ValidationController);
            this.renderer = this.container.get(this.value);
            this.controller.addRenderer(this.renderer);
        };
        ValidationRendererCustomAttribute.prototype.unbind = function () {
            this.controller.removeRenderer(this.renderer);
            this.controller = null;
            this.renderer = null;
        };
        return ValidationRendererCustomAttribute;
    }());
    exports.ValidationRendererCustomAttribute = ValidationRendererCustomAttribute;
});

define('aurelia-validation/implementation/rules',["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Sets, unsets and retrieves rules on an object or constructor function.
     */
    var Rules = (function () {
        function Rules() {
        }
        /**
         * Applies the rules to a target.
         */
        Rules.set = function (target, rules) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            Object.defineProperty(target, Rules.key, { enumerable: false, configurable: false, writable: true, value: rules });
        };
        /**
         * Removes rules from a target.
         */
        Rules.unset = function (target) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            target[Rules.key] = null;
        };
        /**
         * Retrieves the target's rules.
         */
        Rules.get = function (target) {
            return target[Rules.key] || null;
        };
        /**
         * The name of the property that stores the rules.
         */
        Rules.key = '__rules__';
        return Rules;
    }());
    exports.Rules = Rules;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/implementation/standard-validator',["require", "exports", 'aurelia-templating', '../validator', '../validation-error', './rules', './validation-messages'], function (require, exports, aurelia_templating_1, validator_1, validation_error_1, rules_1, validation_messages_1) {
    "use strict";
    /**
     * Validates.
     * Responsible for validating objects and properties.
     */
    var StandardValidator = (function (_super) {
        __extends(StandardValidator, _super);
        function StandardValidator(messageProvider, resources) {
            _super.call(this);
            this.messageProvider = messageProvider;
            this.lookupFunctions = resources.lookupFunctions;
            this.getDisplayName = messageProvider.getDisplayName.bind(messageProvider);
        }
        StandardValidator.prototype.getMessage = function (rule, object, value) {
            var expression = rule.message || this.messageProvider.getMessage(rule.messageKey);
            var _a = rule.property, propertyName = _a.name, displayName = _a.displayName;
            if (displayName === null && propertyName !== null) {
                displayName = this.messageProvider.getDisplayName(propertyName);
            }
            var overrideContext = {
                $displayName: displayName,
                $propertyName: propertyName,
                $value: value,
                $object: object,
                $config: rule.config,
                $getDisplayName: this.getDisplayName
            };
            return expression.evaluate({ bindingContext: object, overrideContext: overrideContext }, this.lookupFunctions);
        };
        StandardValidator.prototype.validateRuleSequence = function (object, propertyName, ruleSequence, sequence) {
            var _this = this;
            // are we validating all properties or a single property?
            var validateAllProperties = propertyName === null || propertyName === undefined;
            var rules = ruleSequence[sequence];
            var errors = [];
            // validate each rule.
            var promises = [];
            var _loop_1 = function(i) {
                var rule = rules[i];
                // is the rule related to the property we're validating.
                if (!validateAllProperties && rule.property.name !== propertyName) {
                    return "continue";
                }
                // is this a conditional rule? is the condition met?
                if (rule.when && !rule.when(object)) {
                    return "continue";
                }
                // validate.
                var value = rule.property.name === null ? object : object[rule.property.name];
                var promiseOrBoolean = rule.condition(value, object);
                if (!(promiseOrBoolean instanceof Promise)) {
                    promiseOrBoolean = Promise.resolve(promiseOrBoolean);
                }
                promises.push(promiseOrBoolean.then(function (isValid) {
                    if (!isValid) {
                        var message = _this.getMessage(rule, object, value);
                        errors.push(new validation_error_1.ValidationError(rule, message, object, rule.property.name));
                    }
                }));
            };
            for (var i = 0; i < rules.length; i++) {
                _loop_1(i);
            }
            return Promise.all(promises)
                .then(function () {
                sequence++;
                if (errors.length === 0 && sequence < ruleSequence.length) {
                    return _this.validateRuleSequence(object, propertyName, ruleSequence, sequence);
                }
                return errors;
            });
        };
        StandardValidator.prototype.validate = function (object, propertyName, rules) {
            // rules specified?
            if (!rules) {
                // no. attempt to locate the rules.
                rules = rules_1.Rules.get(object);
            }
            // any rules?
            if (!rules) {
                return Promise.resolve([]);
            }
            return this.validateRuleSequence(object, propertyName, rules, 0);
        };
        /**
         * Validates the specified property.
         * @param object The object to validate.
         * @param propertyName The name of the property to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateProperty = function (object, propertyName, rules) {
            return this.validate(object, propertyName, rules || null);
        };
        /**
         * Validates all rules for specified object and it's properties.
         * @param object The object to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateObject = function (object, rules) {
            return this.validate(object, null, rules || null);
        };
        StandardValidator.inject = [validation_messages_1.ValidationMessageProvider, aurelia_templating_1.ViewResources];
        return StandardValidator;
    }(validator_1.Validator));
    exports.StandardValidator = StandardValidator;
});

define('aurelia-validation/implementation/validation-messages',["require", "exports", './validation-parser'], function (require, exports, validation_parser_1) {
    "use strict";
    /**
     * Dictionary of validation messages. [messageKey]: messageExpression
     */
    exports.validationMessages = {
        /**
         * The default validation message. Used with rules that have no standard message.
         */
        default: "${$displayName} is invalid.",
        required: "${$displayName} is required.",
        matches: "${$displayName} is not correctly formatted.",
        email: "${$displayName} is not a valid email.",
        minLength: "${$displayName} must be at least ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        maxLength: "${$displayName} cannot be longer than ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        minItems: "${$displayName} must contain at least ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        maxItems: "${$displayName} cannot contain more than ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        equals: "${$displayName} must be ${$config.expectedValue}.",
    };
    /**
     * Retrieves validation messages and property display names.
     */
    var ValidationMessageProvider = (function () {
        function ValidationMessageProvider(parser) {
            this.parser = parser;
        }
        /**
         * Returns a message binding expression that corresponds to the key.
         * @param key The message key.
         */
        ValidationMessageProvider.prototype.getMessage = function (key) {
            var message;
            if (key in exports.validationMessages) {
                message = exports.validationMessages[key];
            }
            else {
                message = exports.validationMessages['default'];
            }
            return this.parser.parseMessage(message);
        };
        /**
         * When a display name is not provided, this method is used to formulate
         * a display name using the property name.
         * Override this with your own custom logic.
         * @param propertyName The property name.
         */
        ValidationMessageProvider.prototype.getDisplayName = function (propertyName) {
            // split on upper-case letters.
            var words = propertyName.split(/(?=[A-Z])/).join(' ');
            // capitalize first letter.
            return words.charAt(0).toUpperCase() + words.slice(1);
        };
        ValidationMessageProvider.inject = [validation_parser_1.ValidationParser];
        return ValidationMessageProvider;
    }());
    exports.ValidationMessageProvider = ValidationMessageProvider;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('aurelia-validation/implementation/validation-parser',["require", "exports", 'aurelia-binding', 'aurelia-templating', './util', 'aurelia-logging'], function (require, exports, aurelia_binding_1, aurelia_templating_1, util_1, LogManager) {
    "use strict";
    var ValidationParser = (function () {
        function ValidationParser(parser, bindinqLanguage) {
            this.parser = parser;
            this.bindinqLanguage = bindinqLanguage;
            this.emptyStringExpression = new aurelia_binding_1.LiteralString('');
            this.nullExpression = new aurelia_binding_1.LiteralPrimitive(null);
            this.undefinedExpression = new aurelia_binding_1.LiteralPrimitive(undefined);
            this.cache = {};
        }
        ValidationParser.prototype.coalesce = function (part) {
            // part === null || part === undefined ? '' : part
            return new aurelia_binding_1.Conditional(new aurelia_binding_1.Binary('||', new aurelia_binding_1.Binary('===', part, this.nullExpression), new aurelia_binding_1.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding_1.CallMember(part, 'toString', []));
        };
        ValidationParser.prototype.parseMessage = function (message) {
            if (this.cache[message] !== undefined) {
                return this.cache[message];
            }
            var parts = this.bindinqLanguage.parseInterpolation(null, message);
            if (parts === null) {
                return new aurelia_binding_1.LiteralString(message);
            }
            var expression = new aurelia_binding_1.LiteralString(parts[0]);
            for (var i = 1; i < parts.length; i += 2) {
                expression = new aurelia_binding_1.Binary('+', expression, new aurelia_binding_1.Binary('+', this.coalesce(parts[i]), new aurelia_binding_1.LiteralString(parts[i + 1])));
            }
            MessageExpressionValidator.validate(expression, message);
            this.cache[message] = expression;
            return expression;
        };
        ValidationParser.prototype.getAccessorExpression = function (fn) {
            var classic = /^function\s*\([$_\w\d]+\)\s*\{\s*(?:"use strict";)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
            var arrow = /^[$_\w\d]+\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
            var match = classic.exec(fn) || arrow.exec(fn);
            if (match === null) {
                throw new Error("Unable to parse accessor function:\n" + fn);
            }
            return this.parser.parse(match[1]);
        };
        ValidationParser.prototype.parseProperty = function (property) {
            if (util_1.isString(property)) {
                return { name: property, displayName: null };
            }
            var accessor = this.getAccessorExpression(property.toString());
            if (accessor instanceof aurelia_binding_1.AccessScope
                || accessor instanceof aurelia_binding_1.AccessMember && accessor.object instanceof aurelia_binding_1.AccessScope) {
                return {
                    name: accessor.name,
                    displayName: null
                };
            }
            throw new Error("Invalid subject: \"" + accessor + "\"");
        };
        ValidationParser.inject = [aurelia_binding_1.Parser, aurelia_templating_1.BindingLanguage];
        return ValidationParser;
    }());
    exports.ValidationParser = ValidationParser;
    var MessageExpressionValidator = (function (_super) {
        __extends(MessageExpressionValidator, _super);
        function MessageExpressionValidator(originalMessage) {
            _super.call(this, []);
            this.originalMessage = originalMessage;
        }
        MessageExpressionValidator.validate = function (expression, originalMessage) {
            var visitor = new MessageExpressionValidator(originalMessage);
            expression.accept(visitor);
        };
        MessageExpressionValidator.prototype.visitAccessScope = function (access) {
            if (access.ancestor !== 0) {
                throw new Error('$parent is not permitted in validation message expressions.');
            }
            if (['displayName', 'propertyName', 'value', 'object', 'config', 'getDisplayName'].indexOf(access.name) !== -1) {
                LogManager.getLogger('aurelia-validation')
                    .warn("Did you mean to use \"$" + access.name + "\" instead of \"" + access.name + "\" in this validation message template: \"" + this.originalMessage + "\"?");
            }
        };
        return MessageExpressionValidator;
    }(aurelia_binding_1.Unparser));
    exports.MessageExpressionValidator = MessageExpressionValidator;
});

define('aurelia-validation/implementation/util',["require", "exports"], function (require, exports) {
    "use strict";
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", './util', './rules', './validation-messages'], function (require, exports, util_1, rules_1, validation_messages_1) {
    "use strict";
    /**
     * Part of the fluent rule API. Enables customizing property rules.
     */
    var FluentRuleCustomizer = (function () {
        function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parser) {
            if (config === void 0) { config = {}; }
            this.fluentEnsure = fluentEnsure;
            this.fluentRules = fluentRules;
            this.parser = parser;
            this.rule = {
                property: property,
                condition: condition,
                config: config,
                when: null,
                messageKey: 'default',
                message: null,
                sequence: fluentEnsure._sequence
            };
            this.fluentEnsure._addRule(this.rule);
        }
        /**
         * Validate subsequent rules after previously declared rules have
         * been validated successfully. Use to postpone validation of costly
         * rules until less expensive rules pass validation.
         */
        FluentRuleCustomizer.prototype.then = function () {
            this.fluentEnsure._sequence++;
            return this;
        };
        /**
         * Specifies the key to use when looking up the rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessageKey = function (key) {
            this.rule.messageKey = key;
            this.rule.message = null;
            return this;
        };
        /**
         * Specifies rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessage = function (message) {
            this.rule.messageKey = 'custom';
            this.rule.message = this.parser.parseMessage(message);
            return this;
        };
        /**
         * Specifies a condition that must be met before attempting to validate the rule.
         * @param condition A function that accepts the object as a parameter and returns true
         * or false whether the rule should be evaluated.
         */
        FluentRuleCustomizer.prototype.when = function (condition) {
            this.rule.when = condition;
            return this;
        };
        /**
         * Tags the rule instance, enabling the rule to be found easily
         * using ValidationRules.taggedRules(rules, tag)
         */
        FluentRuleCustomizer.prototype.tag = function (tag) {
            this.rule.tag = tag;
            return this;
        };
        ///// FluentEnsure APIs /////
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        FluentRuleCustomizer.prototype.ensure = function (subject) {
            return this.fluentEnsure.ensure(subject);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentRuleCustomizer.prototype.ensureObject = function () {
            return this.fluentEnsure.ensureObject();
        };
        Object.defineProperty(FluentRuleCustomizer.prototype, "rules", {
            /**
             * Rules that have been defined using the fluent API.
             */
            get: function () {
                return this.fluentEnsure.rules;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentRuleCustomizer.prototype.on = function (target) {
            return this.fluentEnsure.on(target);
        };
        ///////// FluentRules APIs /////////
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRuleCustomizer.prototype.satisfies = function (condition, config) {
            return this.fluentRules.satisfies(condition, config);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRuleCustomizer.prototype.satisfiesRule = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this.fluentRules).satisfiesRule.apply(_a, [name].concat(args));
            var _a;
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRuleCustomizer.prototype.required = function () {
            return this.fluentRules.required();
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.matches = function (regex) {
            return this.fluentRules.matches(regex);
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.email = function () {
            return this.fluentRules.email();
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.minLength = function (length) {
            return this.fluentRules.minLength(length);
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxLength = function (length) {
            return this.fluentRules.maxLength(length);
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.minItems = function (count) {
            return this.fluentRules.minItems(count);
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxItems = function (count) {
            return this.fluentRules.maxItems(count);
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.equals = function (expectedValue) {
            return this.fluentRules.equals(expectedValue);
        };
        return FluentRuleCustomizer;
    }());
    exports.FluentRuleCustomizer = FluentRuleCustomizer;
    /**
     * Part of the fluent rule API. Enables applying rules to properties and objects.
     */
    var FluentRules = (function () {
        function FluentRules(fluentEnsure, parser, property) {
            this.fluentEnsure = fluentEnsure;
            this.parser = parser;
            this.property = property;
        }
        /**
         * Sets the display name of the ensured property.
         */
        FluentRules.prototype.displayName = function (name) {
            this.property.displayName = name;
            return this;
        };
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRules.prototype.satisfies = function (condition, config) {
            return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parser);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRules.prototype.satisfiesRule = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var rule = FluentRules.customRules[name];
            if (!rule) {
                // standard rule?
                rule = this[name];
                if (rule instanceof Function) {
                    return rule.call.apply(rule, [this].concat(args));
                }
                throw new Error("Rule with name \"" + name + "\" does not exist.");
            }
            var config = rule.argsToConfig ? rule.argsToConfig.apply(rule, args) : undefined;
            return this.satisfies(function (value, obj) { return (_a = rule.condition).call.apply(_a, [_this, value, obj].concat(args)); var _a; }, config)
                .withMessageKey(name);
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRules.prototype.required = function () {
            return this.satisfies(function (value) {
                return value !== null
                    && value !== undefined
                    && !(util_1.isString(value) && !/\S/.test(value));
            }).withMessageKey('required');
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.matches = function (regex) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || regex.test(value); })
                .withMessageKey('matches');
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.email = function () {
            return this.matches(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)
                .withMessageKey('email');
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.minLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length >= length; }, { length: length })
                .withMessageKey('minLength');
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.maxLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length <= length; }, { length: length })
                .withMessageKey('maxLength');
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.minItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length >= count; }, { count: count })
                .withMessageKey('minItems');
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.maxItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length <= count; }, { count: count })
                .withMessageKey('maxItems');
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.equals = function (expectedValue) {
            return this.satisfies(function (value) { return value === null || value === undefined || value === '' || value === expectedValue; }, { expectedValue: expectedValue })
                .withMessageKey('equals');
        };
        FluentRules.customRules = {};
        return FluentRules;
    }());
    exports.FluentRules = FluentRules;
    /**
     * Part of the fluent rule API. Enables targeting properties and objects with rules.
     */
    var FluentEnsure = (function () {
        function FluentEnsure(parser) {
            this.parser = parser;
            /**
             * Rules that have been defined using the fluent API.
             */
            this.rules = [];
            this._sequence = 0;
        }
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        FluentEnsure.prototype.ensure = function (property) {
            this.assertInitialized();
            return new FluentRules(this, this.parser, this.parser.parseProperty(property));
        };
        /**
         * Targets an object with validation rules.
         */
        FluentEnsure.prototype.ensureObject = function () {
            this.assertInitialized();
            return new FluentRules(this, this.parser, { name: null, displayName: null });
        };
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentEnsure.prototype.on = function (target) {
            rules_1.Rules.set(target, this.rules);
            return this;
        };
        /**
         * Adds a rule definition to the sequenced ruleset.
         */
        FluentEnsure.prototype._addRule = function (rule) {
            while (this.rules.length < rule.sequence + 1) {
                this.rules.push([]);
            }
            this.rules[rule.sequence].push(rule);
        };
        FluentEnsure.prototype.assertInitialized = function () {
            if (this.parser) {
                return;
            }
            throw new Error("Did you forget to add \".plugin('aurelia-validation)\" to your main.js?");
        };
        return FluentEnsure;
    }());
    exports.FluentEnsure = FluentEnsure;
    /**
     * Fluent rule definition API.
     */
    var ValidationRules = (function () {
        function ValidationRules() {
        }
        ValidationRules.initialize = function (parser) {
            ValidationRules.parser = parser;
        };
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        ValidationRules.ensure = function (property) {
            return new FluentEnsure(ValidationRules.parser).ensure(property);
        };
        /**
         * Targets an object with validation rules.
         */
        ValidationRules.ensureObject = function () {
            return new FluentEnsure(ValidationRules.parser).ensureObject();
        };
        /**
         * Defines a custom rule.
         * @param name The name of the custom rule. Also serves as the message key.
         * @param condition The rule function.
         * @param message The message expression
         * @param argsToConfig A function that maps the rule's arguments to a "config" object that can be used when evaluating the message expression.
         */
        ValidationRules.customRule = function (name, condition, message, argsToConfig) {
            validation_messages_1.validationMessages[name] = message;
            FluentRules.customRules[name] = { condition: condition, argsToConfig: argsToConfig };
        };
        /**
         * Returns rules with the matching tag.
         * @param rules The rules to search.
         * @param tag The tag to search for.
         */
        ValidationRules.taggedRules = function (rules, tag) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === tag; }); });
        };
        /**
         * Removes the rules from a class or object.
         * @param target A class or object.
         */
        ValidationRules.off = function (target) {
            rules_1.Rules.unset(target);
        };
        return ValidationRules;
    }());
    exports.ValidationRules = ValidationRules;
});

define('aurelia-dialog/ai-dialog',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialog = undefined;

  

  var _dec, _dec2, _class;

  var AiDialog = exports.AiDialog = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialog() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-header',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogHeader = undefined;

  

  var _dec, _dec2, _class, _class2, _temp;

  var AiDialogHeader = exports.AiDialogHeader = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-header'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), _dec(_class = _dec2(_class = (_temp = _class2 = function AiDialogHeader(controller) {
    

    this.controller = controller;
  }, _class2.inject = [_dialogController.DialogController], _temp)) || _class) || _class);
});
define('aurelia-dialog/dialog-controller',['exports', './lifecycle', './dialog-result'], function (exports, _lifecycle, _dialogResult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogController = undefined;

  

  var DialogController = exports.DialogController = function () {
    function DialogController(renderer, settings, resolve, reject) {
      

      this.renderer = renderer;
      this.settings = settings;
      this._resolve = resolve;
      this._reject = reject;
    }

    DialogController.prototype.ok = function ok(output) {
      return this.close(true, output);
    };

    DialogController.prototype.cancel = function cancel(output) {
      return this.close(false, output);
    };

    DialogController.prototype.error = function error(message) {
      var _this = this;

      return (0, _lifecycle.invokeLifecycle)(this.viewModel, 'deactivate').then(function () {
        return _this.renderer.hideDialog(_this);
      }).then(function () {
        _this.controller.unbind();
        _this._reject(message);
      });
    };

    DialogController.prototype.close = function close(ok, output) {
      var _this2 = this;

      if (this._closePromise) return this._closePromise;

      this._closePromise = (0, _lifecycle.invokeLifecycle)(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
        if (canDeactivate) {
          return (0, _lifecycle.invokeLifecycle)(_this2.viewModel, 'deactivate').then(function () {
            return _this2.renderer.hideDialog(_this2);
          }).then(function () {
            var result = new _dialogResult.DialogResult(!ok, output);
            _this2.controller.unbind();
            _this2._resolve(result);
            return result;
          });
        }

        return Promise.resolve();
      });

      return this._closePromise;
    };

    return DialogController;
  }();
});
define('aurelia-dialog/lifecycle',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.invokeLifecycle = invokeLifecycle;
  function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
      var result = instance[name](model);

      if (result instanceof Promise) {
        return result;
      }

      if (result !== null && result !== undefined) {
        return Promise.resolve(result);
      }

      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
});
define('aurelia-dialog/dialog-result',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var DialogResult = exports.DialogResult = function DialogResult(cancelled, output) {
    

    this.wasCancelled = false;

    this.wasCancelled = cancelled;
    this.output = output;
  };
});
define('aurelia-dialog/ai-dialog-body',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogBody = undefined;

  

  var _dec, _dec2, _class;

  var AiDialogBody = exports.AiDialogBody = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-body'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialogBody() {
    
  }) || _class) || _class);
});
define('aurelia-dialog/ai-dialog-footer',['exports', 'aurelia-templating', './dialog-controller'], function (exports, _aureliaTemplating, _dialogController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AiDialogFooter = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

  var AiDialogFooter = exports.AiDialogFooter = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-footer'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function AiDialogFooter(controller) {
      

      _initDefineProp(this, 'buttons', _descriptor, this);

      _initDefineProp(this, 'useDefaultButtons', _descriptor2, this);

      this.controller = controller;
    }

    AiDialogFooter.prototype.close = function close(buttonValue) {
      if (AiDialogFooter.isCancelButton(buttonValue)) {
        this.controller.cancel(buttonValue);
      } else {
        this.controller.ok(buttonValue);
      }
    };

    AiDialogFooter.prototype.useDefaultButtonsChanged = function useDefaultButtonsChanged(newValue) {
      if (newValue) {
        this.buttons = ['Cancel', 'Ok'];
      }
    };

    AiDialogFooter.isCancelButton = function isCancelButton(value) {
      return value === 'Cancel';
    };

    return AiDialogFooter;
  }(), _class3.inject = [_dialogController.DialogController], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'buttons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'useDefaultButtons', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-dialog/attach-focus',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttachFocus = undefined;

  

  var _dec, _class, _class2, _temp;

  var AttachFocus = exports.AttachFocus = (_dec = (0, _aureliaTemplating.customAttribute)('attach-focus'), _dec(_class = (_temp = _class2 = function () {
    function AttachFocus(element) {
      

      this.value = true;

      this.element = element;
    }

    AttachFocus.prototype.attached = function attached() {
      if (this.value && this.value !== 'false') {
        this.element.focus();
      }
    };

    AttachFocus.prototype.valueChanged = function valueChanged(newValue) {
      this.value = newValue;
    };

    return AttachFocus;
  }(), _class2.inject = [Element], _temp)) || _class);
});
define('aurelia-dialog/dialog-configuration',['exports', './renderer', './dialog-renderer', './dialog-options', 'aurelia-pal'], function (exports, _renderer, _dialogRenderer, _dialogOptions, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogConfiguration = undefined;

  

  var defaultRenderer = _dialogRenderer.DialogRenderer;

  var resources = {
    'ai-dialog': './ai-dialog',
    'ai-dialog-header': './ai-dialog-header',
    'ai-dialog-body': './ai-dialog-body',
    'ai-dialog-footer': './ai-dialog-footer',
    'attach-focus': './attach-focus'
  };

  var defaultCSSText = 'ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog,ai-dialog-container>div>div{min-width:300px;margin:auto;display:block}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}';

  var DialogConfiguration = exports.DialogConfiguration = function () {
    function DialogConfiguration(aurelia) {
      

      this.aurelia = aurelia;
      this.settings = _dialogOptions.dialogOptions;
      this.resources = [];
      this.cssText = defaultCSSText;
      this.renderer = defaultRenderer;
    }

    DialogConfiguration.prototype.useDefaults = function useDefaults() {
      return this.useRenderer(defaultRenderer).useCSS(defaultCSSText).useStandardResources();
    };

    DialogConfiguration.prototype.useStandardResources = function useStandardResources() {
      return this.useResource('ai-dialog').useResource('ai-dialog-header').useResource('ai-dialog-body').useResource('ai-dialog-footer').useResource('attach-focus');
    };

    DialogConfiguration.prototype.useResource = function useResource(resourceName) {
      this.resources.push(resourceName);
      return this;
    };

    DialogConfiguration.prototype.useRenderer = function useRenderer(renderer, settings) {
      this.renderer = renderer;
      this.settings = Object.assign(this.settings, settings || {});
      return this;
    };

    DialogConfiguration.prototype.useCSS = function useCSS(cssText) {
      this.cssText = cssText;
      return this;
    };

    DialogConfiguration.prototype._apply = function _apply() {
      var _this = this;

      this.aurelia.transient(_renderer.Renderer, this.renderer);
      this.resources.forEach(function (resourceName) {
        return _this.aurelia.globalResources(resources[resourceName]);
      });

      if (this.cssText) {
        _aureliaPal.DOM.injectStyles(this.cssText);
      }
    };

    return DialogConfiguration;
  }();
});
define('aurelia-dialog/renderer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var Renderer = exports.Renderer = function () {
    function Renderer() {
      
    }

    Renderer.prototype.getDialogContainer = function getDialogContainer() {
      throw new Error('DialogRenderer must implement getDialogContainer().');
    };

    Renderer.prototype.showDialog = function showDialog(dialogController) {
      throw new Error('DialogRenderer must implement showDialog().');
    };

    Renderer.prototype.hideDialog = function hideDialog(dialogController) {
      throw new Error('DialogRenderer must implement hideDialog().');
    };

    return Renderer;
  }();
});
define('aurelia-dialog/dialog-renderer',['exports', './dialog-options', 'aurelia-pal', 'aurelia-dependency-injection'], function (exports, _dialogOptions, _aureliaPal, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogRenderer = undefined;

  

  var _dec, _class;

  var containerTagName = 'ai-dialog-container';
  var overlayTagName = 'ai-dialog-overlay';
  var transitionEvent = function () {
    var transition = null;

    return function () {
      if (transition) return transition;

      var t = void 0;
      var el = _aureliaPal.DOM.createElement('fakeelement');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
          return transition;
        }
      }
    };
  }();

  var DialogRenderer = exports.DialogRenderer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
    function DialogRenderer() {
      var _this = this;

      

      this.dialogControllers = [];

      this.escapeKeyEvent = function (e) {
        if (e.keyCode === 27) {
          var top = _this.dialogControllers[_this.dialogControllers.length - 1];
          if (top && top.settings.lock !== true) {
            top.cancel();
          }
        }
      };

      this.defaultSettings = _dialogOptions.dialogOptions;
    }

    DialogRenderer.prototype.getDialogContainer = function getDialogContainer() {
      return _aureliaPal.DOM.createElement('div');
    };

    DialogRenderer.prototype.showDialog = function showDialog(dialogController) {
      var _this2 = this;

      var settings = Object.assign({}, this.defaultSettings, dialogController.settings);
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];
      var wrapper = document.createElement('div');

      this.modalOverlay = _aureliaPal.DOM.createElement(overlayTagName);
      this.modalContainer = _aureliaPal.DOM.createElement(containerTagName);
      this.anchor = dialogController.slot.anchor;
      wrapper.appendChild(this.anchor);
      this.modalContainer.appendChild(wrapper);

      this.stopPropagation = function (e) {
        e._aureliaDialogHostClicked = true;
      };
      this.closeModalClick = function (e) {
        if (!settings.lock && !e._aureliaDialogHostClicked) {
          dialogController.cancel();
        } else {
          return false;
        }
      };

      dialogController.centerDialog = function () {
        if (settings.centerHorizontalOnly) return;
        centerDialog(_this2.modalContainer);
      };

      this.modalOverlay.style.zIndex = this.defaultSettings.startingZIndex;
      this.modalContainer.style.zIndex = this.defaultSettings.startingZIndex;

      var lastContainer = Array.from(body.querySelectorAll(containerTagName)).pop();

      if (lastContainer) {
        lastContainer.parentNode.insertBefore(this.modalContainer, lastContainer.nextSibling);
        lastContainer.parentNode.insertBefore(this.modalOverlay, lastContainer.nextSibling);
      } else {
        body.insertBefore(this.modalContainer, body.firstChild);
        body.insertBefore(this.modalOverlay, body.firstChild);
      }

      if (!this.dialogControllers.length) {
        _aureliaPal.DOM.addEventListener('keyup', this.escapeKeyEvent);
      }

      this.dialogControllers.push(dialogController);

      dialogController.slot.attached();

      if (typeof settings.position === 'function') {
        settings.position(this.modalContainer, this.modalOverlay);
      } else {
        dialogController.centerDialog();
      }

      this.modalContainer.addEventListener('click', this.closeModalClick);
      this.anchor.addEventListener('click', this.stopPropagation);

      return new Promise(function (resolve) {
        var renderer = _this2;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this2.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this2.modalOverlay.classList.add('active');
        _this2.modalContainer.classList.add('active');
        body.classList.add('ai-dialog-open');

        function onTransitionEnd(e) {
          if (e.target !== renderer.modalContainer) {
            return;
          }
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      });
    };

    DialogRenderer.prototype.hideDialog = function hideDialog(dialogController) {
      var _this3 = this;

      var settings = Object.assign({}, this.defaultSettings, dialogController.settings);
      var body = _aureliaPal.DOM.querySelectorAll('body')[0];

      this.modalContainer.removeEventListener('click', this.closeModalClick);
      this.anchor.removeEventListener('click', this.stopPropagation);

      var i = this.dialogControllers.indexOf(dialogController);
      if (i !== -1) {
        this.dialogControllers.splice(i, 1);
      }

      if (!this.dialogControllers.length) {
        _aureliaPal.DOM.removeEventListener('keyup', this.escapeKeyEvent);
      }

      return new Promise(function (resolve) {
        var renderer = _this3;
        if (settings.ignoreTransitions) {
          resolve();
        } else {
          _this3.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
        }

        _this3.modalOverlay.classList.remove('active');
        _this3.modalContainer.classList.remove('active');

        function onTransitionEnd() {
          renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
          resolve();
        }
      }).then(function () {
        body.removeChild(_this3.modalOverlay);
        body.removeChild(_this3.modalContainer);
        dialogController.slot.detached();

        if (!_this3.dialogControllers.length) {
          body.classList.remove('ai-dialog-open');
        }

        return Promise.resolve();
      });
    };

    return DialogRenderer;
  }()) || _class);


  function centerDialog(modalContainer) {
    var child = modalContainer.children[0];
    var vh = Math.max(_aureliaPal.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);

    child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
    child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
  }
});
define('aurelia-dialog/dialog-options',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var dialogOptions = exports.dialogOptions = {
    lock: true,
    centerHorizontalOnly: false,
    startingZIndex: 1000,
    ignoreTransitions: false
  };
});
define('aurelia-dialog/dialog-service',['exports', 'aurelia-metadata', 'aurelia-dependency-injection', 'aurelia-templating', './dialog-controller', './renderer', './lifecycle', './dialog-result'], function (exports, _aureliaMetadata, _aureliaDependencyInjection, _aureliaTemplating, _dialogController, _renderer, _lifecycle, _dialogResult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DialogService = undefined;

  

  var _class, _temp;

  var DialogService = exports.DialogService = (_temp = _class = function () {
    function DialogService(container, compositionEngine) {
      

      this.container = container;
      this.compositionEngine = compositionEngine;
      this.controllers = [];
      this.hasActiveDialog = false;
    }

    DialogService.prototype.open = function open(settings) {
      var _this = this;

      var dialogController = void 0;

      var promise = new Promise(function (resolve, reject) {
        var childContainer = _this.container.createChild();
        dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), settings, resolve, reject);
        childContainer.registerInstance(_dialogController.DialogController, dialogController);
        return _openDialog(_this, childContainer, dialogController);
      });

      return promise.then(function (result) {
        var i = _this.controllers.indexOf(dialogController);
        if (i !== -1) {
          _this.controllers.splice(i, 1);
          _this.hasActiveDialog = !!_this.controllers.length;
        }

        return result;
      });
    };

    DialogService.prototype.openAndYieldController = function openAndYieldController(settings) {
      var _this2 = this;

      var childContainer = this.container.createChild();
      var dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), settings, null, null);
      childContainer.registerInstance(_dialogController.DialogController, dialogController);

      dialogController.result = new Promise(function (resolve, reject) {
        dialogController._resolve = resolve;
        dialogController._reject = reject;
      }).then(function (result) {
        var i = _this2.controllers.indexOf(dialogController);
        if (i !== -1) {
          _this2.controllers.splice(i, 1);
          _this2.hasActiveDialog = !!_this2.controllers.length;
        }
        return result;
      });

      return _openDialog(this, childContainer, dialogController).then(function () {
        return dialogController;
      });
    };

    return DialogService;
  }(), _class.inject = [_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine], _temp);


  function _openDialog(service, childContainer, dialogController) {
    var host = dialogController.renderer.getDialogContainer();
    var instruction = {
      container: service.container,
      childContainer: childContainer,
      model: dialogController.settings.model,
      view: dialogController.settings.view,
      viewModel: dialogController.settings.viewModel,
      viewSlot: new _aureliaTemplating.ViewSlot(host, true),
      host: host
    };

    return _getViewModel(instruction, service.compositionEngine).then(function (returnedInstruction) {
      dialogController.viewModel = returnedInstruction.viewModel;
      dialogController.slot = returnedInstruction.viewSlot;

      return (0, _lifecycle.invokeLifecycle)(dialogController.viewModel, 'canActivate', dialogController.settings.model).then(function (canActivate) {
        if (canActivate) {
          service.controllers.push(dialogController);
          service.hasActiveDialog = !!service.controllers.length;

          return service.compositionEngine.compose(returnedInstruction).then(function (controller) {
            dialogController.controller = controller;
            dialogController.view = controller.view;

            return dialogController.renderer.showDialog(dialogController);
          });
        }
      });
    });
  }

  function _getViewModel(instruction, compositionEngine) {
    if (typeof instruction.viewModel === 'function') {
      instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
    }

    if (typeof instruction.viewModel === 'string') {
      return compositionEngine.ensureViewModel(instruction);
    }

    return Promise.resolve(instruction);
  }
});
define('text!login/login.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"login\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 logo\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4 well\">\n        <div class=\"alert alert-danger\" show.bind=\"message != ''\">\n          <!--Display the message property here, only if present.-->\n          ${message}\n        </div>\n\n        <form role=\"form\" class=\"form-horizontal\" submit.trigger=\"login()\"><!--Invoke login on form submit.-->\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Username</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"username\" value.bind=\"username\"><!--Bind the username.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Password</label>\n            <div class=\"col-sm-10\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"password\" value.bind=\"password\"><!--Bind the password.-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10 text-right\">\n              <!--Disable the button if there isn't both a username and password.-->\n              <button type=\"submit\" class=\"btn btn-success\" disabled.bind=\"!username || !password\">Log In</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!home/activity-list.html', ['module'], function(module) { module.exports = "<template>\n  <ul>\n    <li repeat.for=\"a of activity\" click.delegate=\"openTab($event, a)\" class=\"activity\">\n      <!--Note: The activity type isn't the same as the route. What do we do?-->\n      <a route-href=\"route.bind: a.type | activityTypeToRoute; params.bind: { id: a.associatedId }\">\n        <div class=\"well\">\n          <div class=\"avatar\">\n            <img src=\"${a.createdBy.iconUrl}\">\n          </div>\n          <div class=\"body\">\n            <div class=\"title\" innerhtml.bind=\"a.title\"></div>\n            <div class=\"content\">${a.content}</div>\n            <div class=\"date\">${a.createdAt | date}</div> <!--TODO: Add nicer date format. -->\n          </div>\n        </div>\n      </a>\n    </li>\n  </ul>\n</template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./activity-list.html\"></require>\n  <require from=\"./news-list.html\"></require>\n  \n  <div>\n    <div class=\"header\">\n      <div class=\"header-left\">Activity</div>\n      <div class=\"header-right\">Benchmarks &amp; News</div>\n    </div>\n\n    <div class=\"sidebar\">\n      <!--<activity-list activity.bind=\"activity\"></activity-list>-->\n      <compose view=\"./activity-list.html\"></compose>\n    </div>\n\n    <div class=\"detail-container\">\n      <div class=\"row1x2\">\n        <!--TODO: Add Charts Here-->\n        <line-chart class=\"column1x2\"\n                    labels.bind=\"['January', 'February', 'March', 'April', 'May', 'June', 'July']\">\n          <chart-data data.bind=\"[65, 59, 80, 81, 56, 55, 40]\"></chart-data>\n          <chart-data data.bind=\"[28, 48, 40, 19, 86, 27, 90]\"\n                      fill-color=\"rgba(0,0,150,0.2)\"\n                      stroke-color=\"rgba(230,38,135,0.5)\"\n                      point-color=\"rgba(230,38,135,1)\",\n                      point-stroke-color=\"#fff\",\n                      point-highlight-fill=\"#fff\",\n                      point-highlight-stroke=\"rgba(230,38,135,1)\"></chart-data>  \n        </line-chart>\n\n        <bar-chart class=\"column2x2\"\n                  labels.bind=\"['January', 'February', 'March', 'April', 'May', 'June', 'July']\">\n          <chart-data data.bind=\"[65, 59, 80, 81, 56, 55, 40]\"></chart-data>\n          <chart-data data.bind=\"[28, 48, 40, 19, 86, 27, 90]\"\n                      fill-color=\"rgba(0,0,150,0.2)\"\n                      stroke-color=\"rgba(230,38,135,0.5)\"\n                      highlight-fill=\"rgba(230,38,135,0.75)\"\n                      highlight-stroke=\"rgba(230,38,135,1)\"></chart-data>\n        </bar-chart>\n\n      </div>\n      <div class=\"row2x2\">\n        <!--TODO: Add News List Here-->\n        <news-list news.bind=\"news\"></news-list>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!home/news-list.html', ['module'], function(module) { module.exports = "<template bindable=\"news\" class=\"news\">\n  \n<div repeat.for=\"item of news\">\n  <!--One of these for each item in the news array.-->\n    <h1>${item.title}</h1>\n    <p>${item.content}</p>\n    <div>\n      <span class=\"badge badge-success\">${item.createdAt | date}</span>\n      <div class=\"pull-right\" repeat.for=\"tag of item.tags\">\n        <!--One of these for each tag in the news.tags array.-->\n        <span class=\"badge\">${tag}</span>\n      </div>\n    </div>\n    <hr>\n</div>\n  \n</template>\n"; });
define('text!settings/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"header-left\">Settings</div>\n    <div class=\"header-right\"></div>\n  </div>\n\n  <div class=\"sidebar\">\n    <ul class=\"nav nav-pills nav-stacked\">\n      <template repeat.for=\"[category, routes] of router.navigation | categories\">\n        <li class=\"nav-header\">\n          <i class=\"fa\" class.bind=\"category.iconClass\"></i>\n          <span>${category.title}</span>\n        </li>\n        \n        <li repeat.for=\"nav of routes\" class=\"${nav.isActive ? 'active' : ''}\">\n          <a href.bind=\"nav.href\">${nav.title}</a>\n        </li>\n      </template>\n    </ul>\n  </div>\n\n  <div class=\"detail-container settings-container\">\n    <router-view></router-view>\n  </div>\n</template>"; });
define('text!shell/header.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <ul class=\"nav navbar-nav tabs\">\n\n      <!--One li per tab; Apply active class when tab.isActive-->\n      <li repeat.for=\"tab of tabs\" click.delegate=\"middleCloseTab($event, tab)\" class=\"${tab.isActive ? 'active' : ''}\">\n        <a route-href=\"route.bind: tab.route; params.bind: tab.params\">${tab.title}</a><!--This link should navigate to the tab using tab.route and tab.params.-->\n        <a href=\"#\" click.trigger=\"closeTab(tab)\" ><!--This link should invoke closeTab and pass the tab.-->\n          <i class=\"fa fa-times\"></i>\n        </a>\n      </li>\n\n      <li class=\"dropdown add\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <i class=\"fa fa-plus\"></i>add\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a route-href=\"route: thread; params.bind: { id:'new' }\"><i class=\"icon-ticket\"></i> New Ticket</a>\n          </li>\n          <li>\n            <a route-href=\"route: user; params.bind: { id:'new' }\"><i class=\"icon-group\"></i> New User</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"avatar dropdown-toggle\" data-toggle=\"dropdown\">\n          <img src=\"${user.iconUrl}\" title.bind=\"user.username\">\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"presentation\">\n            <a route-href=\"route: settings\"><i class=\"fa fa-cog\"></i> Settings</a>\n          </li>\n          <li role=\"presentation\">\n            <a route-href=\"route: help\"><i class=\"fa fa-envelope\"></i> Help</a>\n          </li>\n          <li role=\"presentation\" class=\"divider\"></li>\n          <li role=\"presentation\">\n            <a href=\"#\" click.trigger=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</template>"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template>\n  <compose view=\"./header.html\"></compose>\n  <compose view=\"./sidebar.html\"></compose>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"main-nav\">\n    <ul class=\"nav nav-list\">\n      <li repeat.for=\"route of router.navigation\" class=\"${route.isActive ? 'active' : ''}\"> <!--One li per item in router.navigation; apply the active class if items.isActive-->\n        <a title.bind=\"route.title\" href.bind=\"route.href\"> <!--Bind the href to item.href-->\n          <i class=\"fa ${route.settings.iconClass}\"></i> <!--Add the icon class based on settings.-->\n        </a>\n      </li>\n    </ul>\n  </div>\n</template>\n"; });
define('text!tickets/thread.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"ticket\">\n    <div class=\"header\">\n      <div class=\"btn-group\">\n        <a class=\"btn btn-default creator\" route-href=\"route: user; params.bind: { id:ticket.participants[0].id}\" class=\"btn\">\n          <span>${ticket.participants[0].username}</span>\n        </a>\n        <button class=\"btn status active\">\n          <span class=\"badge ${ticket.status}\">${ticket.status}</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"sidebar\">\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Type</label>\n            <select class=\"form-control\">\n              <option>Question</option>\n              <option>Incident</option>\n              <option>Problem</option>\n              <option>Task</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Priority</label>\n            <select class=\"form-control\">\n              <option>Low</option>\n              <option>Normal</option>\n              <option>High</option>\n              <option>Urgent</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Tags</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"tags\" />\n          </div>\n        </form>\n      </div>\n      <div class=\"well\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Internal Notes</label>\n            <textarea class=\"form-control\"></textarea>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"detail-container\">\n      <div class=\"header\">\n        <i class=\"fa fa-comments\"></i>\n        <div class=\"content\">\n          <div class=\"title\">${ticket.title}</div>\n          <div class=\"description\">\n            <span>${ticket.createdAt | date}</span>\n            <i class=\"fa fa-circle separator\"></i>\n            <span>${from.firstName} ${from.lastName}</span> &lt;\n            <span>${from.email}</span>&gt;\n          </div>\n        </div>\n      </div>\n\n      <div class=\"thread\">\n        <form class=\"message\">\n          <rich-text-editor value.bind=\"message\"></rich-text-editor>\n          <!--TODO: Add a rich text editor and bind its value to message.-->\n        </form>\n\n        <div class=\"btn-group dropup pull-right\">\n          <button click.trigger=\"submit('Solved')\" class=\"btn btn-success\">Submit as Solved</button>\n          <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a href=\"#\" click.trigger=\"submit('Open')\">Submit as Open</a>\n              <a href=\"#\" click.trigger=\"submit('Pending')\">Submit as Pending</a>\n              <a href=\"#\" click.trigger=\"submit('Solved')\">Submit as Solved</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"post-list\">\n          <div repeat.for=\"post of ticket.posts\" class=\"post\">\n            <input type=\"hidden\" model.one-time=\"getParticipant(post.fromId)\" ref=\"participant\">\n            <div class=\"avatar\">\n              <img src=\"${participant.model.avatarUrl}\">\n            </div>\n            <div class=\"body\">\n              <div>\n                <strong>${participant.model.firstName}</strong>\n                <strong>${participant.model.lastName}</strong>\n                <span class=\"createdAt\">${post.createdAt | date}</span>\n              </div>\n              <div>\n                <div>\n                  <p innerhtml.bind=\"post.content\"></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!tickets/tickets.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"header-single\">Tickets</div>\n  </div>\n\n  <data-grid items.bind=\"tickets\">\n    <grid-column heading=\"Title\">\n      <a route-href=\"route: thread; params.bind: { id:item.id }\">${item.title}</a>\n    </grid-column>\n    <grid-column heading=\"Submitted By\">\n      ${item.participants[0].firstName} ${item.participants[0].lastName}\n    </grid-column>\n    <grid-column heading=\"Submitted On\">\n      ${item.createdAt | date}\n    </grid-column>\n    <grid-column heading=\"Type\" property=\"type\"></grid-column>\n    <grid-column heading=\"Status\" property=\"status\"></grid-column>\n    <grid-column heading=\"Priority\" property=\"priority\"></grid-column>\n  </data-grid>\n</template>"; });
define('text!users/user-detail.html', ['module'], function(module) { module.exports = "<template class=\"user-detail\" bindable=\"controller\"> \n  <require from=\"resources/data/timezones\"></require>\n  <require from=\"resources/data/countries\"></require>\n\n  <div with.bind=\"controller.editable\" class=\"header\">\n    <div>\n      <div class=\"avatar\">\n        <img src=\"${avatarUrl}\">\n      </div>\n      <div class=\"content\">\n        <div>\n          <span class=\"title\">${fullName}</span>\n        </div>\n        <div>${email}</div>\n      </div>\n      <div class=\"text-right user-errors\" if.bind=\"!controller.isValid\">\n        <span class=\"label label-danger sandbox-invalid\">User Has Errors</span>\n      </div>\n    </div>\n  </div>\n\n  <div with.bind=\"controller.editable\" class=\"body\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\">\n        <a href=\"#home\" data-toggle=\"tab\">Profile</a>\n      </li>\n      <li>\n        <a href=\"#address\" data-toggle=\"tab\">Address</a>\n      </li>\n      <li>\n        <a href=\"#profile\" data-toggle=\"tab\">Account</a>\n      </li>\n      <li class=\"pull-right\">\n        <button class=\"btn ${isActive ? 'btn-danger' : 'btn-info'}\" \n                click.trigger=\"controller.toggleActiveStatus()\">\n          ${isActive ? 'Deactivate' : 'Activate'}\n        </button>\n        <button class=\"btn btn-warning\"\n                click.trigger=\"controller.revert()\"\n                disabled.bind=\"!controller.isDirty\">Revert</button>\n        <button class=\"btn btn-success\"\n                click.trigger=\"controller.save()\"\n                disabled.bind=\"!controller.isDirty || !controller.isValid\">Save</button>\n      </li>\n    </ul>\n\n    <div with.bind=\"controller.editable\" class=\"tab-content\">\n      <div class=\"tab-pane active in\" id=\"home\">\n        <form role=\"form\" class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">First Name</label>\n            <div class=\"col-sm-3\">\n              <input value.bind=\"firstName & validate\" type=\"text\" placeholder=\"first name\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Last Name</label>\n            <div class=\"col-sm-3\">\n              <input value.bind=\"lastName & validate\" type=\"text\" placeholder=\"last name\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Email</label>\n            <div class=\"col-sm-3\">\n              <input value.bind=\"email & validate\" type=\"text\" placeholder=\"email\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Time Zone</label>\n            <div class=\"col-sm-3\">\n              <select class=\"form-control\">\n                <option repeat.for=\"zone of timezones\" value.bind=\"zone.value\">${zone.display}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">About</label>\n            <div class=\"col-sm-3\">\n              <textarea rows=\"3\" class=\"form-control\" placeholder=\"about\"></textarea>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"address\">\n        <form role=\"form\" class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Address Line 1</label>\n            <div class=\"col-sm-3\">\n              <input type=\"text\" placeholder=\"address line 1\" class=\"form-control\">\n              <p class=\"help-block\">Street address, P.O. box, company name, c/o</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Address Line 2</label>\n            <div class=\"col-sm-3\">\n              <input type=\"text\" placeholder=\"address line 2\" class=\"form-control\">\n              <p class=\"help-block\">Apartment, suite , unit, building, floor, etc.</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">City / Town</label>\n            <div class=\"col-sm-3\">\n              <input type=\"text\" placeholder=\"city\" class=\"form-control\">\n              <p class=\"help-block\"></p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">State / Province / Region</label>\n            <div class=\"col-sm-3\">\n              <input type=\"text\" placeholder=\"state / province / region\" class=\"form-control\">\n              <p class=\"help-block\"></p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Zip / Postal Code</label>\n            <div class=\"col-sm-3\">\n              <input type=\"text\" placeholder=\"zip or postal code\" class=\"form-control\">\n              <p class=\"help-block\"></p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Country</label>\n            <div class=\"col-sm-3\">\n              <select class=\"form-control\">\n                <option value=\"\" selected=\"selected\">(please select a country)</option>\n                <option repeat.for=\"country of countries\" value.bind=\"country.abbreviation\">${country.name}</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"profile\">\n        <form role=\"form\" class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Username</label>\n            <div class=\"col-sm-3\">\n              <p class=\"form-control-static\">${controller.editable.username}</p>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Password</label>\n            <div class=\"col-sm-3\">\n              <input type=\"password\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Confirm Password</label>\n            <div class=\"col-sm-3\">\n              <input type=\"password\" class=\"form-control\">\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!users/users.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./user-detail.html\"></require>\n  \n  <div>\n    <div class=\"header\">\n      <div class=\"header-left\">Users</div>\n    </div>\n\n    <div class=\"sidebar\">\n      <ul repeat.for=\"user of users\">\n        <li class=\"customer ${activeId === user.id ? 'active' : ''}\">\n          <a route-href=\"route: user; params.bind: { id: user.id }\">\n            <div class=\"well\">\n              <div>\n                <div class=\"avatar\">\n                  <img src=\"${user.avatarUrl}\">\n                </div>\n                <div class=\"body\">\n                  <p>\n                    <strong>${user.fullName}</strong>\n                  </p>\n                  <span class=\"badge badge-error\">${user.ticketCount & oneTime} tickets</span>\n                  <span class=\"badge badge-success\">${user.postCount & oneTime} posts</span>\n                </div>\n              </div>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"detail-container\" if.bind=\"controller.editable\">\n      <user-detail controller.bind=\"controller\"></user-detail>\n    </div>\n    \n    <div class=\"detail-container\" if.bind=\"!controller.editable\">\n      <h2 class=\"select-from-list\">Please select a user from the list.</h2>\n    </div>\n  </div>\n</template>\n"; });
define('text!resources/dialogs/message-box.html', ['module'], function(module) { module.exports = "<template>\n  <ai-dialog style=\"max-width: 325px\">\n    <ai-dialog-header>${model.title}</ai-dialog-header>\n\n    <ai-dialog-body>\n      ${model.message}\n    </ai-dialog-body>\n\n    <ai-dialog-footer>\n      <button repeat.for=\"option of model.options\" click.trigger=\"selectOption(option)\">${option}</button>\n    </ai-dialog-footer>\n  </ai-dialog>\n</template>"; });
define('text!resources/dialogs/prompt.html', ['module'], function(module) { module.exports = "<template>\n  <ai-dialog>\n    <ai-dialog-header>${model.title}</ai-dialog-header>\n\n    <ai-dialog-body>\n      <p>${model.message}</p>\n      <form submit.trigger=\"ok()\"> <!--On submit, ok the dialog w/ the answer response.-->\n        <input type=\"text\" value.bind=\"answer\" class=\"form-control\" attach-focus=\"true\"> <!--Bind the answer.-->\n      </form>\n    </ai-dialog-body>\n\n    <ai-dialog-footer>\n      <button click.trigger=\"cancel()\">Cancel</button><!--Cancel the dialog.-->\n      <button click.trigger=\"ok()\" disabled.bind=\"!answer\">Ok</button>!<!--Ok the dialog w/ answer response; Disable the button if there's no answer.-->\n    </ai-dialog-footer>\n  </ai-dialog>\n</template>"; });
define('text!resources/elements/data-grid.html', ['module'], function(module) { module.exports = "<template>\n  <slot></slot>\n</template>\n"; });
define('text!settings/account/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/api/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/email/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/facebook/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/feedbacktab/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/overview/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/security/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/subscription/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/twitter/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
define('text!settings/webportal/index.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"title\">${heading}</div>\n    </div>\n  </div>\n  <div class=\"grid-container container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"alert alert-danger text-center\">\n        <span>${heading} Settings Not Implemented</span>\n      </div>\n    </div>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map