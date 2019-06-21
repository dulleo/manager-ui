interface Serializable<T> {
    deserialize(input: Object): T;
}

export class Community implements Serializable<Community> {
    
    private id: number;
    private name: string;
    private identificationNumber: number;
    private pib: number;

    public get Id(): number {
        return this.id;
    }

    public get Name() : string {
        return this.name;
    }

    public set Name(name:string) {
        this.name = name;
    }

    public get Pib() : number {
        return this.pib;
    }

    public set Pib(pib:number) {
        this.pib = pib;
    }
    
    public get IdentificationNumber() : number {
        return this.identificationNumber;
    }

    public set IdentificationNumber(identificationNumber:number) {
        this.identificationNumber = identificationNumber;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.identificationNumber = json.identificationNumber;
        this.pib = json.pib;
        return this;
    }

    deserializeList(json:any) {
        let communities: Array<Community> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var community:Community = new Community().deserialize(data);
                communities.push(community);
            }
        }

        return communities;
    }
}