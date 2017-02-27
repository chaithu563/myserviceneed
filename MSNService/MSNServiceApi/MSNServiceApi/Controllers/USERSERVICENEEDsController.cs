using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using MSNServiceApi.Models;
using Newtonsoft.Json;
using System.Data.Entity.Core.Objects;
using System.Globalization;

namespace MSNServiceApi.Controllers
{
	public class USERSERVICENEEDsController : ApiController
	{
		private MSNEntities db = new MSNEntities();

		// GET: api/USERSERVICENEEDs
		public dynamic GetUSERSERVICENEEDs()
		{
			var result = db.USERSERVICENEEDs.Select(x => new
			{
				x.ID,
				x.SERVICETITLE,
				x.SERVICEDESCRIPTION,
				x.SERVICELOCATIONADDRESS,
				x.LOCATIONLATITUDE,
				x.LOCATIONLONGITUDE,
				x.USERSERVICETIMERECORD.SERVICEBOOKEDDATE,
				x.USERSERVICETIMERECORD.SERVICESTARTDATE,
				x.USERSERVICETIMERECORD.SERVICESTARTTIME,
				x.AspNetUser.UserName,
				x.AspNetUser.PhoneNumber
			});

			return result;

		}

        // GET: api/USERSERVICENEEDs/5
        [ResponseType(typeof(USERSERVICENEED))]
        public async Task<IHttpActionResult> GetUSERSERVICENEED(decimal id)
        {
            USERSERVICENEED uSERSERVICENEED = await db.USERSERVICENEEDs.FindAsync(id);
            if (uSERSERVICENEED == null)
            {
                return NotFound();
            }

            return Ok(uSERSERVICENEED);
        }

        // GET: api/USERSERVICENEEDs/5
        [ResponseType(typeof(USERSERVICENEED))]
		public object GetUSERSERVICENEED(string query)
		{
			dynamic filters = JsonConvert.DeserializeObject<dynamic>(query);

			var result = db.USERSERVICENEEDs.AsQueryable();

            if (filters["userid"] != null && filters["userid"].ToString() != "")
            {
                string userid = Convert.ToString(filters["userid"]);
                result = result.Where(x => x.USERID == userid).AsQueryable();

            }
            else {
                result = result.Where(x => (DbFunctions.TruncateTime(x.USERSERVICETIMERECORD.SERVICESTARTDATE) >= EntityFunctions.TruncateTime(DateTime.Today))).AsQueryable();

                if (filters["serviceid"] != null && filters["serviceid"].ToString() != "")
                {
                    decimal serviceid = Convert.ToDecimal(filters["serviceid"]);
                    result = result.Where(x => x.SERVICESUBCATEGORYID == serviceid).AsQueryable();

                }


                if (filters["needon"] != null && filters["needtill"] != null && filters["needon"].ToString() != "" && filters["needtill"].ToString() == "")
                {
                    var needon = (DateTime)Convert.ToDateTime(filters["needon"]).ToLocalTime();
                    result = result.Where(x => (DbFunctions.TruncateTime(x.USERSERVICETIMERECORD.SERVICESTARTDATE) == EntityFunctions.TruncateTime(needon.Date))).AsQueryable();

                }
                else if (filters["needon"] != null && filters["needtill"] != null && filters["needon"].ToString() != "" && filters["needtill"].ToString() != "")
                {
                    var needon = (DateTime)Convert.ToDateTime(filters["needon"]).ToLocalTime();
                    var needtill = (DateTime)Convert.ToDateTime(filters["needtill"]).ToLocalTime();

                    result = result.Where(x =>

                        (DbFunctions.TruncateTime(x.USERSERVICETIMERECORD.SERVICESTARTDATE) >= EntityFunctions.TruncateTime(needon.Date)) &&

                        (DbFunctions.TruncateTime(x.USERSERVICETIMERECORD.SERVICESTARTDATE) <= EntityFunctions.TruncateTime(needtill.Date))

                                                                ).AsQueryable();


                }

                if (filters["bookedon"] != null && filters["bookedon"].ToString() != "")
                {
                    var bookedon = (DateTime)Convert.ToDateTime(filters["bookedon"]).ToLocalTime();
                    result = result.Where(x => (DbFunctions.TruncateTime(x.USERSERVICETIMERECORD.SERVICEBOOKEDDATE) == EntityFunctions.TruncateTime(bookedon.Date))).AsQueryable();

                }

                if (filters["nelatitude"] != null && filters["nelatitude"].ToString() != "")
                {
                    double nelatitude = Convert.ToDouble(filters["nelatitude"]);
                    double nelongitude = Convert.ToDouble(filters["nelongitude"]);
                    double swlatitude = Convert.ToDouble(filters["swlatitude"]);
                    double swlongitude = Convert.ToDouble(filters["swlongitude"]);

                    result = result.Where(x => (x.LOCATIONLATITUDE >= swlatitude) && (x.LOCATIONLATITUDE <= nelatitude) &&

                                (x.LOCATIONLONGITUDE >= swlongitude) && (x.LOCATIONLONGITUDE <= nelongitude)
                    ).AsQueryable();

                }
            }


