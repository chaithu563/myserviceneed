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
    public class CITiesController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/CITies
				public IEnumerable<CITY> GetCITies()
        {
            return db.CITies.ToList();
        }

        // GET: api/CITies/5
        [ResponseType(typeof(CITY))]
        public async Task<IHttpActionResult> GetCITY(decimal id)
        {
            CITY cITY = await db.CITies.FindAsync(id);
            if (cITY == null)
            {
                return NotFound();
            }

            return Ok(cITY);
        }

        // PUT: api/CITies/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCITY(decimal id, CITY cITY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cITY.ID)
            {
                return BadRequest();
            }

            db.Entry(cITY).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CITYExists(id))
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

        // POST: api/CITies
        [ResponseType(typeof(CITY))]
        public async Task<IHttpActionResult> PostCITY(CITY cITY)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CITies.Add(cITY);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cITY.ID }, cITY);
        }

        // DELETE: api/CITies/5
        [ResponseType(typeof(CITY))]
        public async Task<IHttpActionResult> DeleteCITY(decimal id)
        {
            CITY cITY = await db.CITies.FindAsync(id);
            if (cITY == null)
            {
                return NotFound();
            }

            db.CITies.Remove(cITY);
            await db.SaveChangesAsync();

            return Ok(cITY);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CITYExists(decimal id)
        {
            return db.CITies.Count(e => e.ID == id) > 0;
        }
    }
}