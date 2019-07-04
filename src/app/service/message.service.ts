import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Community } from '../model/community';
import { BankAccount } from '../model/account';
import { Doorway } from '../model/doorway';
import { Owner } from '../model/owner';

@Injectable()
export class MessageService {

    private communityMessageSource = new BehaviorSubject(new Community);
    selectedCommunity = this.communityMessageSource.asObservable();

    private accountMessageSource = new BehaviorSubject(new BankAccount);
    selectedAccount = this.accountMessageSource.asObservable();

    private doorwayMessageSource = new BehaviorSubject(new Doorway);
    selectedDoorway = this.doorwayMessageSource.asObservable();

    private ownerMessageSource = new BehaviorSubject(new Owner);
    selectedOwner = this.ownerMessageSource.asObservable();

    constructor() {}

    selectCommunity(community: Community) {
        this.communityMessageSource.next(community);
    }

    selectAccount(account: BankAccount) {
        this.accountMessageSource.next(account);
    }

    selectDoorway(doorway: Doorway) {
        this.doorwayMessageSource.next(doorway);
    }

    selectOwner(owner: Owner) {
        this.ownerMessageSource.next(owner);
    }

}