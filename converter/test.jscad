source_file comment comment comment comment assignment identifier number comment assignment identifier number comment assignment identifier number comment assignment identifier number assignment identifier number comment comment assignment identifier boolean assignment identifier boolean comment assignment identifier list number number number number number number number number number assignment identifier boolean comment assignment identifier list number unary_expression number unary_expression number unary_expression number number number number assignment identifier boolean comment assignment identifier list list list number number list number number list number comment assignment identifier boolean assignment identifier boolean assignment identifier boolean assignment identifier boolean comment comment assignment identifier binary_expression identifier function_call arguments number comment assignment identifier binary_expression identifier binary_expression identifier number comment assignment identifier binary_expression identifier function_call arguments number comment assignment identifier binary_expression number identifier comment assignment identifier binary_expression identifier number comment assignment identifier ternary_expression identifier function_call arguments binary_expression binary_expression binary_expression identifier parenthesized_expression binary_expression identifier identifier parenthesized_expression ternary_expression identifier number number parenthesized_expression ternary_expression identifier number number function_call arguments identifier assignment identifier ternary_expression identifier function_call arguments binary_expression binary_expression binary_expression identifier identifier parenthesized_expression ternary_expression identifier number number parenthesized_expression ternary_expression identifier number number function_call arguments identifier assignment identifier ternary_expression identifier function_call arguments binary_expression binary_expression binary_expression binary_expression identifier identifier number parenthesized_expression ternary_expression identifier number number parenthesized_expression ternary_expression identifier number number parenthesized_expression binary_expression function_call arguments identifier number assignment identifier binary_expression binary_expression identifier parenthesized_expression binary_expression identifier identifier identifier assignment identifier binary_expression identifier function_call arguments binary_expression identifier number identifier transform_chain module_call arguments list ternary_expression identifier number identifier ternary_expression identifier number unary_expression binary_expression identifier number number transform_chain module_call arguments identifier ternary_expression identifier identifier list ternary_expression identifier identifier list identifier identifier identifier identifier module_declaration union_block for_block union_block for_block union_block assignment identifier binary_expression binary_expression identifier function_call arguments identifier binary_expression function_call arguments function_call arguments binary_expression identifier number index_expression identifier identifier number if_block parenthesized_expression unary_expression identifier union_block assignment identifier ternary_expression binary_expression identifier binary_expression function_call arguments identifier number number index_expression identifier identifier assignment identifier binary_expression parenthesized_expression binary_expression identifier parenthesized_expression ternary_expression identifier number number number assignment identifier binary_expression parenthesized_expression binary_expression identifier identifier identifier assignment identifier unary_expression binary_expression parenthesized_expression identifier parenthesized_expression binary_expression binary_expression identifier identifier binary_expression identifier number if_block parenthesized_expression binary_expression binary_expression identifier identifier binary_expression identifier parenthesized_expression ternary_expression binary_expression identifier number identifier identifier union_block assignment identifier binary_expression identifier binary_expression identifier number assignment identifier binary_expression binary_expression identifier binary_expression identifier number binary_expression binary_expression identifier number parenthesized_expression ternary_expression identifier number number assignment identifier binary_expression identifier binary_expression identifier binary_expression identifier number assignment identifier binary_expression binary_expression binary_expression identifier binary_expression binary_expression identifier number parenthesized_expression ternary_expression binary_expression identifier number identifier identifier binary_expression binary_expression unary_expression identifier identifier binary_expression identifier number binary_expression binary_expression unary_expression identifier binary_expression identifier number identifier transform_chain module_call arguments list identifier identifier number transform_chain module_call arguments identifier identifier identifier identifier identifier identifier identifier identifier range number parenthesized_expression ternary_expression identifier parenthesized_expression binary_expression identifier number parenthesized_expression binary_expression index_expression identifier identifier number range number ternary_expression identifier binary_expression identifier number parenthesized_expression binary_expression function_call arguments identifier number module_declaration union_block transform_chain module_call arguments union_block transform_chain module_call arguments union_block transform_chain module_call arguments identifier identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list number binary_expression identifier number number transform_chain module_call arguments identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list binary_expression identifier number number number transform_chain module_call arguments list number number unary_expression number transform_chain module_call arguments identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list number unary_expression binary_expression identifier number number transform_chain module_call arguments list number number number transform_chain module_call arguments identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list unary_expression binary_expression identifier number number number transform_chain module_call arguments list number number number transform_chain module_call arguments identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list unary_expression binary_expression identifier number unary_expression identifier number transform_chain module_call arguments list binary_expression identifier number binary_expression number identifier identifier binary_expression identifier number binary_expression number identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list unary_expression binary_expression identifier number number number transform_chain module_call arguments list identifier identifier identifier identifier identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list number unary_expression identifier number transform_chain module_call arguments list binary_expression identifier number binary_expression number identifier identifier binary_expression identifier number binary_expression number identifier identifier if_block parenthesized_expression identifier transform_chain module_call arguments list unary_expression binary_expression identifier number unary_expression identifier number transform_chain module_call arguments list identifier identifier identifier identifier identifier identifier module_declaration union_block for_block union_block transform_chain module_call arguments list number number binary_expression binary_expression identifier number number transform_chain module_call arguments list binary_expression unary_expression binary_expression identifier number identifier binary_expression identifier number number transform_chain module_call arguments identifier identifier identifier range number number module_declaration union_block assignment identifier identifier assignment identifier number assignment identifier number assignment identifier identifier assignment identifier binary_expression identifier number comment assignment identifier number comment assignment identifier number comment transform_chain module_call arguments union_block transform_chain module_call arguments list number number number transform_chain module_call arguments identifier transform_chain module_call arguments list list number number list number identifier list identifier identifier list identifier binary_expression identifier identifier list identifier identifier list identifier identifier list binary_expression identifier identifier number identifier transform_chain module_call arguments list list number number list number identifier list identifier identifier list identifier binary_expression identifier identifier list identifier identifier list identifier identifier list binary_expression identifier identifier number comment transform_chain module_call arguments list number number unary_expression number transform_chain module_call arguments list binary_expression number identifier binary_expression number identifier identifier binary_expression number identifier binary_expression number identifier identifier transform_chain module_call arguments list number number number transform_chain module_call arguments list number identifier number transform_chain module_call arguments list number number unary_expression number transform_chain module_call arguments list binary_expression number identifier binary_expression number identifier identifier binary_expression number identifier binary_expression number identifier identifier list number number number transform_chain module_call arguments list number identifier number transform_chain module_call arguments list number number unary_expression number transform_chain module_call arguments list binary_expression number identifier binary_expression number identifier identifier binary_expression number identifier binary_expression number identifier identifier JSCAD code ---------------:
const { primitives, booleans, transforms, extrusions } = jscad;
    const { cube, sphere, cylinder, polygon, cuboid } = primitives;
    const { union, subtract, intersection } = booleans;
    const { translate, rotate, scale, mirror } = transforms;

    const { extrudeLinear } = extrusions
    function inlineIf(condition, ifTrue, ifFalse) {
let jscadObjects = [];
if (condition) return ifTrue(jscadObjects)
else return ifFalse(jscadObjects)
}
function inlineFor(init, test, increment, body) {
let jscadObjects = []
for (let i = init; test(i); i = increment(i)) {
  jscadObjects.push(body(i))
}
return jscadObjects
}
function rotateDegrees(...args) {
return rotate(args[0].map(i => i * Math.PI / 180), ...args.slice(1));
}
//Openscad accepts clockwise polygons for extrude. Ensure polygon points are counter clockwise
function ensureCounterclockwise(...args) {
let points = args[0].points;
let area = 0;
for (let i = 0; i < points.length; i++) {
  let j = (i + 1) % points.length;
  area += points[i][0] * points[j][1];
  area -= points[j][0] * points[i][1];
}
if (area < 0) {
  points.reverse();
}
return polygon(...args);
}

    const jscadObjects = [];




