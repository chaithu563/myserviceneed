
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
    
public partial class SERVICEBIDNEEDFILE
{

    public decimal ID { get; set; }

    public Nullable<decimal> BIDID { get; set; }

    public string FILEPUBLICKKEY { get; set; }



    public virtual SERVICEBID SERVICEBID { get; set; }

}

}
