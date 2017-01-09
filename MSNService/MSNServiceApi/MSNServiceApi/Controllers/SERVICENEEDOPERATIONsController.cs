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
using System.Web.Http.Description;
using MSNServiceApi.Models;

namespace MSNServiceApi.Controllers
{
    public class SERVICENEEDOPERATIONsController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/SERVICENEEDOPERATIONs
        public IQueryable<USERSERVICENEED> GetUSERSERVICENEEDs()
        {
            return db.USERSERVICENEEDs;
        }

        // GET: api/SERVICENEEDOPERATIONs/5
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

        // PUT: api/SERVICENEEDOPERATIONs/5
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

        // POST: api/SERVICENEEDOPERATIONs
        [ResponseType(typeof(USERSERVICENEED))]
        public async Task<IHttpActionResult> PostUSERSERVICENEED(USERSERVICENEED uSERSERVICENEED)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICENEEDs.Add(uSERSERVICENEED);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = uSERSERVICENEED.ID }, uSERSERVICENEED);
        }

        // DELETE: api/SERVICENEEDOPERATIONs/5
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


    }
}