let depth = 8

let hole_width = 20

let wall_thickness = 1.8

let max_grid_width = 211
let max_grid_height = 248


let fill = true
let flip_staggering = true

let columns = [3, 5, 8, 6, 4, 3, 4, 5, 6]
let include_offsets = false

let column_offsets = [0, -2, -3, -1, 0, 2, 4]
let include_gaps = false

let column_gaps = [[], [3, 4], [4, 5], [2]]

let edge_left = false
let edge_top = false
let edge_right = false
let edge_bottom = false


let hex_inner_r = hole_width / Math.sqrt(3)

let hex_h = hole_width + wall_thickness * 2

let hex_s = hex_h / Math.sqrt(3)

let hex_d = 2 * hex_s

let hex_t = hex_s / 2

let max_grid_hexagons_x = fill ? Math.floor(max_grid_width / (hex_d - hex_t) + (edge_left ? 0.5 : 0) + (edge_right ? 0.5 : 0)) : columns.length
let max_grid_hexagons_y = fill ? Math.floor(max_grid_height / hex_h + (edge_top ? 0.5 : 0) + (edge_bottom ? 0.5 : 0)) : Math.max(columns)
let max_grid_hexagons_y_lo = fill ? Math.floor(max_grid_height / hex_h - 0.5 + (edge_top ? 0.5 : 0) + (edge_bottom ? 0.5 : 0)) : (Math.max(columns) - 0.5)
let total_width = max_grid_hexagons_x * (hex_d - hex_t) + hex_t
let total_height = hex_h * Math.max(max_grid_hexagons_y - 0.5, max_grid_hexagons_y_lo)
jscadObjects.push(  
  translate([edge_left ? 0 : hex_s, edge_top ? 0 : -hex_h / 2, 0], 
  ...grid(columns, include_offsets ? column_offsets : [], include_gaps ? column_gaps : [], depth, hole_width, wall_thickness, fill))
)

