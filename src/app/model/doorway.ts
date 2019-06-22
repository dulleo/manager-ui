interface Serializable<T> {
    deserialize(input: Object): T;
}

export class Doorway implements Serializable<Doorway> {

    private id: number;
    private number: string;

    public get Id(): number {
        return this.id;
    }

    public get Number() : string {
        return this.number;
    }

    public set Number(number:string) {
        this.number = number;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.number = json.number;
        return this;
    }

    deserializeList(json:any) {
        let doorways: Array<Doorway> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var doorway:Doorway = new Doorway().deserialize(data);
                doorways.push(doorway);
            }
        }

        return doorways;
    }

}