<template>
  <div>
    Flex Chart
  </div>
</template>

<script>
// eslint-disable-next-line
import * as wjCore from '@grapecity/wijmo'
import * as wjGrid from '@grapecity/wijmo.grid'

export default {
  data() {
    return {
      grid: null,
      data: []
    }
  },

  created() {
    for (let i = 0; i < 10; i++) {
      this.data.push({
        id: i,
        country: '11231blah',
        s: Math.random() * 50000,
        a: Math.random() * 200000
      })
    }
  },

  mounted() {
    this.grid = new wjGrid.FlexGrid(this.$el, {
      allowSorting: true,
      showSort: false,
      autoGenerateColumns: false,
      columns: [
        { binding: 'country', header: 'Country', width: '2*' },
        { binding: 's', header: 's', width: '*', format: 'n2' },
        { binding: 'a', header: 'a', width: '*', format: 'n2' }
      ],
      itemsSource: this.data
    })
  }
}
</script>
