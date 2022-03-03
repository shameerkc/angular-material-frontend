import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatTableModule,
        CdkTableModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,
        MatSidenavModule],

    exports: [MatNativeDateModule,
        FormsModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        CdkTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,
        MatSidenavModule],

})

export class MyMaterialModule { }