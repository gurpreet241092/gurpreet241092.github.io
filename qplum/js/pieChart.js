var app = app || {};

app.pieChart = {

  init: function(selector, heightWidthObj, radiusObj, data, colors){
    this.setHeightWidth(heightWidthObj);
    this.setSelector(selector);
    this.setCanvas();
    this.setThreeRadius(radiusObj);
    this.setData(data);
    this.setColor(colors);
    this.drawPieChart();
  },

  setData: function(data){
    if(!data){
      // Default Value
      data = [{
        "label": "one",
        "value": 40
      }, {
        "label": "two",
        "value": 30
      }, {
        "label": "three",
        "value": 30
      }];
    }
    this.data = data;
  },

  setSelector:function(selector){
    selector = selector || ".itemGraph:not([drawn=yes])";
    if(selector.indexOf(":not([drawn=yes])") == -1){
      selector += ":not([drawn=yes])";
    }
    this.selector = selector;
  },

  setCanvas:function(){
    this.canvas = d3.selectAll(this.selector).attr("drawn", "yes")
      .append('svg')
      .attr({
        'width': this.w,
        'height': this.h
      });
  },

  setColor: function(colors){
    colors = colors || [];
    if(!colors.length){
      // Default Value
      colors = ['#F78181', '#81F7D8'];
    }
    this.colors = colors;
    this.colorscale = d3.scale.linear().domain([0, this.data.length]).range(this.colors);
  },

  setHeightWidth:function(heightWidthObj ){
    heightWidthObj = heightWidthObj || {};
    this.h = heightWidthObj.height || 160;
    this.w = heightWidthObj.width || 160;
  },

  setThreeRadius: function(radiusObj){
    radiusObj = radiusObj || {};
    this.innerR = radiusObj.innerR || 30;
    this.outerR = radiusObj.outerR || 62;
    this.outerR2 = radiusObj.outerR2|| 70;

    this.setArcs();
  },

  setArcs:function(){
    this.arc = d3.svg.arc()
      .innerRadius(this.innerR)
      .outerRadius(this.outerR);

    this.arcOver = d3.svg.arc()
      .innerRadius(this.innerR)
      .outerRadius(this.outerR2);
  },

  drawPieChart: function(){
    var colorscale = this.colorscale;
    var arc = this.arc;
    var arcOver = this.arcOver;
    var innerR = this.innerR;
    var outerR = this.outerR;

    this.pie = d3.layout.pie()
      .value(function(d) {
        return d.value;
      });


    this.renderarcs = this.canvas.append('g')
      .attr('transform', 'translate('+this.w/2+','+this.h/2+')')
      .selectAll('.arc')
      .data(this.pie(this.data))
      .enter()
      .append('g')
      .attr('class', "arc");

    this.renderarcs.append('path')
      .attr('d', this.arc)
      .attr('fill', function(d, i) {
        return colorscale(i);
      })
      .on("mouseenter", function(d) {
        d3.select(this).transition()
          .duration(200)
          .attr("d", arcOver);
      })
      .on("mouseleave", function(d) {
        d3.select(this).transition()
          .duration(200)
          .attr("d", arc);
      });

    this.renderarcs.append('svg:text')
      .attr('transform', function(d) {
          d.innerRadius = innerR;
          d.outerRadius = outerR;
          return "translate(" + arc.centroid(d)+ ")";
      })
      .attr("text-anchor", "middle")
      .style("font", "bold 12px Arial")
      .text(function(d) {
        return d.value + "%";
      });
  }


}