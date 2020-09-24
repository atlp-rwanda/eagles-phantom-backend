const user =[{   
    DriverName : "Karyango",
    HomeCity : "Biryogo",
    DriverId:123,
    DriverMainRoad:"Kimironko-Remera"
  },
  {   
    DriverName : "Nzabamwita",
    HomeCity : "Migina",
    DriverId:456,
    DriverMainRoad:"KigaliCity-Kabeza"
  },
  {   
    DriverName : "Kamali",
    HomeCity : "Nyacyonga",
    DriverId:1883,
    DriverMainRoad:"Nyacyonga-Gatsata"
  },
  
  ] ;

  const getInfo=(req, res) =>{
    

    res.json({Drivers : user,userInfo : req.user});
  }
export default getInfo;