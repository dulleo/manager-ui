import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { BankAccount } from 'src/app/model/account';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-account-create-edit',
  templateUrl: './account-create-edit.component.html',
  styleUrls: ['./account-create-edit.component.css']
})
export class AccountCreateEditComponent implements OnInit {

  community: Community;
  account: BankAccount;
  isEditMode: Boolean;
  submitText: string;

  constructor(private dataService: DataService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.selectedCommunity.subscribe(message => this.community = message);
    this.messageService.selectedAccount.subscribe(message => this.account = message);

    if(this.account.Id) {
      this.submitText = "Izmena Računa";
      this.isEditMode = true;
      
    } else {
      this.submitText = "Novi Račun";
      this.isEditMode = false;
    }
  }

  onSubmit() {
    if(this.isEditMode) {
      console.log("Edit account id: " + this.community.Id);
      this.dataService.updateAccount(this.community.Id, this.account).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['accounts']);
        }
      });
    } else {
      console.log("Create account...");
      this.account.Status = Status.ACTIVE;        //new account is active
      this.dataService.createAccount(this.community.Id, this.account).subscribe(resp => {
        if(resp.ok) {
          this.router.navigate(['accounts']);
        }
      });
    }
  }

}
