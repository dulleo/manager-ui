import { Status } from './status';

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class BankAccount implements Serializable<BankAccount> {
    
    private id: number;
    private bankName: string;
    private accountNumber: string;
    private status: Status;

    public get Id(): number {
        return this.id;
    }

    public get BankName() : string {
        return this.bankName;
    }

    public set BankName(bankName:string) {
        this.bankName = bankName;
    }

    public get AccountNumber() : string {
        return this.accountNumber;
    }

    public set AccountNumber(accountNumber:string) {
        this.accountNumber = accountNumber;
    }
    
    public get Status() : Status {
        return this.status;
    }

    public set Status(status:Status) {
        this.status = status;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.bankName = json.bankName;
        this.accountNumber = json.accountNumber;
        this.status = json.status;
        return this;
    }

    deserializeList(json:any) {
        let accounts: Array<BankAccount> = [];
        if(json != null) {
            for(var i=0;i<json.length;i++) {
                var data = json[i];
                var account:BankAccount = new BankAccount().deserialize(data);
                accounts.push(account);
            }
        }

        return accounts;
    }
}