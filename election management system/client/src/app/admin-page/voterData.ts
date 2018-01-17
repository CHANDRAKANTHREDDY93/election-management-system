import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';
import {Ng2PaginationModule} from 'ng2-pagination';
@Component
({
	templateUrl : './voterData.html',
	styleUrls   : ['./voterData.css']	
})
export class voterData
{
	info : any[] = [];
	constructor(private newService: VoteService)
	{
		this.newService.getVoterData().subscribe(lists =>
		{
			this.info = lists;
		console.log(this.info);
		});
		}
	
}