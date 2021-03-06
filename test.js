import colourPalette from './'
console.log('测试通过:', colourPalette('#108ee9', 1) == '#ecf6fd')

console.log(colourPalette)
// $blue-6     = #108ee9;
// $purple-6   = #7265e6;
// $cyan-6     = #00a2ae;
// $green-6    = #00a854;
// $pink-6     = #f5317f;
// $red-6      = #f04134;
// $orange-6   = #f56a00;
// $yellow-6   = #ffbf00;

/* eslint key-spacing: 0 */
const colors = {
  blue   : '#108ee9',
  purple : '#7265e6',
  cyan   : '#00a2ae',
  green  : '#00a854',
  pink   : '#f5317f',
  red    : '#f04134',
  orange : '#f56a00',
  yellow : '#ffbf00',
}

var colorResult = {}
Object.keys(colors).forEach((key) => {
  for (let i = 1; i < 11; i++) {
    colorResult[`$${key}-${i}`] = colourPalette(colors[key], i)
  }
})
console.log(colorResult)
