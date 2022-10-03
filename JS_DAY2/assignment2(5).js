let vehicle = {
    vehicleid: 111,
    brand: 'TATA',
    model: '2022',
    variant: 'one year',
    specifications:{
        firstGear: function(){
            console.log('vehicle is in First Gear')
            speedOfVehicle = 10;
            console.log(`speed of vehicle is ${speedOfVehicle}`)
        },
        secondGear: function(){
            console.log('vehicle is in Second Gear');
            speedOfVehicle = 30;
            console.log(`speed of vehicle is ${speedOfVehicle}`);
        },
        speedOfVehicle : 70,
        changeGear: function(){
            return(this.firstGear(),this.secondGear())
        }
    }
};
const details = (vehicle)=>{
    console.log(`vehicle id is ${vehicle.vehicleid}`)
    console.log(`vehicle brand is ${vehicle.brand}`)
    console.log(`vehicle model is ${vehicle.model}`)
    console.log(`vehicle varient is ${vehicle.variant}`)
    vehicle.specifications.changeGear();
    console.log(vehicle.specifications.speedOfVehicle);
  //  console.log('inside details function');
  //  console.log(Object.values(vehicle));
}
details(vehicle);
