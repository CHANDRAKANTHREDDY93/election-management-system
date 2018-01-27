import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';
import { voterList } from '../voterList';
import { IsignUp } from './signupInterface';
@Component
({
	templateUrl  : './signUp.html',
	styleUrls    : ['./signUp.css']
})

export class signUpComponent
{
	voterData : any = {voteId : '', ssn : null, name : '', phone : '', email : '', address : '', age : null};
	voters : voterList[];
	constructor(private router: Router, private newService : VoteService){
	}
	submit(){
		this.newService.postVoterData(this.voterData).subscribe(votersList =>
		{
			console.log(this.voterData);
		});
	}
	close(){
		this.router.navigateByUrl('/home-page/home-page');
	}
	
}