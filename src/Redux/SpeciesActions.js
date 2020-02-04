const GBIF_API = `http://api.gbif.org/v1/`
const SPECIES_SEARCH = (speciesSearch) => `species/suggest?&q=${speciesSearch}`
const SPECIES_MAP = (taxon, zoom, lat, long) => ` https://api.gbif.org/v2/map/occurrence/density/${zoom}/${lat}/${long}@2x.png?srs=EPSG:3857${taxon}?style=fire.point`

// 6
// 40.700743
// 73.987595

export default {
  `Ok`
}
