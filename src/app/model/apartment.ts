interface Serializable<T> {
    deserialize(input: Object): T;
}

export class Apartment implements Serializable<Apartment>{

    private id: number;
    private apartmentNumber: number;

    public get Id(): number {
        return this.id;
    }

    public get ApartmentNumber() : number {
        return this.apartmentNumber;
    }

    public set ApartmentNumber(apartmentNumber:number) {
        this.apartmentNumber = apartmentNumber;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.apartmentNumber = json.apartmentNumber;
       
        return this;
    }

    deserializeList(json:any) {
        let apartments: Array<Apartment> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var apartment:Apartment = new Apartment().deserialize(data);
                apartments.push(apartment);
            }
        }

        return apartments;
    }

}