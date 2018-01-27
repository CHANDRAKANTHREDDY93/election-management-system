import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Task} from '../task';

@Injectable()
export class VoteService {
  constructor(private http: Http) { }
  
  fetchData() 
   	{
   		return this.http.get('http://localhost:3000/api/tasks').map(response => response.json());
   	}
    getData()
    {
      return this.http.get('../assets/voterList.json').map(response => response.json());
    }
    getVoterData()
    {
        return this.http.get('http://localhost:3000/api/votes').map(response => response.json());
    }
    postData(newTask)
    {
        var body = JSON.stringify(newTask);
        var header = new Headers({'Content-Type' : 'application/json'});
        var request = new RequestOptions({method:RequestMethod.Post, headers : header});
        return this.http.post('http://localhost:3000/api/task',body,request).map(res => res.json());
    }

    postVoterData(voters)
    {
        var body =JSON.stringify(voters);
        var header = new Headers({'Content-Type' : 'application/json'});
        var request = new RequestOptions({method : RequestMethod.Post, headers : header});
        return this.http.post('http://localhost:3000/api/vote', body, request).map(res => res.json());
    }
}


