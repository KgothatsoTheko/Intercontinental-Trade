import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  array!:any;

  constructor(private shared: SharedService, private api: ApiService, private dialog: MatDialog, private snackbar: MatSnackBar){
    this.api.genericGet()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.array = res
      },
      error: (err: any) => console.log("No data", err)
      
    })
  }

  submit(i:any, item:any){
    console.log("i:", i);
    console.log("item:", item);
    const newState = {
      status: "Submitted"
    }
    this.api.update(`/update-transaction/${item._id}`, newState)
    .subscribe({
      next: (res) => {
        console.log(res);
        try {
        this.snackbar.open('Submitted To SWIFT For Payment', 'Ok', { duration: 3000 })
          
        } catch (error) {
          this.snackbar.open(`Something went wrong ... ${error}`, 'Ok', { duration: 3000 });
        }
      },
      error: (err: any) => this.snackbar.open(`Error: ${err}`, "ok", {duration: 3000})
    })
  }

  verify(i:any, item:any){
    console.log("i:", i);
    console.log("item:", item);
    const newState = {
      status: "Verified"
    }
    this.api.update(`/update-transaction/${item._id}`, newState)
    .subscribe({
      next: (res) => {
        console.log(res);
        try {
        this.snackbar.open('Verified Transaction', 'Ok', { duration: 3000 })
          
        } catch (error) {
          this.snackbar.open(`Something went wrong ... ${error}`, 'Ok', { duration: 3000 });
        }
      },
      error: (err: any) => this.snackbar.open(`Error: ${err}`, "ok", {duration: 3000})
    })
    
  }
}
