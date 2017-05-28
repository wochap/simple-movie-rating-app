import ResultLabel from 'app/common/components/ResultLabel'
import VueDialog from 'app/common/components/VueDialog'
import FormField from 'app/common/components/FormField'
import FormControlText from 'app/common/components/FormControlText'
import MovieCard from 'app/common/components/MovieCard'

export default function registerComponents (Vue) {
  Vue.component('result-label', ResultLabel)
  Vue.component('vue-dialog', VueDialog)
  Vue.component('form-field', FormField)
  Vue.component('form-control-text', FormControlText)
  Vue.component('movie-card', MovieCard)
}
