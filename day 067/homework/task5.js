function Light() {
    this.state = "off";

    this.toggle = function() {
        this.state = this.state === "off" ? "on" : "off";
    };
}

const light = new Light();
light.toggle();
console.log(light.state); // will turn it on
light.toggle();
console.log(light.state); // will turn it off
