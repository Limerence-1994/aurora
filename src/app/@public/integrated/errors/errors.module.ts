import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorsComponent } from './errors/errors.component';
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule
  ]
})
export class ErrorsModule { }
