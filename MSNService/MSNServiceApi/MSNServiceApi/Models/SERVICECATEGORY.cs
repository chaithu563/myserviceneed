//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MSNServiceApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class SERVICECATEGORY
    {
        public SERVICECATEGORY()
        {
            this.SERVICESUBCATEGORies = new HashSet<SERVICESUBCATEGORY>();
            this.USERSERVICEs = new HashSet<USERSERVICE>();
            this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
        }
    
        public decimal ID { get; set; }
        public string NAME { get; set; }
        public string DESCRIPTION { get; set; }
    
        public virtual ICollection<SERVICESUBCATEGORY> SERVICESUBCATEGORies { get; set; }
        public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
        public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
    }
}
