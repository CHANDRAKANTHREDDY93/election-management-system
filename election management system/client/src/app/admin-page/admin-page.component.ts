import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';
@Component
({
	templateUrl : './admin.html',
	styleUrls   : ['./admin-page.component.css']	
})
export class adminPageComponent implements OnInit
{
  ngOnInit() : void
  {}
	voterInfo : any[] =[];
	votesCasted : any[] = [];
	votesLeft :any[];
	repVote;
  demoVote;
	repVotesCasted;
  demoVotesCasted;
	myVote : any[];
  winner: String;
	valid :boolean;
		constructor(private newService : VoteService, private router : Router)
			{ 
      			this.newService.getVoterData().subscribe(lists => 
      			{
      				this.voterInfo = lists;
  				}); 
      				this.newService.fetchData().subscribe(tasks =>
      			{
      				this.votesCasted = tasks;    
      				this.repVotesCasted = 0;
              this.demoVotesCasted = 0;
              this.votesCasted.map(item =>
              {
                  if(item.myVote == "repVote")
                  {
                      this.repVotesCasted++;
                  }
                  else if(item.myVote == "demoVote")
                  {
                      this.demoVotesCasted++;
                  } 
              });
            if(this.repVotesCasted > this.demoVotesCasted)
            {
                this.winner = "Republicans";
            }
            else if(this.demoVotesCasted > this.repVotesCasted)
            {
               this.winner = "Democrats";
            }
      			});
    		}
        home()
        {
            this.router.navigateByUrl('home-page/home-page');
        }
        voterData()
        {
          this.router.navigateByUrl('admin-page/voterData');
        }
}
