import Chart from 'chartjs';

Chart.defaults.global.responsive = true;

export function configure(config) {
  config.globalResources([
    './value-converters/activity-type-to-route',
    './value-converters/date',
    './elements/rich-text-editor',
    './elements/data-grid',
    './elements/chart-data',
    './elements/line-chart',
    './elements/bar-chart'
  ]);
}
