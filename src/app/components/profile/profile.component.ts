import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { UsersDataService } from "src/app/services/users-data.service";

@Component({
  selector: "app-projects",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  loader = false;

  constructor(
    public dialog: MatDialog,
    private userDataService: UsersDataService
  ) {}

  ngOnInit() {
    this.userDataService.getSingleUser().subscribe(
      (res) => {
        this.userInfo = res.data;
        this.loader = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
