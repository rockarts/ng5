import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule],
})
export class MaterialModule { }