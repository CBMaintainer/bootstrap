import Event from './dom/event'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (() => {

  const transition = Event.getBrowserTransitionEnd()

  const MAX_UID = 1000000

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }


  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  const Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || ''
      }

      try {
        const elements = document.querySelectorAll(selector)
        return elements.length > 0 ? selector : null
      } catch (error) {
        return null
      }
    },

    reflow(element) {
      return element.offsetHeight
    },

    triggerTransitionEnd(element) {
      Event.trigger(element, Util.TRANSITION_END)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    emulateTransitionEnd(element, duration) {
      setTimeout(() => {
        Util.triggerTransitionEnd(element)
      }, duration)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (const property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          const expectedTypes = configTypes[property]
          const value         = config[property]
          const valueType     = value && isElement(value) ?
                                'element' : toType(value)

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  return Util

})()

export default Util
