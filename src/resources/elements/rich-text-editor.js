import {bindable, bindingMode, inject, noView, TaskQueue} from 'aurelia-framework';

CKEDITOR.config.skin = 'bootstrapck';

@inject(Element, TaskQueue)
@noView()
export class RichTextEditor {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.guard = false;
  }
  
  created(owningView) {
    let original = owningView.removeNodes;
    let that = this;
    
    owningView.removeNodes = () => {
      this.editor.destroy();
      original.call(owningView);
    };
  }

  bind() {
    this.editor = CKEDITOR.appendTo(this.element, { removePlugins: 'resize, elementspath' }, this.value);
    
    this.editor.on('change', () => {
      let newValue = this.editor.getData();
      
      if(this.value === newValue) {
        return;
      }
      
      this.guard = true;
      this.value = newValue;
      this.taskQueue.queueMicroTask(() => this.guard = false);
    });
  }

  valueChanged(newValue, oldValue) {
    if (this.guard || !this.editor) {
      return;
    }
    
    this.editor.setData(newValue);
  }
}