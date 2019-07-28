import { OwnerDTO } from './ownerDTO';

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ApartmentDTO implements Serializable<ApartmentDTO> {

    private id: number;
    private number: number;
    private name: string;
    private owners: Array<OwnerDTO>;

    public get Id(): number {
        return this.id;
    }

    public get Number() : number {
        return this.number;
    }

    public set Number(number:number) {
        this.number = number;
    }

    public get Name() : string {
        return this.name;
    }

    public set Name(name:string) {
        this.name = name;
    }

    public get Owners() : Array<OwnerDTO> {
        return this.owners;
    }

    public set Owners(owners:Array<OwnerDTO>) {
        this.owners = owners;
    }

    deserialize(json: any): ApartmentDTO {
        this.id = json.id;
        this.number = json.number;
        this.name = json.name;
        this.owners = new OwnerDTO().deserializeList(json.owners);
        return this;
    }

    deserializeList(json:any) {
        let apartmentDTOs: Array<ApartmentDTO> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var apartmentDTO:ApartmentDTO = new ApartmentDTO().deserialize(data);
                apartmentDTOs.push(apartmentDTO);
            }
        }

        return apartmentDTOs;
    }
    
}