function grid(cols, offsets, gaps, height, hole_width, wall_width, fill) {

        const jscadObjects = [];

          for (let hcol of Array.from({length: fill ? max_grid_hexagons_x - 1 : (cols.length - 1) - 0 + 1 }, (_, i) => 0 + i )) {
    for (let hrow of Array.from({length: (fill ? (max_grid_hexagons_y - 1) : (cols[hcol] - 1)) - 0 + 1 }, (_, i) => 0 + i )) {
      let skip = hcol < gaps.length && search(hrow + 1, gaps[hcol]).length > 0
      if ((!skip)) {
        let offset_value = hcol > offsets.length - 1 ? 0 : offsets[hcol]
        let lo = (hcol + (flip_staggering ? 1 : 0)) % 2
        let x = (hex_d - hex_t) * hcol
        let y = -(hex_h) * (hrow + offset_value + lo / 2)
        if ((hcol < max_grid_hexagons_x && hrow < (lo == 0 ? max_grid_hexagons_y : max_grid_hexagons_y_lo))) {
          let left = edge_left && hcol == 0
          let top = edge_top && hrow == 0 && hcol % 2 == (flip_staggering ? 1 : 0)
          let right = edge_right && hcol == max_grid_hexagons_x - 1
          let bottom = edge_bottom && hrow + 1 == (lo == 0 ? max_grid_hexagons_y : max_grid_hexagons_y_lo) && -y + hex_h > total_height + 0.001 && -y + hex_h / 2 <= total_height
          jscadObjects.push(  
            translate([x, y, 0], 
            ...halfhex(height, hex_s, wall_width, hole_width, left, top, right, bottom)),
          )
        }
        
      }
      
    }
    
  }
  

        return jscadObjects;

      }


