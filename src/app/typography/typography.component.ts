import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../services/reclamation.service';
import {Reclamation} from '../user/user.component';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';
import {Matiere} from '../signup/signup.component';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
listRec: [Reclamation];
  constructor(private reclamationService: ReclamationService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.reclamationService.getReclamation().subscribe(
        data => {
          this.listRec = data;
        }    )
  }

  diag(param: Matiere , param2: Reclamation){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px', data:{ param, param2},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }

}
