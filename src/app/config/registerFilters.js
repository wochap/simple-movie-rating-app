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
}
