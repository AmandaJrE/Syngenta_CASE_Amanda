function test (input) { 
    let hotel, days_week = 0, weekends = 0;

    let list_data = input.split(',')

    list_data.forEach(element => {
        if(element.indexOf('sat') >= 0 || element.indexOf('sun') >= 0)
            weekends += 1
        else
            days_week += 1
    });
    
    hotel = days_week == 3 ? 'Lakewood' : days_week == 1 && weekends == 2 ? 'Bridgewood' : 'Ridgewood'
    
    return hotel
}

function getCheapestHotel(input) { //DO NOT change the function's name.
    let hotel, days_week = 0, weekends = 0;
    let lakewood = 0, bridgewood = 0, ridgewood = 0;

    let client = input.indexOf('Regular') >= 0 ? 'Regular' : 'Rewards'

    let list_data = input.split(',')

    list_data.forEach(element => {
        if(element.indexOf('sat') >= 0 || element.indexOf('sun') >= 0)
            weekends += 1
        else
            days_week += 1
    });

    if(client == 'Regular'){
        if(days_week > 0){
            lakewood += 110 * days_week;
            bridgewood += 160 * days_week;
            ridgewood += 220 * days_week;
        }

        if(weekends > 0){
            lakewood += 90 * weekends;
            bridgewood += 60 * weekends;
            ridgewood += 150 * weekends;
        }
    } else {
        if(days_week > 0){
            lakewood += 80 * days_week;
            bridgewood += 110 * days_week;
            ridgewood += 100 * days_week;
        }

        if(weekends > 0){
            lakewood += 80 * weekends;
            bridgewood += 50 * weekends;
            ridgewood += 40 * weekends;
        }
    }

    if(lakewood < bridgewood && lakewood < ridgewood)
        hotel = 'Lakewood'
    else if(bridgewood < lakewood && bridgewood < ridgewood)
        hotel = 'Bridgewood'
    else
        hotel = 'Ridgewood'
    
    return hotel
}

exports.getCheapestHotel = getCheapestHotel