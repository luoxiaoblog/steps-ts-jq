  
  
  interface IStepOptions {
    title?: string;
    description?: string;
    icon?: string;
    status?: string;
  }

  interface IStepsOptions {
    space?: string;
    direction?: string;
    active?: number;
    processStatus?: string;
    finishStatus?: string;
    alignCenter?: boolean;
  }

  class Step {
    title: string;
    description: string;
    icon: string;
    status: string;
    template: string;
    element: string;

    constructor (options: IStepOptions) {
      this.title = options.title;
      this.description = options.description
    }
  }

  class Steps extends HTMLElement {
    space: string;
    direction: string;
    active: number;
    processStatus: string;
    finishStatus: string;
    alignCenter: boolean;
    element: any;
    stepList: Step[];

    constructor (el: any, options: IStepsOptions) {
      super()
      this.space = options.space;
      this.direction = options.direction;
      this.active = options.active;
      this.processStatus = options.processStatus;
      this.finishStatus = options.finishStatus;
      this.alignCenter = options.alignCenter;
      this.element = this.createElement(el);
    }

    createElement(el: any): any {
      return {}
    }
  }

  customElements.define('steps', Steps);