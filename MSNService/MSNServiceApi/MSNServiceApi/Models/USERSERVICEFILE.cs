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
    
    public partial class USERSERVICEFILE
    {
        public decimal ID { get; set; }
        public Nullable<decimal> USERSERVICEID { get; set; }
        public string FILEPUBLICKKEY { get; set; }
    
        public virtual USERSERVICE USERSERVICE { get; set; }
    }
}
