
interface Car{
    make: string;
    model: string;
    year: number;
    hybrid: boolean;
}

const dealership: Car[] = [
    {
    make: 'Toyota',
    model: 'Prius',
    year: 2020,
    hybrid: true
    },

    {
    make: 'Toyota',
    model: 'Prius',
    year: 2021,
    hybrid: true
    },

    {
    make: 'Ford',
    model: 'F-150',
    year: 2015,
    hybrid: false
    },

    {
    make: 'Ferrari',
    model: 'Enzo',
    year: 2004,
    hybrid: false
    }
]


//Return Type: Car array
// Functionality: when called, this fx will return an array of all th cars from the arrayOfCars argument
// that have the specified *model* argument. If there are no cars that have that model, 
// return an empty array.

function findCars(arrayOfCars: Car[], model:string) {
    
} 
    findCars()



//Return Type: void
// Functionality: construct an object of type Car and push it into arrayOfCars
function addCar(arrayOfCars: Car[], make:string, model:string, year:number, hybrid:boolean) {
    
}
    addCar()



//Return Type: boolean
// Functionality: when called, this fx will return true if there is a hbrid car in the arrayOfCars
// argument and false otherwise.
function areThereAnyHybridsForSale(arrayOfCars: Car[]) {
    
}
    areThereAnyHybridsForSale();



//Return Type: boolean
// Functionality: when called, this fx will return true if the provided car has a year less
// than or equal to 2010 and false otherwise.
function expiredWarranty(car: Car[]) {
    
}
    expiredWarranty()