import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  details= [  
    {  
      "id": 1,  
      "name": "harsh",  
      "email": "harsh123@gmail.com",  
      "gender": "male",
      "profile" : "software Enginner"  
    },  
    {  
      "id": 2,  
      "name": "kunal",  
      "email": "kunal123@gmail.com",  
      "gender": "male",
      "profile" : "React Developer"  
      

    },
    {  
      "id": 3,  
      "name": "Prashant",  
      "email": "prashant123@gmail.com",  
      "gender": "male",
      "profile" : "Android Developer"  
      

    },
    {  
      "id": 4,  
      "name": "Nitin",  
      "email": "Nitin123@gmail.com",  
      "gender": "male",
      "profile" : "NODEjs Developer"  
      

    },
    {  
      "id": 5,  
      "name": "pooja",  
      "email": "pooja123@gmail.com",  
      "gender": "female",
      "profile" : "Shopify Developer"  
      

    },
    {  
      "id": 6,  
      "name": "Tanya",  
      "email": "Tanya123@gmail.com",  
      "gender": "female",
      "profile" : "Angular Developer"  
      

    },
    {  
      "id": 7,  
      "name": "Priya",  
      "email": "Priya123@gmail.com",  
      "gender": "female",
      "profile" : "MERN stack Developer"  
      

    },
    {  
      "id": 8,  
      "name": "Khusboo",  
      "email": "khusboo123@gmail.com",  
      "gender": "female",
      "profile" : "Dot Net  Developer"  
      

    },
    {  
      "id": 9,  
      "name": "Sagar",  
      "email": "Sagar123@gmail.com",  
      "gender": "male",
      "profile" : "Python Developer"  
      

    },
    {  
      "id": 10,  
      "name": "Jasveer",  
      "email": "Jasveer123@gmail.com",  
      "gender": "male",
      "profile" : "Full Stack Developer"  
      

    }
  ] 

}
