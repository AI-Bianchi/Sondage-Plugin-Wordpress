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
  propositiion1: {
    votes: '10'
  }
, propositiion2: {
    votes: '20' 
  }
, propositiion3: {
    votes: '30' 
  }
}

var colors = {
  propositiion1:   '#ff0066', 
  propositiion2: '#05bba6', 
  propositiion3: '#999999'
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

proposition('Faire du saut en parachute', 0, colors.propositiion1)
dessine('propositiion1', 'votes', 40)


proposition('Voyager sur la Lune', 80, colors.propositiion2)
dessine('propositiion2', 'votes', 120)

proposition('Perdre du poids', 160, colors.propositiion3)
dessine('propositiion3', 'votes', 200)
