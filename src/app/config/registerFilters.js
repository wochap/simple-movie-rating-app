// @flow

export default function registerFilters (Vue: any) {
  Vue.filter('formatRating', (value: number): string => {
    return value.toFixed(1)
  })
}
