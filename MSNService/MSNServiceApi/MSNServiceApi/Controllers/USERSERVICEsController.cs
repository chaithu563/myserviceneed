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
    public class USERSERVICEsController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/USERSERVICEs
        public IQueryable<USERSERVICE> GetUSERSERVICEs()
        {
            return db.USERSERVICEs;
        }

        // GET: api/USERSERVICEs/5
        [ResponseType(typeof(USERSERVICE))]
        public async Task<IHttpActionResult> GetUSERSERVICE(decimal id)
        {
            USERSERVICE uSERSERVICE = await db.USERSERVICEs.FindAsync(id);
            if (uSERSERVICE == null)
            {
                return NotFound();
            }

            return Ok(uSERSERVICE);
        }

        // PUT: api/USERSERVICEs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUSERSERVICE(decimal id, USERSERVICE uSERSERVICE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSERSERVICE.ID)
            {
                return BadRequest();
            }

            db.Entry(uSERSERVICE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERSERVICEExists(id))
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

        // POST: api/USERSERVICEs
        [ResponseType(typeof(USERSERVICE))]
        public async Task<IHttpActionResult> PostUSERSERVICE(USERSERVICE uSERSERVICE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERSERVICEs.Add(uSERSERVICE);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = uSERSERVICE.ID }, uSERSERVICE);
        }

        // DELETE: api/USERSERVICEs/5
        [ResponseType(typeof(USERSERVICE))]
        public async Task<IHttpActionResult> DeleteUSERSERVICE(decimal id)
        {
            USERSERVICE uSERSERVICE = await db.USERSERVICEs.FindAsync(id);
            if (uSERSERVICE == null)
            {
                return NotFound();
            }

            db.USERSERVICEs.Remove(uSERSERVICE);
            await db.SaveChangesAsync();

            return Ok(uSERSERVICE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERSERVICEExists(decimal id)
        {
            return db.USERSERVICEs.Count(e => e.ID == id) > 0;
        }
    }
}