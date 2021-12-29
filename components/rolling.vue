<template>
  <canvas id="rollingunrolling-canvas" ref="canvas" />
</template>

<script>
// ===================================================================== Imports
import Paper from 'paper'

// =================================================================== Functions
const initializePaperJS = (instance, next) => {
  instance.scope = new Paper.PaperScope()
  instance.scope.setup(instance.$refs.canvas)
  return next()
}

const generatePath = (instance, next) => {
  const path = new instance.scope.Path(instance.path)
  path.bounds.x = -4
  path.bounds.y = 40

  const characters = 'rollingunrollingunrollingunrollingunrollingunrollingunrollingunrolling'.split('')
  const spacing = { r: 10, o: 9, l: 4.5, i: 8, n: 12, g: 13, u: 13 }
  const widths = characters.map(char => spacing[char] * 0.9)
  const letters = []
  const offsets = []
  const len = characters.length
  const totalOffsets = widths.reduce((a, b) => a + b)

  for (var i = 0; i < len; i++){
    const reducer = (previous, current) => previous + current
    offsets[i] = widths.slice(0, i + 1).reduce(reducer) - spacing[characters[i]]
    letters[i] = new instance.scope.PointText({
      point: path.getPointAt(Math.max(offsets[i], 0)),
      content: characters[i],
      applyMatrix: false,
      style: {
        fontFamily: 'Prompt',
        fontWeight: 700,
        fontSize: 20,
        fillColor: instance.textColor,
        justification: 'center'
      }
    });
    letters[i].pivot = letters[i].globalToLocal(letters[i].bounds.bottomCenter);
    letters[i].rotation = path.getTangentAt(Math.max(offsets[i], 0)).angle;
  }

  return next(letters, offsets, path, totalOffsets)
}

const animate = (instance, letters, offsets, path, totalOffsets) => {
  instance.animate = true
  const len = letters.length
  const pathLength = path.length
  const scalar = pathLength * 0.66
  instance.scope.activate()
  instance.scope.view.onFrame = (e) => {
    if (instance.animate) {
      const x = (instance.counter * 3) / scalar
      // let y = 1 - Math.pow(1 - x, 3);
      let y = x
      if (e.count % 2 === 0) {
        for (let i = 0; i < len; i++) {
          const offset = Math.max(0, (y * scalar + offsets[i]) % pathLength)
          letters[i].position = path.getPointAt(offset)
          letters[i].rotation = path.getTangentAt(offset).angle;
        }

        instance.counter = instance.counter + 1
      }
    }
    // if (instance.counter > 272) {
    //   instance.animate = false
    // }
  }
  instance.scope.view.draw()
}

// ====================================================================== Export
export default {
  name: 'Rolling',

  props: {
    textColor: {
      type: String,
      required: false,
      default: '#56576C'
    }
  },

  data () {
    return {
      scope: false,
      counter: 0,
      animate: false,
      path: 'M-12.308,37.265c55.857.151,92.377,10.68,115.792,26.067,14.212,9.34,31.794,36.185,31.007,59.593-.843,20.8-10.129,31.8-26.15,37.816-25.823,9.5-44-4.358-50.767-16.259-9.223-18.739,3.212-45.588,17.212-57.192,29.534-24.48,85.16-35.73,109.915,16.72,11.14,23.6,6.427,92.03-31.054,117.938-45.463,31.425-127.2,18.219-131.491,17.355'
    }
  },

  mounted () {
    initializePaperJS(this, () => {
      generatePath(this, (letters, offsets, path, totalOffsets) => {
        animate(this, letters, offsets, path, totalOffsets)
      })
    })
  }
}

</script>

<style lang="scss" scoped>

#rollingunrolling-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 17rem;
  height: 20rem;
}

</style>
