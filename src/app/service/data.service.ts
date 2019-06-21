import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Community } from '../model/community';
import { BankAccount } from '../model/account';

@Injectable()
export class DataService {

    private baseUrl: string = environment.API_URL;

    constructor(private httpClient: HttpClient) {

    }

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

    deleteCommunity(id:number) {
        console.log("[Service] --> Delete community id: " + id);
        let deleteUrl: string;
        deleteUrl = this.baseUrl + '/communities/' + id;
        return this.httpClient.delete(deleteUrl, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    //************************************************************************************
    //                                      ACCOUNTS
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

    createAccount(id: number, account: BankAccount) {
        console.log("[Service] --> Create acount for community id: " + id);
        const body = JSON.stringify(account);
        console.log("Body: " + body);
        let createUrl: string;
        createUrl = this.baseUrl + '/communities/' + id + '/accounts';
        return this.httpClient.post(createUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accetp', '*'), 
            observe: 'response'
        });
    }

    updateAccount(id:number, account:BankAccount) {
        console.log("[Service] --> Update account id: " + account.Id);
        const body = JSON.stringify(account);
        console.log("Body: " + body);
        let updateUrl: string;
        updateUrl = this.baseUrl + '/communities/' + id + '/accounts/' + account.Id;
        return this.httpClient.put(updateUrl, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

}