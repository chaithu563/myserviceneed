export interface AppConfig {
  oDataEndPoint: string;
  oDataProvider: string;
  MSNServiceApi: string;
	MSNHost: string;
}

export const MSN_DI_CONFIG: AppConfig = {
  oDataEndPoint: 'http://localhost/MSNAdmin/odata',
  oDataProvider: 'oData',
 // MSNServiceApi: 'http://localhost/MSNServiceApi/api/',
	//MSNHost:'http://localhost/MSNServiceApi/'

  MSNServiceApi: 'http://msnapi.azurewebsites.net/api/',
  MSNHost: 'http://msnapi.azurewebsites.net/'

};
