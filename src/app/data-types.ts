export interface pgDetails{
    id:number,
    pgName:string,
    address:string,
    ownerName:string,
    contactNo:string,
    price:string,
    pgImage:string,
    pgRoom1Image:string,
    pgRoom2Image:string,
    pgWashroomImage:string
    sharingprice1:string,
    sharingprice2:string,
    sharingprice3:string,
    sharingprice4:string   

}

export interface userDetails{
    email:string,
    password:string,
    confirmPassword:string
}