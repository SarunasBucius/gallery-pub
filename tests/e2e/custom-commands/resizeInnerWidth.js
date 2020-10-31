module.exports.command = function(width, height) {
  this.resizeWindow(width, height)
  this.execute(
    function() {
      return window.innerWidth
    },
    [],
    res => {
      this.resizeWindow(width + (width - res.value), height)
    }
  )

  return this
}
