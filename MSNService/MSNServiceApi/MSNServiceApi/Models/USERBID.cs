
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
    
public partial class USERBID
{

    public decimal ID { get; set; }

    public string USERID { get; set; }

    public Nullable<int> BIDS { get; set; }



    public virtual AspNetUser AspNetUser { get; set; }

}

}
