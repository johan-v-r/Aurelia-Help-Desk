import {bindable, noView} from 'aurelia-framework';

@noView()
export class ChartData {
  @bindable data = [];
  @bindable label = '';
  @bindable fillColor = 'rgba(220,220,220,0.2)';
  @bindable strokeColor = 'rgba(220,220,220,1)';
  
  @bindable pointStrokeColor = "#fff";
  @bindable pointHighlightFill = "#fff";
  @bindable pointHighlightStroke = "rgba(220,220,220,1)";
  
  @bindable highlightFill = 'rgba(220,220,220,1)';
  @bindable highlightStroke = 'rgba(220,220,220,1)';
}
