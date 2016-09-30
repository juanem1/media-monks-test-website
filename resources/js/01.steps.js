class Steps {

  constructor() {
    this.step = 0;
  }

  // Return the current step
  getCurrent() {
    return this.step;
  }

  // Add one step and return the value
  nextStep() {
    if (this.step < 9) {
      this.step = this.step + 1;
    }

    return this.step;
  }

  // Move back one step and return the value
  prevStep() {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
    
    return this.step;
  }

  // Return the current step as CSS class
  getClass(step) {
    return 'step-' + this.step;
  }

}
