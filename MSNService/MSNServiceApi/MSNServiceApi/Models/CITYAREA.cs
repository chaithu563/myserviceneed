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
    
    public partial class CITYAREA
    {
        public CITYAREA()
        {
            this.Clients = new HashSet<Client>();
            this.USERINFOes = new HashSet<USERINFO>();
            this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
        }
    
        public decimal ID { get; set; }
        public string NAME { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<decimal> CITYID { get; set; }
    
        public virtual CITY CITY { get; set; }
        public virtual ICollection<Client> Clients { get; set; }
        public virtual ICollection<USERINFO> USERINFOes { get; set; }
        public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
    }
}
