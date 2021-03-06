﻿using MSNServiceApi.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.Facebook;
using Microsoft.Owin.Security.Google;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using MSNServiceApi.Models;

[assembly: OwinStartup(typeof(MSNServiceApi.Startup))]

namespace MSNServiceApi
{
    public class Startup
    {
        public static OAuthBearerAuthenticationOptions OAuthBearerOptions { get; private set; }
        public static GoogleOAuth2AuthenticationOptions googleAuthOptions { get; private set; }
        public static FacebookAuthenticationOptions facebookAuthOptions { get; private set; }
				public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

				public static string PublicClientId { get; private set; }
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            ConfigureOAuth(app);
					//	config.EnableCors();
            WebApiConfig.Register(config);
						//app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
						
            app.UseWebApi(config);
          //  Database.SetInitializer(new MigrateDatabaseToLatestVersion<AuthContext, Migrations.Configuration>());

        }

        public void ConfigureOAuth(IAppBuilder app)
        {
					// Configure the db context and user manager to use a single instance per request
					app.CreatePerOwinContext(ApplicationDbContext.Create);
					app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);

            //use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseExternalSignInCookie(Microsoft.AspNet.Identity.DefaultAuthenticationTypes.ExternalCookie);
            OAuthBearerOptions = new OAuthBearerAuthenticationOptions();
						// Configure the application for OAuth based flow
						PublicClientId = "self";
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {

                AllowInsecureHttp = true,
								AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin"),
                TokenEndpointPath = new PathString("/token"),
								//AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(30),
								AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
							//	Provider = new SimpleAuthorizationServerProvider(),
								Provider = new ApplicationOAuthProvider(PublicClientId),
              // RefreshTokenProvider = new SimpleRefreshTokenProvider()
            };

            // Token Generation
						app.UseOAuthAuthorizationServer(OAuthServerOptions);
						app.UseOAuthBearerAuthentication(OAuthBearerOptions);
						// Enable the application to use bearer tokens to authenticate users
						//app.UseOAuthBearerTokens(OAuthServerOptions);

            //Configure Google External Login
            googleAuthOptions = new GoogleOAuth2AuthenticationOptions()
            {
                ClientId = "765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com",
                ClientSecret = "cHgKIHW92uBhKvXt8uajfVAU",
                Provider = new GoogleAuthProvider()
            };
            app.UseGoogleAuthentication(googleAuthOptions);

            //Configure Facebook External Login
            facebookAuthOptions = new FacebookAuthenticationOptions()
            {
                AppId = "1520026344681982",
                AppSecret = "17c3ea26f2daa2f61b17b4cb3cf6ca19",
                Provider = new FacebookAuthenticationProvider()
            };
            app.UseFacebookAuthentication(facebookAuthOptions);

        }
    }

}