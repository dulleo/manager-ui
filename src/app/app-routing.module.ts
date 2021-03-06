import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { CommunityCreateEditComponent } from './community/community-create-edit/community-create-edit.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateEditComponent } from './account/account-create-edit/account-create-edit.component';
import { DoorwayListComponent } from './doorway/doorway-list/doorway-list.component';
import { DoorwayCreateEditComponent } from './doorway/doorway-create-edit/doorway-create-edit.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerCreateEditComponent } from './owner/owner-create-edit/owner-create-edit.component';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';

const routes: Routes = [
    { path: ' ', redirectTo: 'communities', pathMatch: 'full'},
    { path: 'communities', component: CommunityListComponent },
    { path: 'communities/create-edit', component: CommunityCreateEditComponent },
    { path: 'accounts', component: AccountListComponent },
    { path: 'accounts/create-edit', component: AccountCreateEditComponent },
    { path: 'doorways', component: DoorwayListComponent },
    { path: 'doorways/create-edit', component: DoorwayCreateEditComponent },
    { path: 'owners', component: OwnerListComponent },
    { path: 'owners/create-edit', component: OwnerCreateEditComponent },
    { path: 'apartments', component: ApartmentListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }