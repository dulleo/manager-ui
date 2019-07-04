interface Serializable<T> {
    deserialize(input: Object): T;
}

export class Owner implements Serializable<Owner> {
    
    private id: number;
    private firstName: string;
    private lastName: string;
    private phone: string;
    private email: string;
    private street: string;
    private streetNumber: string;
    private city: string;

    public get Id(): number {
        return this.id;
    }

    public get FirstName() : string {
        return this.firstName;
    }

    public set FirstName(firstName:string) {
        this.firstName = firstName;
    }

    public get LastName() : string {
        return this.lastName;
    }

    public set LastName(lastName:string) {
        this.lastName = lastName;
    }

    public get Phone() : string {
        return this.phone;
    }

    public set Phone(phone:string) {
        this.phone = phone;
    }

    public get Email() : string {
        return this.email;
    }

    public set Email(email:string) {
        this.email = email;
    }

    public get Street() : string {
        return this.street;
    }

    public set Street(street:string) {
        this.street = street;
    }

    public get StreetNumber() : string {
        return this.streetNumber;
    }

    public set StreetNumber(streetNumber:string) {
        this.streetNumber = streetNumber;
    }

    public get City() : string {
        return this.city;
    }

    public set City(city:string) {
        this.city = city;
    }
    
    deserialize(json: any) {
        this.id = json.id;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.phone = json.phone;
        this.email = json.email;
        this.street = json.street;
        this.streetNumber = json.streetNumber;
        this.city = json.city;
        return this;
    }

    deserializeList(json:any) {
        let owners: Array<Owner> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var owner:Owner = new Owner().deserialize(data);
                owners.push(owner);
            }
        }

        return owners;
    }

}