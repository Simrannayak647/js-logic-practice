// Take a temperature value and print “Cold”, “Warm”, or “Hot” using range conditions.

let temperature = 10;

if (temperature < 0) {
    console.log("The temperature is Freezing Cold", temperature);
} else if (temperature >= 0 && temperature < 20) {
    console.log("The temperature is Cold or Cool", temperature);
} else {
    console.log("The temperature is Warm or Hot", temperature);
}
