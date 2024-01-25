import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

// get 4 product list in array

app.get("/api/product", (req, res) => {
  const product = [
    {
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      title: "Nike Air Monarch IV",
     
     
      Price: "200",
      company: "Nike",
      color: "white",
      productname: "sneakers",
      category: "sneakers",
    },
    {
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
     
      Price: "200",
      company: "Nike",
      color: "red",
      productname: "sneakers",
      category: "men",
    },

    {
      img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
      title: "Nike Waffle One Sneaker",
   
      Price: "200",
      company: "Nike",
      color: "green",
      productname: "sneakers",
      category: "men",
    },
    {
      img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      title: "Nike Running Shoe",
      Price: "200",
      company: "Adidas",
      color: "black",
      productname: "sneakers",
      category: "men",
    },
    {
      img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
      title: "Flat Slip On Pumps",
    
      Price: "200",
      company: "Vans",
      color: "green",
      productname: "flats",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      title: "Knit Ballet Flat",
    
      Price: "50",
      company: "Adidas",
      color: "black",
      productname: "sneakers",
      category: "women",
    },

    {
      img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
      title: "Loafer Flats",
      
      Price: "50",
      company: "Vans",
      color: "white",
      productname: "sneakers",
      category: "women",
    },

    {
      img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
      title: "Nike Zoom Freak",
   
      Price: "200",
      company: "Nike",
      color: "green",
      productname: "sneakers",
      category: "men",
    },

    {
      img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
      title: "Nike Men's Sneaker",
    
      Price: "200",
      company: "Adidas",
      color: "blue",
      productname: "sneakers",
      category: "men",
    },

    {
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "PUMA BLACK-OCE",
     
      Price: "150",
      company: "Puma",
      color: "green",
      productname: "sneakers",
      category: "men",
    },
    {
      img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
      title: "Pacer Future Sneaker",
   
      Price: "150",
      company: "Puma",
      color: "red",
      productname: "sneakers",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
      title: "Unisex-Adult Super",
      
      Price: "150",
      company: "Puma",
      color: "black",
      productname: "sneakers",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
      title: "Roma Basic Sneaker",
  
      Price: "150",
      company: "Puma",
      color: "white",
      productname: "sneakers",
      category: "men",
    },
    {
      img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
      title: "Pacer Future Doubleknit",
    
      Price: "150",
      company: "Puma",
      color: "black",
      productname: "sneakers",
      category: "men",
    },

    {
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "Fusion Evo Golf Shoe",
     
      Price: "100",
      company: "Puma",
      color: "green",
      productname: "sneakers",
      category: "men",
    },
    {
      img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
      title: "Rainbow Chex Skate",
    
      Price: "100",
      company: "Vans",
      color: "red",
      productname: "sneakers",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
      title: "Low-Top Trainers",
    
      Price: "100",
      company: "Vans",
      color: "white",
      productname: "sandals",
      category: "mix",
    },
    {
      img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
      title: "Vans Unisex Low-Top",
      
      Price: "100",
      company: "Vans",
      color: "blue",
      productname: "sandals",
      category: "mix",
    },
    {
      img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
      title: "Classic Bandana Sneakers",
     
      Price: "50",
      company: "Nike",
      color: "black",
      productname: "sandals",
      category: "mix",
    },
    {
      img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
      title: "Chunky High Heel",
  
      Price: "50",
      company: "Vans",
      color: "black",
      productname: "heels",
      category: "women",
    },
    // {
    //   img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    //   title: "Slip On Stiletto High Heel",
    //   // star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "puma",
    //   color: "black",
    //   productname: "heels",
    //   category: "heels",
    // },
    {
      img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
      title: "DREAM PAIRS Court Shoes",
    
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      Price: "150",
      productname: "heels",
      company: "Nike",
      color: "red",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
     
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      Price: "200",
      company: "Nike",
      color: "red",
      productname: "heels",
      category: "women",
    },

    {
      img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
      title: "Low Mid Block Heels",
     
     
      Price: "200",
      company: "Nike",
      color: "black",
      productname: "heels",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
      title: "Chunky High Heel",
      
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      Price: "50",
      company: "Adidas",
      color: "black",
      productname: "heels",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
      title: "Amore Fashion Stilettos",
      
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      Price: "150",
      company: "Adidas",
      color: "white",
      productname: "heels",
      category: "women",
    },
    {
      img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
      title: "Bridal Sandals Glitter",
      
      Price: "50",
      company: "Adidas",
      color: "black",
      productname: "heels",
      category: "women",
    },
    {
      
      category: "mix",
      productname: "heels",
      img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
      title: "Wedding Prom Bridal",
      
      Price: "50",
      company: "Adidas",
      color: "black",
      
     
    },
    {
      
      category: "men",
      productname: "shirt",
      title: "Men Blue & White Slim Fit Striped Casual Sustainable Shirt",
      Price: 499,
      description: "",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAROYmYqLkZaAEDWDlwTRHUBWp_5z-93oJIZ6csFbpmJuGTULmuUCy1JCvxXxRf8ga4nZ_GvG0Nfbznz3kBvxJvUD1HKALyrRJyr9Gt4Ru0asBhoT0ABm9bA5-E9qxYh_7ciX8hsGvXg&usqp=CAc",
    },
    {
      
      category: "men",
      productname: "shirt",
      title:
        "Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves ",
      Price: 599,
      description: "",
      img: "https://m.media-amazon.com/images/I/61rAYU1RnOL._SX569_.jpg",
    },
    {
      
      category: " men",
      productname: "shirt",
      title: "Dennis Lingo Men's Solid Slim Fit Cotton Casual",
      Price: 481,
      description: "",
      img: "https://rukminim2.flixcart.com/image/150/150/kwfaj680/shirt/s/0/x/m-khsh000453-ketch-original-imag93v4tnfgunhv.jpeg?q=70",
    },
    {
      
      category: "men ",
      productname: "shirt",
      title: "full sleve ",
      Price: 549,
      description: "",
      img: "https://m.media-amazon.com/images/I/61XzMtVz3PL._SY606_.jpg",
    },
    {
      
      category: "men",
      productname: "shirt",
      title: "Dennis Lingo Men's Solid Slim Fit Cotton Casual",
      Price: 599,
      description: "",
      img: "https://m.media-amazon.com/images/I/51smAeTCuFL._SX569_.jpg",
    },
    {
      
      category: "men",
      productname: "shirt",
      title: " Mens Casual Shirts",
      Price: 499,
      description: "",
      img: "https://m.media-amazon.com/images/I/61Ma2zgB7qL._SX569_.jpg",
    },
    {
      
      category: " men",
      productname: "shirt",
      title: "Jack & Jones Men Shirt",
      Price: 699,
      description: "",
      img: "https://m.media-amazon.com/images/I/717HOhHVvXL._SX466_.jpg",
    },
    {
    
      category: "men",
      productname: "shirt",
      title: "Jack & Jones Men Shirt",
      Price: 899,
      description: "",
      img: "https://m.media-amazon.com/images/I/51aQ6Ar1aZL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      
      category: "men",
      productname: "shirt",
      title:
        "Men's Cotton Buffalo Check Slim Fit Casual Shirt with Pocket, Full",
      Price: 899,
      description: "",
      img: "https://m.media-amazon.com/images/I/61X9WBQlceL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      
      category: " men",
      productname: "shirt",
      title: "Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt",
      Price: 399,
      description: "",
      img: "https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      
      title: "one joke",
      Price:200,
      productname: "love",
      category: "love",
      content: "hey dev",
      img: "https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      
      title: "two joke",
      Price:199,
      productname: "love",
      category: "love",
      content: "hey dev",
      img: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];


  if(req.query.search){
    const filtercategary = product.filter(p => 
       p.category.includes(req.query.search ))  
       
    res.send(filtercategary)
  return;


  }
   else if (req.query.search) {
    const filtercategary = product.filter(p => 
       p.productname.includes(req.query.search ))  
       
    res.send(filtercategary)
    return;


  }
 


  
 


 
  setTimeout(() => {
    res.send(product);
  }, 2000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
