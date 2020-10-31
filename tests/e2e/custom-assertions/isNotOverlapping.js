// exports.assertion = function isTrue(condition) {
//   this.message = `Testing if passed condition <${condition}> is true`
//   this.expected = true
//   this.pass = val => val === true
//   function evaluator(condition) {
//     return condition
//   }
//   this.command = cb => this.api.execute(evaluator, [condition], cb)
// }

exports.assertion = function isNotOverlapping(selector1, selector2) {
  this.message = `Elements selected by <${selector1}> and <${selector2}> should not overlap`
  this.expected = false
  this.pass = val => val === this.expected
  function evaluator(_selector1, _selector2) {
    let rect1 = document.querySelector(_selector1).getBoundingClientRect()
    let rect2 = document.querySelector(_selector2).getBoundingClientRect()
    let overlap = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    )
    return overlap
  }
  this.command = cb => this.api.execute(evaluator, [selector1, selector2], cb)
}
