import {generateSentence, generateTitle} from './lorem';

const latency = 0;

function wait(ms = latency) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export class User {
  constructor(attrs) {
    if (attrs) {
      Object.assign(this, attrs);
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  get ticketCount() {
    return ticketData.filter(t => t.fromId === this.id).length;
  }
  
  get postCount() {
    return ticketData.reduce( (a,b) => a.concat(b.posts), [] ).filter( p => p.fromId === this.id ).length;
  } 

  clone() {
    return new User(clone(this));
  }
}

let userData = [
  new User({
    id: 1,
    username: 'EisenbergEffect',
    email: 'rob@eisenberg.com',
    firstName: 'Rob',
    lastName: 'Eisenberg',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: true
  }),
  new User({
    id: 2,
    username: 'bryanrsmith',
    email: 'bryan@smith.com',
    firstName: 'Bryan',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/2.jpg',
    avatarUrl: '/img/users/avatar/2.jpg',
    isActive: true
  }),
  new User({
    id: 3,
    username: 'cmichaelgraham',
    email: 'mike@graham.com',
    firstName: 'Mike',
    lastName: 'Graham',
    iconUrl: '/img/users/icon/3.jpg',
    avatarUrl: '/img/users/avatar/3.jpg',
    isActive: true
  }),
  new User({
    id: 4,
    username: 'jdanyow',
    email: 'jeremy@danyow.com',
    firstName: 'Jeremy',
    lastName: 'Danyow',
    iconUrl: '/img/users/icon/4.jpg',
    avatarUrl: '/img/users/avatar/4.jpg',
    isActive: true
  }),
  new User({
    id: 5,
    username: 'martingust',
    email: 'martin@gust.com',
    firstName: 'Martin',
    lastName: 'Gust',
    iconUrl: '/img/users/icon/5.jpg',
    avatarUrl: '/img/users/avatar/5.jpg',
    isActive: true
  }),
  new User({
    id: 6,
    username: 'AshleyGrant',
    email: 'ashley@grant.com',
    firstName: 'Ashley',
    lastName: 'Grant',
    iconUrl: '/img/users/icon/6.jpg',
    avatarUrl: '/img/users/avatar/6.jpg',
    isActive: true
  }),
  new User({
    id: 7,
    username: 'davismj',
    email: 'matthew@davis.com',
    firstName: 'Matthew',
    lastName: 'Davis',
    iconUrl: '/img/users/icon/7.jpg',
    avatarUrl: '/img/users/avatar/7.jpg',
    isActive: true
  }),
  new User({
    id: 8,
    username: 'PWKad',
    email: 'patrick@walters.com',
    firstName: 'Patrick',
    lastName: 'Walters',
    iconUrl: '/img/users/icon/8.jpg',
    avatarUrl: '/img/users/avatar/8.jpg',
    isActive: true
  })
];

function randomDateInLastThirtyDays() { 
  return new Date(new Date().getTime() - (Math.random()*30*24*60*60*1000)); 
}

// adds a random number of days to a date, returns the new date or the current date, whichever is earlier (thus no future dates)
function addRandomNumberOfDaysToDate(start, maxDays) {
  return new Date(Math.min(new Date(start.getTime() + (Math.random()*Math.floor(Math.random() * maxDays)*24*60*60*1000)), new Date())); 
}

var ticketData = [
  {
    id: 1,
    title: null,
    createdAt: new Date(),
    fromId: 1,
    status: 'Open',
    priority: 'Normal',
    type: 'Problem',
    participants: [],
    posts: [
      {
        createdAt: null,
        fromId: null,
        content: null
      }
    ]
  }
];

for (let i = 0; i < 100; i++) {
  ticketData[i] = clone(ticketData[0]);
  ticketData[i].id = i + 1;
  ticketData[i].title = generateTitle();
  ticketData[i].participants[0] = clone(userData[Math.floor(Math.random() * 8)]);
  ticketData[i].fromId = ticketData[i].participants[0].id;
  ticketData[i].createdAt = randomDateInLastThirtyDays();
  ticketData[i].posts[0].createdAt = addRandomNumberOfDaysToDate(ticketData[i].createdAt,30);
  ticketData[i].posts[0].fromId = ticketData[i].participants[0].id;
  ticketData[i].posts[0].content = generateSentence();
}

ticketData.sort((a,b) => b.createdAt - a.createdAt);

let activityData = [
  {
    id: 1,
    createdAt: new Date(),
    content: generateSentence(),
    type: 'ticket',
    associatedId: 1
  }
];

for (let i = 0; i < 100; i++) {
  activityData[i] = clone(activityData[0]);
  activityData[i].id = i + 1;
  activityData[i].createdAt = randomDateInLastThirtyDays();
  activityData[i].associatedId = i + 1;
  activityData[i].createdBy = clone(userData[Math.floor(Math.random() * 8)]);
  
  let ticket = ticketData.find(t => t.id === activityData[i].associatedId);
  activityData[i].title = `${activityData[i].createdBy.firstName} ${activityData[i].createdBy.lastName} <strong>posted</strong> a message to the ticket "${ticket.title}"`
}

activityData.sort((a,b) => b.createdAt - a.createdAt);

export class Server {
  login(username, password) {
    return wait().then(() => {
      if (username === 'un' && password === 'pw') {
        return userData[0].clone();
      }
    });
  }

  createUser() {
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
  }
  
  saveUser(user) {
    return wait().then(() => {
      let clone = user.clone();

      if (clone.id == 0) {
        clone.id = userData.length + 1;
        userData.unshift(clone);
      } else {
        let existing = userData.find(c =>  c.id === clone.id);
        let index = userData.indexOf(existing);
        userData.splice(index, 1, clone);
      }

      return clone.clone();
    });
  }
  
  getUser(userId) {
    return wait().then(() => {
      let existing = userData.find(c => c.id === userId);
      return existing ? existing.clone() : null;
    });
  }
  
  getUserSummaries() {
    return wait().then(() => userData.map(x => x.clone()));
  }

  createTicket(title) {
    var currentUser = clone(userData[0]);

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
  }

  saveTicket(ticket) {
    return wait().then(() => {
      if (ticketData.indexOf(ticket) === -1) {
        ticket.id = ticketData.length + 1;
        ticketData.unshift(ticket);
      }

      return ticket;
    });
  }

  getTicketSummaries() {
    return wait().then(() => clone(ticketData));
  }

  getTicketDetails(ticketId) {
    return wait().then(() => ticketData.find(x => x.id === ticketId));
  }

  getRecentActivity() {
    return wait().then(() => clone(activityData));
  }

  getNews() {
    return wait().then(() => {
      return [
        {
          title: "New Features Launched",
          content: "'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words: 'Yes, we went to school in the sea, though you mayn't believe it—' 'I never said I didn't!' interrupted Alice. 'You did,' said the Mock Turtle.",
          createdAt: new Date(),
          tags: ["release", "features", "blog"]
        },
        {
          title: "Satisfaction Guaranteed",
          content: "'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain. 'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.",
          createdAt: new Date(),
          tags: ["release", "launch", "blog"]
        }
      ];
    });
  }
}
