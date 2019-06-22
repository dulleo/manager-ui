import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community } from '../model/community';
import { BankAccount } from '../model/account';
import { Doorway } from '../model/doorway';

@Injectable()
export class DataService {

    private baseUrl: string = environment.API_URL;

    constructor(private httpClient: HttpClient) {

    }

    //************************************************************************************
    //                                      COMMUNITY
    //************************************************************************************

    getAllCommunities() {
        console.log("[Service] --> getAllCommunities");
        return this.httpClient.get(this.baseUrl + '/communities', {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    createCommunity(community: Community) {
        console.log("[Service] --> Create community...");
        const body = JSON.stringify(community);
        console.log("Body: " + body);
        return this.httpClient.post(this.baseUrl + '/communities', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    updateCommunity(community: Community) {
        console.log("[Service] --> Update community...");
        const body = JSON.stringify(community);
        let updateUrl: string;
        updateUrl = this.baseUrl + '/communities/' + community.Id;
        return this.httpClient.put(updateUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    deleteCommunity(communityId:number) {
        console.log("[Service] --> Delete community id: " + communityId);
        let deleteUrl: string;
        deleteUrl = this.baseUrl + '/communities/' + communityId;
        return this.httpClient.delete(deleteUrl, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    //************************************************************************************
    //                                      ACCOUNT
    //************************************************************************************
    
    getAllAccounts(id:number) {
        console.log("[Service] --> Get all accounts for community id: " + id);
        let url: string;
        url = this.baseUrl + '/communities/' + id + '/accounts';
        return this.httpClient.get(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    createAccount(communityId: number, account: BankAccount) {
        console.log("[Service] --> Create acount for community id: " + communityId);
        const body = JSON.stringify(account);
        console.log("Body: " + body);
        let createUrl: string;
        createUrl = this.baseUrl + '/communities/' + communityId + '/accounts';
        return this.httpClient.post(createUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    updateAccount(communityId:number, account:BankAccount) {
        console.log("[Service] --> Update account id: " + account.Id);
        const body = JSON.stringify(account);
        console.log("Body: " + body);
        let updateUrl: string;
        updateUrl = this.baseUrl + '/communities/' + communityId + '/accounts/' + account.Id;
        return this.httpClient.put(updateUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    deleteAccount(communityId:number, accountId:number) {
        console.log("[Service] --> Delete account id: " + accountId);
        let deleteUrl: string;
        deleteUrl = this.baseUrl + '/communities/' + communityId + '/accounts/' + accountId;
        return this.httpClient.delete(deleteUrl, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    //************************************************************************************
    //                                      DOORWAY
    //************************************************************************************

    getAllDoorways(communityId: number) {
        console.log("[Service] --> Get all doorways for community id: " + communityId);
        let url: string;
        url = this.baseUrl + '/communities/' + communityId + '/doorways';
        return this.httpClient.get(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    createDoorway(communityId: number, doorway: Doorway) {
        console.log("[Service] --> Create doorway for community id: " + communityId);
        const body = JSON.stringify(doorway);
        console.log("Body: " + body);
        let createUrl: string;
        createUrl = this.baseUrl + '/communities/' + communityId + '/doorways';
        return this.httpClient.post(createUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    updateDoorway(communityId:number, doorway: Doorway) {
        console.log("[Service] --> Update doorway id: " + doorway.Id);
        const body = JSON.stringify(doorway);
        console.log("Body: " + body);
        let updateUrl: string;
        updateUrl = this.baseUrl + '/communities/' + communityId + '/doorways/' + doorway.Id;
        return this.httpClient.put(updateUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    deleteDoorway(communityId:number, doorwayId:number) {
        console.log("[Service] --> Delete doorway id: " + doorwayId);
        let deleteUrl: string;
        deleteUrl = this.baseUrl + '/communities/' + communityId + '/doorways/' + doorwayId;
        return this.httpClient.delete(deleteUrl, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

}