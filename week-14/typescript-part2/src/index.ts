// created a interface with optional field address - may or may not present - use q mark
interface User{
  name: string,
  age: number,
  address?: {
    city: string,
    country: string,
    pincode: number
  }
}
// Address field present
const user1 = {
  name: "Ashish",
  age: 21,
  address: {
    city: "Fatehgarh",
    country: "India",
    pincode: 209601
  }
}
// Address field not present
const user2 = {
  name: "As",
  age: 21
}