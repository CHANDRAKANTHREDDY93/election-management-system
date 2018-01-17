import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminPageComponent } from './admin-page.component';
import { VoteService } from '../vote.service';
@Component
({
	 templateUrl : './admin-page.component.html',
	 styleUrls   : ['./admin-page.component.css']
})
export class adminComponent
{
	adminInfo : any[] = [];
	isValid : boolean;
 	constructor(private router: Router, private newService : VoteService){}
	adminData = {};

	ngOnInit()
	{
		this.newService.getData().subscribe(lists => {
      this.adminInfo = lists;
      	console.log(this.adminInfo.length);
       });
    }
	adminValid(adminId, pwd)
	{
		this.adminInfo.map((element) =>
		{
			this.isValid = false;
			if(element.adminId == adminId && element.adminPwd == pwd)
			{
				console.log("Valid admin");
				this.isValid = true;
				this.router.navigateByUrl('/admin-page/admin-page');
				}
		});
	}
}
