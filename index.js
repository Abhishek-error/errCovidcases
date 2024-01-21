function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>800){
                    color = "rgb(255, 0, 0)";
                }

                else if(cases>350){
                    color = `rgb(0, 102, 255)`;
                }
                else if(cases>100){
                    color = `rgb(255, 204, 0)`;
                }
                else{
                    color = `rgb(153, 255, 204)`;
                }
                
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 