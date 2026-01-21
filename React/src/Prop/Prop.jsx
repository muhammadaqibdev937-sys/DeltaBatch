function Props({ title, price}) {
  //  features = [] default assignment to protect from failure or app crash
  // when we want to pass array best way to use map
  // const feat = features.map((features) => (
  //   <li key={features}>{features}</li>
  // ));

  return (
    <>
      <h3>{title}</h3>
      <h3>{price}</h3>
      {/* {price>3000?<p>discount is 5%</p>:''} */}
      {price>3000&&<p>discount is 5%</p>}
      {/* we can also our conditional like this and directly print our conditional */}
      {/* <ul>
        {feat}
      </ul>

      <h3>{opt?.a}</h3> */}
    </>
  );
        // if(price>30000)
        // {
        // return (
        //     <>
        //       <h3>{title}</h3>
        //       <h3>{price}</h3>
        //     <p>discount is 5%</p>
        
        //       {/* <ul>
        //         {feat}
        //       </ul>
        
        //       <h3>{opt?.a}</h3> */}
        //     </>
        //   );
        // }
        // else{
        // return (
        //     <>
        //       <h3>{title}</h3>
        //       <h3>{price}</h3>
        
        //     </>
        //   );
        // }
    //  const prices=price>30000?"discount is 5%":" "
    // return (
    //     <>
    //       <h3>{title}</h3>
    //       <h3>{price}</h3>
    //      <p>{prices}</p>  
    // {/* doing this every time create an empty div */}
        
    //     </>
    //   );
          
}

export { Props };
