var app = new Vue({
  el: '#app-1',
  data: {
    city: '',
    arr: []
  },
  methods: {
    searchWeather: function () {
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then(res => {
          this.arr = res.data.data.forecast;
        })
        .catch(err => {
          console.error(err);
        })
      console.log('查询天气')
    },
    changeCity: function (city) {
      this.city = city;
      this.searchWeather();
    }
  },
})