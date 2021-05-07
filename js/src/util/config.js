/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { isElement, toType } from './index'
import Manipulator from '../dom/manipulator'

class Config {
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!')
  }

  static get Default() {
    return {}
  }

  static get DefaultType() {
    return {}
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config)
    config = this._configAfterMerge(config)
    this._typeCheckConfig(config)
    return config
  }

  _configAfterMerge(config) {
    return config
  }

  _mergeConfigObj(config, element) {
    return {
      ...this.constructor.Default,
      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    }
  }

  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const property of Object.keys(configTypes)) {
      const expectedTypes = configTypes[property]
      const value = config[property]
      const valueType = isElement(value) ? 'element' : toType(value)

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
        )
      }
    }
  }
}

export default Config
