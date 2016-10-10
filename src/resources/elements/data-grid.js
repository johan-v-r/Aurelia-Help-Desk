import {processContent, bindable, inject} from 'aurelia-framework';

@inject(Element)
@processContent(parseColumns)
export class DataGrid { 
  constructor(element) {
    this.element = element;
    this.onResize = () => this.size();
  }
  
  bind() {
    window.addEventListener('resize', this.onResize);
  }

  attached() {
    this.headerCells = this.element.getElementsByClassName('header-row')[0].children;
    this.sizingCells = this.element.getElementsByClassName('sizing-row')[0].children;
    this.size();
  }
  
  unbind() {
    window.removeEventListener('resize', this.onResize);
  }

  size() {
    for(let i = 0, ii = this.headerCells.length - 1; i < ii; ++i) {
      this.sizingCells[i].style.width = this.headerCells[i].offsetWidth + 'px';
    }
  }
}

function parseColumns(compiler, resources, node, instruction) {
  let columns = node.querySelectorAll('grid-column');
  let headerCells = '';
  let dataCells = '';
  let sizingCells = '';
  let itemsExpression = node.getAttribute('items.bind');

  node.removeAttribute('items.bind');

  for (let i = 0, ii = columns.length; i < ii; ++i) {
    let column = columns[i];
    let cellTemplate;

    headerCells += '<th>' + column.getAttribute('heading') + '</th>';
    sizingCells +='<td></td>'
    cellTemplate = column.innerHTML.trim();

    if (cellTemplate) {
      dataCells += '<td>' + cellTemplate + '</td>'
    } else {
      dataCells += '<td>${item.' + column.getAttribute('property') + '}</td>';
    }
  }

  node.innerHTML = `
  <table class="grid-header table">
    <thead>
      <tr class="header-row">${headerCells}</tr>
    </thead>
  </table>
  <div class="grid-container">
    <table class="grid-rows table table-striped">
      <tbody>
        <tr class="sizing-row">${sizingCells}</tr>
        <tr repeat.for="item of ${itemsExpression}" class="item-row">${dataCells}</tr>
      </tbody>
    </table>
  </div>
  `;

  return true;
}
