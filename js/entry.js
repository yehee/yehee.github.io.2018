var main = new Vue ({
  el: '#main',
  data: {
    educations: [
      {
        'title': 'University of British Columbia',
        'from': '2015',
        'to': 'present',
        'location': 'Vancouver BC, Canada',
        'body': [
          'Combined Major in Computer Science and Statistics, Bachelor of Science'
        ]
      }
    ],
    careers: [
      {
        'title': 'Quality Assurance Support Specialist',
        'from': 'jan, 2018',
        'to': 'aug, 2018',
        'location': 'IT Web Services, University of British Columbia, Vancouver BC, Canada',
        'body': [
          'Languages: JavaScript, HTML/CSS, PHP, SQL',
          'Tools: GitHub, Blackfire, Selenium, MySQL',
          'Framework: Vue.js, Drupal'
        ]
      },
      {
        'title': 'Barista',
        'from': 'aug, 2016',
        'to': 'jul, 2018',
        'location': '3381 Wesbrook Mall, Vancouver BC, Canada',
        'body': [
          'greeting and taking orders from customers',
          'serving food and beverages',
          'maintaining hygiene workplace'
        ]
      },
      {
        'title': 'Teaching Assistant',
        'from': 'may, 2017',
        'to': 'present',
        'location': 'University of British Columbia, Vancouver BC, Canada',
        'body': [
          'Courses: CPSC 121, CPSC 210, and CPSC 310'
        ]
      }
    ],
    skills: [
      {
        'title': 'JavaScript',
        'body': [
          'A high-level, interpreted programming language.'
        ]
      },
      {
        'title': 'SQL',
        'body': [
          'A standard language for storing, manipulating and retrieving data in databases.'
        ]
      },
      {
        'title': 'Front-End Web Development',
        'body': [
          'Build web applications using MVC frameworks such as Vue.js.',
          'Utilize a real-time database system using available platform such as Firebase.'
        ]
      }
    ],
    projects: [
      {
        'title': 'Scheduler',
        'from': 'may, 2018',
        'to': 'present',
        'body': [
          'A simple Vue.js project using Firebase.'
        ],
        'image': '',
        'url': 'https://github.com/alice-0-kim/scheduler'
      },
      {
        'title': 'Search ahead',
        'from': 'may, 2018',
        'to': 'present',
        'body': [
          'A simple search bar with typeahead feature.'
        ],
        'image': '',
        'url': 'https://github.com/alice-0-kim/typeahead'
      },
      {
        'title': 'Shinobi vs. Robot',
        'from': 'dec, 2017',
        'body': [
          'A simple flash game written in JavaScript.'
        ],
        'image': '',
        'url': 'https://github.com/alice-0-kim/game'
      }
    ]
  },
  computed: {
    // stub
  },
  methods: {
  	// stub
  },
  filters: {
    uppercase: function (text) {
      return text.toUpperCase()
    },
    capitalize: function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1);
    }
  }
});