            var finalresult = result.Select(x => new
					{
						x.ID,
						x.SERVICETITLE,
						x.SERVICEDESCRIPTION,
						x.SERVICELOCATIONADDRESS,
						x.LOCATIONLATITUDE,
						x.LOCATIONLONGITUDE,
						x.USERSERVICETIMERECORD.SERVICEBOOKEDDATE,
						x.USERSERVICETIMERECORD.SERVICESTARTDATE,
						x.USERSERVICETIMERECORD.SERVICESTARTTIME,
						x.AspNetUser.UserName,
						x.AspNetUser.PhoneNumber
					});


			return finalresult;

			// return Ok(uSERSERVICENEED);
		}

		// PUT: api/USERSERVICENEEDs/5
		[ResponseType(typeof(void))]
		public async Task<IHttpActionResult> PutUSERSERVICENEED(decimal id, dynamic details)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			//if (id != details["ID"])
			//{
			//	return BadRequest();
			//}
            USERSERVICENEED ob = db.USERSERVICENEEDs.Find(id);

            USERSERVICETIMERECORD time = new USERSERVICETIMERECORD();
            time.SERVICEBOOKEDDATE = DateTime.Today;
            time.SERVICESTARTDATE = DateTime.ParseExact(Convert.ToString(details["servicestartdate"].formatted).Replace('-', '/'), "dd/MM/yyyy", CultureInfo.InvariantCulture);
            // Convert.ToDateTime(details["servicestartdate"].formatted);
            time.SERVICEENDDATE = DateTime.ParseExact(Convert.ToString(details["serviceenddate"].formatted).Replace('-', '/'), "dd/MM/yyyy", CultureInfo.InvariantCulture);
            // Convert.ToDateTime(details["serviceenddate"].momentObj);
            //	time.SERVICESTARTTIME = Convert.ToDateTime(details["service_start_time"]).TimeOfDay;
            //var ser = new System.Web.Script.Serialization.JavaScriptSerializer();
            //ser.DeserializeObject(details);
            var starttime = details["service_start_time"];
            time.SERVICESTARTTIME = Convert.ToDateTime(starttime).ToLocalTime().TimeOfDay;
            //	time.SERVICEENDTIME = null;
            ob.USERSERVICETIMERECORD = time;

            db.Entry(ob).State = EntityState.Modified;

            try
			{
				await db.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!USERSERVICENEEDExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return StatusCode(HttpStatusCode.NoContent);
		}

