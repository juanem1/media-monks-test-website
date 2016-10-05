export class Steps {

    constructor() {
        this.step = 0;
    }

    // Return the current step
    getCurrent() {
        return this.step;
    }

    // Add one step and return the value
    getNextStep() {
        return (this.step == 9) ? this.step : this.step + 1;
    }

    // Move back one step and return the value
    getPrevStep() {
        return (this.step == 0) ? this.step : this.step - 1;
    }

    // Add step to the count
    addStep() {
        if (this.step < 9) {
            this.step = this.step + 1;
        }

        return this.step;
    }

    // Remove one step from the count
    removeStep() {
        if (this.step > 0) {
            this.step = this.step - 1;
        }

        return this.step;
    }

    // Return the current step as CSS class
    getClass(step) {
        return 'step-' + step;
    }

}
