var apiURL = 'https://api.github.com/users/alice-0-kim/repos'

var repos = new Vue ({
  el: '#repos',
  data: {
    projects: [],
  	limit: 3,
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
  beforeUpdate () {
  	this.fadeOut()
  },
  computed: {
  	pizza: function () {
  		return this.projects.slice((this.curr - 1) * this.limit, this.curr * this.limit)
  	}
  },
  methods: {
  	prev: function () {
  		if (this.curr == 1) {
  			this.curr = this.total
  		} else {
  			this.curr --
  		}
  	},
  	next: function () {
			if (this.curr == this.total) {
  			this.curr = 1
			} else {
				this.curr ++
			}
  	},
  	fadeOut: function () {
			var previous_set = this.$refs['project']
			if (previous_set) {
				console.log(previous_set)
				for (var key in previous_set) {
					var prev = previous_set[key]
					//console.log(prev)
					prev.animate({
						margin: ['20px 0 0 0', '0']
					}, 500, 'swing')
				}
			}
  	},
  	handleResize: function () {
  		console.log(window.innerWidth)
  		if (window.innerWidth < 500) {
  			this.limit = 1
  		} else if (window.innerWidth < 800) {
  			this.limit = 2
  		} else {
  			this.limit = 3
  		}
  	}
  },
  filters: {
  	normalize: function (value) {
  		return value.replace(/[\W_]+/g, ' ').toUpperCase()
  	}
  }
});