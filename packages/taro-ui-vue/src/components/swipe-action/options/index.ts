import classNames from 'classnames'
import { delayQuerySelector } from '../../../utils/common'

export default {
  name: 'AtSwipeActionOptions',
  props: {
    componentId: {
      type: String,
      default: '',
    },
    onQueryedDom: {
      type: Function,
      default: () => () => {},
    },
    className: {
      type: [Array, String],
      default: () => '',
    },
  },
  computed: {
    rootClass () {
      return classNames('at-swipe-action__options', this.className)
    }
  },
  methods: {
    trrigerOptionsDomUpadte() {
      delayQuerySelector(this, `#swipeActionOptions-${this.componentId}`).then((res) => {
        this.onQueryedDom(res[0])
      })
    },
  },
}