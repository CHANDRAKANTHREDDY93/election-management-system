import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { VotePageComponent } from '../vote-page/vote-page.component';
import { Router } from '@angular/router';
@Component
({
  selector: 'my-home',
  templateUrl : './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class homePageComponent implements OnInit 
{ 
  voterInfo: any= [];
  voterData : any = [];
  data : any[] = [];
  isValid : boolean = false;

  constructor(public router: Router, public newService: VoteService)
  { }

  ngOnInit() 
  {
       this.newService.getVoterData().subscribe(lists => {
       this.voterData = lists;
       });
  }
     onSubmit(vId, ssn, age) 
     {
        this.voterData.map((element) => 
        {
          if(element.voteId == vId && element.ssn == ssn && element.age ==age) 
          {
            this.isValid = true;
            this.router.navigateByUrl('/vote-page/vote-page');
          }
        });
        if(!this.isValid)
        {
          alert("Invalid Login Details!! Please enter Valid Details and Log back again");
        }
      }  
}