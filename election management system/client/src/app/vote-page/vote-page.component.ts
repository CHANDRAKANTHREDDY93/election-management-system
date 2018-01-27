import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Http, Headers } from '@angular/http';
import { VoteService } from '../vote.service';
import { Task } from '../../task'
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
    newData: any = [];
    hideButton : boolean = false;
    data = {myVote : '', ssn : null};
    valid : any[] =[];
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
          });
      }
    postData(){
    this.newService.postData(this.data)
                      .subscribe(vote =>{
                        console.log(this.data);
                        this.router.navigateByUrl('home-page/home-page');
                        this.init();
                      });
    }
    validate()
    { 
      console.log(this.data);   
      if(this.newData.length == 0)
      {
        this.isValid = true;
        this.postData();
      }
      else{
        let a= this.newData.filter(obj=>obj.ssn===this.data.ssn)
        a.length ===0?this.postData():alert("Sorry! You have already casted your vote!! Please check out for security reasons");
                }  
        }
        close()
        {
            this.router.navigateByUrl('home-page/home-page');
        }
}


