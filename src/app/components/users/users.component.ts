import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { MatDialog } from "@angular/material";
import { UsersDataService } from "src/app/services/users-data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    "AssociateNumber",
    "FirstName",
    "LastName",
    "Avatar",
    "Email",
  ];
  dataSource: MatTableDataSource<any>;
  userList: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private userDataService: UsersDataService
  ) {}

  ngOnInit() {
    this.userDataService.getUsersList().subscribe(
      (res) => {
        this.userList = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
