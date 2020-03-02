const multiply = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#multiplier',
  data: {
    items: 6,
    sizeEach: 3
  },
  computed: {
    answer: function () {
      const i = parseInt(this.items)
      const j = parseInt(this.sizeEach)
      return `Your multiplication is ${multiply(i, j)}.`
    }
  }
})