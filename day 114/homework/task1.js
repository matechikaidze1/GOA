class celsius{
    constructor(celsius) {
        this.temperature = celsius;
    }
    set temperature(celsius){
        if (typeof celsius === 'number') {
            this.celsius = celsius
        } else {
            console.log("wrong temperature");
        }
    }
    get temperature() {
        return (this.celsius * 9 / 5) + 32
    }
} 
const temp = new celsius("efef");
console.log(temp.temperature);
