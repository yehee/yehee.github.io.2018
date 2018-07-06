var apiURL1 = 'https://api.github.com/repos/'
var apiURL2 = '/commits?per_page=3&sha='
/* Source code */
var commits = new Vue({

  el: '#commits',
  
  data: {
    directory: 'alice-0-kim/alice-0-kim.github.io',
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null
  },
  
  created: function () {
    this.fetchData()
  },
  
  watch: {
    currentBranch: 'fetchData'
  },
  
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function(v) {
      return v.replace(/T|Z/g, '')
    }
  },
  
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL1 + self.directory + apiURL2 + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        // console.log(self.commits)
        // console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
})