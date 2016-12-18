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
    public class SERVICECATEGORiesController : ApiController
    {
        private MSNEntities db = new MSNEntities();
        
        // GET: api/SERVICECATEGORies
        public IEnumerable<SERVICECATEGORY> GetSERVICECATEGORies()
        {
            return db.SERVICECATEGORies.ToList();
        }

        // GET: api/SERVICECATEGORies/5
        [ResponseType(typeof(SERVICECATEGORY))]
        public async Task<IHttpActionResult> GetSERVICECATEGORY(decimal id)
        {
            SERVICECATEGORY sERVICECATEGORY = await db.SERVICECATEGORies.FindAsync(id);
            if (sERVICECATEGORY == null)
            {
                return NotFound();
            }

            return Ok(sERVICECATEGORY);
        }

      
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SERVICECATEGORYExists(decimal id)
        {
            return db.SERVICECATEGORies.Count(e => e.ID == id) > 0;
        }
    }
}