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
using Newtonsoft.Json;

namespace MSNServiceApi.Controllers
{
    public class USERINFOesController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/USERINFOes
        public IQueryable<USERINFO> GetUSERINFOes()
        {
            return db.USERINFOes;
        }

        // GET: api/USERINFOes/5
        [ResponseType(typeof(USERINFO))]
        public async Task<IHttpActionResult> GetUSERINFO(decimal id)
        {
            USERINFO uSERINFO = await db.USERINFOes.FindAsync(id);
            if (uSERINFO == null)
            {
                return NotFound();
            }

            return Ok(uSERINFO);
        }

        // GET: api/USERINFOes/5
        [ResponseType(typeof(USERINFO))]
        public async Task<IHttpActionResult> GetUSERINFO(string details)
        {
            dynamic filters = JsonConvert.DeserializeObject<dynamic>(details);
            string email = filters["email"].ToString();
            string phone = filters["phone"].ToString();
            if (USERINFOExists(email, phone))
            {
                
                USERINFO info = await db.USERINFOes.FirstAsync(x => (x.EMAIL == email) || (x.PHONE == phone));
                return Ok(info);
            }
            else
            {

              return Ok( PostUSERINFO(filters));
            }
        }

        // PUT: api/USERINFOes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUSERINFO(decimal id, [FromBody] dynamic details)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //if (id != uSERINFO.ID)
            //{
            //    return BadRequest();
            //}

            //db.Entry(uSERINFO).State = EntityState.Modified;

            var ob = db.USERINFOes.First(x => x.ID == id);
            if(details["phone"]!="")
            {

                ob.PHONE = details["phone"];
            }
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERINFOExists(id))
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

        // POST: api/USERINFOes
        [ResponseType(typeof(USERINFO))]
        public async Task<IHttpActionResult> PostUSERINFO([FromBody] dynamic details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            USERINFO ob = new USERINFO();
          
            ob.NAME = details["name"];
            ob.EMAIL = details["email"];
            ob.LOGINTYPEID = details["logintype"];
            ob.PHONE = details["phone"];
            db.USERINFOes.Add(ob);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = details.ID }, ob);
        }

        // DELETE: api/USERINFOes/5
        [ResponseType(typeof(USERINFO))]
        public async Task<IHttpActionResult> DeleteUSERINFO(decimal id)
        {
            USERINFO uSERINFO = await db.USERINFOes.FindAsync(id);
            if (uSERINFO == null)
            {
                return NotFound();
            }

            db.USERINFOes.Remove(uSERINFO);
            await db.SaveChangesAsync();

            return Ok(uSERINFO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERINFOExists(decimal id)
        {
            return db.USERINFOes.Count(e => e.ID == id) > 0;
        }

        private bool USERINFOExists(string email,string phone)
        {
            if(email!=null)
            return db.USERINFOes.Count(e => e.EMAIL == email) > 0;
            else
             return db.USERINFOes.Count(e => e.PHONE == phone) > 0;
        }

    }
}