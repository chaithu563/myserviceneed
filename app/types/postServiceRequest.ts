export interface IPostData {
	 title: string;
	 description: string;
	 mobile: string;
	 username: string;
	 address: string;
	 servicestartdate: Object;
	 serviceenddate: Object;
	 service_start_time: Date;
	 latitude: number;
	 longitude: number;
	 zoom: number;
	 uploadedimages: Object;
	 servicesubcategoryid: number;
}


export class PostData implements IPostData {

	title: string;
	 description: string;
	 mobile: string;
	 username: string;
	 address: string;
	 servicestartdate: Object;
	 serviceenddate: Object;
	 service_start_time: Date;
	 latitude: Object;
	 longitude: Object;
	 zoom: Object;
	 uploadedimages: Object;
	 servicesubcategoryid: number;

	constructor() {

		this.title = '';
		this.description = '';

		this.mobile = '';
		this.username = '';
		this.address = '';
		this.servicestartdate = '';
		this.serviceenddate = '';
		this.service_start_time = new Date();
		this.latitude = 0;
		this.longitude = 0;
		this.zoom = 15;
		this.servicesubcategoryid = 0;
		this.uploadedimages = [];
		}

}

