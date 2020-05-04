import DiscoFromListAdapter from './DiscoFromListAdapter.js'
import DiscFromDetailAdapter from './DiscFromDetailAdapter'

class Disco {
  constructor (data, type, options = {}) {
    const mapperByType = {
      list: data => new DiscoFromListAdapter(data, options.fields),
      detail: data => new DiscFromDetailAdapter(data)
    }

    const disco = mapperByType[type](data)

    Object.keys(disco).forEach((key) => {
      this[key] = disco[key]
    })
  }
}
export default Disco
