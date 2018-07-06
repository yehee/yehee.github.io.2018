var apiURL = 'https://api.github.com/users/alice-0-kim/repos'

var repos = new Vue ({
  el: '#repos',
  data: {
    projects: []
  },
  created: function () {
    var self = this
    axios.get(apiURL)
    .then(function (response) {
      self.projects = response.data
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return
    })
  }
});