
import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header">
            
            <div className="nva-bar">
                <img className="logo" src="https://www.krishnafarm.com/wp-content/uploads/2015/02/govindas-logo-1024x1024.png" alt="..."/>
                <ul>
                    
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
}


const Cards = (prop) => {
    return (
        <div className="card" >
          <img className="cardimg" src= {prop.imgaddre}/>
            <div className="card-body">
                <h4 className="card-title">{prop.name}</h4>
                <h5>Price : {prop.price}/-</h5>
                <p>rating : {prop.rating}</p>
            </div>
        </div>
    );
}
const BodyComponent = ()=>{
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="cardsContaner">
            <Cards name="Noodles" price = "Rs 500" rating = "5" imgaddre = "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
            <Cards name="Piza" price = "Rs 60" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"/>
            <Cards name="Chinese" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"/>
            <Cards name="Samosa" price = "Rs 500" rating = "5"  imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"/>
            <Cards name="Pasta" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png" />

            <Cards name="Noodles" price = "Rs 500" rating = "5" imgaddre = "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
            <Cards name="Piza" price = "Rs 60" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"/>
            <Cards name="Chinese" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"/>
            <Cards name="Samosa" price = "Rs 500" rating = "5"  imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"/>
            <Cards name="Pasta" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png" />
            <Cards name="Noodles" price = "Rs 500" rating = "5" imgaddre = "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
            <Cards name="Piza" price = "Rs 60" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"/>
            <Cards name="Chinese" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"/>
            <Cards name="Samosa" price = "Rs 500" rating = "5"  imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"/>
            <Cards name="Pasta" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png" />
            <Cards name="Noodles" price = "Rs 500" rating = "5" imgaddre = "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
            <Cards name="Piza" price = "Rs 60" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"/>
            <Cards name="Chinese" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"/>
            <Cards name="Samosa" price = "Rs 500" rating = "5"  imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"/>
            <Cards name="Pasta" price = "Rs 500" rating = "5" imgaddre = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png" />
            


            </div>
        </div>
        
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
        <Header/>
        <BodyComponent/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);

