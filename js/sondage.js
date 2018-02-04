/*
Plugin Name: A.I Sondage
Plugin URI: http://aibianchi.com
Description: Un simple plugin de sondage
Version: 0.1
Author: Jefferson Bianchi
Author URI: https://www.facebook.com/AI-Bianchi-829446067257329/
License: GPL2
*/



// valeur max
var max = 100

var data = {
  proposition1: {
    votes: '10'
  }
, proposition2: {
    votes: '20' 
  }
, proposition3: {
    votes: '30' 
  }
}

var colors = {
  proposition1:   '#ff0066', 
  proposition2: '#05bba6', 
  proposition3: '#999999'
}

// construction du  graph
var draw = SVG('drawing').size('100%', 240)


function dessine(proposition, version, y) {
  var width = new SVG.Number(data[proposition][version]).divide(max).to('%')
  draw.rect(width, 15).y(y).fill(colors[proposition])
  draw.text(function(add) {
  		add.tspan(data[proposition][version])
      add.tspan(version).dx(5).fill('#999').attr('font-size', 12)
    })
  	.move(width.plus('1%'), y - 1)
  	.font({ family: 'Inconsolata', size: 14 })
    .fill('#666')
}

function proposition(name, y, color) {
  draw.text(name)
  	.move(0, y + 1)
  	.font({ family: 'Inconsolata', size: 16 })
    .fill(color)
}

proposition('Faire du saut en parachute', 0, colors.proposition1)
dessine('proposition1', 'votes', 40)


proposition('Voyager sur la Lune', 80, colors.proposition2)
dessine('proposition2', 'votes', 120)

proposition('Perdre du poids', 160, colors.proposition3)
dessine('proposition3', 'votes', 200)
