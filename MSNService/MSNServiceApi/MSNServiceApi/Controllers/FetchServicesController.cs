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
    public class FetchServicesController : ApiController
    {
        private MSNEntities db = new MSNEntities();

        // GET: api/SERVICECATEGORies
        public IEnumerable<SERVICESUBCATEGORY> GetFetchServices()
        {
            return db.SERVICESUBCATEGORies.ToList();
        }

        // GET: api/SERVICECATEGORies/5
        [ResponseType(typeof(SERVICESUBCATEGORY))]
        public IEnumerable<SERVICESUBCATEGORY> GetFetchServices(string search)
        {
            //SERVICESUBCATEGORY sERVICESUBCATEGORY = await db.SERVICESUBCATEGORies.Where(x=>x.NAME.Contains (search)).ToListAsync();
            //if (sERVICESUBCATEGORY == null)
            //{
            //    return NotFound();
            //}

            return db.SERVICESUBCATEGORies.Where(x => x.NAME.ToLower().Contains(search.ToLower())).ToList<SERVICESUBCATEGORY>();
        }

    }
}
