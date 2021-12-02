import { mapProp } from './mapProp'

export function getAttrBoolean (obj, attr, flip) {
  if (obj) {
    if (obj.getAttribute) {
      let out = !!obj.hasAttribute(attr)
      if (flip) out = !out
      return out
    } else if (obj.el) {
      return getAttrBoolean(obj.el, attr, flip)
    } else if (obj && typeof obj === 'object') {
      return mapProp(obj, (o) => getAttrBoolean(o, attr, flip))
    }
  }
}