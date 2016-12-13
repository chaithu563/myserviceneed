import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_PROVIDERS } from './services/index';
import { AppModule } from './app.module';
import { MSN_DI_CONFIG } from './app.config';
import {provide, bind} from '@angular/core';
import {APP_BASE_HREF} from '@angular/router';
import 'rxjs/Rx'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, APP_PROVIDERS, MSN_DI_CONFIG);
