import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * Shared feature module (https://angular.io/guide/styleguide#shared-feature-module)
 *
 * Do import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
 *
 * Why? SharedModule will contain components, directives and pipes that may need features from another common module;
 * for example, ngFor in CommonModule.
 *
 * Do declare all components, directives, and pipes in the SharedModule.
 *
 * Do export all symbols from the SharedModule that other feature modules need to use.
 *
 * Why? SharedModule exists to make commonly used components, directives and pipes available for use in the templates
 * of components in many other modules.
 *
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    // Prime NG
    TabMenuModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DynamicDialogModule,
    DialogModule,
    CalendarModule,
    ConfirmDialogModule,
    CardModule,
    AccordionModule,
    ToastModule,
    MessagesModule,
    DropdownModule,
    ProgressSpinnerModule,
    FileUploadModule,
    MultiSelectModule,
    TooltipModule,
    OverlayPanelModule,
    CheckboxModule,
    InputNumberModule,
    PaginatorModule,
    TreeModule,
    MenubarModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    TranslateModule,
    // Prime NG
    TabMenuModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DynamicDialogModule,
    DialogModule,
    CalendarModule,
    ConfirmDialogModule,
    CardModule,
    AccordionModule,
    ToastModule,
    MessagesModule,
    DropdownModule,
    ProgressSpinnerModule,
    FileUploadModule,
    MultiSelectModule,
    TooltipModule,
    OverlayPanelModule,
    CheckboxModule,
    InputNumberModule,
    PaginatorModule,
    TreeModule,
    MenubarModule
  ]
})
export class SharedModule { }
