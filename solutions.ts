const multiplyValue = (value: number, multiplier = 2) :number=> {
  return value * multiplier;
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value === true ? "Active" : "Inactive";
  }
};

const formatCoordinate =([latitude, longitude, locationName]:readonly[number, number, string]) =>{
return `Location: ${locationName} (${latitude}, ${longitude})`; 
}

const concatenateArrays = <T> (...array: T[][]) : T[] =>{
    return array.flat();
}
