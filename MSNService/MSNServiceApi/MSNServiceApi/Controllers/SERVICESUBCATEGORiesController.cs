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
    public class SERVICESUBCATEGORiesController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/SERVICESUBCATEGORies
        public IQueryable<SERVICESUBCATEGORY> GetSERVICESUBCATEGORies()
        {
            return db.SERVICESUBCATEGORies;
        }

        // GET: api/SERVICESUBCATEGORies/5
        [ResponseType(typeof(SERVICESUBCATEGORY))]
        public  dynamic GetSERVICESUBCATEGORY(decimal id)
        {
					PseudoSERVICESUBCATEGORY sERVICESUBCATEGORY = db.SERVICESUBCATEGORies.Select(xd => new
								PseudoSERVICESUBCATEGORY
					{
						ID = xd.ID,
						NAME = xd.NAME,
						DESCRIPTION = xd.DESCRIPTION,



					}).First(x=>x.ID==id);
								
            if (sERVICESUBCATEGORY == null)
            {
                return NotFound();
            }

            return (sERVICESUBCATEGORY);
        }

        // PUT: api/SERVICESUBCATEGORies/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSERVICESUBCATEGORY(decimal id, SERVICESUBCATEGORY sERVICESUBCATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sERVICESUBCATEGORY.ID)
            {
                return BadRequest();
            }

            db.Entry(sERVICESUBCATEGORY).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SERVICESUBCATEGORYExists(id))
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

        // POST: api/SERVICESUBCATEGORies
        [ResponseType(typeof(SERVICESUBCATEGORY))]
        public async Task<IHttpActionResult> PostSERVICESUBCATEGORY(SERVICESUBCATEGORY sERVICESUBCATEGORY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SERVICESUBCATEGORies.Add(sERVICESUBCATEGORY);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sERVICESUBCATEGORY.ID }, sERVICESUBCATEGORY);
        }

        // DELETE: api/SERVICESUBCATEGORies/5
        [ResponseType(typeof(SERVICESUBCATEGORY))]
        public async Task<IHttpActionResult> DeleteSERVICESUBCATEGORY(decimal id)
        {
            SERVICESUBCATEGORY sERVICESUBCATEGORY = await db.SERVICESUBCATEGORies.FindAsync(id);
            if (sERVICESUBCATEGORY == null)
            {
                return NotFound();
            }

            db.SERVICESUBCATEGORies.Remove(sERVICESUBCATEGORY);
            await db.SaveChangesAsync();

            return Ok(sERVICESUBCATEGORY);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICESUBCATEGORYExists(decimal id)
        {
            return db.SERVICESUBCATEGORies.Count(e => e.ID == id) > 0;
        }
    }

		//public class PseudoSERVICESUBCATEGORYOther : SERVICESUBCATEGORY { }
}