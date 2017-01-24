﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

public partial class ADMININFO
{
    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string EMAIL { get; set; }
    public string PHONE { get; set; }
    public string PWD { get; set; }
}

public partial class CITY
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public CITY()
    {
        this.CITYAREAs = new HashSet<CITYAREA>();
        this.USERINFOes = new HashSet<USERINFO>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<CITYAREA> CITYAREAs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERINFO> USERINFOes { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class CITYAREA
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public CITYAREA()
    {
        this.USERINFOes = new HashSet<USERINFO>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }
    public Nullable<decimal> CITYID { get; set; }

    public virtual CITY CITY { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERINFO> USERINFOes { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class MEMBERSHIP
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public MEMBERSHIP()
    {
        this.USERMEMBERSHIPs = new HashSet<USERMEMBERSHIP>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERMEMBERSHIP> USERMEMBERSHIPs { get; set; }
}

public partial class SERVICEBID
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SERVICEBID()
    {
        this.SERVICEBIDNEEDFILES = new HashSet<SERVICEBIDNEEDFILE>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public Nullable<decimal> USERSERVICENEEDID { get; set; }
    public string BIDTITLE { get; set; }
    public string BIDDESCRIPTION { get; set; }
    public Nullable<decimal> BIDAMOUNT { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<SERVICEBIDNEEDFILE> SERVICEBIDNEEDFILES { get; set; }
    public virtual USERINFO USERINFO { get; set; }
    public virtual USERSERVICENEED USERSERVICENEED { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class SERVICEBIDNEEDFILE
{
    public decimal ID { get; set; }
    public Nullable<decimal> BIDID { get; set; }
    public string FILEPUBLICKKEY { get; set; }

    public virtual SERVICEBID SERVICEBID { get; set; }
}

public partial class SERVICECATEGORY
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SERVICECATEGORY()
    {
        this.SERVICESUBCATEGORies = new HashSet<SERVICESUBCATEGORY>();
        this.USERSERVICEs = new HashSet<USERSERVICE>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<SERVICESUBCATEGORY> SERVICESUBCATEGORies { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class SERVICESTATE
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SERVICESTATE()
    {
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public int ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class SERVICESUBCATEGORY
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SERVICESUBCATEGORY()
    {
        this.USERSERVICEs = new HashSet<USERSERVICE>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }
    public string IMAGEPUBLICKEY { get; set; }
    public string ICONPUBLICKEY { get; set; }
    public Nullable<decimal> SERVICECATEGORYID { get; set; }

    public virtual SERVICECATEGORY SERVICECATEGORY { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class SERVICETIMETYPE
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SERVICETIMETYPE()
    {
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public int ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class SOCIALLOGIN
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public SOCIALLOGIN()
    {
        this.USERINFOes = new HashSet<USERINFO>();
    }

    public int ID { get; set; }
    public string NAME { get; set; }
    public string DESCRIPTION { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERINFO> USERINFOes { get; set; }
}

public partial class USERBID
{
    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public Nullable<int> BIDS { get; set; }

    public virtual USERINFO USERINFO { get; set; }
}

public partial class USERFUND
{
    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public Nullable<decimal> BALANCE { get; set; }

    public virtual USERINFO USERINFO { get; set; }
}

public partial class USERINFO
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public USERINFO()
    {
        this.SERVICEBIDs = new HashSet<SERVICEBID>();
        this.USERBIDS = new HashSet<USERBID>();
        this.USERFUNDS = new HashSet<USERFUND>();
        this.USERMEMBERSHIPs = new HashSet<USERMEMBERSHIP>();
        this.USERPWDs = new HashSet<USERPWD>();
        this.USERSERVICEs = new HashSet<USERSERVICE>();
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public string NAME { get; set; }
    public string EMAIL { get; set; }
    public string PHONE { get; set; }
    public Nullable<decimal> CITYID { get; set; }
    public Nullable<decimal> CITYAREAID { get; set; }
    public Nullable<int> LOGINTYPEID { get; set; }
    public string CURRENTLOCATION { get; set; }
    public Nullable<double> USERLOCATIONLATITUDE { get; set; }
    public Nullable<double> USERLOCATIONLONGITUDE { get; set; }

    public virtual CITY CITY { get; set; }
    public virtual CITYAREA CITYAREA { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<SERVICEBID> SERVICEBIDs { get; set; }
    public virtual SOCIALLOGIN SOCIALLOGIN { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERBID> USERBIDS { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERFUND> USERFUNDS { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERMEMBERSHIP> USERMEMBERSHIPs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERPWD> USERPWDs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICE> USERSERVICEs { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}

public partial class USERMEMBERSHIP
{
    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public Nullable<decimal> MEMBERSHIPID { get; set; }
    public Nullable<System.DateTime> STARTDATE { get; set; }
    public Nullable<System.DateTime> ENDDATE { get; set; }
    public string COMMENTS { get; set; }

    public virtual MEMBERSHIP MEMBERSHIP { get; set; }
    public virtual USERINFO USERINFO { get; set; }
}

public partial class USERPWD
{
    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public string PWD { get; set; }

    public virtual USERINFO USERINFO { get; set; }
}

public partial class USERSERVICE
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public USERSERVICE()
    {
        this.USERSERVICEFILES = new HashSet<USERSERVICEFILE>();
    }

    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public Nullable<decimal> SERVICECATEGORYID { get; set; }
    public Nullable<decimal> SERVICESUBCATEGORYID { get; set; }

    public virtual SERVICECATEGORY SERVICECATEGORY { get; set; }
    public virtual SERVICESUBCATEGORY SERVICESUBCATEGORY { get; set; }
    public virtual USERINFO USERINFO { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICEFILE> USERSERVICEFILES { get; set; }
}

public partial class USERSERVICEFILE
{
    public decimal ID { get; set; }
    public Nullable<decimal> USERSERVICEID { get; set; }
    public string FILEPUBLICKKEY { get; set; }

    public virtual USERSERVICE USERSERVICE { get; set; }
}

public partial class USERSERVICENEED
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public USERSERVICENEED()
    {
        this.SERVICEBIDs = new HashSet<SERVICEBID>();
        this.USERSERVICENEEDFILES = new HashSet<USERSERVICENEEDFILE>();
    }

    public decimal ID { get; set; }
    public Nullable<decimal> USERID { get; set; }
    public string SERVICELOCATIONADDRESS { get; set; }
    public string SERVICETITLE { get; set; }
    public string SERVICEDESCRIPTION { get; set; }
    public Nullable<decimal> SERVICECATEGORYID { get; set; }
    public Nullable<decimal> SERVICESUBCATEGORYID { get; set; }
    public Nullable<decimal> MINBUDGET { get; set; }
    public Nullable<decimal> MAXBUDGET { get; set; }
    public Nullable<int> SERVICESTATE { get; set; }
    public Nullable<int> SERVICETIMETYPE { get; set; }
    public Nullable<double> LOCATIONLATITUDE { get; set; }
    public Nullable<double> LOCATIONLONGITUDE { get; set; }
    public Nullable<decimal> SERVICECITYID { get; set; }
    public Nullable<decimal> SERVICECITYAREAID { get; set; }
    public Nullable<decimal> USERSERVICETIMERECORDID { get; set; }
    public Nullable<decimal> ALLOCATEDBIDID { get; set; }

    public virtual CITY CITY { get; set; }
    public virtual CITYAREA CITYAREA { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<SERVICEBID> SERVICEBIDs { get; set; }
    public virtual SERVICEBID SERVICEBID { get; set; }
    public virtual SERVICECATEGORY SERVICECATEGORY { get; set; }
    public virtual SERVICESTATE SERVICESTATE1 { get; set; }
    public virtual SERVICESUBCATEGORY SERVICESUBCATEGORY { get; set; }
    public virtual SERVICETIMETYPE SERVICETIMETYPE1 { get; set; }
    public virtual USERINFO USERINFO { get; set; }
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEEDFILE> USERSERVICENEEDFILES { get; set; }
    public virtual USERSERVICETIMERECORD USERSERVICETIMERECORD { get; set; }
}

public partial class USERSERVICENEEDFILE
{
    public decimal ID { get; set; }
    public Nullable<decimal> SERVICEID { get; set; }
    public string FILEPUBLICKKEY { get; set; }

    public virtual USERSERVICENEED USERSERVICENEED { get; set; }
}

public partial class USERSERVICETIMERECORD
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public USERSERVICETIMERECORD()
    {
        this.USERSERVICENEEDs = new HashSet<USERSERVICENEED>();
    }

    public decimal ID { get; set; }
    public Nullable<System.DateTime> SERVICEBOOKEDDATE { get; set; }
    public Nullable<System.DateTime> SERVICESTARTDATE { get; set; }
    public Nullable<System.DateTime> SERVICEENDDATE { get; set; }
    public Nullable<System.TimeSpan> SERVICESTARTTIME { get; set; }
    public Nullable<System.TimeSpan> SERVICEENDTIME { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<USERSERVICENEED> USERSERVICENEEDs { get; set; }
}
