// @flow

import accounting from 'accounting'

export default function registerFilters (Vue: any) {
  Vue.filter('formatRating', (value: number): string => {
    return value.toFixed(1)
  })

  Vue.filter('currency', (value: number) => {
    if (!value) return '-'

    return accounting.formatMoney(value, '$ ', 2, '.', ',')
  })

  Vue.filter('formatDate', (value: Date) => {
    if (!value) return '-'

    const date = new Date(value)
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ]

    const day = date.getDate() + 1
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${day} ${monthNames[monthIndex]} ${year}`
  })
}
