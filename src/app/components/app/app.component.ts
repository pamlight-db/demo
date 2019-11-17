import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NewItemModalComponent } from '../new-item-modal/new-item-modal.component';
import { NgxPamlightService } from '@pamlight/ngx-client';
import { orderBy } from 'lodash';

export interface ItemData {
  name: string;
  date: Date;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'name', 'message'];
  public dataSource: ItemData[] = [];

  constructor(
    private dialog: MatDialog,
    private pamlightService: NgxPamlightService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.pamlightService.init('5dc80b237eb1dc000438c02f').then(() => {
      this.pamlightService.read<ItemData[]>('getDocsList', {}).subscribe(items => {
        this.dataSource = orderBy(items, ['date'], ['desc']);
      });
    }).catch(console.error);
  }

  public openItemModal(): void {
    const dialogRef = this.dialog.open(NewItemModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newItem: ItemData = {
          name: result.name || 'Unnamed',
          message: result.message,
          date: new Date()
        };

        this.pamlightService.write('createNewDoc', newItem).then(() => {
          this.snackBar.open('Item saved...');
        });
      }
    });
  }

  public timeAgo(date: Date) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    date = new Date(date);
    if (date.constructor.name.toLowerCase() !== 'date') {
      return 'Invalid date';
    }

    const current = new Date().getTime();
    const previous = date.getTime();
    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      const val = Math.round(elapsed / 1000);
      return val < 20 ? 'just now' : val + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
      return 'about ' + Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
      return 'about ' + Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
      return 'about ' + Math.round(elapsed / msPerYear) + ' years ago';
    }
  }
}
