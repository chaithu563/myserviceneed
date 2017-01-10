export interface IPostData {
	 title: string;
	 descrption: string;
	 mobile: string;
	 username: string;
	 address: string;
	 servicestartdate: Object;
	 serviceenddate: Object;
	 service_start_time: Date;



}


export class PostData implements IPostData {

	title: string;
	 descrption: string;
	 mobile: string;
	 username: string;
	 address: string;
	 servicestartdate: Object;
	 serviceenddate: Object;
	 service_start_time: Date;

	constructor() {

		this.title = '';
		this.descrption = '';

		this.mobile = '';
		this.username = '';
		this.address = '';
		this.servicestartdate = '';
		this.serviceenddate = '';
		this.service_start_time = new Date();
		}

}

