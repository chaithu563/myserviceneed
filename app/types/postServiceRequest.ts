export interface IPostData {
	 title: string;
	 descrption: string;
	 mobile: string;
	 username: string;
	 address: string;
	 servicestartdate: Object;
	 serviceenddate: Object;
	 service_start_time: Date;
	 latitude: number;
	 longitude: number;
	 uploadedimages: Object;
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
	 latitude: Object;
	 longitude: Object;
	 uploadedimages: Object;

	constructor() {

		this.title = '';
		this.descrption = '';

		this.mobile = '';
		this.username = '';
		this.address = '';
		this.servicestartdate = '';
		this.serviceenddate = '';
		this.service_start_time = new Date();
		this.latitude = 0;
		this.longitude = 0;
		this.uploadedimages = [];
		}

}

