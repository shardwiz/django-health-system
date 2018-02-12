<<<<<<< HEAD
describe 'Morris.Grid#yLabelFormat', ->

  it 'should use custom formatter for y labels', ->
    formatter = (label) ->
      flabel = parseFloat(label) / 1000
      "#{flabel.toFixed(1)}k"
    line = Morris.Line
      element: 'graph'
      data: [{x: 1, y: 1500}, {x: 2, y: 2500}]
      xkey: 'x'
      ykeys: ['y']
      labels: ['dontcare']
      preUnits: "$"
      yLabelFormat: formatter
    line.yLabelFormat(1500).should.equal "1.5k"
=======
describe 'Morris.Grid#yLabelFormat', ->

  it 'should use custom formatter for y labels', ->
    formatter = (label) ->
      flabel = parseFloat(label) / 1000
      "#{flabel.toFixed(1)}k"
    line = Morris.Line
      element: 'graph'
      data: [{x: 1, y: 1500}, {x: 2, y: 2500}]
      xkey: 'x'
      ykeys: ['y']
      labels: ['dontcare']
      preUnits: "$"
      yLabelFormat: formatter
    line.yLabelFormat(1500).should.equal "1.5k"
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
