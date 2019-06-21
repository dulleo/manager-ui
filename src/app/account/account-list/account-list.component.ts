import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { MessageService } from 'src/app/service/message.service';
import { BankAccount } from 'src/app/model/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  community: Community;
  selectedAccount: BankAccount;
  accounts: Array<BankAccount> = [];
  accountExists: Boolean = false;

  constructor(private dataService: DataService, 
              private router: Router, 
              private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.community = message);
    this.getAllAccounts(this.community.Id);
  }

  getAllAccounts(id:number) {
    this.dataService.getAllAccounts(id).subscribe(resp => {
      if(resp.ok) {
        console.log("getAllCommunities response received....");
        this.accounts = new BankAccount().deserializeList(resp.body);
        if(this.accounts.length > 0) {
          this.accountExists = true;
        }
      }
    });
  }

  createAccount() {
    console.log("Create account is called....");
    this.messageService.selectCommunity(this.community);
    this.messageService.selectAccount(new BankAccount);
    this.router.navigate(['accounts/create-edit']);
  }


}
