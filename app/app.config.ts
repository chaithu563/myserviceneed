export interface AppConfig {
  oDataEndPoint: string;
	oDataProvider: string;
}

export const MSN_DI_CONFIG: AppConfig = {
  oDataEndPoint: 'http://localhost/MSNAdmin/odata',
	oDataProvider:'oData'
};
