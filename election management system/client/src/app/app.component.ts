import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';
import { Router } from '@angular/router';
import { adminPageComponent } from './admin-page/admin-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VoteService]

})
export class AppComponent 
{
  constructor(private router: Router, private newService: VoteService){}
    admin()
    {
      this.router.navigateByUrl('/admin');
    }

   /* onClick()
  	{
  	    this.newService.fetchData().subscribe((response) => {this.voterData= response;
        console.log(voterData);
        }, 
        (error) => console.log(error)
  	    );
  	    if(voterData.id == vId)
  	    {
  	    	console.log("Data passed");
  	    }
  	    else
  	    {
  	    	console.log("Fake data");
  	    }
  	}
*/
}

