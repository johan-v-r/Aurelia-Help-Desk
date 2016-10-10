import moment from 'moment';

export class DateValueConverter {
  toView(value, format = 'YYYY/MM/DD') {
    return moment(value).format(format);
  }
}