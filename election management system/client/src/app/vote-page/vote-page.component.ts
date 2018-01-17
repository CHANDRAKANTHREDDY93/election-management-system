import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Http, Headers } from '@angular/http';
import { VoteService } from '../vote.service';
import { Task } from '../../task';
import { Ivote } from './votepageInterface';
@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css'],
  providers: [VoteService]
})
export class VotePageComponent implements OnInit
{
  ngOnInit () : void
  {}
    tasks : Task[];
    votes : string;
    myVote : string;
    toVote : string;
    info;  
    newData : any = [];
    hideButton : boolean = false;
    data : Ivote[];
    valid : any = [];
    isValid : boolean;
    isDone : boolean;
      showButton() : void
      {
        this.hideButton = !this.hideButton;
      }
      constructor(private router: Router, private http: Http, private newService: VoteService) 
      { 
          this.init();     
      }
      init() : void
      {
          this.newService.fetchData().subscribe(lists => {
            this.newData = lists;
            console.log("newData");
          });
      }
      validate(vote, ssn)
        { 
            this.votes =  vote;
            this.tasks = ssn;
              let reqObj = { myVote : this.votes, ssn : this.tasks }; 
              if(this.newData.length == 0)
              {
                  this.isValid = true;
                  this.newService.postData(reqObj)
                  .subscribe(vote =>
                  {
                    console.log(this.votes);
                    this.router.navigateByUrl('home-page/home-page');
                    this.init();
                  });
              }
              else
              {
                this.newData.forEach((element) =>
                { 
                this.isValid = false;
                if(element.ssn != ssn)
                {
                  this.isValid = true;
                  this.newService.postData(reqObj)
                  .subscribe(vote =>
                  {
                    console.log(this.votes);
                    this.router.navigateByUrl('home-page/home-page');
                    this.init();
                  });
                }
                else
                {
                    alert("Sorry you have already casted your vote. Please logout for security reasons");
                }
                });
              }  
      }
      close()
      {
          this.router.navigateByUrl('home-page/home-page');
      }
}