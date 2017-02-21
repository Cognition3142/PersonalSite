import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import * as marked from 'marked';

@Component({
    moduleId: module.id,
    selector: 'curriculumvitae',
    templateUrl: 'curriculum-vitae.component.html',
    styleUrls: ['curriculum-vitae.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {'class': 'curriculumvitae'}
})

export class CurriculumVitaeComponent implements OnInit {

  pdfSrc: string = '/app/Elliot_Wilkinson_CV.pdf';
  page: number = 1;


cv2: string = 
`
# Elliot Wilkinson
---
> Brixton, London    
> 07920752087   
> Cognition3142@gmail.com   


## Education
##### University of Warwick (2010-2013)  
---
> BSc (Hons) **Discrete Mathematics**. Graduated with Upper Second Class (2:1).   
Overall Result: **68%**   
Final Year Result: **74.3%**

##### Godalming College (2008-2013)
---

| A-Level             | Grade         | AS-Level  | Grade |
| -------------       |:-------------:| --------- | :---: |
| Mathematics         | A*            | Economics | B     |
| Further Mathematics | A             | Physics   | B     |
| Computer Science    | B             | 

##### Rodborough Technology College (2003-2008)
---
> 10 grade B and above including Mathematics, English Language and English Literature.

## Skills

Write a bunch of shit here.

## Work Experiance

##### October 2014 - Present   Exceedra Software
---
> **Software Engineer** - Working both independently and in a small development team to rapidly improve this start-ups Trade Promotion products and services. 
Currently the technical lead on a fresh Greenfield project to deliver modern, high performance, scalable forecasting solutions to a range of industries.     
**Techs;** C#, .NET 4.5, WPF, F#, SQL, Telerik Controls, Visual Studio 2015, TFS, SVN, SSMS, TeamCity.    
**Main Roles;** Programming, testing, designing, researching and documentation.    
**Other Roles;** Support, client communication and presentations.    

##### October 2013 – October 2014    Hewlett Packard Enterprise Services
---
> **Graduate Information Analyst** – Worked in my first technical rotation as a Software Developer primarily using C within a Linux environment. Part of a large development team on the Hawk Aircraft variant of AMPA (Advanced Mission Planning Aid)   
**Roles include;** Design, programming, testing, reviewing, debugging, investigating, documentation, troubleshooting, client communication and problem solving.  

##### July 2012 – September 2012    University of Surrey, IT Services
---
> **Windows 7 Rollout Technician/ 2nd Line Support** – Responsible for working in a rollout team dedicated to upgrading Laptops and PCs to Windows 7. I was tasked with installing and configuring computer systems, diagnosing hardware and software faults and solving technical and application problems. I organised computer audits and upgrades on my own and as part of a team, and communicated with new people on a daily basis. I also worked alongside non-rollout IT staff during busy periods to help maintain a stable work load.
`;

//   md = marked.setOptions({});
  convertedData: string = marked.parse(this.cv2);

    ngOnInit(): void {

// console.log(Marked);
    }

}