function halfhex(height, radius, wall_thickness, hole_width, left, top, right, bottom) {

        const jscadObjects = [];

          jscadObjects.push(  
    subtract(  
      union(
      ...hex(height, radius, wall_thickness, hole_width),
      ...inlineIf((left), (jscadObjects) => jscadObjects.push(  
        translate([0, hex_h / 2, 0], 
        ...wall(depth, wall_thickness, hex_h))
      ), (jscadObjects) => {return []}),
      ...inlineIf((top), (jscadObjects) => jscadObjects.push(  
        translate([hex_d / 2, 0, 0],   
          rotateDegrees([0, 0, -90], 
          ...wall(depth, wall_thickness, hex_d)))
      ), (jscadObjects) => {return []}),
      ...inlineIf((right), (jscadObjects) => jscadObjects.push(  
        translate([0, -hex_h / 2, 0],   
          rotateDegrees([0, 0, 180], 
          ...wall(depth, wall_thickness, hex_h)))
      ), (jscadObjects) => {return []}),
      ...inlineIf((bottom), (jscadObjects) => jscadObjects.push(  
        translate([-hex_d / 2, 0, 0],   
          rotateDegrees([0, 0, 90], 
          ...wall(depth, wall_thickness, hex_d)))
      ), (jscadObjects) => {return []}),),
    ...inlineIf((left), (jscadObjects) => jscadObjects.push(  
      translate([-hex_d / 2, -hex_h, 0], 
      cuboid({size: [hex_d / 2, 2 * hex_h, depth], center: [(hex_d / 2)/2,(2 * hex_h)/2,(depth)/2]}))
    ), (jscadObjects) => {return []}),
    ...inlineIf((top), (jscadObjects) => jscadObjects.push(  
      translate([-hex_d / 2, 0, 0], 
      cuboid({size: [hex_d, hex_h, depth], center: [(hex_d)/2,(hex_h)/2,(depth)/2]}))
    ), (jscadObjects) => {return []}),
    ...inlineIf((right), (jscadObjects) => jscadObjects.push(  
      translate([0, -hex_h, 0], 
      cuboid({size: [hex_d / 2, 2 * hex_h, depth], center: [(hex_d / 2)/2,(2 * hex_h)/2,(depth)/2]}))
    ), (jscadObjects) => {return []}),
    ...inlineIf((bottom), (jscadObjects) => jscadObjects.push(  
      translate([-hex_d / 2, -hex_h, 0], 
      cuboid({size: [hex_d, hex_h, depth], center: [(hex_d)/2,(hex_h)/2,(depth)/2]}))
    ), (jscadObjects) => {return []}),),
  )

        return jscadObjects;

      }


function hex(height, radius, wall_thickness, hole_width) {

        const jscadObjects = [];

          for (let i of Array.from({length: 5 - 0 + 1 }, (_, i) => 0 + i )) {
    jscadObjects.push(  
      rotateDegrees([0, 0, i * 60 + 30],   
      translate([-hole_width / 2 - wall_thickness, radius / 2, 0], 
      ...wall(height, wall_thickness, radius))),
    )
  }
  

        return jscadObjects;

      }


function wall(height, wall_thickness, length) {

        const jscadObjects = [];

          let hmax = height
  let hmin = 5.1
  let hd = 2
  let tmax = wall_thickness
  let tmin = wall_thickness - 1
  
  let ft = 0.4
  
  let fh = 0.5
  
  jscadObjects.push(  
    subtract(  
      rotateDegrees([90, 0, 0],   
      extrudeLinear( {height: length},
      
      polygon(ensureCounterclockwise({points: [[0, 0], [0, hmax], [tmin, hmax], [tmin, hmax - hd], [tmax, hmin], [tmax, fh], [tmax - ft, 0]]}))          
      )),
      
      rotateDegrees([0, 0, -30], 
      cuboid({size: [4 * tmax, 2 * tmax, hmax], center: [(4 * tmax)/2,(2 * tmax)/2,(hmax)/2]})),  
      mirror( {normal: [0, 1, 0]},
                
        translate([0, length, 0],   
          rotateDegrees([0, 0, -30], 
          cuboid({size: [4 * tmax, 2 * tmax, hmax], center: [(4 * tmax)/2,(2 * tmax)/2,(hmax)/2]})))          
                ),),
  )

        return jscadObjects;

      }

return jscadObjects;

