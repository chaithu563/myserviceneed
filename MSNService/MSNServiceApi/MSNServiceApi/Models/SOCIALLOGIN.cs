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
    
    public partial class SOCIALLOGIN
    {
        public SOCIALLOGIN()
        {
            this.Clients = new HashSet<Client>();
        }
    
        public int ID { get; set; }
        public string NAME { get; set; }
        public string DESCRIPTION { get; set; }
    
        public virtual ICollection<Client> Clients { get; set; }
    }
}
