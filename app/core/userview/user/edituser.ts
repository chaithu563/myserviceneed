import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { MSNService } from '../../../services/msn.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'editadmin',
	templateUrl: 'app/core/userview/user/edituser.html',
	
})


export class EditUserComponent {

	private gridOptions: GridOptions;
	private showGrid: boolean;
	private rowData: any[];
	private columnDefs: any[];
	private rowCount: string;
	private userdetails: any;
	private userdetailsorig: any;
	private context: any;
    constructor(private mSNService: MSNService, private route: ActivatedRoute, private router: Router ) {

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
        var adminid  = _this.route.snapshot.params['id'];
        _this.context.ADMININFOes.first("x=> x.ID == this.Adminid", { Adminid: adminid })
			.then(function (admininfoes) {
			
			_this.userdetails = JSON.parse(JSON.stringify(admininfoes));
            _this.userdetailsorig = admininfoes;
           
		});

	}

	private saveUser(user) {
		this.context.ADMININFOes.attachOrGet(this.userdetailsorig);
        var _this = this;
        this.userdetailsorig.NAME = user.NAME;
        this.userdetailsorig.EMAIL = user.EMAIL;
        this.userdetailsorig.PHONE = user.PHONE;
        this.userdetailsorig.PWD = user.PWD;
		//this.userdetailsorig.ID = 2;
	//	this.context.ADMININFOes.add(this.userdetailsorig);
		console.log(user);
        this.context.saveChanges().then(function () {
            _this.router.navigate(['manageadmins']);
        });
		
       

		}

}
