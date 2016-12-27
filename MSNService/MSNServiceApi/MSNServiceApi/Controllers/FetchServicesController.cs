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
//using MSNServiceApi.Types;
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
        public IEnumerable<dynamic> GetFetchServices(string search)
        {
            //return db.SERVICESUBCATEGORies.Where(x => (x.NAME.ToLower().Contains(search.ToLower()) || x.DESCRIPTION.ToLower().Contains(search.ToLower()))).ToList<SERVICESUBCATEGORY>();

            // var result = db.SERVICESUBCATEGORies.Where(x => x.NAME.ToLower().Contains(search.ToLower())).ToList();


            //var result = db.SERVICESUBCATEGORies.Where(x => x.NAME.ToLower().Contains(search.ToLower())).
            //    Select(x=>new Services{ID= x.ID, NAME=x.NAME }).ToList();


            var result = db.SERVICESUBCATEGORies.Where(x => x.NAME.ToLower().Contains(search.ToLower())).
                Select(x => new { x.ID, x.NAME }).ToList();

            return result;
        }

    }
}
