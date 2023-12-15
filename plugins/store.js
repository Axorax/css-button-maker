appvar.panels["store"] = {
    name: "Store 🏬",
    content: `
    <div class="container">
        <div class="tile">
            <img src="http://via.placeholder.com/800x600/C72B41/800834">
        </div>
        <div class="tile">
            <img src="http://via.placeholder.com/800x600/C72B41/800834">
        </div>
        <div class="tile">
            <img src="http://via.placeholder.com/800x600/C72B41/800834">
        </div>
        <div class="tile">
            <img src="http://via.placeholder.com/800x600/C72B41/800834">
        </div>
        <div class="tile">
            <img src="http://via.placeholder.com/800x600/C72B41/800834">
        </div>
    </div>
    `,
    style: `
    .container{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1rem;
    }

    .tile img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .tile:nth-child(1){
        grid-column: span 4;
        grid-row: span 2;
    }
    
    .tile:nth-child(2),
    .tile:nth-child(3){
        grid-column: span 2;
    }
    
    .tile:nth-child(4),
    .tile:nth-child(5){
        grid-column: span 3;
    }

    @media screen and (max-width: 650px){
        .container{
            display: block;
        }
        .tile{
            margin-bottom: 1rem;
        }
    }
    `,
    code: () => {
    },
};
