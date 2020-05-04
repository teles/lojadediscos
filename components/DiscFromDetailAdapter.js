import Slugify from './Slugify'
import Translator from './Translator'

class DiscFromDetailAdapter {
  constructor (release) {
    this.id = release.id
    this.name = release.title
    this.thumb = release.thumb
    this.slug = [Slugify(release.artists[0].name), Slugify(release.title), release.id].join('_')

    const artist = release.artists.find(artist => artist.name === release.artists_sort)

    this.artist = {
      name: artist.name,
      slug: Slugify(artist.name)
    }

    this.rating = {
      average: release.community.rating.average,
      count: release.community.rating.count
    }

    this.images = release.images.map(image => ({
      url: image.resource_url,
      width: image.width,
      height: image.height
    }))

    this.tracklist = release.tracklist.map(track => ({
      duration: track.duration,
      position: track.position,
      title: track.title
    }))

    this.year = release.year
    this.genres = release.genres.map(genre => ({
      name: Translator(genre),
      slug: Slugify(genre)
    }))

    this.formats = release.formats.map(format => ({
      name: Translator([format.name].concat(format.descriptions).join(' ')),
      slug: Slugify(format.name)
    }))

    this.quantity = release.format_quantity

    this.country = Translator(release.country)

    // console.log(release) // eslint-disable-line
    // this.customFields = (release.notes || []).reduce((total, note) => {
    //   const key = Slugify(fields.fields.find(field => field.id === note.field_id).name)
    //   total[key] = note.value
    //   return total
    // }, {})
  }
}
export default DiscFromDetailAdapter
