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
    
    public partial class USERINFO
    {
        public USERINFO()
        {
            this.SERVICEBIDs = new HashSet<SERVICEBID>();
            this.USERBIDS = new HashSet<USERBID>();
            this.USERFUNDS = new HashSet<USERFUND>();
            this.USERMEMBERSHIPs = new HashSet<USERMEMBERSHIP>();
            this.USERSERVICEs = new HashSet<USERSERVICE>();
            this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
        }
    
        public decimal ID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EMAIL { get; set; }
        public Nullable<bool> GENDER { get; set; }
        public string PHONE { get; set; }
        public Nullable<decimal> CITYID { get; set; }
        public Nullable<decimal> CITYAREAID { get; set; }
        public Nullable<int> LOGINTYPEID { get; set; }
        public string CURRENTLOCATION { get; set; }
        public Nullable<double> USERLOCATIONLATITUDE { get; set; }
        public Nullable<double> USERLOCATIONLONGITUDE { get; set; }
    
        public virtual CITY CITY { get; set; }
        public virtual CITYAREA CITYAREA { get; set; }
        public virtual ICollection<SERVICEBID> SERVICEBIDs { get; set; }
        public virtual SOCIALLOGIN SOCIALLOGIN { get; set; }
        public virtual ICollection<USERBID> USERBIDS { get; set; }
        public virtual ICollection<USERFUND> USERFUNDS { get; set; }
        public virtual ICollection<USERMEMBERSHIP> USERMEMBERSHIPs { get; set; }
        public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
        public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
    }
}
