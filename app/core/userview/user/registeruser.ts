import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router} from '@angular/router';
@Component({
    selector: 'addadmin',
    templateUrl: 'app/core/userview/user/registeruser.html',

})


export class RegisterUserComponent {

   
   
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
    private userdetails: any;
    private userdetailsorig: any;
    private context: any;
    constructor(private mSNService: MSNService, private router: Router) {

        this.init();

        this.userdetails = [];

    }

    private init() {

        this.mSNService.getContext(
            context => this.OnContextLoaded(context)
        );
    }
    private OnContextLoaded(context: any) {
        var _this = this;
        _this.context = context;
      

    }

    private saveUser(user) {

       // var userdetails=[];
      
        var _this = this;
        this.userdetails.NAME = user.NAME;
        this.userdetails.EMAIL = user.EMAIL;
        this.userdetails.PHONE = user.PHONE;
        this.userdetails.PWD = user.PWD;
        this.context.ADMININFOes.add(this.userdetails);
        //this.userdetailsorig.ID = 2;
        //	this.context.ADMININFOes.add(this.userdetailsorig);
        console.log(user);
        //this.context.saveChanges();

        //this.router.navigate(['manageadmins']);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['manageadmins']);
        });

    }

}
   