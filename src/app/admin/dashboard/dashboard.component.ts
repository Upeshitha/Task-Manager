import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

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
  ToDay: Date;

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

  constructor(private dashboardService: DashboardService){
    this.Designation = 'Team Leader';
    this.Username = 'Eranda Upeshitha';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

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

  onProjectChange($event: any){
    if ($event.target.innerHTML === ' Project A'){
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
    }
    else if ($event.target.innerHTML === ' Project B') {
      this.ProjectCost = 983907;
      this.CurrentExpenditure = 2356;
      this.AvailableFunds = 4598;
    }
    else if ($event.target.innerHTML == " Project C") {
      this.ProjectCost = 108330;
      this.CurrentExpenditure = 5656;
      this.AvailableFunds = 988;
    }
    else if ($event.target.innerHTML == " Project D") {
      this.ProjectCost = 258330;
      this.CurrentExpenditure = 4658;
      this.AvailableFunds = 792;
    }
  }

}
