import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary: {
    Region:string, 
    TeamMembersCount:number, 
    TemporarilyUnavailableMembers:number
  }[];
  TeamMembers: {
    Region: string,
    Members: { ID: number, Name: string, Status: string }[]
  }[];

  constructor(){
    this.Designation = 'Team Leader';
    this.Username = 'Eranda Upeshitha';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    this.TeamMembersSummary = [
      { "Region": "East", "TeamMembersCount": 20, "TemporarilyUnavailableMembers": 4 },
      { "Region": "West", "TeamMembersCount": 15, "TemporarilyUnavailableMembers": 8 },
      { "Region": "South", "TeamMembersCount": 17, "TemporarilyUnavailableMembers": 2 },
      { "Region": "North", "TeamMembersCount": 15, "TemporarilyUnavailableMembers": 6 }
    ];

    this.TeamMembers = [
      {
        "Region": 'East',
        "Members": [
          { ID: 1, Name: 'Lahiru', Status: 'Available' },
          { ID: 2, Name: 'Kasun', Status: 'Available' },
          { ID: 3, Name: 'Sithija', Status: 'Busy' },
          { ID: 4, Name: 'Ruwan', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Nuwan', Status: 'Available' },
          { ID: 6, Name: 'Akalanka', Status: 'Available' },
          { ID: 7, Name: 'Hiran', Status: 'Busy' },
          { ID: 8, Name: 'Asiri', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Janith', Status: 'Available' },
          { ID: 10, Name: 'Lakshitha', Status: 'Available' },
          { ID: 11, Name: 'Imalka', Status: 'Busy' },
          { ID: 12, Name: 'Suraj', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Supun', Status: 'Available' },
          { ID: 14, Name: 'Sameera', Status: 'Available' },
          { ID: 15, Name: 'Sumudu', Status: 'Busy' },
          { ID: 16, Name: 'Randika', Status: 'Busy' },
        ],
      }
    ];
  }

  ngOnInit(){ 
    for(var i=2021; i>=2018; i--){
      this.Years.push(i);
    }   
  }

}
