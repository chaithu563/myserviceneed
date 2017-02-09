//using MSNServiceApi.Entities;
using MSNServiceApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace MSNServiceApi
{

		//public class AuthRepository : IDisposable
		//{
		//		private MSNEntities _ctx;

		//		private UserManager<User> _userManager;

		//		public AuthRepository()
		//		{
		//				_ctx = new MSNEntities();
		//				//  _userManager = new UserManager<USERINFO >(new UserStore<USERINFO >(_ctx));
		//				_userManager = new UserManager<User>(new UserStore<User>(_ctx));
		//		}

		//		public async Task<IdentityResult> RegisterUser(User userModel)
		//		{
		//				User   user = new User 
		//				{
		//						UserName = userModel.UserName
		//				};

		//				var result = await _userManager.CreateAsync(user, userModel.PasswordHash);

		//				return result;
		//		}

		//		public  User FindUser(string userName, string password)
		//		{

		//				//USERINFO  user =  _userManager.Find(userName, password)

		//				string name =  _userManager.Find(userName, password).UserName;
		//				var info = new User();
		//				info.UserName = name;
           
		//				return info ;
		//		}

		//		public Client FindClient(string clientId)
		//		{
		//				var client = _ctx.Clients.Find(clientId);

		//				return client;
		//		}

		//		public async Task<bool> AddRefreshToken(RefreshToken token)
		//		{

		//			 var existingToken = _ctx.RefreshTokens.Where(r => r.Subject == token.Subject && r.ClientId == token.ClientId).SingleOrDefault();

		//			 if (existingToken != null)
		//			 {
		//				 var result = await RemoveRefreshToken(existingToken);
		//			 }
          
		//				_ctx.RefreshTokens.Add(token);

		//				return await _ctx.SaveChangesAsync() > 0;
		//		}

		//		public async Task<bool> RemoveRefreshToken(string refreshTokenId)
		//		{
		//			 var refreshToken = await _ctx.RefreshTokens.FindAsync(refreshTokenId);

		//			 if (refreshToken != null) {
		//					 _ctx.RefreshTokens.Remove(refreshToken);
		//					 return await _ctx.SaveChangesAsync() > 0;
		//			 }

		//			 return false;
		//		}

		//		public async Task<bool> RemoveRefreshToken(RefreshToken refreshToken)
		//		{
		//				_ctx.RefreshTokens.Remove(refreshToken);
		//				 return await _ctx.SaveChangesAsync() > 0;
		//		}

		//		public async Task<RefreshToken> FindRefreshToken(string refreshTokenId)
		//		{
		//				var refreshToken = await _ctx.RefreshTokens.FindAsync(refreshTokenId);

		//				return refreshToken;
		//		}

		//		public List<RefreshToken> GetAllRefreshTokens()
		//		{
		//				 return  _ctx.RefreshTokens.ToList();
		//		}

		//		public async Task<User > FindAsync(UserLoginInfo loginInfo)
		//		{
		//				User  user = await _userManager.FindAsync(loginInfo);

		//				return user;
		//		}

		//		public async Task<IdentityResult> CreateAsync(User  user)
		//		{
		//				var result = await _userManager.CreateAsync(user);

		//				return result;
		//		}

		//		public async Task<IdentityResult> AddLoginAsync(string userId, UserLoginInfo login)
		//		{
		//				var result = await _userManager.AddLoginAsync(userId, login);

		//				return result;
		//		}

		//		public void Dispose()
		//		{
		//				_ctx.Dispose();
		//				_userManager.Dispose();

		//		}
		//}
}