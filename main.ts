modules.humidity1.onHumidityChangedBy(1, function () {
    modules.vibrationMotor1.vibrate(5000, 100)
})
modules.temperature1.onTemperatureChangedBy(0, function () {
	
})
SCD40.start_continuous_measurement()
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(SCD40.get_co2())
})
