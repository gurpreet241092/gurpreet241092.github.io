app.controller('strategyCtrl', function($scope, $http) {
  var LIMIT = 15;
  var offset = 0;
  $scope.strategyData = [];

  // Get the Object with key=ticker
  $scope.getObject = function(o){
    var n = Object.keys(o)[0],
        obj = o[n];
    return obj;
  }

  // Returns the proper formatted HTML to display Labels.
  $scope.getLabelTextHTML = function(labels){
    var labelText = "",assetLabel = [], benchmarkLabel= [];

    for(i=0,len=labels.length; i<len;i++){
      label = labels[i];
      if(!(label.keyword.indexOf("Asset") == 0 || label.keyword.indexOf("Benchmark") == 0)){
        labelText += "<span class='labelItem' title='"+label.description+"'>"+label.keyword+"</span>, ";
      }else if(label.keyword.indexOf("Asset") == 0){
        assetLabel.push(label);
      }else if(label.keyword.indexOf("Benchmark") == 0){
        benchmarkLabel.push(label);
      }
    }

    if(len = assetLabel.length ){
      assetLabelText = "<span class='otherLabel'>Assets (</span>";
      for(i=0; i<len;i++){
        label = assetLabel[i];
        labelKeyword = label.keyword.split(":")[1].trim();
        assetLabelText += "<span class='labelItem' title='"+label.description+"'>"+labelKeyword+"</span>, ";
      }
      assetLabelText  = assetLabelText.substring(0,assetLabelText.length-2);
      assetLabelText += "<span class='otherLabelEnd'>)</span>, ";
      labelText += assetLabelText;
    }
    if(len = benchmarkLabel.length ){
      benchmarkLabelText = "<span class='otherLabel'>Benchmark (</span>";
      for(i=0; i<len;i++){
        label = benchmarkLabel[i];
        labelKeyword = label.keyword.split(":")[1].trim();
        benchmarkLabelText += "<span class='labelItem' title='"+label.description+"'>"+labelKeyword+"</span>, ";
      }
      benchmarkLabelText  = benchmarkLabelText.substring(0,benchmarkLabelText.length-2);
      benchmarkLabelText += "<span class='otherLabelEnd'>)</span>, ";
      labelText += benchmarkLabelText;
    }
    labelText = labelText.substring(0,labelText.length-2);
    return labelText;
  };

  // Function to be called by infiniteScroll Library.
  // Loads next set of data.
  $scope.nextPage = function(){
    var fetchedStrategyData = getStrategyData(offset, LIMIT);
    if(len = fetchedStrategyData.length){
      offset += len;
      $scope.strategyData = $scope.strategyData.concat(fetchedStrategyData);
    }
  }

});