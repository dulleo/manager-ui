import { Owner } from './owner';
import { Status } from './status';

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ApartmentOwnerDTO implements Serializable<ApartmentOwnerDTO> {

    private owner: Owner;
    private status: Status;

    public get Owner() : Owner {
        return this.owner;
    }

    public set Owner(owner:Owner) {
        this.owner = owner;
    }

    public get Status() : Status {
        return this.status;
    }

    public set Status(status:Status) {
        this.status = status;
    }

    deserialize(json: any) {
        this.status = json.status;
        this.owner = new Owner().deserialize(json.owner); 
       
        return this;
    }

    deserializeList(json:any) {
        let owners: Array<ApartmentOwnerDTO> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var owner:ApartmentOwnerDTO = new ApartmentOwnerDTO().deserialize(data);
                owners.push(owner);
            }
        }

        return owners;
    }


}