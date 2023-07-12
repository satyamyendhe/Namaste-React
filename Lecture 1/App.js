
    const heading = React.createElement("h1",{
        className:"Heading" , id:"head1" , 
    },"Namaste React");

    const heading2 = React.createElement("h2",{
        className:"Heading" , id:"head2" , 
    },"Jaduuuu is learning react from Namaste React");
    console.log(heading);
    
    const container = React.createElement("div",{
        className:"contanier"
    },[heading,heading2]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(container);