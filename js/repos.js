var apiURL = 'https://api.github.com/users/alice-0-kim/repos'

var repos = new Vue ({
  el: '#repos',
  data: {
    projects: [],
  	limit: 9,
  	curr: 1,
  	total: 0,
  },
  created: function () {
    var self = this
    axios.get(apiURL)
    .then(function (response) {
      for (var project of response.data) {
      	if (!project.fork) {
      		self.projects.push(project)
      	}
      }
      self.total = Math.ceil(self.projects.length / self.limit)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return
    })
  },
  computed: {
  	pizza: function () {
  		console.log((this.curr - 1) * this.limit)
  		console.log(this.curr * this.limit)
  		return this.projects.slice((this.curr - 1) * this.limit, this.curr * this.limit)
  	}
  },
  methods: {
  	prev: function () {
  		if (this.curr == 1) {
  			alert('This is the first page!')
  		} else {
  			this.curr --
  		}
  	},
  	next: function () {
			if (this.curr == this.total) {
				alert('This is the last page!')
			} else {
				this.curr ++
			}
  	}
  }
});