		//[EnableCors]
		// POST: api/USERSERVICENEEDs
		[ResponseType(typeof(USERSERVICENEED))]
		//public async Task<IHttpActionResult> PostUSERSERVICENEED(USERSERVICENEED uSERSERVICENEED)
		public async Task<IHttpActionResult> PostUSERSERVICENEED([FromBody] dynamic details)
		{

			//chaitanya comment strat
			//if (!ModelState.IsValid)
			//{
			//		return BadRequest(ModelState);
			//}

			//db.USERSERVICENEEDs.Add(uSERSERVICENEED);
			//await db.SaveChangesAsync();

			//return CreatedAtRoute("DefaultApi", new { id = uSERSERVICENEED.ID }, uSERSERVICENEED);
			//chaitanya comment end



			USERSERVICENEED ob = new USERSERVICENEED();

			ob.SERVICETITLE = details["title"];
			ob.SERVICEDESCRIPTION = details["description"];
			ob.SERVICELOCATIONADDRESS = details["address"];
			ob.LOCATIONLATITUDE = details["latitude"];
			ob.LOCATIONLONGITUDE = details["longitude"];
			ob.SERVICESUBCATEGORYID = details["servicesubcategoryid"];

			USERSERVICETIMERECORD time = new USERSERVICETIMERECORD();
			time.SERVICEBOOKEDDATE = DateTime.Today;
            time.SERVICESTARTDATE = DateTime.ParseExact( Convert.ToString( details["servicestartdate"].formatted).Replace('-','/'), "dd/MM/yyyy", CultureInfo.InvariantCulture);
            // Convert.ToDateTime(details["servicestartdate"].formatted);
			time.SERVICEENDDATE = DateTime.ParseExact(Convert.ToString(details["serviceenddate"].formatted).Replace('-', '/'), "dd/MM/yyyy", CultureInfo.InvariantCulture);
            // Convert.ToDateTime(details["serviceenddate"].momentObj);
            //	time.SERVICESTARTTIME = Convert.ToDateTime(details["service_start_time"]).TimeOfDay;
            //var ser = new System.Web.Script.Serialization.JavaScriptSerializer();
            //ser.DeserializeObject(details);
            var starttime = details["service_start_time"];
			time.SERVICESTARTTIME = Convert.ToDateTime(starttime).ToLocalTime().TimeOfDay;
			//	time.SERVICEENDTIME = null;
			ob.USERSERVICETIMERECORD = time;
			ob.USERID = details["userid"];
			string userid = details["userid"];
			string mobile = details["mobile"];
			if (userid != null && mobile != null && mobile != "")
			{
				AspNetUser user = db.AspNetUsers.Find(userid);
				//user.UserName = details["username"];
				user.PhoneNumber = details["mobile"];
				ob.AspNetUser = user;
			}

			var uploadedimages = details["uploadedimages"];
			foreach (var image in uploadedimages)
			{
				var file = new USERSERVICENEEDFILE();
				file.FILEPUBLICKKEY = image;
				ob.USERSERVICENEEDFILES.Add(file);


			}




			db.USERSERVICENEEDs.Add(ob);
			await db.SaveChangesAsync();

			return CreatedAtRoute("DefaultApi", new { id = ob.ID }, ob);

		}

		// DELETE: api/USERSERVICENEEDs/5
		[ResponseType(typeof(USERSERVICENEED))]
		public async Task<IHttpActionResult> DeleteUSERSERVICENEED(decimal id)
		{
			USERSERVICENEED uSERSERVICENEED = await db.USERSERVICENEEDs.FindAsync(id);
			if (uSERSERVICENEED == null)
			{
				return NotFound();
			}

			db.USERSERVICENEEDs.Remove(uSERSERVICENEED);
			await db.SaveChangesAsync();

			return Ok(uSERSERVICENEED);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				db.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool USERSERVICENEEDExists(decimal id)
		{
			return db.USERSERVICENEEDs.Count(e => e.ID == id) > 0;
		}


		//public void SubmitServiceNeed(object details)
		//	{

		//USERSERVICENEED ob = new USERSERVICENEED();

		//ob.SERVICETITLE = details.Title;
		//ob.SERVICEDESCRIPTION = details.Description;
		//ob.SERVICELOCATIONADDRESS = details.address;

		//ob.USERSERVICETIMERECORD.SERVICEBOOKEDDATE = DateTime.Today;
		//ob.USERSERVICETIMERECORD.SERVICESTARTDATE =new DateTime(details.servicestartdate.year,details.servicestartdate.month,details.servicestartdate.day);
		//ob.USERSERVICETIMERECORD.SERVICEENDDATE = new DateTime(details.serviceenddate.year, details.serviceenddate.month, details.serviceenddate.day);
		//ob.USERSERVICETIMERECORD.SERVICESTARTTIME = new DateTime(details.service_start_time).TimeOfDay;
		//ob.USERSERVICETIMERECORD.SERVICEENDTIME = null;

		//	}
	}
}