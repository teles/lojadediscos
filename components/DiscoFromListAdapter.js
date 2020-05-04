import Slugify from './Slugify'

class DiscoFromListAdapter {
  constructor (release, fields = []) {
    this.id = release.id
    this.name = release.basic_information.title
    this.thumb = release.basic_information.thumb
    this.slug = [Slugify(release.basic_information.artists[0].name), Slugify(release.basic_information.title), release.id].join('_')
    this.customFields = (release.notes || []).reduce((total, note) => {
      const key = Slugify(fields.find(field => field.id === note.field_id).name)
      total[key] = note.value
      return total
    }, {})
  }
}
export default DiscoFromListAdapter
