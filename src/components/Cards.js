import Card from "./Card";

function Cards({tours,removeTourHandler}){
    return(
        <div className="cards-container">
            {
                tours.map((eachTour)=>{
                return <Card key={eachTour.id} {...eachTour} removeTourHandler={removeTourHandler}></Card>
                })
            }
        </div>
    )
}

export default Cards;

