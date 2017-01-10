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

namespace MSNServiceApi.Controllers
{
    public class USERSERVICENEEDsController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/USERSERVICENEEDs
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs()
        {
            return db.USERSERVICENEEDs;
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

        // PUT: api/USERSERVICENEEDs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUSERSERVICENEED(decimal id, USERSERVICENEED uSERSERVICENEED)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSERSERVICENEED.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERSERVICENEED).State = EntityState.Modified;

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

					USERSERVICETIMERECORD time = new USERSERVICETIMERECORD();

					time.SERVICEBOOKEDDATE = DateTime.Today;
					//time.SERVICESTARTDATE = new DateTime(details["servicestartdate"].year, details["servicestartdate"].month, details["servicestartdate"].day);
					//time.SERVICEENDDATE = new DateTime(details["serviceenddate"].year, details["serviceenddate"].month, details["serviceenddate"].day);
					var d = details["servicestartdate"].momentObj;

					time.SERVICESTARTDATE = Convert.ToDateTime(d);
					time.SERVICEENDDATE = Convert.ToDateTime(details["serviceenddate"].momentObj);



					time.SERVICESTARTTIME = Convert.ToDateTime(details["service_start_time"]).TimeOfDay;
					time.SERVICEENDTIME = null;

					ob.USERSERVICETIMERECORD = time;

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