import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule, PopoverModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import {AdminListInstComponent} from "./admin/institutions/admin-list-inst/admin-list-inst.component";
import {AdminListEnrollComponent} from "./admin/institutions/admin-list-enroll/admin-list-enroll.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import { AdminDetailsEnrollmentComponent } from './admin/Enrollment/admin-details-enrollment/admin-details-enrollment.component';
import { AdminShowEnrollmentComponent } from './admin/Enrollment/admin-show-enrollment/admin-show-enrollment.component';
import { AdminConfirmEnrollComponent } from './admin/Enrollment/admin-confirm-enroll/admin-confirm-enroll.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactPersonDialogComponent } from './admin/Enrollment/admin-confirm-enroll/contact-person-dialog/contact-person-dialog.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent, ...APP_CONTAINERS,
    AdminListInstComponent,
    AdminListEnrollComponent,
    AdminDetailsEnrollmentComponent,
    AdminShowEnrollmentComponent,
    AdminConfirmEnrollComponent,
    ContactPersonDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatOptionModule,
    PopoverModule,
    FormsModule,
    MatSelectModule,
    NgbModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
