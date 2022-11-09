import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
export interface employee {id :string}
export interface employee {id : string , name : string , position : string , available : string, detailLink : string}

@Injectable({
    providedIn :'root'
})

export class employeeService{
    private Employee : BehaviorSubject<employee[]> =  new BehaviorSubject<employee[]>([
        {id: '1', name:'Lee Haechan', position : 'Staff', available :'Available', detailLink : 'Detail'},
        {id: '2', name:'Mark Lee', position : 'Staff', available :'Available', detailLink : 'Detail'},
        {id: '3', name:'Huang Renjun', position : 'Staff', available :'Available', detailLink : 'Detail'},
        {id: '4', name:'Lee Jeno', position : 'Staff', available :'Available', detailLink : 'Detail'},
        {id: '5', name:'Na Jaemin', position : 'Staff', available :'Avalable', detailLink : 'Detail'},
        {id: '6', name:'Zhong Chenle', position : 'Staff', available :'Not Available', detailLink : 'Detail'},
        {id: '7', name:'Park Jisung', position : 'Staff', available :'Not Avaiable', detailLink : 'Detail'},
      ]);

    constructor(){}
        
    public employee$ = this.Employee.asObservable();

    getemployeeById(id:string) : any{
        const employeearray = this.Employee.getValue();
        console.log(employeearray)
        const employee = employeearray.find(employee => employee.id ===id)
        return employee || null;
            
    }

}